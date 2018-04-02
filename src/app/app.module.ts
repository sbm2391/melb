import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { RestaurantService } from './services/restaurant.service';
import { MapComponent } from './map/map.component';

import { AgmCoreModule } from '@agm/core';
import { CardComponent } from './card/card.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { OrderModule } from 'ngx-order-pipe';
import { FacebookModule } from 'ngx-facebook';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    CardComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    OrderModule,
    FacebookModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDB4N0qSz7PO1NvWoEbcM5PFBYwKGxwD-I'
    })
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }


