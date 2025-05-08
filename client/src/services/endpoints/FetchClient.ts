import { AppConfig } from '@/common/config';

class RequestClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  public async request<T>(url: string, options: RequestInit): Promise<T> {
    const headers = new Headers(options.headers || {});

    if (!headers.has('Content-Type')) {
      headers.append('Content-Type', 'application/json');
    }

    const response = await fetch(this.baseURL + url, { ...options, headers });

    if (!response.ok) {
      throw { status: response.status, statusText: response.statusText };
    }

    const data = await response.json();
    return data;
  }
}

export const fetchClient = new RequestClient(AppConfig.apiUrl);
