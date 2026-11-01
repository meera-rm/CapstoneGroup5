// src/api.jsx
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL; // e.g. http://localhost:3010
const TOKEN_KEY = 'scholarsheep_token';
const REFRESH_KEY = 'scholarsheep_refresh';

export const tokenStore = {
  get: () => localStorage.getItem(TOKEN_KEY),
  getRefresh: () => localStorage.getItem(REFRESH_KEY),
  set: (t) => localStorage.setItem(TOKEN_KEY, t), // kept for older callers
  setTokens: ({ accessToken, refreshToken }) => {
    localStorage.setItem(TOKEN_KEY, accessToken);
    if (refreshToken) localStorage.setItem(REFRESH_KEY, refreshToken);
  },
  clear: () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_KEY);
  },
};

// A plain axios instance with no interceptors, used only for the refresh call.
// This stops a failed refresh from triggering another refresh.
const bare = axios.create();

// Several requests can get 401 at the same time. They all share one refresh.
let refreshing = null;

export function refreshSession() {
  if (!refreshing) {
    const refreshToken = tokenStore.getRefresh();
    if (!refreshToken) return Promise.reject(new Error('No refresh token'));

    refreshing = bare
      .post(`${API_URL}/api/auth/refresh`, { refreshToken })
      .then((res) => {
        tokenStore.setTokens(res.data);
        return res.data.accessToken;
      })
      .catch((err) => {
        tokenStore.clear();
        window.dispatchEvent(new Event('auth:expired')); // AuthContext listens for this
        throw err;
      })
      .finally(() => {
        refreshing = null;
      });
  }
  return refreshing;
}

// Used by components that call fetch via apiFetch
export async function apiFetch(path, options = {}) {
  const send = () =>
    fetch(`${API_URL}${path}`, {
      ...options,
      // Give up after 15s so a stuck backend shows an error instead of an endless "Loading..."
      signal: options.signal ?? AbortSignal.timeout(15000),
      headers: {
        'Content-Type': 'application/json',
        ...(tokenStore.get() ? { Authorization: `Bearer ${tokenStore.get()}` } : {}),
        ...options.headers,
      },
    });

  let res = await send();

  // Expired access token: refresh once, then retry the same request
  if (res.status === 401 && !path.startsWith('/api/auth/') && tokenStore.getRefresh()) {
    try {
      await refreshSession();
      res = await send();
    } catch {
      // refresh failed; fall through to the error below
    }
  }

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const error = new Error(data.error || `Request failed (${res.status})`);
    error.status = res.status;
    throw error;
  }
  return data;
}

// Components that use axios directly (axios.get(`${API}/api/...`))
axios.interceptors.request.use((config) => {
  const token = tokenStore.get();
  if (token && API_URL && config.url?.startsWith(API_URL)) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original = error.config;
    const isAuthCall = original?.url?.includes('/api/auth/');
    if (
      error.response?.status === 401 &&
      original &&
      !original._retry &&
      !isAuthCall &&
      tokenStore.getRefresh()
    ) {
      original._retry = true;
      try {
        await refreshSession();
        return axios(original); // the request interceptor adds the new token
      } catch {
        // refresh failed; fall through
      }
    }
    return Promise.reject(error);
  }
);