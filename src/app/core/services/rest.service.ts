import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../config/config';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  private getAuthHeaders(
    contentType: string = 'application/json'
  ): HttpHeaders {
    const token = localStorage.getItem('access_token') || localStorage.getItem('sign_up_access_token');
    let headers = new HttpHeaders({
      'Content-Type': contentType,
      accept: 'application/json',
      'accept-language': localStorage.getItem('lang') || 'en',
    });

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  }

  get<T>(url: string, params?: any): Observable<T> {
    const httpParams = new HttpParams({ fromObject: params || {} });

    return this.http.get<T>(this.baseUrl + url, {
      headers: this.getAuthHeaders(),
      params: httpParams,
    });
  }

  post<T>(
    url: string,
    body: any,
    isFormUrlEncoded: boolean = false
  ): Observable<T> {
    const contentType = isFormUrlEncoded
      ? 'application/x-www-form-urlencoded'
      : 'application/json';

    return this.http.post<T>(this.baseUrl + url, body, {
      headers: this.getAuthHeaders(contentType),
    });
  }

  put<T>(
    url: string,
    body: any,
    isFormUrlEncoded: boolean = false
  ): Observable<T> {
    const contentType = isFormUrlEncoded
      ? 'application/x-www-form-urlencoded'
      : 'application/json';

    return this.http.put<T>(this.baseUrl + url, body, {
      headers: this.getAuthHeaders(contentType),
    });
  }

  delete<T>(url: string, params?: any): Observable<T> {
    const httpParams = new HttpParams({ fromObject: params || {} });

    return this.http.delete<T>(this.baseUrl + url, {
      headers: this.getAuthHeaders(),
      params: httpParams,
    });
  }
  uploadFile<T>(url: string, file: File): Observable<T> {
    const formData = new FormData();
    formData.append('file', file); // field name should match the API: 'file'
    const token = localStorage.getItem('access_token');
    let headers = new HttpHeaders({
      accept: 'application/json',
      'accept-language': localStorage.getItem('lang') || 'en',
    });

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return this.http.post<T>(this.baseUrl + url, formData, {
      headers: headers, // Don't set Content-Type, Angular sets it for multipart
    });
  }
}
