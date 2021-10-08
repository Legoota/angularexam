import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Eval } from '../models/Eval';
import { Restaurant } from '../models/Restaurant';

@Injectable()
export class RestaurantService {

  private restaurants : BehaviorSubject<Restaurant[]> = new BehaviorSubject<Restaurant[]>([]);

  constructor(private httpClient: HttpClient) { 
    this.fetchRestaurants();
  }

  fetchRestaurants() : void {
    this.httpClient.get<Restaurant[]>("http://localhost:3000/restaurants")
      .subscribe(v => this.restaurants.next(v));
  }

  public addRestaurant(r: Restaurant) : void {
    this.httpClient.post("http://localhost:3000/restaurants",r)
      .subscribe(() => this.restaurants.next([...this.restaurants.getValue(), r]));
  }

  getData() : Observable<Restaurant[]> {
    return this.restaurants;
  }

  getRestaurant(id: number) : Observable<Restaurant[]> {
    return this.getData(); 
    // devrait parcourir les subjects pour renvoyer uniquement le restaurant
    // avec le bon id mais pas le temps
    // alors on renvoit la liste et on délègue le sale boulot au composant
  }

  public addEval(r: Restaurant, e: Eval) : void {
    r.evaluations.push(e);
    this.httpClient.put("http://localhost:3000/restaurants/" + r.id,r)
      .subscribe(() => this.restaurants.next([...this.restaurants.getValue()]));
  }
}
