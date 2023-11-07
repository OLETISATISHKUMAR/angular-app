import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Order {
  "S No": number;
  "Order Date": string; // Use string type for date
  "Transaction Details": string; // Corrected the spelling
  Status: string;
  "Item Details": string; // Corrected the spelling
  Amount: number;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  displayedColumns: string[] = ['S No', 'Order Date', 'Transaction Details', 'Status', 'Item Details', 'Amount'];
  dataSource = new MatTableDataSource<Order>(ELEMENT_DATA);
}

const ELEMENT_DATA: Order[] = [
  { "S No": 1, "Order Date": "1/2/23", "Transaction Details": "you paid", Status: "2 days to arrive", "Item Details": "Iphone 15", Amount: 10 },
  { "S No": 1, "Order Date": "1/2/23", "Transaction Details": "you paid", Status: "2 days to arrive", "Item Details": "Iphone 15", Amount: 10 },
  { "S No": 1, "Order Date": "1/2/23", "Transaction Details": "you paid", Status: "2 days to arrive", "Item Details": "Iphone 15", Amount: 10 },
  { "S No": 1, "Order Date": "1/2/23", "Transaction Details": "you paid", Status: "2 days to arrive", "Item Details": "Iphone 15", Amount: 10 },
  { "S No": 1, "Order Date": "1/2/23", "Transaction Details": "you paid", Status: "2 days to arrive", "Item Details": "Iphone 15", Amount: 10 },
  { "S No": 1, "Order Date": "1/2/23", "Transaction Details": "you paid", Status: "2 days to arrive", "Item Details": "Iphone 15", Amount: 10 },
  { "S No": 1, "Order Date": "1/2/23", "Transaction Details": "you paid", Status: "2 days to arrive", "Item Details": "Iphone 15", Amount: 10 },

];
