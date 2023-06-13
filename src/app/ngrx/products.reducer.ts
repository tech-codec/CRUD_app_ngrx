import {Product} from "../models/product.models";
import {GetAllProductsAction, ProductsActions, ProductsActionsTypes} from "./products.actions";
import {Action} from "@ngrx/store";

export enum ProductsStateEnum {
  LOADING = 'Loading',
  LOADED = 'Success',
  ERROR = 'Error',
  INITIAL = 'Initial',
  NEW = 'New',
  EDIT = 'Edit',
  UPDATED = 'Update'
}

export interface ProductsState{
  products : Product[],
  errorMessage : string,
  dataState: ProductsStateEnum,
  currentProduct: Product | null,
  currentAction: ProductsActions
}

const initState:ProductsState = {
  products : [],
  errorMessage: "",
  dataState: ProductsStateEnum.INITIAL,
  currentProduct: null,
  currentAction: new GetAllProductsAction({})
}

export function productReducer(state: ProductsState = initState, action: Action): ProductsState{
  switch (action.type) {
    /* Get all product */
    case ProductsActionsTypes.GET_ALL_PRODUCTS:
      return {...state, dataState : ProductsStateEnum.LOADING, currentAction: <ProductsActions>action}
    case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
      return  {...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload, currentAction: <ProductsActions>action}
    case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action}

    /* Get selected product*/
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: <ProductsActions>action}
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload, currentAction: <ProductsActions>action}
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action}

    /* Get Unselected product*/
    case ProductsActionsTypes.GET_UNSELECTED_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: <ProductsActions>action}
    case ProductsActionsTypes.GET_UNSELECTED_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload, currentAction: <ProductsActions>action}
    case ProductsActionsTypes.GET_UNSELECTED_PRODUCTS_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action}

    /* Search product */
    case ProductsActionsTypes.SEARCH_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: <ProductsActions>action}
    case ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload, currentAction: <ProductsActions>action}
    case ProductsActionsTypes.SEARCH_PRODUCTS_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action}

    /* Select product */
    case ProductsActionsTypes.SELECT_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: <ProductsActions>action}
    case ProductsActionsTypes.SELECT_PRODUCT_SUCCESS:
      let product : Product = (<ProductsActions>action).payload
      let listProducts= [...state.products]
      let data: Product[] = listProducts.map(p=> p.id == product.id? product : p)
      return {...state, dataState: ProductsStateEnum.LOADED, products: data, currentAction: <ProductsActions>action}
    case ProductsActionsTypes.SELECT_PRODUCT_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action}

    /* Delete product */
    case ProductsActionsTypes.DELETE_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: <ProductsActions>action}
    case ProductsActionsTypes.DELETE_PRODUCT_SUCCESS:
      let p : Product = (<ProductsActions>action).payload
      let index = state.products.indexOf(p)
      let productslist= [...state.products]
      productslist.splice(index,1)
      return {...state, dataState: ProductsStateEnum.LOADED, products: productslist, currentAction: <ProductsActions>action}
    case ProductsActionsTypes.SELECT_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action}

    /* New product */
    case ProductsActionsTypes.New_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: <ProductsActions>action}
    case ProductsActionsTypes.NEW_PRODUCT_SUCCESS:
      return {...state, dataState: ProductsStateEnum.NEW, currentAction: <ProductsActions>action}
    case ProductsActionsTypes.NEW_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action}

    /* Creaate product */
    case ProductsActionsTypes.CREATE_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: <ProductsActions>action}
    case ProductsActionsTypes.CREATE_PRODUCT_SUCCESS:
      let productCreate:Product = (<ProductsActions>action).payload
      let listProducstate = [...state.products]
      listProducstate.push(productCreate)
      return {...state, dataState: ProductsStateEnum.LOADED, products: listProducstate, currentAction: <ProductsActions>action}
    case ProductsActionsTypes.CREATE_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action}

    /* Edit product */
    case ProductsActionsTypes.EDIT_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: <ProductsActions>action}
    case ProductsActionsTypes.EDIT_PRODUCT_SUCCESS:
      let editProduct:Product = (<ProductsActions>action).payload
      return {...state, dataState: ProductsStateEnum.EDIT, currentProduct: editProduct, currentAction: <ProductsActions>action }
    case ProductsActionsTypes.EDIT_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action}

    /* Upadte product */
    case ProductsActionsTypes.UPDATE_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: <ProductsActions>action}
    case ProductsActionsTypes.UPDATE_PRODUCT_SUCCESS:
      let updateProduct:Product = (<ProductsActions>action).payload
      let updateListProduct = state.products.map((p)=> updateProduct.id == p.id? updateProduct: p)
      return {...state, dataState: ProductsStateEnum.UPDATED, products: updateListProduct, currentAction: <ProductsActions>action }
    case ProductsActionsTypes.UPDATE_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action}

    default : return {...state}
  }

}
