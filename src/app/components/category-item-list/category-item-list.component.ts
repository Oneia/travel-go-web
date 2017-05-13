import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as LocationsConstants from '../../services/Geolocation.objects.constants';

@Component({
  selector: 'app-category-item-list',
  templateUrl: 'category-item-list.component.html',
  styleUrls: ['category-item-list.component.less']
})
export class CategoryItemListComponent implements OnInit {

  private places: any[] =  Object.keys(LocationsConstants).map(key => LocationsConstants[key]);

  constructor(  private router: Router,) {
    console.log(this.places)
  }

  ngOnInit() {
  }

  private goToItem(place): void {
    this.router.navigate(['/place', place.title])
  }

}
