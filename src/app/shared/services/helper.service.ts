import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HelperService {
    private isLoggedInSource = new Subject<boolean>();
    isLoggedInSource$ = this.isLoggedInSource.asObservable();
    constructor() {
    }

    public setItemToLocalStorage(key: string, value: any): void {
        value = JSON.stringify(value);
        localStorage.setItem(key, value);
    }

    public getItemFromLocalStorage(key: string): any {
        const item = localStorage.getItem(key);
        return JSON.parse(item);
    }

    public removeItemFromLocalStorage(key: string): void {
        localStorage.removeItem(key);
    }

    public isLoggedIn(loggedIn: boolean) {
        this.isLoggedInSource.next(loggedIn);
    }
}
