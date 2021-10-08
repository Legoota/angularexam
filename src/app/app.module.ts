import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantTableComponent } from './components/restaurant-table/restaurant-table.component';
import { RestaurantInfoComponent } from './components/restaurant-info/restaurant-info.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './router/routes';
import { RestaurantService } from './services/restaurant.service';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantFormComponent } from './components/restaurant-form/restaurant-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantTableComponent,
    RestaurantInfoComponent,
    RestaurantFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
