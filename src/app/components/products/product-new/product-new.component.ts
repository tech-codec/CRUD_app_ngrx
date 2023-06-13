import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductsState, ProductsStateEnum} from "../../../ngrx/products.reducer";
import {Store} from "@ngrx/store";
import {CreateProductAction, NewProductAction} from "../../../ngrx/products.actions";

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit{
  productFormGroup!: FormGroup ;
  productstate! : ProductsState;
  readonly ProductsStateEnum = ProductsStateEnum;
  submitted: boolean = false;

  constructor(private store: Store<any>, private fb: FormBuilder){}

  ngOnInit(): void {
    this.store.dispatch(new NewProductAction({}))
    this.store.subscribe(myStore =>{
      this.productstate = myStore.catalogState;
      if( myStore.catalogState.dataState === this.ProductsStateEnum.NEW){
        this.productFormGroup = this.fb.group({
          name: ['', Validators.required],
          price: [0, Validators.required],
          quantity: [0, Validators.required],
          description: ['', Validators.required],
          selected: [true, Validators.required],
          available: [true, Validators.required]
        })
      }
    })
  }

  onSaveProduct() {
    this.submitted=true
    if (this.productFormGroup?.invalid) return
    this.store.dispatch(new CreateProductAction(this.productFormGroup.value))
  }

  newProduct() {
    this.store.dispatch(new NewProductAction({}))
  }


}
