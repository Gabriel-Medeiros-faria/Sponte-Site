import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { ProductContext } from "../../Context/Products";

export default function InputBox() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [length, setLength] = useState(0);
  const [weight, setWeight] = useState(0);
  const [value, setValue] = useState(0);
  const [image, setImage] = useState(0);
  const [category, setCategory] = useState("");
  const {setLoadingProducts} = useContext(ProductContext)
  const body = {
    title,
    description,
    measure: {
      height,
      width,
      length,
    },
    weight,
    value,
    image,
    category,
  };

  function addProduct() {
    axios
      .post("http://localhost:1234/Products", body)
      .then((resp) => {
        console.log(resp)
        setLoadingProducts(true)
      })
      .catch((err) => console.log(err));
      navigate("/")
  }

  return (
    <>
      <InputBoxContainer>
        <Title>Adicione um produto</Title>
        <form onSubmit={() => addProduct()}>
          <input
            placeholder="Nome do produto"
            required
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <input
            placeholder="Descrição do produto"
            required
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          ></input>
          <input
            placeholder="Altura do produto"
            required
            type="number"
            onChange={(e) => setHeight(e.target.value)}
          ></input>
          <input
            placeholder="Largura do produto"
            required
            type="number"
            onChange={(e) => setWidth(e.target.value)}
          ></input>
          <input
            placeholder="Comprimento do produto"
            required
            type="number"
            onChange={(e) => setLength(e.target.value)}
          ></input>
          <input
            placeholder="Peso do produto"
            required
            type="number"
            onChange={(e) => setWeight(e.target.value)}
          ></input>
          <input
            placeholder="Valor do produto"
            required
            type="number"
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <input
            placeholder="Foto do produto"
            required
            type="text"
            onChange={(e) => setImage(e.target.value)}
          ></input>
          <input
            placeholder="Categoria do produto"
            required
            type="text"
            onChange={(e) => setCategory(e.target.value)}
          ></input>
          <button>Adicionar produto</button>
        </form>
      </InputBoxContainer>
    </>
  );
}

const InputBoxContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }
  input {
    margin-bottom: 10px;
    padding: 20px;
    border-radius: 5px;
    font-size: 20px;
  }
  button {
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
    border: none;
    font-size: 20px;
  }
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  color: white;
  font-size: 40px;
  font-weight: 550;
  margin-bottom: 10px;
`;
