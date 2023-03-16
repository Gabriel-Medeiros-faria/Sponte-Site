import styled from "styled-components";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <SiteName>
          <p>Sponte</p>
        </SiteName>
        <InputProduct>
          <input placeholder="Procure pelo produto"></input>
        </InputProduct>
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
  position: fixed;
  top: 0;
  left: 0;
`;
const SiteName = styled.div`
  font-size: 40px;
  color: white;
  font-weight: 700;
  margin-left: 30px;
  animation: float 2s ease-in-out infinite;
  cursor: pointer;
  @keyframes float{
    0%,100%{
        transform: translateY(0);
    }
    50%{
        transform: translateY(-10px);
    }
  };
`;

const InputProduct = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  input {
    width: 50%;
    height: 45px;
    background: #ffffff;
    border-radius: 8px;
  }
`;
