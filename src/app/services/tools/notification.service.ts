import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable()
export class NotificationService {

  constructor(private toastr: ToastrService) {
  }

  successToas(message, title) {
    this.toastr.success(message, title);
  }

  warningToast(message, title) {
    this.toastr.warning(message, title);
  }


}
