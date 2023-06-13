import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {
  GetAllProductsAction,
  GetSelectedProductsAction,
  GetUnSelectedProductsAction, ProductsActionsTypes,
  SearchProductsAction
} from "../../../ngrx/products.actions";
import {Router} from "@angular/router";
import {ProductsState} from "../../../ngrx/products.reducer";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  productstate! : ProductsState;
  readonly ProductsActionsTypes = ProductsActionsTypes

  constructor(private store:Store<any>, private router: Router) { }

  ngOnInit(): void {
    this.store.subscribe((myStore)=>{
      this.productstate = myStore.catalogState
    })
  }

  onSearchProduct(dataForm: any) {
    this.store.dispatch(new SearchProductsAction(dataForm.keyWord))
  }

  onGetAllProducts() {
    this.store.dispatch(new GetAllProductsAction({}))
  }

  onGetSelectedProducts() {
    this.store.dispatch(new GetSelectedProductsAction({}))
  }

  onGetAvailableProducts() {
    this.store.dispatch(new GetUnSelectedProductsAction( {}))
  }

  onNewProduct() {
    this.router.navigateByUrl('/newProduct')
  }
}
