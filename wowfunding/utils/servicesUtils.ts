export const API_URL = "http://localhost:8080"
export const URL_DOMAIN = "http://localhost:8080"

export const fetchApsi = async (endpoint: string, urlParams?: string) => {
    const url = `${API_URL}/${endpoint}${urlParams || ''}`
    const response = await fetch(url);
    return await response.json();
}

export const fetchApi = async (endpoint: string, data?: { headers?: Record<string, string>; method?: string; body?: any }) => {
    const url = `${API_URL}/${endpoint}`;
    const response = await fetch(url, {
        headers: data?.headers || {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: data?.method || "GET",
        body: data?.body ? JSON.stringify(data.body) : undefined,
    });
    return await response.json();
}
