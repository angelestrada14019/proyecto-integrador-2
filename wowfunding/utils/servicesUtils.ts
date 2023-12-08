
export const API_URL = "http://44.202.51.198:8080"
export const URL_DOMAIN = "http://localhost:3000/login"

// serviceUtils.ts
// serviceUtils.ts
export const fetchApi = async (endpoint: string, data?: { token?: string | null; headers?: Record<string, string>; method?: string; body?: any }) => {
    const url = `${API_URL}/${endpoint}`;
    
    const headers: Record<string, string> = {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Methods': 'POST, PUT, DELETE, GET, OPTIONS',
        'Access-Control-Request-Method': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        Authorization: data?.token ? `Bearer ${data.token}` : '',
        ...(data?.headers || {}),
    };

    const response = await fetch(url, {
        mode: "cors",
        headers: data?.headers ? { ...headers, ...data.headers } : headers,
        method: data?.method || "GET",
        body: data?.body ? JSON.stringify(data.body) : undefined,
    });

    if (response.status === 204) {
        return response.status;
    }

    return await response.json();
};
