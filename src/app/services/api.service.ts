import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// Env
import { environments } from '../../environments/environments';

export class ApiService {
  private headers: HttpHeaders;
  // To magic API
  private pageSize: string = '10';

  constructor(
    private httpClient: HttpClient,
  ) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // To Magic API
      'Page-Size': this.pageSize,
    });
  }

  post<T>(path: string, data: any | object) {
    const body = JSON.stringify(data);

    return this.httpClient.post<T>(environments.apiUrl + path, body, {
      headers: this.headers,
    });
  }

  get<T>(path: string, params?: { [key: string]: string }) {
    let httpParams = new HttpParams();

    if (params) {
      Object.keys(params).forEach((key) => {
        if (typeof params[key] === 'string') {
          httpParams = httpParams.append(key, params[key]);
        }
      });
    }

    return this.httpClient.get<T>(environments.apiUrl + path, {
      params: httpParams,
      headers: this.headers,
    });
  }

  put<T>(path: string, data: any | object) {
    const body = JSON.stringify(data);

    return this.httpClient.put<T>(environments.apiUrl + path, body, {
      headers: this.headers,
    });
  }

  patch<T>(path: string, data: any | object) {
    const body = JSON.stringify(data);

    return this.httpClient.patch<T>(environments.apiUrl + path, body, {
      headers: this.headers,
    });
  }

  delete<T>(path: string) {
    return this.httpClient.delete<T>(environments.apiUrl + path, {
      headers: this.headers,
    });
  }
}
