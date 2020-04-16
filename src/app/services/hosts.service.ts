import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

import { hostList } from '../data';
import { Host, HostsRequest, OneHostRequest } from '../Models/hosts';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class HostsService {
  baseUrl = 'http://localhost:5000/api/1.0/';
  constructor(private http: HttpClient){ }
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
  getHostsList(): Observable<Host[]>  {
    return this.http.get<HostsRequest>(this.baseUrl + 'hosts').pipe(
      map((val: HostsRequest) => {
        console.log(val);
        if (val.success) {
          return val.data;
        }
        else {
          throw new Error (val.error);
        }

      }),
      catchError(this.handleError<Host[]>('getHostList', []))
    );
  }
  addNewHost(host: string): Observable<boolean> {
    return this.http.post<HostsRequest>(this.baseUrl + 'host', {ip: host}, httpOptions).pipe(
      map((value: HostsRequest) => {
        if (value.success)
        {
           return true;
        }
        else {
          return false;
        }
      }),
      catchError(this.handleError<boolean>('addNewHost'))
    );
  }
  addNewHostList(hostsList: string[]): Observable<boolean>{
    const reqBody = {length: hostsList.length, data: hostsList};
    return this.http.post<HostsRequest>(this.baseUrl + 'hosts', reqBody, httpOptions).pipe(
      map((value: HostsRequest) => {
        if (value.success)
        {
          return true;
        }
        else {
          return false;
        }
      }),
      catchError(this.handleError<boolean>('addNewHost'))
    );
  }
  deleteHost(id: number) {
    const url = `${this.baseUrl}host/${id}`;
    return this.http.delete<HostsRequest>(url, httpOptions).pipe(
      tap(() => { console.log(`deleted id=${id}`);
      },
      catchError(this.handleError<HostsRequest>('deleteHost'))
    ));
  }
  updateHost(id: number) {
    const url = `${this.baseUrl}host/${id}`;
    return this.http.put<OneHostRequest>(url, httpOptions).pipe(
      map((val: OneHostRequest) => {
        console.log('req success: ' + val.success);
        if (val.success) {
          return val.data;
        }
        else {
          throw new Error (val.error);
        }
      }),
      catchError(this.handleError<Host>('updateHost', null))
  );
  }
}
