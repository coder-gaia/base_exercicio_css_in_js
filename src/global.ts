import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Lato, sans-serif;
  list-style: none;
  }

  :root {
    --cor-principal: #a7727d;
    --cor-secundaria: #f9f5e7;
  }

  body {
  padding-bottom: 120px;
}


`
export default GlobalStyle

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    .container {
      max-width: 80%;
    }
  }
`
