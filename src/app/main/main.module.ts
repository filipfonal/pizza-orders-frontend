import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main.component';
import { MaterialModule } from '../material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './main.routing';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PizzaCreatorComponent } from './pizza-creator/pizza-creator.component';
import { OfferComponent } from './offer/offer.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    BrowserAnimationsModule,
  ],
  declarations: [NavigationComponent, MainComponent, HomeComponent, MenuComponent, PizzaCreatorComponent, OfferComponent, AccountComponent]
})
export class MainModule { }
