import styled from "styled-components";
import HeaderInputPage from "../../Components/Header/headerInputPage";
import ProductPage from "../../Components/Product Page/ProductPage";

export default function IndexProductPage() {
  return (
    <>
      <IndexProductPageContainer>
        <HeaderInputPage />
        <ProductPage />
      </IndexProductPageContainer>
    </>
  );
}

const IndexProductPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
