import { Component, OnInit, OnDestroy } from '@angular/core';
import { Restaurant, RestaurantService } from 'src/app/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-restaurant-data',
  templateUrl: './restaurant-data.component.html',
  styleUrls: ['./restaurant-data.component.scss']
})
export class RestaurantDataComponent implements OnInit, OnDestroy {

  public restaurant: Restaurant;
  private subscription: Subscription;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.subscription = this.restaurantService.currentRestaurant.subscribe(restaurant => this.restaurant = restaurant);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}