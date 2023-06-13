import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./components/products/products.component";
import {ProductNewComponent} from "./components/products/product-new/product-new.component";
import {ProductEditComponent} from "./components/products/product-edit/product-edit.component";

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'newProduct', component: ProductNewComponent},
  {path: 'editProduct/:id', component: ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
