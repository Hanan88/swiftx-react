import styled, { createGlobalStyle } from "styled-components";
// import styled from 'styled-components';

export default createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Open Sans', sans-serif;
   }
   #root{
       margin:0 auto;
   }
   a{
        text-decoration: none;
        color: #1D1F22
    }
    a:hover{
        color: #52D67A;
        border-bottom: 1px solid #52D67A;
        text-decoration: none;

    }
    
    .shoppingCart{
        top: 70%;
        right: 5%;
    }`;

const Container = styled.div`
  width: 1500px;
  margin: 0 auto;
`;

export { Container };
