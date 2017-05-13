import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';

import * as LocationsConstants from '../../services/Geolocation.objects.constants';

import { ModalMarkerInfoComponent } from '../modal-marker-info/modal-marker-info.component';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {

  private map: any;
  private places: any[] =  Object.keys(LocationsConstants).map(key => LocationsConstants[key]);
  private markers: any[] = [];

  constructor(public dialog: MdDialog) { }

  private openMarker(data): void {
    let dialogRef = this.dialog.open(ModalMarkerInfoComponent, {
      data
    });
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(
      res => {
        const lat = res.coords.latitude;
        const lng = res.coords.longitude;
        this.loadMap(lat, lng)
      },
      err => console.log(err));

  }

  private loadMap(lat, lng) {
  const location = new google.maps.LatLng(lat, lng);
  const mapOption = {
    zoom: 12,
    center: {lat, lng},
    mapTypeControl: true,
    mapTypeId: 'satellite',
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.TOP_CENTER
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_CENTER
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP
    },
    fullscreenControl: true
  };

  this.map = new google.maps.Map(document.getElementById('map'), mapOption);
  this.places.forEach(el => {
    this.createNewMarker(el);
  })
  const myloc = new google.maps.Marker({
    clickable: false,
    icon: new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
      new google.maps.Size(22,22),
      new google.maps.Point(0,18),
      new google.maps.Point(11,11)),
    shadow: null,
    zIndex: 999,
    position: location,
    map:  this.map
  });
  }

  /**
   *
   * Create marker
   *
   * @param place
   */
  private createNewMarker(place) {
    const position = new google.maps.LatLng(place.lat, place.lng);
    const marker = new google.maps.Marker({
      clickable: true,
      position,
      map:  this.map,
      title: place.title
    });
    marker.addListener('click', () => {
      this.openMarker(place);
    });
    this.markers.push(marker);
  }

  /**
   *
   * Set camera position
   *
   * @param lat
   * @param lng
   */
  // private setPosition(lat: number, lng: number) {
  //   const location = new google.maps.LatLng(lat, lng);
  //   this.map.animateCamera({
  //     'target': location,
  //     'tilt': 60,
  //     'zoom': 16,
  //     'bearing': 140,
  //     'duration': 3000
  //   });
  // }

}
