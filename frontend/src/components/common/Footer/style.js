import styled from "styled-components";
import { devices } from "assets/style/responsive";
const StyleContainer = styled.div`
  padding: 64px 8px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media ${devices.desktop} {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 50px;
  }
  @media ${devices.ipad} {
    padding: 48px 0px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devices.iphone} {
    padding: 48px 0px;
    grid-template-columns: repeat(1, 1fr);
  }
  ul {
    margin: 0;
    padding: 0;
    li + li {
      margin-top: 15px;
      @media ${devices.ipad} {
        font-size: 16px;
      }
    }
  }
  p + p {
    margin: 15px 0px;
  }
  input {
    outline: none;
    border: 0;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
    margin-right: 2%;
    :focus {
      border: 1px solid #99f1cd;
    }
  }
  img {
    width: 24px;
    height: 24px;
  }
  a + a {
    margin-left: 10px;
  }
`;

const StyleForm = styled.div`
  display: flex;
  button {
    height: 45px;
  }
  input {
    width: 100%;
  }
`;
const StyleBtn = styled.button`
  height: 45px;
  background-color: #00dc82;
  border: none;
  border-radius: 5px;
  color: #000;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  outline: none;
  padding: 10px 16px;
`;
const StyleLink = styled.a`
  font-size: 16px;
  color: #fff;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
export { StyleContainer, StyleForm, StyleBtn, StyleLink };
