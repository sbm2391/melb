import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Http, Response} from '@angular/http';

@Injectable()
export class RestaurantService {

    constructor(private http: Http) {}

    fetchRestaurants() {
        return this.http.get('https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json')
        .map((res: Response) => res.json())
        .map(items => items)
        .catch(e => {
            console.log(e);
            return Observable.throw(e);
        });
    }
}
