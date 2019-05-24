import {Injectable} from '@angular/core';
import {HttpMethodsService} from "./tools/http-methods.service";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Injectable()
export class UserService {

    constructor(public httpMethods: HttpMethodsService,
                private cookiService: CookieService,
                private router: Router
    ) {
    }


    onVerifyLogin(login) {
        const url = 'http://localhost:8080/app/user/verifyLogin/';
        return this.httpMethods.get(url, login);
    }

    onVerifyPassword(passwword) {
        const url = 'http://localhost:8080/app/user/verifyPassword/';
        return this.httpMethods.get(url, passwword);
    }

    isAuthorizedUser() {
        const login = this.cookiService.get('login');
        console.log('login === === ', login);
        if (login == null || login === '') {
            console.log('login ===NULL  === ');
            this.router.navigate(['**']);
        }
    }

}
