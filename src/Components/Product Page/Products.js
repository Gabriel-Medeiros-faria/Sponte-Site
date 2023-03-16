import styled from "styled-components"
import Product from "./Product"

export default function Products(){
    return(
        <>
            <ProductsContainer>
                <Product/>
            </ProductsContainer>
        </>
    )
}

const ProductsContainer = styled.div`
display: flex;
justify-content: center;
`