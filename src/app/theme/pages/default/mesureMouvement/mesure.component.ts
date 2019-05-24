import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MesureService} from "../../../../services/mesure.service";
import {UserService} from "../../../../services/user.service";

@Component({
    selector: 'app-mesure',
    templateUrl: './mesure.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class MesureComponent implements OnInit {

    allAnimals: any;
    users: any;
    mesureDate: Date;
    animalSnit: number;
    dateMin: Date;
    dateMax: Date;
    mesureData: any;

    mouvmntDate: Date;
    mouvmntData: any;
    animalMvmnt: number;
    userLogin: string;


    constructor(private mesureSrv: MesureService, private userService: UserService) {

    }

    ngOnInit() {
        this.userService.isAuthorizedUser();
        this.initUI();
    }

    initUI() {
        this.mesureSrv.getAnimalsInfo()
            .subscribe(response => {
                this.allAnimals = response;
            });
        this.mesureSrv.getUsersInfo()
            .subscribe(response => {
                this.users = response;
            });
    }

    getMesureData() {
        this.mesureData = [];
        this.mesureSrv.getMesureInfo(this.mesureDate, this.animalSnit, this.dateMin, this.dateMax)
            .subscribe(response => {
                this.mesureData = response;
            });
    }

    getMouvmntData() {
        this.mouvmntData = [];
        this.mesureSrv.getMouvmntInfo(this.mouvmntDate, this.userLogin, this.animalMvmnt)
            .subscribe(response => {
                this.mouvmntData = response;
            });
    }
}
