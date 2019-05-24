import {NgModule} from '@angular/core';
import {ThemeComponent} from './theme.component';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from "../auth/_guards/auth.guard";

const routes: Routes = [
    {
        "path": "",
        "component": ThemeComponent,
        "canActivate": [AuthGuard],
        "children": [
            {
                "path": "alimentation",
                "loadChildren": ".\/pages\/default\/alimentation\/alimentation.module#AlimentationModule"
            },
            {
                "path": "livraisons",
                "loadChildren": ".\/pages\/default\/livraison\/livraison.module#LivraisonModule"
            },
            {
                "path": "mesure/mouvement",
                "loadChildren": ".\/pages\/default\/mesureMouvement\/mesure.module#MesureModule"
            },
            {
                "path": "parametrage",
                "loadChildren": ".\/pages\/default\/parametrage\/parametrage.module#ParametrageModule"
            },
            {
                "path": "index",
                "loadChildren": ".\/pages\/default\/index\/index.module#IndexModule"
            },
            {
                "path": "header\/actions",
                "loadChildren": ".\/pages\/default\/header\/header-actions\/header-actions.module#HeaderActionsModule"
            },
            {
                "path": "header\/profile",
                "loadChildren": ".\/pages\/default\/header\/header-profile\/header-profile.module#HeaderProfileModule"
            },
            {
                "path": "404",
                "loadChildren": ".\/pages\/default\/not-found\/not-found.module#NotFoundModule"
            },
            {
                "path": "",
                "redirectTo": "index",
                "pathMatch": "full"
            }
        ]
    },
    {
        "path": "**",
        "redirectTo": "404",
        "pathMatch": "full"
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule {
}
