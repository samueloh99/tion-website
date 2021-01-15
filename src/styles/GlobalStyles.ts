import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box
  }
  *,button , input{
    border:0;
    background:none;
    font-family:---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`;

export const Container = styled.div`
  z-index: -1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  } ;
`;

export const ButtonColorful = styled.button`
  border-radius: 50px;
  border: none;
  color: white;
  font-weight: bold;
  background: #4f25e8;
  padding: 10px 20px;
  outline: none;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #36ddd4;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 10px 20px;
  }
`;
export default GlobalStyle;
