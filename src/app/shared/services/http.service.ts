import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient ) {
    }

    public get<T>(url: string): Observable<T> {
        return this._http.get<T>(url);
    }

    public post<T>(url: string, body: any): Observable<T> {
        return this._http.post<T>(url, body);
    }
}
