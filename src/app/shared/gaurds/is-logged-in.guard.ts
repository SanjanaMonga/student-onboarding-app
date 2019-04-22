import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HelperService } from '../services/helper.service';

@Injectable({
    providedIn: 'root',
})
export class IsLoggedInGuard implements CanActivate {
    constructor(private _helperService: HelperService, private _router: Router){}
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this._helperService.getItemFromLocalStorage('user') !== null) {
            return true;
        } else {
            this._router.navigate(['/login'], {
                queryParams: {
                  return: state.url
                }
              });
            return false;
        }
    }
}