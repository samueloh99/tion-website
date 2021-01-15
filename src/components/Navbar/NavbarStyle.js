import styled from 'styled-components';
import { Container } from '../../styles/GlobalStyles';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
  background: white;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0px 0px 16px 0px #ccc;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
`;

export const NavLogo = styled(Link)`
  color: black;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: grey;
  }
`;

export const NavItem = styled.li`
  height: 80px;

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #4f25e8;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  &:hover {
    color: #36ddd4;
    transition: all 0.3s ease;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    color: white;

    &:hover {
      color: #4f25e8;
      transition: all 0.3s ease;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
`;

export const ButtonTransparent = styled.button`
  border-radius: 50px;
  border: 2px solid #4f25e8;
  color: #4f25e8;
  font-weight: bold;
  background: white;
  padding: 3px;
  width: 140px;
  outline: none;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #36ddd4;
    border: 2px solid #36ddd4;
    color: white;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 10px 20px;
  }
`;

export const ButtonHighlight = styled.button`
  border-radius: 50px;
  border: 2px solid #4f25e8;
  color: white;
  font-weight: bold;
  background: #4f25e8;
  padding: 3px;
  width: 140px;
  outline: none;
  white-space: nowrap;

  &:hover {
    transition: all 0.3s ease-out;
    background: #36ddd4;
    color: white;
    border: 2px solid #36ddd4;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 10px 20px;
  }
`;
