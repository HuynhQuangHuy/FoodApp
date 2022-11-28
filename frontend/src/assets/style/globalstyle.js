import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { devices } from "assets/style/responsive";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #fff;
    box-sizing: border-box;
  }
  h2,h1,h3{font-family: DM Serif Display;}
  *{
    box-sizing: border-box;
  }
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #ffffff;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: rgb(216, 215, 215);
    border-radius: 50px;
  }
`;

export const StyleTitle = styled.h1`
  margin: 0;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #b2cccc;
  @media ${devices.ipad} {
    font-size: 1.125rem;
    line-height: 1.5rem;
  }
  @media ${devices.iphone} {
    font-size: 1.125rem;
    line-height: 1.5rem;
  }
`;
export const StyleDescript = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 2.5rem;
  margin-bottom: 0.5rem;
  @media ${devices.iphone} {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
  b {
    color: rgba(0, 220, 130, 1);
  }
`;
export const StyleContents = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin: 0;
  margin-bottom: 3rem;
  @media ${devices.iphone} {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;
export const StyleWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 9rem;
  padding-bottom: 13rem;
  position: relative;
  z-index: 10;
`;
export default GlobalStyle;
