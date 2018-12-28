import { Injectable } from '@angular/core';
import { Restaurant } from '../models';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import { ApiService } from './api.service';
import { API_URLS} from '../const';
import { switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { RestaurantRoles } from '..';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private currentRestaurant$ = new BehaviorSubject<Restaurant>(null);
  public currentRestaurant = this.currentRestaurant$.asObservable();

  constructor(private apiService: ApiService) { }

  public getRestaurants(city?: string, name?: string): Observable<Restaurant[]> {
    const query = { searchCity: city, searchName: name };
    return this.apiService.post(API_URLS.GetRestaurants, query);
  }

  public getRestaurant(id: number): Observable<Restaurant> {
    return this.apiService.get(`${API_URLS.GetRestaurant}/${id}`);
  }

  public getAutocomplete() {
    return this.apiService.get(API_URLS.GetAutocomplete);
  }

  public addRestaurant(restaurant: Restaurant) {
    return this.apiService.post(API_URLS.AddRestaurant, restaurant);
  }

  public setCurrentRestaurant(restaurant: Restaurant) {
    this.currentRestaurant$.next(restaurant);
  }

  public grantUserRole(email: string, role: number, restaurantID: number) {
    const grantURL = `${API_URLS.AddRestaurant}/${restaurantID}/grant`;
    const data = { 'email': email, 'role': role };

    return this.apiService.post(grantURL, data);
  }
}
