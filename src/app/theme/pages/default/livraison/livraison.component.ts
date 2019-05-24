import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LivraisonService} from "../../../../services/livraison.service";
import {DateUtilService} from "../../../../services/tools/date-util.service";
import {UserService} from "../../../../services/user.service";

@Component({
    selector: 'app-livraison',
    templateUrl: './livraison.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class LivraisonComponent implements OnInit {

    selectedDate = new Date().toISOString();
    date: string;
    users: any;
    allPeriods: any;
    nourritures: any;
    selectedPeriod: number;
    recupSession: any;
    livraisons: any;
    selectedRecupSessnID: number;

    livraisonToPrint: any;

    constructor(private livraisonService: LivraisonService,
                private userService: UserService) {
        this.initUI();
    }

    ngOnInit() {
        this.userService.isAuthorizedUser();

    }

    initUI() {
        this.livraisonService.getUsersByRole()
            .subscribe(response => {
                this.users = response;
            });
        this.livraisonService.getPeriodsInfo()
            .subscribe(response => {
                this.allPeriods = response;
            });
        this.livraisonService.getNourritureInfo()
            .subscribe(response => {
                this.nourritures = response;
            });
        this.getRecupSessionData();
        this.livraisonToPrint = [];
    }


    getRecupSessionData() {
        this.livraisonService.getRecupSessionInfo(this.selectedDate, this.selectedPeriod)
            .subscribe(response => {
                this.recupSession = response;
                return response;
            });
    }

    getLivraisonsData(recupSessionID) {
        this.livraisons = [];
        this.livraisonService.getLivraisonInfo(recupSessionID)
            .subscribe(response => {
                this.livraisons = response;
                this.selectedRecupSessnID = recupSessionID;
            });
    }

    // uploadLivraisons(recupSessionID) {
    //   this.getLivraisonsData(recupSessionID);
    //   const doc = new jsPDF();
    //   const specialElementHundlers = {
    //     '#editor': function(element, renderer) {
    //       return true;
    //     }
    //   };
    //   const content = this.content.nativeElement;
    //   doc.fromHTML(content.innerHTML, 15, 15, {
    //     width: 190,
    //     elementHundlers: specialElementHundlers
    //   });
    //   doc.save('livraison/' + this.mesureDate + '/' + this.selectedPeriod + '/.pdf');
    // }

    setQteReelofSelectedIngrdParam(ingrdParamID, qteReel, qteTh) {
        this.livraisonService.setQteReelOfSelectedIngrdParam(ingrdParamID, qteReel, qteTh)
            .subscribe(response => {
                this.getLivraisonsData(this.selectedRecupSessnID);
            });
    }


}
