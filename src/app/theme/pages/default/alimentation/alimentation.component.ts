import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AlimentationService} from "../../../../services/alimentation.service";
import {UserService} from "../../../../services/user.service";

@Component({
    selector: 'app-alimentation',
    templateUrl: './alimentation.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class AlimentationComponent implements OnInit {

    selectedDate = new Date().toISOString();
    selectedPeriod: number;
    selectedRation: number;
    selectedPaddock: number;
    allPeriods: any;
    allRations: any;
    allPaddocks: any;
    detailAlimentationData: any;

    constructor(private detailAlimentSrv: AlimentationService, private userService: UserService) {
    }

    ngOnInit() {
        this.userService.isAuthorizedUser();
        this.initUI();
    }

    initUI() {
        this.detailAlimentSrv.getPeriodsInfo()
            .subscribe(response => {
                this.allPeriods = response;
            });
        this.detailAlimentSrv.getRtionsInfo()
            .subscribe(response => {
                this.allRations = response;
            });
        this.detailAlimentSrv.getPaddocksInfo()
            .subscribe(response => {
                this.allPaddocks = response;
            });
    }


    getDetailAlimentData() {
        this.detailAlimentationData = [];
        this.detailAlimentSrv.getDetailAlimentInfo(this.selectedDate, this.selectedPeriod, this.selectedRation, this.selectedPaddock)
            .subscribe(response => {
                this.detailAlimentationData = response;
            });
    }
}
