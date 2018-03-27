import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() theRestaurants;
  title = 'My first AGM project';
  lat = 19.438655;
  lng = -99.1305917;
  zoom = 16;
  radius = 300;
  constructor() { }

  ngOnInit() {
  }
  sendRadius(newRadius) {
    this.radius = Number(newRadius.value);
    console.log(this.radius);
  }
  mapDragEnd($event) {
    console.log('dragend');
  }
}
