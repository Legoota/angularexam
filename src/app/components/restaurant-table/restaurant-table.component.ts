import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/Restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-table',
  templateUrl: './restaurant-table.component.html',
  styleUrls: ['./restaurant-table.component.css']
})
export class RestaurantTableComponent implements OnInit {

  restaurants: Restaurant[] = [];

  constructor(private rs: RestaurantService) { }

  // récupération de la liste des restaurants par un observable
  ngOnInit(): void {
    let observable = this.rs.getData();
    observable.subscribe( 
      resources => { this.restaurants = resources },
      err => {console.log(err)}
    );
  }

  public addRestaurant(r: Restaurant) {
    this.rs.addRestaurant(r);
  }

  // calcul de la moyenne
  getMoyenne(r: Restaurant) {
    let sum = 0;
    r.evaluations.forEach(r => sum += r.etoiles);
    return sum / r.evaluations.length;
  }

  // check si le nombre est défini ou non
  isNan(v: any) {
    return isNaN(v);
  }

}
