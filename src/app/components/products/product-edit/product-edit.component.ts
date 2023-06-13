import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {EditProductAction, UpdateProductAction} from "../../../ngrx/products.actions";
import {ProductsState, ProductsStateEnum} from "../../../ngrx/products.reducer";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit{

  productId!: number
  productFormGroup!: FormGroup
  productstate! : ProductsState;
  readonly ProductsStateEnum = ProductsStateEnum;
  submitted: boolean = false;
  formBuild: boolean = false


  constructor(private route:ActivatedRoute, private store: Store<any>, private fb: FormBuilder, private router: Router){
    this.productId = this.route.snapshot.params['id']
    console.log('mon id: ' +this.productId)
  }

  ngOnInit(): void {
    this.store.dispatch(new EditProductAction(this.productId))
    this.store.subscribe((myStore)=>{
      this.productstate = myStore.catalogState
      if( myStore.catalogState.dataState === this.ProductsStateEnum.EDIT){
        if(this.productstate?.currentProduct != null){
          this.productFormGroup = this.fb.group({
            id: [this.productstate.currentProduct.id],
            name: [this.productstate.currentProduct.name, Validators.required],
            price: [this.productstate.currentProduct.price, Validators.required],
            quantity: [this.productstate.currentProduct.quantity, Validators.required],
            description: [this.productstate.currentProduct.description, Validators.required],
            selected: [this.productstate.currentProduct.selected, Validators.required],
            available: [this.productstate.currentProduct.available, Validators.required]
          })

          this.formBuild = true
        }

      }
    })

  }

  EditProduct() {
    this.router.navigateByUrl('/products')
  }

  onUpdateProduct() {
    this.formBuild = true
    if (this.productFormGroup?.invalid) return;
    this.store.dispatch(new UpdateProductAction(this.productFormGroup.value))
    console.log(this.productFormGroup?.value)

  }
}
