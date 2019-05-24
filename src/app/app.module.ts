import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ThemeComponent} from './theme/theme.component';
import {LayoutModule} from './theme/layouts/layout.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ThemeRoutingModule} from "./theme/theme-routing.module";
import {AuthModule} from "./auth/auth.module";
import {LivraisonService} from "./services/livraison.service";
import {HttpClientModule} from "@angular/common/http";
import {HttpMethodsService} from "./services/tools/http-methods.service";
import {DateUtilService} from "./services/tools/date-util.service";
import {FormsModule} from "@angular/forms";
import {MesureService} from "./services/mesure.service";
import {ParametrageService} from "./services/parametrage.service";
import {AlimentationService} from "./services/alimentation.service";
import {UserService} from "./services/user.service";
import {CookieService} from "ngx-cookie-service";
import {ScriptLoaderService} from "./_services/script-loader.service";
import {ToastrModule} from "ngx-toastr";
import {NotificationService} from "./services/tools/notification.service";
import {NgxPrintModule} from "ngx-print";
import {IndexModule} from "./theme/pages/default/index/index.module";
import {LivraisonModule} from "./theme/pages/default/livraison/livraison.module";

@NgModule({
    declarations: [
        ThemeComponent,
        AppComponent,
    ],
    imports: [
        FormsModule,
        LayoutModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ThemeRoutingModule,
        AuthModule,
        LivraisonModule,


        HttpClientModule,
        ToastrModule.forRoot(),
        NgxPrintModule,
    ],
    providers: [ScriptLoaderService,
        LivraisonService,
        HttpMethodsService,
        DateUtilService,
        MesureService,
        ParametrageService,
        AlimentationService,
        UserService,
        CookieService,
        NotificationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
