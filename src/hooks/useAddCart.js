import { useContext } from "react";
import { AddproductContext } from "../context/AddProduct";

const useAddCart = () => {
  return useContext(AddproductContext);
};

export default useAddCart;
