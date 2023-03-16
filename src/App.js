import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Global/globalStyle";
import IndexInputPage from "./Pages/Input Page";
import IndexMainPage from "./Pages/Products Page";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<IndexMainPage />} />
        <Route path="/addProduct" element={<IndexInputPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
