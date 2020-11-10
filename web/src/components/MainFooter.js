import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaYoutubeSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
} from 'react-icons/fa';
import styled from 'styled-components';

const Footer = styled.footer`
  background-color: #5a5a5a;
  padding: 24px 0px;
`;

const Hyperlink = styled.a`
  &:link {
    color: white;
    font-size: 14px;
    font-weight: normal;
  }

  &:hover,
  &:focus,
  &:active,
  &.active {
    color: #fcce09;
    transform: translateY(-5px);
  }
`;

function MainFooter({ name, logo, brandName, social }) {
  console.log(social);
  return (
    <Footer>
      <Container
        className="px-0"
        style={{ fontSize: '14px', color: 'white', fontWeight: 'normal' }}
      >
        <Row>
          <Col className="col-auto mr-auto" style={{ display: 'flex', flexDirection: 'column' }}>
            <p>
              <Hyperlink href="/privacy-policy" target="_blank" rel="noreferrer">
                Privacy Policy
              </Hyperlink>
            </p>
            <p>
              <Hyperlink href="#contact-us">Contact</Hyperlink>
            </p>
            <div style={{ flex: '1 0 auto' }} />
            <div>
              {social.map(({ node }) => {
                switch (node.social) {
                  case 'facebook':
                    return (
                      <Hyperlink href={node.link} target="_blank" rel="noreferrer" key={node._id}>
                        <FaFacebookSquare
                          style={{ width: '20px', height: '20px', marginRight: '20px' }}
                        />
                      </Hyperlink>
                    );
                  case 'twitter':
                    return (
                      <Hyperlink href={node.link} target="_blank" rel="noreferrer" key={node._id}>
                        <FaTwitterSquare
                          style={{ width: '20px', height: '20px', marginRight: '20px' }}
                        />
                      </Hyperlink>
                    );
                  case 'linkedin':
                    return (
                      <Hyperlink href={node.link} target="_blank" rel="noreferrer" key={node._id}>
                        <FaLinkedin
                          style={{ width: '20px', height: '20px', marginRight: '20px' }}
                        />
                      </Hyperlink>
                    );
                  case 'instagram':
                    return (
                      <Hyperlink href={node.link} target="_blank" rel="noreferrer" key={node._id}>
                        <FaInstagramSquare
                          style={{ width: '20px', height: '20px', marginRight: '20px' }}
                        />
                      </Hyperlink>
                    );
                  case 'youtube':
                    return (
                      <Hyperlink href={node.link} target="_blank" rel="noreferrer" key={node._id}>
                        <FaYoutubeSquare
                          style={{ width: '20px', height: '20px', marginRight: '20px' }}
                        />
                      </Hyperlink>
                    );
                  default:
                    return <div>missing social</div>;
                }
              })}
            </div>
          </Col>
          <Col className="col-auto" style={{ fontSize: '12px' }}>
            <img
              src={logo}
              alt={brandName}
              loading="lazy"
              width="auto"
              height="32.5px"
              style={{ marginBottom: '14px' }}
            />
            <p style={{ marginBottom: '5px' }}>
              ©{' '}
              <Hyperlink href="https://techboombers.com" style={{ fontSize: '12px' }}>
                {name}
              </Hyperlink>{' '}
              {new Date().getFullYear()}
            </p>
            <p style={{ marginBottom: '5px' }}>All rights reserved</p>
            <p style={{ marginBottom: '0' }}>Creative Commons - Share with attribution.</p>
          </Col>
        </Row>
      </Container>
    </Footer>
  );
}
export default MainFooter;
