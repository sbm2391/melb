import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() theRestaurants;

  lat = 19.438655;
  lng = -99.1305917;
  dragLat;
  dragLng;
  zoom = 16;
  radius = 300;
  km;
  constructor() { }
  restaurants;

  ngOnInit() {

  }

  sendRadius(newRadius) {
    this.radius = Number(newRadius.value);
    console.log(this.radius);
  }
  mapDragEnd($event) {
    this.dragLat=$event.coords.lat;
    this.dragLng=$event.coords.lng;
    console.log(this.dragLat);
    console.log(this.dragLng);
    console.log('dragend');
  }
   // mapRadiusChange($event) {
  //   console.log('radius change');
  // }
  getDistance(lat2, lng2) {

    const rad = function(x) {return x * Math.PI / 180; };
    const R = 6378.137; // Radio de la tierra en km
    const dLat = rad( lat2 - this.dragLat );
    const dLong = rad(lng2 - this.dragLng );
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(this.dragLat)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c;
    this.km = d.toFixed(2); // Retorna tres decimales
    this.km= this.km*1000;
    console.log(this.km);
    return this.km;
  }
  // me quede aqui
  getMarkersRadius() {
    this.restaurants = this.theRestaurants.filter(function(number){
      return number % 2 === 0;
    });
  }
}
