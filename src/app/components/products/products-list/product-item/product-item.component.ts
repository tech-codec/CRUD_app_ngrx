import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../../models/product.models";
import {Store} from "@ngrx/store";
import {DeleteProductAction, SelectProductsAction} from "../../../../ngrx/products.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent  {

  @Input() product!: Product

  constructor(private store:Store<any>, private router: Router) { }



  onSelect(product: Product) {
    this.store.dispatch(new SelectProductsAction(product))
  }


  Ondelete(product: Product) {
    this.store.dispatch(new DeleteProductAction(product))
  }

  Onedit(product: Product) {
    this.router.navigateByUrl("/editProduct/"+ product.id)
  }
}
