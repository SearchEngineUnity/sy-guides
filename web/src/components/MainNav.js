import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import scrollToElement from 'scroll-to-element';
import styled from 'styled-components';

const BrandImg = styled.img`
  width: auto;
  height: 48px;
`;

const CustomNav = styled(Nav)`
  margin-left: auto;

  &:hover {
    @media screen and (max-width: 991px) {
      background-color: #d4d2d9;
    }
  }
`;

const StyledButton = styled(Button)`
  font-size: 18px;
  padding: 10.5px 32px;
  background-color: #f26b32;
  border: none;
  border-radius: 4px;
  transition: transform 0.5s ease;

  &:hover,
  &:focus {
    background-color: #ce470d;
    transform: translateY(-5px);
    box-shadow: 0px 3px 6px #00000029;
  }

  &.active,
  &:active {
    color: #ce470d !important;
    background-color: white !important;
    border: solid 2px #ce470d !important;
    box-shadow: 0px 3px 6px #00000029 !important;
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

function NavTypeA({ menu }) {
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

  console.log(menu);
  const navBrand = menu.filter((x) => x._type === 'navBrand')[0];
  const navMenu = menu.filter((x) => x._type !== 'navBrand');
  console.log(navMenu);

  return (
    <Container className="px-0">
      <CustomNavbar collapseOnSelect expand="xs" className="text-center">
        <Navbar.Brand className="my-3">
          <Link to="/" onClick={() => homeHandler()}>
            <BrandImg
              loading="eager"
              alt={navBrand.brand.title}
              src={navBrand.brand.logo.asset.url}
              className="d-inline-block"
            />
          </Link>
        </Navbar.Brand>
        {navMenu.map((item) => {
          switch (item._type) {
            case 'navJumpLink':
              return (
                <CustomNav key={item.link}>
                  <CustomA
                    href={`#${item.link}`}
                    onClick={() => jumpLinkOnClickHandler(`#${item.link}`)}
                    className="py-3"
                  >
                    {item.isButton ? <StyledButton>{item.title}</StyledButton> : item.title}
                  </CustomA>
                </CustomNav>
              );
            default:
              return <div>Menu item</div>;
          }
        })}
      </CustomNavbar>
    </Container>
  );
}

export default NavTypeA;
