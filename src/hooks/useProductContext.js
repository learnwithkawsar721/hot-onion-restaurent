import { addCart, dicrement, remove } from "../utilits/addToCart";
import useCart from "./useCart";
import useProduct from "./useProduct";

const useProductContext = () => {
  const [products] = useProduct();
  const [cart, setCart] = useCart(products);

  const hendelAddToCart = (product) => {
    const existis = cart.find((pd) => pd.id === product.id);
    let newProduct = [];
    if (existis) {
      const rest = cart.filter((pd) => pd.id !== product.id);
      existis.quantity = existis.quantity + 1;
      newProduct = [...rest, existis];
    } else {
      product.quantity = 1;
      newProduct = [...cart, product];
    }
    // console.log(exist);
    setCart(newProduct);
    addCart(product.id);
  };

  //cart Quantity Increment
  const quntityIncrement = (id) => {
    const newproduct = [];
    cart.forEach((product) => {
      if (product.id === id) {
        product.quantity += 1;
      }
      newproduct.push(product);
    });
    setCart(newproduct);
    addCart(id);
  };
  // cart Qunatiry Dicriment
  const quntityDicrement = (id) => {
    const checkQuantity = cart.find((pd) => pd.id === id);
    if (checkQuantity.quantity <= 1) {
      return;
    } else {
      const newproduct = [];
      cart.forEach((product) => {
        if (product.id === id) {
          product.quantity -= 1;
        }
        if (product.quantity < 0) {
          return;
        }
        newproduct.push(product);
      });
      setCart(newproduct);
      dicrement(id);
    }
  };
  //cart Item remove
  const hendelRemove = (id) => {
    const removeItem = cart.filter((product) => product.id !== id);
    setCart(removeItem);
    remove(id);
  };

  return {
    cart,
    setCart,
    hendelAddToCart,
    products,
    quntityIncrement,
    quntityDicrement,
    hendelRemove,
  };
};

export default useProductContext;
