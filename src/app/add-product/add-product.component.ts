import { CommonServiceService } from './../common-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  cost: number;
  productName: string;
  companies: any;
  companyName: string;
  products: any = [];
  id = 23;
  constructor(private commonService: CommonServiceService) {}

  ngOnInit(): void {
    this.products = this.commonService.getProducts();
    this.companies = this.commonService.getCompanies();
  }

  // tslint:disable-next-line: typedef
  onAddProduct() {
    if (this.isProductAvailable()) {
      window.alert('Product already exists!');
      return false;
    }
    this.id++;
    const newProduct = {
      id: +this.id,
      productName: this.productName,
      companyName: this.companyName,
      cost: +this.cost,
    };
    this.commonService.addProduct(newProduct);
    this.products = this.commonService.getProducts();
    this.companies = this.commonService.getCompanies();
    this.productName = '';
    this.companyName = '';
    this.cost = null;
  }

  // tslint:disable-next-line: typedef
  isProductAvailable() {
    const isAvailable = this.products.find(
      (e) => e.productName.toLowerCase() === this.productName.toLowerCase()
    );
    if (isAvailable !== undefined) {
      return true;
    } else {
      return false;
    }
  }
}
