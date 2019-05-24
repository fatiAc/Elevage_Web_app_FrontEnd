import {Injectable} from '@angular/core';
import {HttpMethodsService} from "./tools/http-methods.service";

@Injectable()
export class MesureService {

    constructor(private httpMethod: HttpMethodsService) {
    }

    getAnimalsInfo() {
        const url = ' http://localhost:8080/app/mesure/allAnimals';
        return this.httpMethod.get(url, '');
    }

    getUsersInfo() {
        const url = ' http://localhost:8080/app/mesure/userByRole';
        return this.httpMethod.get(url, '');
    }

    getMesureInfo(date, animalID, dateMin, dateMax) {
        if (date === '') {
            date = 'undefined';
        }
        if (dateMin === '') {
            dateMin = 'undefined';
        }
        if (dateMax === '') {
            dateMax = 'undefined';
        }
        const url = ' http://localhost:8080/app/mesure/mesureByCritaria/';
        return this.httpMethod.get(url, date + '/' + animalID + '/' + dateMin + '/' + dateMax);
    }

    getMouvmntInfo(date, userLogin, animalID) {
        if (date === '') {
            date = 'undefined';
        }
        const url = ' http://localhost:8080/app/mesure/mouvmntByCritaria/';
        return this.httpMethod.get(url, date + '/' + userLogin + '/' + animalID);
    }
}
