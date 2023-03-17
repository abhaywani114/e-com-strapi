import {createContext, useReducer, useEffect} from "react";
import useCart from "../service/useCart"
export const AppContext = createContext();

export const AppAction = {
  ADD_CATEGORY: "ADD_CATEGORY",
  ADD_PRODUCTS: "ADD_PRODUCTS",
  ADD_CART: "ADD_CART",
  REMOVE_CART: "REMOVE_CART",
  UPDATE_CART: "UPDATE_CART",
  LOAD_LOCAL_STORAGE: "LOAD_LOCAL_STORAGE",
  RESET_CART:"RESET_CART"
};


const appReducer = (state, action) => {
  const {handleAddCart, handleRemoveCart, handleUpdateCart} = useCart(state);
  if (action.action == AppAction.ADD_CATEGORY)
    return {...state, categories: action.payload};
  else if (action.action == AppAction.ADD_PRODUCTS)
    return {...state, products: action.payload};
  else if (action.action == AppAction.ADD_CART)
    return handleAddCart(action.payload);
  else if (action.action == AppAction.REMOVE_CART)
    return handleRemoveCart(action.payload);
  else if (action.action == AppAction.UPDATE_CART)
    return handleUpdateCart(action.payload);
  else if (action.action == AppAction.LOAD_LOCAL_STORAGE) 
    return {...state, ...action.payload}
  else if (action.action == AppAction.RESET_CART)
    return {...state, cartSubTotal: 0, cartItems: []}
  else
    throw new Error(`Unhanled type action: ${action.action}`);
}

const saveState = (state, action) => {
  const newState = appReducer(state, action);
  localStorage.setItem("cartDetails", JSON.stringify({cartItems: newState.cartItems, cartSubTotal: newState.cartSubTotal}));
  return newState
}

const AppProvider = ({children}) => {
  const initState  = {categories:[], products: [], cartItems: [], cartSubTotal: 0};

  const [state, dispatch] = useReducer(saveState, initState);
  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children} 
    </AppContext.Provider>  
  )
}

export default AppProvider;
  
