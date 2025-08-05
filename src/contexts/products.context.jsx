import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data.js";
import {
  getCollectionAndDocuments,
} from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCollectionAndDocuments();
      console.log(categoryMap);
    };

    getCategoryMap()
    
  }, []);

  return (
    <div>
      <ProductsContext.Provider value={value}>
        {children}
      </ProductsContext.Provider>
    </div>
  );
};
