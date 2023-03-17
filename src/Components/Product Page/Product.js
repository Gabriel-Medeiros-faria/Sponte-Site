import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import axios from "axios";
import { useContext } from "react";
import { ProductContext } from "../../Context/Products";

export default function Product(props) {
  const { image, title, value, description, id } = props;
  const navigate = useNavigate();
  const { setLoadingProducts, loadingProducts } = useContext(ProductContext);

  function DeleteProduct() {
    axios
      .delete(`http://localhost:1234/Products/${id}`)
      .then((resp) => {
        console.log(resp);
        if (loadingProducts) {
          setLoadingProducts(false);
        }
        if (!loadingProducts) {
          setLoadingProducts(true);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <ProductContainer>
        <ImageAndDescription  onClick={() => navigate(`/Product/${id}`)}>
          <div>
            <img src={image} />
            <TitleAndDescription>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </TitleAndDescription>
          </div>
          <Value>R$ {value},00</Value>
        </ImageAndDescription>
          <BsTrash className="Trash" onClick={() => DeleteProduct()} />
      </ProductContainer>
    </>
  );
}

const ProductContainer = styled.div`
  width: 50%;
  height: 276px;
  background-color: #171717;
  padding: 20px;
  margin-bottom: 15px;
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  img {
    width: 200px;
    height: 200px;
    margin-right: 10px;
    border-radius: 5px;
  }
  p {
    color: white;
  }
  div {
    display: flex;
  }
  .Trash {
    color: white;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10000;
  }
`;

const Title = styled.div`
  color: #ffffff;
  font-size: 25px;
  margin-bottom: 10px;
`;
const Value = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: white;
`;
const Description = styled.div`
  color: #b7b7b7;
`;

const ImageAndDescription = styled.div``;

const TitleAndDescription = styled.div`
  display: flex;
  flex-direction: column;
`;
