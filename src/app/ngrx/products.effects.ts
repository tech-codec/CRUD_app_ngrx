import {Injectable} from "@angular/core";
import {ProductsServices} from "../services/products.services";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {
  CreateProductActionError,
  CreateProductActionSuccess,
  DeleteProductActionError,
  DeleteProductActionSuccess, EditProductActionError, EditProductActionSuccess,
  GetAllProductsActionError,
  GetAllProductsActionSuccess,
  GetSelectedProductsAction,
  GetSelectedProductsActionError,
  GetSelectedProductsActionSuccess,
  GetUnSelectedProductsAction,
  GetUnSelectedProductsActionError,
  GetUnSelectedProductsActionSuccess,
  NewProductActionSuccess,
  ProductsActions,
  ProductsActionsTypes,
  SearchProductsActionError,
  SearchProductsActionSuccess,
  SelectProductsActionError,
  SelectProductsActionSuccess, UpdateProductActionError, UpdateProductActionSuccess
} from "./products.actions";
import {catchError, map, mergeMap} from "rxjs/operators";

@Injectable()
export class ProductsEffects {
  constructor(private productsService: ProductsServices, private effectActions: Actions){

  }


  getAllProductsEffect: Observable<ProductsActions>  = createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
      mergeMap((action: ProductsActions)=>{
        return this.productsService.getAllProducts()
          .pipe(
            map((products)=> new GetAllProductsActionSuccess(products)),
            catchError((err)=>of(new GetAllProductsActionError(err.message)))
          )
      })
    )
  );

  /* Get SelectedProduct */
  getSelectedProductsEffect: Observable<ProductsActions> = createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.GET_SELECTED_PRODUCTS),
      mergeMap((action: ProductsActions)=>{
        return this.productsService.getSelectedProductS()
          .pipe(
            map((products)=>new GetSelectedProductsActionSuccess(products)),
            catchError((err)=>of(new GetSelectedProductsActionError(err.maessage)))
          )
      })
    )
  )


  /* Get UnSelectedProduct */
  getUnSelectedProductsEffect: Observable<ProductsActions> = createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.GET_UNSELECTED_PRODUCTS),
      mergeMap((action: ProductsActions)=>{
        return this.productsService.getAvailableProducts()
          .pipe(
            map((products)=>new GetUnSelectedProductsActionSuccess(products)),
            catchError((err)=>of(new GetUnSelectedProductsActionError(err.message)))
          )
      })
    )
  )


  /* SearchProduct */
  searchProductsEffect: Observable<ProductsActions> = createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.SEARCH_PRODUCTS),
      mergeMap((action : ProductsActions)=>{
        return this.productsService.searchProducts(action.payload)
          .pipe(
            map((products)=>new SearchProductsActionSuccess(products)),
            catchError((err)=>of(new SearchProductsActionError(err.message)))
          )
      })
    )
  )

  /* Select Product*/

  selectProductsEffect: Observable<ProductsActions> = createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.SELECT_PRODUCT),

      mergeMap((action : ProductsActions)=>{
        return this.productsService.select(action.payload)
          .pipe(
            map((product)=>new SelectProductsActionSuccess(product)),
            catchError((err)=>of(new SelectProductsActionError(err.message)))
          )
      })
    )
  )

  /* Select Product*/
  deleteProductEffect : Observable<ProductsActions> = createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.DELETE_PRODUCT),
      mergeMap((action: ProductsActions)=>{
        return this.productsService.deleteProduct(action.payload)
          .pipe(
            map(()=>new DeleteProductActionSuccess(action.payload)),
            catchError((err)=>of(new DeleteProductActionError(err.message)))
          )
      })
    )
  )

  /* Select Product*/
  newProductEffect : Observable<ProductsActions> = createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.New_PRODUCT),
      map((action: ProductsActions)=>{
        return new NewProductActionSuccess({})
      })
    )
  )


  /* Create Product*/

  createProductsEffect: Observable<ProductsActions> = createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.CREATE_PRODUCT),

      mergeMap((action : ProductsActions)=>{
        return this.productsService.saveProduct(action.payload)
          .pipe(
            map((product)=>new CreateProductActionSuccess(product)),
            catchError((err)=>of(new CreateProductActionError(err.message)))
          )
      })
    )
  )

  /* Edit Product*/

  EditProductsEffect: Observable<ProductsActions> = createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.EDIT_PRODUCT),
      mergeMap((action : ProductsActions)=>{
        return this.productsService.getProduct(action.payload)
          .pipe(
            map((product)=> new EditProductActionSuccess(product)),
            catchError((err)=>of(new EditProductActionError(err.message)))
          )
      })
    )
  )

  /* Update Product*/

  UpdateProductsEffect: Observable<ProductsActions> = createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.UPDATE_PRODUCT),

      mergeMap((action : ProductsActions)=>{
        return this.productsService.updateProduct(action.payload)
          .pipe(
            map((product)=> new UpdateProductActionSuccess(product)),
            catchError((err)=>of(new UpdateProductActionError(err.message)))
          )
      })
    )
  )

  // selectProductsEffect : Observable<ProductsActions> = createEffect(
  //   ()=> this.effectActions.pipe(
  //     ofType(ProductsActionsTypes.SELECT_PRODUCT),
  //     mergeMap((action : ProductsActions) => {
  //         return this.productsService.select(action.payload)
  //           .pipe(
  //             map( (product)=> new SelectProductsActionSuccess(product)),
  //             catchError((err)=>of(new SelectProductsActionError(err.message)))
  //           )
  //       })
  //   )
  // )



}
