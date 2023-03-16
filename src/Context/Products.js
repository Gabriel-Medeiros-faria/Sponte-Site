import axios from "axios";
import React, {createContext, useEffect, useState} from "react";

export const ProductContext = createContext({})

function ProductProvider({children}){

    const [Products, setProducts] = useState([]);
    const [emptyProducts, setEmptyProducts] = useState([])
    const [loadingProducts, setLoadingProducts] = useState(false)
  useEffect(() => {
    axios
      .get("http://localhost:1234/Products")
      .then((resp) => {
        setProducts(resp.data);
        setEmptyProducts(resp.data);
      })
      .catch((err) => console.log(err));
  }, [loadingProducts]);

    return(
        <ProductContext.Provider value={{Products, emptyProducts, setProducts, setEmptyProducts, setLoadingProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider