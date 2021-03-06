import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/core/models/IProduct';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.dialog.html',
  styleUrls: ['./order-preview.dialog.scss'],
})

export class OrderPreviewComponent implements OnInit, OnDestroy {

  public orderProducts: Product[] = [];
  private subscription: Subscription;

  @Output() itemInOrderCount = new EventEmitter<number>();

  constructor(
    private dialogRef: MatDialogRef<OrderPreviewComponent>,
    private router: Router) { }

  public ngOnInit() {
    this.subscription = this.dialogRef.backdropClick().subscribe(() => this.onClose());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public totalCost() {
    return this.orderProducts.reduce((cost: number, product: Product) => cost + parseFloat(product.price), 0);
  }

  public goToCheckout() {
    this.router.navigateByUrl('order');
    this.dialogRef.close(this.orderProducts);
  }

  public onClose() {
    this.dialogRef.close(this.orderProducts);
  }

  public removeProduct(product: Product) {
    const index = this.orderProducts.indexOf(product);
    this.orderProducts.splice(index, 1);
  }

  public addProduct(product: Product) {
    this.orderProducts.push(product);
  }
}
