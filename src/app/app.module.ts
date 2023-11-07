import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NavbarComponent } from './navbar/navbar.component';
import { MoviesComponent } from './movies/movies.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FoodListComponent } from './food-list/food-list.component';
import { OrdersComponent } from './orders/orders.component';
@NgModule({
  declarations: [AppComponent, LoginComponent, SignupComponent, HomeComponent, NavbarComponent, MoviesComponent, CarouselComponent, FoodListComponent, OrdersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatSidenavModule,
    MatButtonModule, 
    MatIconModule, 
    MatDividerModule,
    FlexLayoutModule,
    CardComponent,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
