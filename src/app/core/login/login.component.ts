import { Component } from '@angular/core';
import { HelperService } from 'src/app/shared/services/helper.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    public user: User = new User();
    public err = false;
    constructor(private _helperService: HelperService, private _router: Router) { }
    
    public login() {
        if (this.user.name === 'admin' && this.user.password === 'password') {
            this.err = false;
            this._helperService.setItemToLocalStorage('user', this.user);
            this._helperService.isLoggedIn(true);
            this._router.navigate(['/list']);
        } else {
            this.err = true;
        }
    }
}
