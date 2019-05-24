import {
    Component,
    ComponentFactoryResolver,
    OnInit,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation,
} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from "../services/user.service";
import {CookieService} from "ngx-cookie-service";
import {NotificationService} from "../services/tools/notification.service";

declare let $: any;
declare let mUtil: any;

@Component({
    selector: '.m-grid.m-grid--hor.m-grid--root.m-page',
    templateUrl: './login.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class AuthComponent implements OnInit {

    login: string;
    password: string;

    @ViewChild('alertSignin',
        {read: ViewContainerRef}) alertSignin: ViewContainerRef;
    @ViewChild('alertSignup',
        {read: ViewContainerRef}) alertSignup: ViewContainerRef;
    @ViewChild('alertForgotPass',
        {read: ViewContainerRef}) alertForgotPass: ViewContainerRef;

    constructor(private userService: UserService,
                private cookieService: CookieService,
                private _router: Router,
                private notificationSrv: NotificationService) {
    }

    ngOnInit() {
    }

    seConnecter() {
        if (this.login == null || this.login === '') {
            this.notificationSrv.warningToast('Veuillez saisir votre matricule', '')
        } else if (this.password == null || this.password === '') {
            this.notificationSrv.warningToast('Veuillez saisir votre mot de passe', '')
        } else
            this.userService.onVerifyLogin(this.login)
                .subscribe(loginResponse => {
                    if (loginResponse !== false) {
                        this.userService.onVerifyPassword(this.password)
                            .subscribe(paswrdResponse => {
                                if (paswrdResponse !== false) {
                                    this.cookieService.set('login', this.login);
                                    this._router.navigate(['index']);
                                } else {
                                    this.notificationSrv.warningToast('Le mot de passe est incorrect', '')
                                }
                            });
                    } else {
                        this.notificationSrv.warningToast('Le mot de passe est incorrect', '')
                    }
                });
    }


}
