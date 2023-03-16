import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductProvider from "./Context/Products";
import GlobalStyle from "./Global/globalStyle";
import IndexInputPage from "./Pages/Input Page";
import IndexProductPage from "./Pages/Product Page";
import IndexMainPage from "./Pages/Products Page";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<IndexMainPage />} />
            <Route path="/addProduct" element={<IndexInputPage />} />
            <Route path="/Product/:id" element={<IndexProductPage />} />
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
