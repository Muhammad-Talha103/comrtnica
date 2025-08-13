import axiosInstance from "./axios";

const login = async (credentials: { email: string; password: string }) => {
  try {
    const endpoint = "/auth/login";

    const response = await axiosInstance.post(endpoint, credentials, {
      withCredentials: true,
    });

    if (response.data?.user) {
      localStorage.setItem("user", JSON.stringify(response.data.user));
    }

    return response.data;
  } catch (error: any) {
    if (error.response?.data) {
      return { error: error.response.data.error };
    }
    console.error(error);
    return { error: "An unexpected error occurred" };
  }
};

const logout = async () => {
  try {
    const endpoint = "/auth/logout";
    await axiosInstance.post(endpoint, {}, { withCredentials: true });

    localStorage.removeItem("user");
    return { success: true };
  } catch (err) {
    console.error("Logout error:", err);
    return { error: "Logout failed" };
  }
};

const refresh = async () => {
  try {
    await axiosInstance.post("/auth/refresh", {}, { withCredentials: true });
    return { success: true };
  } catch (err) {
    console.error("Refresh token failed:", err);
    return { error: "Refresh token failed" };
  }
};

const authService = {
  login,
  logout,
  refresh,
};

export default authService;
