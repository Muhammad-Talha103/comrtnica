import API_BASE_URL from "@/config/apiConfig";

export async function fetchObituaries(city?: string, region?: string) {
  try {
    const queryParams = new URLSearchParams();
    if (city) queryParams.append("city", city);
    if (region) queryParams.append("region", region);

    const url = `${API_BASE_URL}/obituary${
      queryParams.toString() ? `?${queryParams.toString()}` : ""
    }`;
    const response = await fetch(url, {
      cache: "no-store",
    });

    if (!response.ok) {
      return { obituaries: [] };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching obituaries:", error);
    return { obituaries: [] };
  }
}

