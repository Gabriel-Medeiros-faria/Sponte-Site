import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductContext } from "../../Context/Products";

export default function MessageNotProduct() {
  const { setLoadingProducts } = useContext(ProductContext);

  return (
    <>
      <MessageNotProductContainer>
      <Link to={"/addProduct"}>
          <AddProduct onClick={()=> setLoadingProducts(false)}>Adicionar produto</AddProduct>
        </Link>
        <p>Você ainda não cadastrou nenhum produto</p>
      </MessageNotProductContainer>
    </>
  );
}

const MessageNotProductContainer = styled.div`
  font-size: 30px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  font-size: 20px;
  cursor: pointer;
`;