import { Component } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent {
  foodItems = [
    {
      name: 'Pizza',
      price: 10.99,
      image: 'movie2.jpg'
    },
    {
      name: 'Burger',
      price: 5.99,
      image: 'movie2.jpg'
    },
    {
      name: 'Salad',
      price: 7.99,
      image: 'movie2.jpg'
    },
    {
      name: 'Burger',
      price: 5.99,
      image: 'movie2.jpg'
    },
    {
      name: 'Salad',
      price: 7.99,
      image: 'movie2.jpg'
    },
    {
      name: 'Burger',
      price: 5.99,
      image: 'movie2.jpg'
    },
    {
      name: 'Salad',
      price: 7.99,
      image: 'movie2.jpg'
    },
    {
      name: 'Burger',
      price: 5.99,
      image: 'movie2.jpg'
    },
    {
      name: 'Salad',
      price: 7.99,
      image: 'movie2.jpg'
    },
    {
      name: 'Burger',
      price: 5.99,
      image: 'movie2.jpg'
    }
  ];

  addToCart(foodItem: any) {
    // Implement cart functionality here
    console.log(`Added to cart: ${foodItem.name}`);
  }
}
