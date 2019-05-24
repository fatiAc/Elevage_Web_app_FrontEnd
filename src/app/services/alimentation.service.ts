import { Injectable } from '@angular/core';
import {HttpMethodsService} from "./tools/http-methods.service";

@Injectable()
export class AlimentationService {

  constructor(private httpMethods: HttpMethodsService) {
  }

  getPeriodsInfo() {
    const url = ' http://localhost:8080/app/detailAlimentation/allPeriods';
    return this.httpMethods.get(url, '');
  }

  getRtionsInfo() {
    const url = ' http://localhost:8080/app/detailAlimentation/allNourritures';
    return this.httpMethods.get(url, '');
  }

  getPaddocksInfo() {
    const url = ' http://localhost:8080/app/detailAlimentation/allPaddocks';
    return this.httpMethods.get(url, '');
  }

  getDetailAlimentInfo(date, periodID, rationID, paddockID) {
    const url = 'http://localhost:8080/app/detailAlimentation/detailAlimentByCritaria/';
    return this.httpMethods.get(url, date + '/' + periodID + '/' + rationID + '/' + paddockID);
  }

}
