import {Injectable} from '@angular/core';
import {HttpMethodsService} from "./tools/http-methods.service";

@Injectable()
export class LivraisonService {

    constructor(private httpMethods: HttpMethodsService) {
    }

    getUsersByRole() {
        const url = 'http://localhost:8080/app/livraison/findByRole';
        // users hwo use mobile app
        return this.httpMethods.get(url, '');
    }

    getPeriodsInfo() {
        const url = ' http://localhost:8080/app/livraison/allPeriods';
        return this.httpMethods.get(url, '');
    }

    getNourritureInfo() {
        const url = ' http://localhost:8080/app/livraison/allNourritures';
        return this.httpMethods.get(url, '');
    }

    getRecupSessionInfo(date, periodID) {
        const url = ' http://localhost:8080/app/livraison/recupSessionByDateAndRation/';
        return this.httpMethods.get(url, date + '/' + periodID);
    }

    getUserOfSelectedRecupSession(recupSessionID) {
        const url = ' http://localhost:8080/app/livraison/userOfSelectedRecupSession/';
        return this.httpMethods.get(url, recupSessionID);
    }

    getLivraisonInfo(recupSessionID) {
        const url = ' http://localhost:8080/app/livraison/livraisonsInfoByRecupSession/';
        return this.httpMethods.get(url, recupSessionID);
    }

    setQteReelOfSelectedIngrdParam(ingrdParamID, qteReel, qteTh) {
        const url = 'http://localhost:8080/app/livraison/setQteReelOfIngredntParam/' + '' + ingrdParamID + '/' + qteReel + '/' + qteTh;
        return this.httpMethods.put(url);
    }

}
