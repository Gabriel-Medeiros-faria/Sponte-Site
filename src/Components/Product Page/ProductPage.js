import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";

export default function ProductPage() {
  const { id } = useParams();
  const [Product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:1234/Products/${id}`)
      .then((resp) => {
        {
          console.log(resp);
        }
        setProduct(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ProductPageContainer>
        <ImageAndCaracter>
          <img src={Product.image}></img>
          <Caracter>
            <h1>{Product.title}</h1>
            <p>{Product.description}</p>
            <p className="Value">R${Product.value},00</p>
          </Caracter>
        </ImageAndCaracter>
        <InfosProduct>
          <h2>Informações do produto</h2>
          <ul>
            <li>
              Dimensões:{" "}
              <span>
                Altura <FiArrowRight /> {Product.height} cm
              </span>
              <span>
                Largura <FiArrowRight /> {Product.width} cm
              </span>
              <span>
                Comprimento <FiArrowRight /> {Product.length} cm
              </span>
            </li>
            <li>
              Peso <FiArrowRight /> {Product.weight} kg
            </li>
            <li>
              Data da aquisição <FiArrowRight /> {Product.dateAcquisition}
            </li>
            <li>
              Código de barras <FiArrowRight /> {Product.barCode}
            </li>
          </ul>
        </InfosProduct>
      </ProductPageContainer>
    </>
  );
}

const ProductPageContainer = styled.div`
  background-color: #171717;
  height: auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  @media (max-width:700px){
    width: 100%;
}
`;

const ImageAndCaracter = styled.div`
  display: flex;
  border-bottom: solid 1px white;
  padding: 50px;
  margin-bottom: 30px;
  width: 70%;
  @media (max-width:700px){
    width: 100%;
}
  img {
    width: 270px;
    height: 300px;
    border-radius: 5px;
    margin-right: 30px;
    @media (max-width:700px){
    width: 100%;
}
  }
`;
const Caracter = styled.div`
  position: relative;
  width: 400px;
  h1 {
    color: white;
    font-size: 30px;
  }
  p {
    color: #b7b7b7;
  }
  .Value {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const InfosProduct = styled.div`
  color: #b7b7b7;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  h2 {
    font-size: 20px;
    color: white;
    margin-bottom: 15px;
  }
  li {
    border-bottom: solid 1px #b7b7b7;
    padding: 10px 0;
  }
  span {
    border-left: solid 1px #b7b7b7;
    padding: 0px 10px;
  }
`;
