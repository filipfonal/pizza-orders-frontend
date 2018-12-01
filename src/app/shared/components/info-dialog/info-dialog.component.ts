import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

export enum DialogTypes {
  INFO,
  WARNING,
  ERROR
}

@Component({
  selector: 'ch-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: [ './info-dialog.component.scss' ],
})

export class InfoDialogComponent {
  public title: string;
  public message: string;
  public type: DialogTypes;

  constructor(public dialogRef: MatDialogRef<InfoDialogComponent>) { }

  public getDialogClass(){
    switch(this.type){
      case 0: return 'info'; break;
      case 1: return 'warning'; break;
      case 2: return 'error'; break;
    }
  }
}
