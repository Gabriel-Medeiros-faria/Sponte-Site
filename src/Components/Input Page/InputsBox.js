import axios from "axios";
import dayjs from "dayjs";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { ProductContext } from "../../Context/Products";
import { HiArrowUturnLeft } from "react-icons/hi2";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage} from "formik";

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
  const { setLoadingProducts } = useContext(ProductContext);
  const barCode = Math.floor(Math.random() * 999999999999);
  const toDay = dayjs().format("DD/MM/YYYY");

  const initialValues = {
    name: "",
    description: "",
    height: "",
    width: "",
    length: "",
    weight: "",
    value: "",
    image: "",
    category: ""
  };

  const schema = Yup.object().shape({
    name: Yup.string().min(3, 'Precisa ter no mínimo três letras').required('Esse campo é obrigatório'),
    description: Yup.string().min(3, 'Precisa ter no mínimo três letras').required('Esse campo é obrigatório'),
    height: Yup.number().required('Esse campo é obrigatório'),
    width: Yup.number().required('Esse campo é obrigatório'),
    length: Yup.number().required('Esse campo é obrigatório'),
    weight: Yup.number().required('Esse campo é obrigatório'),
    value: Yup.number().required('Esse campo é obrigatório'),
    image: Yup.string().min(3, 'Precisa ter no mínimo três letras').required('Esse campo é obrigatório'),
    category: Yup.string().min(3, 'Precisa ter no mínimo três letras').required('Esse campo é obrigatório'),
  });

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

  const renderErrorMessage = (message) => (
    <p style={{ color: 'red' }}>{message}</p>
  );

  function addProduct() {
    axios
      .post("http://localhost:1234/Products", body)
      .then((resp) => {
        console.log(resp);
        setLoadingProducts(true);
      })
      .catch((err) => console.log(err));
    navigate("/");
  }

  return (
    <>
      <InputBoxContainer>
        <HiArrowUturnLeft className="arrowBack" onClick={() => navigate("/")} />
        <Title>Adicione um produto</Title>
        <Formik initialValues={initialValues} validationSchema={schema} onSubmit={addProduct}>
          {(formik) => (
            <Form>
              <Field
                placeholder="Nome do produto"
                name="name"
                onChange={(event) => {
                  formik.handleChange(event);
                  setTitle(event.target.value);
                }}
              />
              <ErrorMessage name="name" render={renderErrorMessage}/>
              <Field
                placeholder="Descrição do produto"
                name="description"
                onChange={(event) => {
                  formik.handleChange(event);
                  setDescription(event.target.value);
                }}
              />
              <ErrorMessage name="description" render={renderErrorMessage}/>
              <Field
                placeholder="Altura do produto"
                name="height"
                type="number"
                onChange={(event) => {
                  formik.handleChange(event);
                  setHeight(event.target.value);
                }}
              />
              <ErrorMessage name="height" render={renderErrorMessage}/>
              <Field
                placeholder="Largura do produto"
                name="width"
                type="number"
                onChange={(event) => {
                  formik.handleChange(event);
                  setWidth(event.target.value);
                }}
              />
              <ErrorMessage name="width" render={renderErrorMessage}/>
              <Field
                placeholder="Comprimento do produto"
                name="length"
                type="number"
                onChange={(event) => {
                  formik.handleChange(event);
                  setLength(event.target.value);
                }}
              />
              <ErrorMessage name="length" render={renderErrorMessage}/>
              <Field
                placeholder="Peso do produto"
                name="weight"
                type="number"
                onChange={(event) => {
                  formik.handleChange(event);
                  setWeight(event.target.value);
                }}
              />
              <ErrorMessage name="weight" render={renderErrorMessage}/>
              <Field
                placeholder="Valor do produto"
                name="value"
                type="number"
                onChange={(event) => {
                  formik.handleChange(event);
                  setValue(event.target.value);
                }}
              />
              <ErrorMessage name="value" render={renderErrorMessage}/>
              <Field
                placeholder="Foto do produto"
                name="image"
                type="number"
                onChange={(event) => {
                  formik.handleChange(event);
                  setImage(event.target.value);
                }}
              />
              <ErrorMessage name="image" render={renderErrorMessage}/>
              <Field
                placeholder="Categoria do produto"
                name="category"
                onChange={(event) => {
                  formik.handleChange(event);
                  setCategory(event.target.value);
                }}
              />
              <ErrorMessage name="category" render={renderErrorMessage}/>
              <button type="submit">Adicionar produto</button>
            </Form>
          )}
        </Formik>
      </InputBoxContainer>
    </>
  );
}

const InputBoxContainer = styled.div`
  @media (max-width: 700px) {
    width: 100%;
  }
  Form {
    display: flex;
    flex-direction: column;
    @media (max-width: 700px) {
      width: 100%;
    }
  }
  input {
    padding: 20px;
    border-radius: 5px;
    font-size: 20px;
    @media (max-width: 700px) {
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
    @media (max-width: 700px) {
      width: 100%;
    }
  }
  .arrowBack {
    color: white;
    font-size: 25px;
    position: fixed;
    left: 100px;
    cursor: pointer;
    @media (max-width: 700px) {
      top: 30px;
      left: 30px;
      z-index: 1000000000;
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
