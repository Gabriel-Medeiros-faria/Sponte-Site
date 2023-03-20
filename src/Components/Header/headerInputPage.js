import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { ProductContext } from "../../Context/Products";

export default function HeaderInputPage() {
  const { setLoadingProducts, loadingProducts } = useContext(ProductContext);

  function DeleteProduct() {
    if (loadingProducts) {
      setLoadingProducts(false);
    }
    if (!loadingProducts) {
      setLoadingProducts(true);
    }
  }

  return (
    <>
      <HeaderContainer>
        <Link to={"/"}>
          <SiteName>
            <p onClick={() => DeleteProduct()}>Sponte</p>
          </SiteName>
        </Link>
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: #151515;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;
const SiteName = styled.div`
  font-size: 50px;
  color: white;
  font-weight: 900;
  animation: float 2s ease-in-out infinite;
  cursor: pointer;
  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  } ;
`;
