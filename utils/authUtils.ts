import { useRouter } from 'next/navigation';
import authService from '@/services/auth-service';
import toast from 'react-hot-toast';

export const clearClientSideAuth = () => {
  // Clear localStorage
  localStorage.removeItem("user");
};

export const useLogout = () => {
  const router = useRouter();

  const logout = async () => {
    try {
      // Call server logout
      await authService.logout();
      
      // Clear client-side data
      clearClientSideAuth();
      
      // Redirect to home
      router.push("/");
      toast.success("Logout Successful!");
      
    } catch (err) {
      console.error("Error during logout:", err);
      // Even if server logout fails, clear client-side data
      clearClientSideAuth();
      router.push("/");
    }
  };

  return { logout };
};

// Check if user is authenticated
export const isAuthenticated = () => {
  if (typeof document === "undefined") return false;
  return document.cookie.includes("accessToken=");
};

// Get user data
export const getUser = () => {
  if (typeof window === 'undefined') return null;
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}; 