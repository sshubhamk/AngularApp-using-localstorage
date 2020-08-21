import { CommonServiceService } from './../common-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css'],
})
export class PurchaseOrderComponent implements OnInit {
  companies: any;
  tmpProduct: any;
  products = [];
  product = [];
  companyName: '';
  productName = '';
  rate: number;
  quantity: number;
  totalPrice: number;
  purchaseOrders: any;

  constructor(private commonService: CommonServiceService) {}

  ngOnInit(): void {
    this.companies = this.commonService.getCompanies();
    this.purchaseOrders = this.commonService.getPurchaseOrders();
  }

  // tslint:disable-next-line: typedef
  onCompanyChange() {
    this.products = this.commonService.getProducts();
    this.product = this.products.filter(
      (a) => a.companyName === this.companyName
    );
    this.rate = null;
  }

  // tslint:disable-next-line: typedef
  onProductChange() {
    if (this.productName !== '') {
      this.tmpProduct = this.product.filter(
        (a) => a.productName === this.productName
      );
      this.rate = this.tmpProduct[0].cost;
    }
  }

  // tslint:disable-next-line: typedef
  calculatePrice() {
    this.totalPrice = this.quantity * this.rate;

    const purchaseOrder = {
      orderNumber: this.generateOrderNumber(),
      companyName: this.companyName,
      productName: this.productName,
      rate: this.rate,
      quantity: this.quantity,
      totalPrice: this.totalPrice,
    };
    this.commonService.addPurchaseOrder(purchaseOrder);
    this.commonService.getPurchaseOrders();
  }

  // tslint:disable-next-line: typedef
  generateOrderNumber() {
    const toDayDate = new Date();
    let productID = 0;
    if (localStorage.getItem(toDayDate.getFullYear().toString()) === null) {
      localStorage.removeItem((toDayDate.getFullYear() - 1).toString());
      productID = 1;
    } else {
      productID = +localStorage.getItem(toDayDate.getFullYear().toString());
    }

    const ID = 'PO/' + toDayDate.getFullYear() + '/' + productID;
    localStorage.setItem(
      toDayDate.getFullYear().toString(),
      (productID + 1).toString()
    );

    return ID;
  }
}
