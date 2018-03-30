import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat = 19.438655;
  lng = -99.1305917;
  zoom = 16;
  radius = 300;
  m;
  restaurants;
  insideRadius = [];
constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantService.fetchRestaurants()
    .subscribe(restaurant => {
      this.restaurants = restaurant;
      console.log(this.restaurants);
      this.restaurantInsideRadius();
    });
  }

  restaurantInsideRadius() {
    this.insideRadius = [];
    this.restaurants.forEach(restaurant => {
      if (this.getDistance(restaurant.address.location.lat, restaurant.address.location.lng) <= this.radius && this.insideRadius.indexOf(restaurant) < 0) {
        this.insideRadius.push(restaurant);
      }
    });
  }

  sendRadius(newRadius) {
    this.radius = Number(newRadius.value);
    this.restaurantInsideRadius();
  }

  mapDragEnd($event) {
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    this.restaurantInsideRadius();
  }

  getDistance(lat2, lng2) {

    const rad = function(x) {return x * Math.PI / 180; };
    const R = 6378.137; // Radio de la tierra en km
    const dLat = rad( lat2 - this.lat );
    const dLong = rad(lng2 - this.lng );
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(this.lat)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c;
    this.m = d.toFixed(2); // Retorna tres decimales
    this.m= this.m*1000;
    return this.m;
  }
}
