// tokenManager.js
import axiosInstance from "@/services/axios";

const REFRESH_INTERVAL = 8 * 60 * 1000; // 8 minutes

const tokenManager = {
  start() {
    if (typeof window === "undefined") return; // no-op in SSR

    // Run immediately if cookie is set
    this.checkAttemptingRefresh();

    // Schedule periodic refresh
    setInterval(() => {
      this.refreshToken();
    }, REFRESH_INTERVAL);
  },

  async checkAttemptingRefresh() {
    if (typeof window === "undefined") return;

    const cookies = document.cookie.split(";").map((c) => c.trim());
    const attemptingCookie = cookies.find((c) =>
      c.startsWith("attempting-refresh=")
    );

    if (attemptingCookie?.split("=")[1] === "true") {
      await this.refreshToken();
      document.cookie =
        "attempting-refresh=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  },

  async refreshToken() {
    if (typeof window === "undefined") return;

    try {
      await axiosInstance.post("/auth/refresh");
      console.log("[TokenManager] Access token refreshed");
      await this.fetchAndStoreUser();
    } catch (err) {
      console.warn("[TokenManager] Refresh failed", err);
      if (typeof localStorage !== "undefined") {
        localStorage.removeItem("user");
      }
      if (typeof window !== "undefined") {
        window.location.href = "/registracija";
      }
    }
  },

  async fetchAndStoreUser() {
    if (typeof window === "undefined") return;

    try {
      const res = await axiosInstance.get("/user/me");
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
    } catch (err) {
      console.warn("[TokenManager] Failed to fetch user", err);
    }
  },
};

export default tokenManager;
