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
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
  }

  getDistance(lat2, lng2) {

    const rad = function(x) {return x * Math.PI / 180; };
    const R = 6378.137; // Radio de la tierra en km
    const dLat = rad( lat2 - this.lat );
    const dLong = rad(lng2 - this.lng );
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(this.lat)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c;
    this.km = d.toFixed(2); // Retorna tres decimales
    this.km= this.km*1000;
    return this.km;
  }
}
