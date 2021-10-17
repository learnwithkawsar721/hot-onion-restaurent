import { useEffect, useState } from "react";
import { getStorageItem } from "../utilits/addToCart";

const useCart = (products = []) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (products.length) {
      const saveCart = getStorageItem();
      // console.log("apps useEffect", saveCart);
      const newCart = [];
      for (const id in saveCart) {
        const addproduct = products.find(
          (product) => product.id === parseInt(id),
        );
        if (addproduct) {
          const quantity = saveCart[id];
          addproduct.quantity = quantity;
          newCart.push(addproduct);
        }
      }
      setCart(newCart);
    }
  }, [products]);

  return [cart, setCart];
};

export default useCart;
