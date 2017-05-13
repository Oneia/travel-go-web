import { Component, OnInit, Inject, NgZone } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-modal-marker-info',
  templateUrl: 'modal-marker-info.component.html',
  styleUrls: ['modal-marker-info.component.less']
})
export class ModalMarkerInfoComponent implements OnInit {

  private markerData: any;

  constructor(public dialogRef: MdDialogRef<ModalMarkerInfoComponent>,
              public zone: NgZone,
              @Inject(MD_DIALOG_DATA) public data: any) {
    console.log(this.data)
    this.zone.run(() => {
      this.markerData = this.data;
    })
  }

  ngOnInit() {
  }

}
