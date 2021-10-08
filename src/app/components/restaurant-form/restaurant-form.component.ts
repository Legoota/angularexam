import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Restaurant } from 'src/app/models/Restaurant';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {

  @Output() restaurantAdded = new EventEmitter<Restaurant>();

  @ViewChild("form", { static : true }) form: NgForm | undefined;

  public restaurant: Restaurant = {
    id: 0,
    nom: "",
    adresse: "",
    evaluations: []
  }

  constructor() { }

  ngOnInit(): void {
  }

  public save() : void {
    if(this.form && this.form.valid) {
      this.restaurantAdded.emit(this.restaurant);
      this.restaurant = {
        id: 0,
        nom: "",
        adresse: "",
        evaluations: []
      }
    }
  }

}
