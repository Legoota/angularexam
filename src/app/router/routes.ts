import { Routes } from "@angular/router";
import { RestaurantInfoComponent } from "../components/restaurant-info/restaurant-info.component";
import { RestaurantTableComponent } from "../components/restaurant-table/restaurant-table.component";

export const ROUTES : Routes = [
    { path: '', component: RestaurantTableComponent },
    { path: 'restaurant/:id', component: RestaurantInfoComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
]