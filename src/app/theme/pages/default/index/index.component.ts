import {Component, OnInit, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {ScriptLoaderService} from '../../../../_services/script-loader.service';


@Component({
    selector: "app-index",
    templateUrl: "./index.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class IndexComponent implements OnInit, AfterViewInit {


    constructor(private _script: ScriptLoaderService) {

    }

    ngOnInit() {
        console.log('in index page ============= ');
    }

    ngAfterViewInit() {
        this._script.loadScripts('app-index',
            ['assets/app/js/dashboard.js']);
    }

}
