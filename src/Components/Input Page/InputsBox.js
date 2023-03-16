import styled from "styled-components";

export default function InputBox() {
  return (
    <>
      <InputBoxContainer>
        <Title>
          Adicione um produto
        </Title>
        <form>
          <input placeholder="Nome do produto"></input>
          <input placeholder="Nome do produto"></input>
          <input placeholder="Nome do produto"></input>
          <input placeholder="Nome do produto"></input>
          <input placeholder="Nome do produto"></input>
          <input placeholder="Nome do produto"></input>
          <input placeholder="Nome do produto"></input>
        </form>
      </InputBoxContainer>
    </>
  );
}

const InputBoxContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  input {
    margin-bottom: 10px;
    padding: 20px;
    border-radius: 5px;
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
`