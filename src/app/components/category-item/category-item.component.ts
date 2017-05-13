import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as LocationsConstants from '../../services/Geolocation.objects.constants';


@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.less']
})
export class CategoryItemComponent implements OnInit, OnDestroy {

  private sub: any;
  private name: string;
  private places: any[] =  Object.keys(LocationsConstants).map(key => LocationsConstants[key]);
  private item: any;

  constructor(private route: ActivatedRoute,
              private zone: NgZone) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['id'];
      this.zone.run(() => {
        this.item = this.places.find((el) => el.title === this.name);
        console.log(this.item)
      });
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
