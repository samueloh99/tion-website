import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  ButtonTransparent,
  ButtonHighlight,
  NavBtnLink,
} from './NavbarStyle';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: '#4f25e8' }}>
        <Nav className="Nav">
          <NavbarContainer className="NavbarContainerRight">
            <NavLogo to="/" className="NavLogo">
              <NavIcon className="NavIcon" />
              tion
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/partners">Parceiros</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/sign-up">
                    <ButtonHighlight>Baixe grátis</ButtonHighlight>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/sign-up">
                    <ButtonHighlight onClick={closeMobileMenu}>
                      Baixe grátis
                    </ButtonHighlight>
                  </NavBtnLink>
                )}
              </NavItemBtn>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/sign-up">
                    <ButtonTransparent>Login</ButtonTransparent>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/sign-up">
                    <ButtonTransparent onClick={closeMobileMenu}>
                      Login
                    </ButtonTransparent>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
