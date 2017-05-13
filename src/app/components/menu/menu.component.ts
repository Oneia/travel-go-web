import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  private cities: string[] = ['odessa', 'kiev', 'belgorod', 'lvov'];
  stateCtrl: FormControl;
  filteredCities: any;

  constructor() {
    this.stateCtrl = new FormControl();
    this.stateCtrl.setValue('odessa');
    this.filteredCities = this.stateCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterStates(name));
  }

  ngOnInit() {}

  filterStates(val: string) {
    return val ? this.cities.filter(s => new RegExp(`^${val}`, 'gi').test(s))
      : this.cities;
  }
}
