import { useContext } from "react";
import { AddproductContext } from "../context/ProductContext";

const useProductConsumer = () => {
  return useContext(AddproductContext);
};

export default useProductConsumer;
