import { LS_API_KEY } from "~/constants";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface ApiClientOptions {
  baseUrl: string;
  getToken?: () => string | null | Promise<string | null>;
  defaultHeaders?: Record<string, string>;
}

export interface RequestOptions<TBody = unknown> {
  method?: HttpMethod;
  body?: TBody;
  headers?: Record<string, string>;
  signal?: AbortSignal;
  params?: Record<string, string | number | boolean>;
}

export class ApiError<T = unknown> extends Error {
  status: number;
  data?: T;

  constructor(message: string, status: number, data?: T) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

export class ApiClient {
  private baseUrl: string;
  private getToken?: ApiClientOptions["getToken"];
  private defaultHeaders: Record<string, string>;

  constructor(options: ApiClientOptions) {
    this.baseUrl = options.baseUrl;
    this.getToken = options.getToken;
    this.defaultHeaders = options.defaultHeaders || {};
  }

  private async buildHeaders(customHeaders?: Record<string, string>) {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...this.defaultHeaders,
      ...customHeaders,
    };

    if (this.getToken) {
      const token = await this.getToken();
      if (token) {
        headers["Authorization"] = `ApiKey ${token}`;
      }
    }

    return headers;
  }

  private async request<TResponse = unknown, TBody = unknown>(
    endpoint: string,
    options: RequestOptions<TBody> = {},
  ): Promise<TResponse> {
    const { method = "GET", body, headers, signal, params } = options;

    let url = `${this.baseUrl}${endpoint}`;
    if (params && Object.keys(params).length > 0) {
      const searchParams = new URLSearchParams();
      for (const [key, value] of Object.entries(params)) {
        searchParams.append(key, String(value));
      }
      url += `?${searchParams.toString()}`;
    }

    const res = await fetch(url, {
      method,
      headers: await this.buildHeaders(headers),
      body: body ? JSON.stringify(body) : undefined,
      signal,
    });

    const contentType = res.headers.get("content-type");
    // eslint-disable-next-line no-useless-assignment
    let data: unknown = null;

    if (contentType?.includes("application/json")) {
      data = await res.json().catch(() => null);
    } else {
      data = await res.text().catch(() => null);
    }

    if (!res.ok) {
      throw new ApiError(
        (data as { message?: string })?.message || res.statusText,
        res.status,
        data as TResponse,
      );
    }

    return data as TResponse;
  }

  get<TResponse = unknown>(endpoint: string, options?: RequestOptions) {
    return this.request<TResponse>(endpoint, { ...options, method: "GET" });
  }

  post<TResponse = unknown, TBody = unknown>(
    endpoint: string,
    body?: TBody,
    options?: RequestOptions<TBody>,
  ) {
    return this.request<TResponse, TBody>(endpoint, {
      ...options,
      method: "POST",
      body,
    });
  }

  put<TResponse = unknown, TBody = unknown>(
    endpoint: string,
    body?: TBody,
    options?: RequestOptions<TBody>,
  ) {
    return this.request<TResponse, TBody>(endpoint, {
      ...options,
      method: "PUT",
      body,
    });
  }

  patch<TResponse = unknown, TBody = unknown>(
    endpoint: string,
    body?: TBody,
    options?: RequestOptions<TBody>,
  ) {
    return this.request<TResponse, TBody>(endpoint, {
      ...options,
      method: "PATCH",
      body,
    });
  }

  delete<TResponse = unknown>(endpoint: string, options?: RequestOptions) {
    return this.request<TResponse>(endpoint, {
      ...options,
      method: "DELETE",
    });
  }
}

export const api = new ApiClient({
  baseUrl: "https://api.torn.com/v2",
  getToken: () => localStorage.getItem(LS_API_KEY),
});
