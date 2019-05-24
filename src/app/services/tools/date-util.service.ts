import {Injectable} from '@angular/core';

@Injectable()
export class DateUtilService {

    constructor() {
    }

    dateFormat(selectedDate) {
        const date = new Date(selectedDate);
        const year = date.getFullYear();
        let month = (date.getMonth() + 1).toString();
        let dt = (date.getDate()).toString();

        if (date.getDate() < 10) {
            dt = '0' + dt;
        }
        if (date.getMonth() + 1 < 10) {
            month = '0' + month;
        }
        console.log(year + '-' + month + '-' + dt);
        return year + '-' + month + '-' + dt;
    }
}
