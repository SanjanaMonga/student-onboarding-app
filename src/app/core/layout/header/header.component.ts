import { Component, OnInit, OnDestroy } from '@angular/core';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { HelperService } from 'src/app/shared/services/helper.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
    public user = faUser;
    public signOut = faSignOutAlt;
    public userName: string;
    public isLoggedIn: boolean = false;
    public loginSubscription: Subscription;

    constructor(private _helperService: HelperService, private _router: Router) { }

    ngOnInit() {
        this.loginSubscription = this._helperService.isLoggedInSource$.subscribe(loggedIn => {
            this.isLoggedIn = loggedIn;
            if (this.isLoggedIn === true) {
                this.userName = this._helperService.getItemFromLocalStorage('user').name;
            }
        });
    }

    public logout() {
        this._helperService.removeItemFromLocalStorage('user');
        this._helperService.isLoggedIn(false);
        this._router.navigate(['/login']);
    }
    ngOnDestroy() {
        this.loginSubscription.unsubscribe();
    }
}
