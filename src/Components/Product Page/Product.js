import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Product(props) {
  const { image, title, value, description, id } = props;
  const navigate = useNavigate()

  return (
    <>
      <ProductContainer onClick={()=> navigate(`/Product/${id}`)}>
        <Title>{title}</Title>
        <div>
        <img src={image} />
        <Description>
        {description}
        </Description>
        </div>
        <Value>R$ {value},00</Value>
      </ProductContainer>
    </>
  );
}

const ProductContainer = styled.div`
  width: 50%;
  height: 276px;
  background-color: #171717;
  padding: 10px;
  margin-bottom: 15px;
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  img {
    width: 200px;
    margin-right: 10px;
  }
  p {
    color: white;
  }
  div{
    display: flex;
  }
`;

const Title = styled.div`
  color: #ffffff;
  font-size: 30px;
  margin-bottom: 10px;
`;
const Value = styled.div`
  position: absolute;
  bottom: 15px;
  right: 20px;
  color: white;
`;
const Description = styled.div`
color: white;
`