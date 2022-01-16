import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse,
  HttpParams,
  HttpHeaders,
} from '@angular/common/http';

import { catchError, finalize } from 'rxjs/operators';
import { timeout } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {

  baseUrl = environment.serviceUrl; 
  defaultTimeout: number = environment.requestTimeout; //60 seconds

  constructor(private http: HttpClient) { }


  post<TData, TResponse>(
    uri: string,
    data: TData,
    params = new HttpParams(),
    paramsHeader: HttpHeaders = new HttpHeaders()
  ): Observable<any> {
    return this.http
      .post(this.baseUrl + uri, data, { params: params, headers: paramsHeader })
      .pipe(
        timeout(this.defaultTimeout),
        catchError((error) => {
          return error;
        }),
        finalize(() => {
          this.handleFinally();
        })
      );
  }

  postTextResponseType<TData>(uri: string, data: TData): Observable<any> {
    return this.http
      .post(this.baseUrl + uri, data, { responseType: 'text' })
      .pipe(
        timeout(this.defaultTimeout),
        catchError((error) => {
          return error;
        }),
        finalize(() => {
          this.handleFinally();
        })
      );
  }

  get<TResponse>(uri: string, params = new HttpParams()): Observable<any> {
    return this.http.get(this.baseUrl + uri, { params: params }).pipe(
      timeout(this.defaultTimeout),
      catchError((error) => {
        return error;
      }),
      finalize(() => {
        this.handleFinally();
      })
    );
  }

  getBlob(uri: string) {
    return this.http.get(this.baseUrl + uri, { responseType: 'blob' });
  }

  delete<TResponse>(uri: string, params = new HttpParams()): Observable<any> {
    return this.http.delete(this.baseUrl + uri, { params: params }).pipe(
      timeout(this.defaultTimeout),
      catchError((error) => {
        return error;
      }),
      finalize(() => {
        this.handleFinally();
      })
    );
  }

  put<TData, TResponse>(
    uri: string,
    data: TData,
    params = new HttpParams()
  ): Observable<any> {
    return this.http.put(this.baseUrl + uri, data, { params: params }).pipe(
      timeout(this.defaultTimeout),
      catchError((error) => {
        return error;
      }),
      finalize(() => {
        this.handleFinally();
      })
    );
  }

  handleFinally() {
  }


}
