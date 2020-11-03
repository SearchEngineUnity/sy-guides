import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import scrollToElement from 'scroll-to-element';
import styled from 'styled-components';

const GreyContainer = styled(Container)`
  background-color: #f2f2f2;
  display: flex;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0px 4px 6px #00000029;
  overflow: hidden;
`;

const BrandImg = styled.img`
  width: auto;
  height: 1.6rem;
`;

const CustomNav = styled(Nav)`
  margin-left: auto;
  color: #2c2142;

  @media screen and (max-width: 991px) {
    background: white;
    overflow: hidden;
    margin-left: -140.5px;
    padding-left: 140.5px;
    margin-right: -140.5px;
    padding-right: 140.5px;
    border-bottom: 2px solid #f2f2f2;
  }

  @media screen and (max-width: 575px) {
    background: white;
    overflow: hidden;
    margin-left: -81px;
    padding-left: 81px;
    margin-right: -81px;
    padding-right: 81px;
  }

  &:hover {
    @media screen and (max-width: 991px) {
      background-color: #d4d2d9;
    }
  }
`;

const StyledButton = styled(Button)`
  padding: 0.5rem 1rem;
  background-color: #0a7b86;
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: #086068;
  }

  &:focus {
    background-color: #086068;
    box-shadow: none;
  }

  &.active,
  &:active {
    background-color: #086068 !important;
    box-shadow: none !important;
  }
`;

const CustomBurger = styled(Navbar.Toggle)`
  border: none;
  outline: none;
  color: #2c2142 !important;
  padding: 0;
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`;

const CustomNavbar = styled(Navbar)`
  padding: 0 15px;
`;

const CustomCollapse = styled(Navbar.Collapse)`
  @media screen and (max-width: 991px) {
    overflow: hidden;
    margin-left: -140.5px;
    padding-left: 140.5px;
    margin-right: -140.5px;
    padding-right: 140.5px;
  }

  @media screen and (max-width: 575px) {
    background: white;
    overflow: hidden;
    margin-left: -81px;
    padding-left: 81px;
    margin-right: -81px;
    padding-right: 81px;
  }
`;

const CustomA = styled.a`
  @media screen and (max-width: 991px) {
    overflow: hidden;
    margin-left: -140.5px;
    padding-left: 140.5px;
    margin-right: -140.5px;
    padding-right: 140.5px;
  }

  @media screen and (max-width: 575px) {
    background: white;
    overflow: hidden;
    margin-left: -81px;
    padding-left: 81px;
    margin-right: -81px;
    padding-right: 81px;
  }
`;

function NavTypeA({ name, logo, menu }) {
  const [open, setOpen] = useState(false);

  const jumpLinkOnClickHandler = (id) => {
    setOpen(false);
    // scrollToElement(id);
    scrollToElement(id, {
      duration: 1000,
    });
  };

  const homeHandler = () => {
    setOpen(false);
  };

  return (
    <GreyContainer fluid className="px-0">
      <Container className="align-self-center px-0">
        <CustomNavbar collapseOnSelect expand="lg" className="text-center">
          <Navbar.Brand className="my-3">
            <Link to="/" onClick={() => homeHandler()}>
              <BrandImg loading="eager" alt={name} src={logo} className="d-inline-block" />
            </Link>
          </Navbar.Brand>
          {/* still need to figure out toggle icon swap */}
          <CustomBurger aria-controls="basic-navbar-nav" onClick={() => setOpen(!open)}>
            {open ? <i className="fas fa-times fa-2x" /> : <i className="fas fa-bars fa-2x" />}
          </CustomBurger>
          <CustomCollapse id="basic-navbar-nav" in={open}>
            {menu.map((item) => (
              <CustomNav key={item.link}>
                <CustomA
                  href={`#${item.link}`}
                  onClick={() => jumpLinkOnClickHandler(`#${item.link}`)}
                  className="py-3"
                >
                  {item.isButton ? <StyledButton>{item.title}</StyledButton> : item.title}
                </CustomA>
              </CustomNav>
            ))}
          </CustomCollapse>
        </CustomNavbar>
      </Container>
    </GreyContainer>
  );
}

export default NavTypeA;
