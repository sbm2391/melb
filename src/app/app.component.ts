import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './services/restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
restaurants: any;

constructor(private restaurantService: RestaurantService) {}

ngOnInit() {
  this.restaurantService.fetchRestaurants()
    .subscribe(restaurant => {
      this.restaurants = restaurant;
      console.log(this.restaurants);
    });
  }
}
