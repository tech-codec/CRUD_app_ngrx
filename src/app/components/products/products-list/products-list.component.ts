import {Component, Input} from '@angular/core';

import {ProductsState} from "../../../ngrx/products.reducer";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  @Input() state!: ProductsState

}
