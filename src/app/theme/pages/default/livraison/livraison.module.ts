import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {LayoutModule} from '../../../layouts/layout.module';
import {DefaultComponent} from '../default.component';
import {LivraisonComponent} from "./livraison.component";
import {FormsModule} from "@angular/forms";
import {NgxPrintModule} from "ngx-print";

const routes: Routes = [
    {
        'path': '',
        'component': DefaultComponent,
        'children': [
            {
                'path': '',
                'component': LivraisonComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule, FormsModule,NgxPrintModule
    ], exports: [
        RouterModule,
    ], declarations: [
        LivraisonComponent,
    ],
})
export class LivraisonModule {
}
