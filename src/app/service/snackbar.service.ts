import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar:MatSnackBar) { }

  /* It takes three parameters
      1.the message string
      2.the action
      3.the duration, alignment, etc. */

    openSnackBar(message: string, action: string, callback?: Function) {
      var snackBar = this.snackBar.open(message, action, {
         duration: 8000,
      });

      snackBar.afterDismissed().subscribe(info => {
        if (info.dismissedByAction === true && callback != undefined) {
          callback();
        }
      });
    }
}
