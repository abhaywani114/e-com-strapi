import {useEffect} from "react"
export default function useCart(state) {
    let cartItems = [...state.cartItems];

  const calculateSubtotal = () => {
      let subTotal = 0
      cartItems.map( p => subTotal += p.attributes.quantity * p.attributes.price);
      return subTotal;
    }

    const handleAddCart = ({product, quantity}) => {
      let index = cartItems.findIndex( p => p.id === product.id);
      if (index !== -1) {

        cartItems[index].attributes.quantity += quantity;
        
        if (cartItems[index].attributes.quantity < 1) 
          cartItems[index].attributes.quantity = 1;

      } else {
        product.attributes.quantity = quantity;
        cartItems = [...cartItems, product]
      }

      const cartSubTotal = calculateSubtotal();
      return {...state, cartSubTotal, cartItems};
    }

    const handleRemoveCart = ({product}) => {
      cartItems = cartItems.filter( p => p.id !== product.id);

      const cartSubTotal = calculateSubtotal();
      return {...state, cartSubTotal , cartItems}
    }

    const handleUpdateCart = ({product, type}) => {
        if (type == "dec")
          return handleAddCart({product, quantity: -1})
        else if (type == "inc")
          return handleAddCart({product, quantity: +1})
    }
        

    return {
      handleAddCart,
      handleRemoveCart,
      handleUpdateCart
    }
}
