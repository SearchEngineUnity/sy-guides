import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import BlockContent from './block-contents/SeuLPSerializer';

const Background = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 991px;
  padding-top: 120px;
  padding-bottom: 120px;
  margin: auto;

  @media (max-width: 991px) {
    background-image: none;
    padding-top: 2rem;
    padding-bottom: 1rem;
    width: auto;
  }
`;

const StyledJumbo = styled(Jumbotron)`
  background-color: ${(props) => props.color};
  color: white;
  padding: 0px;
  margin-bottom: 4rem;
`;

const PreH1 = styled.h1`
  white-space: pre-wrap;
  text-decoration: underline;
  text-decoration-color: #0ba7b6;
`;

function Hero({ heroText, title, imageURL, id, backgroundColor }) {
  return (
    <StyledJumbo fluid key={id} as="section" color={backgroundColor}>
      <Background image={imageURL}>
        <Container>
          <Row>
            <Col className="mx-auto" xl={9} lg={8}>
              <PreH1>{title.replace(/\\n/g, '\n')}</PreH1>
              {heroText && <BlockContent blocks={heroText} />}
            </Col>
          </Row>
        </Container>
      </Background>
    </StyledJumbo>
  );
}
export default Hero;
