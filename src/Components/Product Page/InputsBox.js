import styled from "styled-components";

export default function InputBox() {
  return (
    <>
      <InputBoxContainer>
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
  }
  input {
    margin-bottom: 10px;
    padding: 20px;
  }
  height: 100%;
  display: flex;
  justify-content: center;
`;
