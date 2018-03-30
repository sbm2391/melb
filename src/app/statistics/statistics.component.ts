import { Component, OnInit, Input } from '@angular/core';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  @Input() theRestaurants;
  totalRestaurants: number;

  constructor() { }

  ngOnInit() {
  }

theRestaurantsLength() {
  return this.theRestaurants.length;
}

avarageRestaurants() {
  let count = 0;
  this.theRestaurants.forEach(restaurant => {
    count += restaurant.rating;
  });
return count / this.theRestaurantsLength();
}
IntingerAvarageRestaurants() {
  return Math.round(this.avarageRestaurants());
}

avarage(data) {
  let count = 0;
  data.forEach(res => {
    count += res;
  });
return count / data.length;
}

standardDeviation() {
  const avarage = this.avarageRestaurants();
  const squareDiffs = this.theRestaurants.map(function(restaurant) {
  const diff = restaurant.rating - avarage;
  const sqrDiff = diff * diff;
  return sqrDiff;
  });
  const avgSquareDiff = this.avarage(squareDiffs);
  const stdDev = Math.sqrt(avgSquareDiff);
  return Math.round(stdDev * 100) / 100;
}

}
