import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Member } from './member';

@Injectable({ providedIn: 'root' })
export class MemberService {

  private membersUrl = 'https://rcvp3-api.azurewebsites.net/members';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET members from the server */
  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.membersUrl)
      .pipe(
        catchError(this.handleError<Member[]>('getMembers', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}