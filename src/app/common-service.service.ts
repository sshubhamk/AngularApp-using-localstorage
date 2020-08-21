import { LocalData } from './local-data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonServiceService extends LocalData {
  constructor() {
    super();
    this.loadData();
  }

  // tslint:disable-next-line: typedef
  getCompanies() {
    const companies = JSON.parse(localStorage.getItem('companies'));
    return companies;
  }

  // tslint:disable-next-line: typedef
  getProducts() {
    const products = JSON.parse(localStorage.getItem('products'));
    return products;
  }

  getPurchaseOrders() {
    const orders = JSON.parse(localStorage.getItem('purchaseOrders'));
    return orders;
  }

  // tslint:disable-next-line: typedef
  addCompany(company) {
    const comp = JSON.parse(localStorage.getItem('companies'));
    comp.push(company);
    localStorage.setItem('companies', JSON.stringify(comp));
  }

  // tslint:disable-next-line: typedef
  addProduct(product) {
    const prod = JSON.parse(localStorage.getItem('products'));
    prod.push(product);
    localStorage.setItem('products', JSON.stringify(prod));
  }

  // tslint:disable-next-line: typedef
  addPurchaseOrder(purchase) {
    const order = JSON.parse(localStorage.getItem('purchaseOrders'));
    order.push(purchase);
    localStorage.setItem('purchaseOrders', JSON.stringify(order));
  }
}
