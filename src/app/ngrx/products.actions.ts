import {Action} from "@ngrx/store";
import {Product} from "../models/product.models";

export enum ProductsActionsTypes{
  GET_ALL_PRODUCTS = "[Products] Get All products",
  GET_ALL_PRODUCTS_SUCCESS = "[Products] Get All products success",
  GET_ALL_PRODUCTS_ERROR = "[pRODUCTS] Get All products errors",

  /** get selected products **/
  GET_SELECTED_PRODUCTS = "[Products] Get Selected products",
  GET_SELECTED_PRODUCTS_SUCCESS = "[Products] Get Selected products success",
  GET_SELECTED_PRODUCTS_ERROR = "[pRODUCTS] Get Selected products errors",

  /** get unselected products **/
  GET_UNSELECTED_PRODUCTS = "[Products] Get UnSelected products",
  GET_UNSELECTED_PRODUCTS_SUCCESS = "[Products] Get UnSelected products success",
  GET_UNSELECTED_PRODUCTS_ERROR = "[PRODUCTS] Get UnSelected products errors",

  /** search products **/
  SEARCH_PRODUCTS = "[Products] Search products",
  SEARCH_PRODUCTS_SUCCESS = "[Products] Search products success",
  SEARCH_PRODUCTS_ERROR = "[PRODUCTS] Search products errors",

/** Select products **/
  SELECT_PRODUCT = "[Products] Select products",
  SELECT_PRODUCT_SUCCESS = "[Products] Select products success",
  SELECT_PRODUCT_ERROR = "[PRODUCTS] Select products errors",

  /** Delete products **/
  DELETE_PRODUCT = "[Products] Delete product",
  DELETE_PRODUCT_SUCCESS = "[Products] Delete product success",
  DELETE_PRODUCT_ERROR = "[PRODUCTS] Delete product errors",

  /** New products **/
  New_PRODUCT = "[Products] New product",
  NEW_PRODUCT_SUCCESS = "[Products] New product success",
  NEW_PRODUCT_ERROR = "[PRODUCTS] New product errors",

  /** Create products **/
  CREATE_PRODUCT = "[Products] Create product",
  CREATE_PRODUCT_SUCCESS = "[Products] Create product success",
  CREATE_PRODUCT_ERROR = "[PRODUCTS]Create product errors",

  /** Edit products **/
  EDIT_PRODUCT = "[Products] Edit product",
  EDIT_PRODUCT_SUCCESS = "[Products] Edit product success",
  EDIT_PRODUCT_ERROR = "[PRODUCTS] Edit product errors",

  /** Update products **/
  UPDATE_PRODUCT = "[Products] Update product",
  UPDATE_PRODUCT_SUCCESS = "[Products] Update product success",
  UPDATE_PRODUCT_ERROR = "[PRODUCTS] Update product errors",


}


export class GetAllProductsAction implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS
  constructor(public payload: any){

  }

}


export class GetAllProductsActionSuccess implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS

  constructor(public payload: Product[]) {

  }

}

export class GetAllProductsActionError implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR

  constructor(public payload: string) {

  }

}


/** Action pour les produits selectioner **/

export class GetSelectedProductsAction implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS

  constructor(public payload: any){}
}

export class GetSelectedProductsActionSuccess implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS
  constructor(public payload: Product[]){}
}

export class GetSelectedProductsActionError implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR
  constructor(public payload: string){}
}


/** Action pour les produits unselected **/

export class GetUnSelectedProductsAction implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.GET_UNSELECTED_PRODUCTS

  constructor(public payload: any){}
}

export class GetUnSelectedProductsActionSuccess implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.GET_UNSELECTED_PRODUCTS_SUCCESS
  constructor(public payload: Product[]){}
}

export class GetUnSelectedProductsActionError implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.GET_UNSELECTED_PRODUCTS_ERROR
  constructor(public payload: string){}
}


/** Action pour la recherche des produits **/

export class SearchProductsAction implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.SEARCH_PRODUCTS

  constructor(public payload: string){}
}

export class SearchProductsActionSuccess implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS
  constructor(public payload: Product[]){}
}

export class SearchProductsActionError implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.SEARCH_PRODUCTS_ERROR
  constructor(public payload: string){}
}

/* Action de selection de produit */
export class SelectProductsAction implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.SELECT_PRODUCT
  constructor(public payload: Product){}
}


export class SelectProductsActionSuccess implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.SELECT_PRODUCT_SUCCESS
  constructor(public payload: Product ) {}
}


export class SelectProductsActionError implements Action{
  type: ProductsActionsTypes =  ProductsActionsTypes.SELECT_PRODUCT_ERROR
  constructor(public payload: string ) {}
}

/* Delete product Action */

export class DeleteProductAction implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.DELETE_PRODUCT
  constructor(public payload: Product){}
}

export class DeleteProductActionSuccess implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.DELETE_PRODUCT_SUCCESS
  constructor(public payload: Product) {}
}

export class DeleteProductActionError implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.DELETE_PRODUCT_ERROR
  constructor(public payload: String) {}
}

/* New Product Action*/

export class NewProductAction implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.New_PRODUCT;
  constructor(public payload: any){}
}

export class NewProductActionSuccess implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.NEW_PRODUCT_SUCCESS;
  constructor(public payload: any){}
}

export class NewProductActionError implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.NEW_PRODUCT_ERROR;
  constructor(public payload: String){}
}

/* Create product Action*/
export class CreateProductAction implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.CREATE_PRODUCT;
  constructor(public payload: Product){}
}

export class CreateProductActionSuccess implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.CREATE_PRODUCT_SUCCESS;
  constructor(public payload: Product){}
}

export class CreateProductActionError implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.CREATE_PRODUCT_ERROR;
  constructor(public payload: string){}
}

/* Edit Product action */

export class EditProductAction implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.EDIT_PRODUCT
  constructor(public payload: number){}
}

export class EditProductActionSuccess implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.EDIT_PRODUCT_SUCCESS;
  constructor(public payload: Product){}
}

export class EditProductActionError implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.EDIT_PRODUCT_ERROR;
  constructor(public payload: string){}
}


/* Upadte Product action */

export class UpdateProductAction implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.UPDATE_PRODUCT
  constructor(public payload: Product){}
}

export class UpdateProductActionSuccess implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.UPDATE_PRODUCT_SUCCESS;
  constructor(public payload: Product){}
}

export class UpdateProductActionError implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.UPDATE_PRODUCT_ERROR;
  constructor(public payload: string){}
}




export type ProductsActions = GetAllProductsAction | GetAllProductsActionError | GetAllProductsActionSuccess |
                              GetSelectedProductsAction | GetSelectedProductsActionError | GetSelectedProductsActionSuccess |
                              GetUnSelectedProductsAction | GetUnSelectedProductsActionError | GetUnSelectedProductsActionSuccess |
                              SearchProductsAction | SearchProductsActionError | SearchProductsActionSuccess |
                              SelectProductsAction | SelectProductsActionError | SelectProductsActionSuccess |
                              DeleteProductAction | DeleteProductActionSuccess | DeleteProductActionError |
                              NewProductAction | NewProductActionSuccess | NewProductActionError |
                              CreateProductAction | CreateProductActionSuccess | CreateProductActionError |
                              EditProductAction | EditProductActionSuccess | EditProductActionError |
                              UpdateProductAction | UpdateProductActionSuccess | UpdateProductActionError ;
