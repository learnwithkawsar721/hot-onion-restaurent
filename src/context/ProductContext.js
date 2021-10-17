import React from "react";
import { createContext } from "react";
import useProductContext from "../hooks/useProductContext";
export const AddproductContext = createContext();
const ProductContext = ({ children }) => {
  const allProduct = useProductContext();
  return (
    <AddproductContext.Provider value={allProduct}>
      {children}
    </AddproductContext.Provider>
  );
};

export default ProductContext;
