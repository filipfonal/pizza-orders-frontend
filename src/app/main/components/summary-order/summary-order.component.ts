import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/IProduct';

@Component({
  selector: 'app-summary-order',
  templateUrl: './summary-order.component.html',
  styleUrls: ['./summary-order.component.scss']
})
export class SummaryOrderComponent implements OnInit {
  @Input() public orderProducts: Product[];
  
  constructor() { }

  ngOnInit() {
  }

  public totalCost() {
    return this.orderProducts.reduce((cost: number, product: Product) => cost + product.price, 0);
  }

}
