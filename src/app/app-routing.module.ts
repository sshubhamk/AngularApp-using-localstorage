import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'add-company',
    component: AddCompanyComponent,
  },
  {
    path: 'add-product',
    component: AddProductComponent,
  },
  {
    path: 'purchase-order',
    component: PurchaseOrderComponent,
  },
  {
    path: '**',
    redirectTo: 'add-company',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
