import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Eval } from 'src/app/models/Eval';
import { Restaurant } from 'src/app/models/Restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.css']
})
export class RestaurantInfoComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private _activatedRoute: ActivatedRoute, private _rs: RestaurantService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe( (params: Params) => {
      let id = params['id'];
      let observable = this._rs.getRestaurant(id);
      observable.subscribe( 
        resources => { 
          let restaurants = resources;
          this.restaurant = restaurants.find(r => r.id == id)!;
        },
        err => {console.log(err)}
      );
    })
  }

  public addEval(e: Eval) {
    this._rs.addEval(this.restaurant,e);
  }
}
