import axios from "axios";
import dayjs from "dayjs";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { ProductContext } from "../../Context/Products";
import { HiArrowUturnLeft } from "react-icons/hi2";
import * as Yup from "yup"
import { Formik, Form } from "formik";

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
  const barCode = (Math.floor(Math.random() * 999999999999))
  const toDay = dayjs().format('DD/MM/YYYY')
  const body = {
    title,
    description,
      height,
      width,
      length,
    weight,
    barCode,
    dateAcquisition: toDay,
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
      <HiArrowUturnLeft className="arrowBack" onClick={()=> navigate("/")}/>
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

@media (max-width:700px){
    width: 100%;
}
  form {
    display: flex;
    flex-direction: column;
    @media (max-width:700px){
    width: 100%;
}
  }
  input {
    margin-bottom: 10px;
    padding: 20px;
    border-radius: 5px;
    font-size: 20px;
    @media (max-width:700px){
    width: 100%;
}
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
    @media (max-width:700px){
    width: 100%;
}
  }
  .arrowBack{
    color: white;
    font-size: 25px ;
    position: fixed;
    left: 100px;
    cursor: pointer;
    @media (max-width:700px){
    top: 30px;
    left: 30px;
    z-index:1000000000;
}
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
