import { useContext } from "react";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import MessageNotProduct from "../../Components/Product Page/MessageNotProduct";
import ProductsList from "../../Components/Product Page/Products";
import { ProductContext } from "../../Context/Products";

export default function IndexMainPage() {
  const { Products } = useContext(ProductContext);
  //
  return (
    <>
      <IndexMainPageContainer>
        <Header />
        {Products.length === 0 ? <MessageNotProduct /> : <ProductsList />}
      </IndexMainPageContainer>
    </>
  );
}

const IndexMainPageContainer = styled.div`
width: 100%;
`;
