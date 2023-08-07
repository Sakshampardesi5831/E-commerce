import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
export const Context = createContext();

const AppContext = ({ children }) => {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState([]);
  const [cartSubTotal, setCartSubtotal] = useState(0);
  useEffect(() => {
    let count=0;
    let subtotal=0;
    cartItems.map((item)=>count+=item.attributes.quantity)
    cartItems.map((item)=>subtotal+=item.attributes.price*item.attributes.quantity);
    setCartSubtotal(subtotal);
    setCartCount(count);
  }, [cartItems]);

  const handleAddtoCart = (product, quantity) => {
     let item =[...cartItems];
     let index=item.findIndex((p)=>p.id===product.id);
     if(index!==-1){
        item[index].attributes.quantity+=quantity;
     }else{
        product.attributes.quantity=quantity;
        item=[...item,product];
     }
     setCartItems(item);
  };
  const handleRemovefromCart = (product) => {
    let item =[...cartItems];
    item=item.filter((p)=>p.id!==product.id);
    setCartItems(item);
  };
  const handleCartProductQuantity = (type, product) => {
    let item =[...cartItems];
    let index=item.findIndex((p)=>p.id===product.id);
    if(type==="inc"){
      item[index].attributes.quantity+=1;
    }else if(type==="dec"){
       if(item[index].attributes.quantity===1)return;
       item[index].attributes.quantity-=1;
    }
    setCartItems(item);
  };

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        cartSubTotal,
        setCartSubtotal,
        handleAddtoCart,
        handleRemovefromCart,
        handleCartProductQuantity
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
