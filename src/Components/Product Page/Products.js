import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductContext } from "../../Context/Products";
import Product from "./Product";

export default function Products() {
  const { Products, setLoadingProducts } = useContext(ProductContext);
  return (
    <>
      <ProductsContainer>
        <Link to={"/addProduct"}>
          <AddProduct onClick={()=> setLoadingProducts(false)}>Adicionar produto</AddProduct>
        </Link>
        {Products.map((obj) => {
          return (
            <>
              <Product
                image={obj.image}
                title={obj.title}
                value={obj.value}
                description={obj.description}
                id={obj.id}
              />
            </>
          );
        })}
      </ProductsContainer>
    </>
  );
}

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddProduct = styled.div`
  background-color: #1877f2;
  color: white;
  width: 500px;
  height: 40px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 15px;
  cursor: pointer;
`;
