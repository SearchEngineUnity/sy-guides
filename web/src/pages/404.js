import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { navigate } from '@reach/router';
import Layout from '../containers/altLayout';
import SEO from '../components/Seo';
import Cloud from '../images/SY-404-page-image.svg';

const Hyperlink = styled.a`
  &:link {
    font-weight: bold;
    color: #2664b0;
  }

  &:hover,
  &:focus,
  &:active {
    color: #fcce09;
  }
`;

const GatsbyLink = styled(Link)`
  &:link {
    font-weight: bold;
    color: #2664b0;
  }

  &:hover,
  &:focus,
  &:active {
    color: #fcce09;
  }
`;

const PageNotFound = () => {
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 10000);
  });

  return (
    <Layout>
      <SEO title="404 - Page not found" />
      <Container>
        <h1 style={{ color: '#2664B0' }}>
          Uh oh! We can’t find the Sunny page you’re looking for.
        </h1>
        <Row>
          <Col xs="10" sm="8" md="5" lg="4" className="mx-auto">
            <img src={Cloud} alt="Cloud is sad that you are lost." />
          </Col>
        </Row>
        <p>The page may have moved, been an old link, or affected by cloudy weather.</p>

        <br />
        <p style={{ fontWeight: 'bold' }}>
          &gt; <GatsbyLink to="/">Return to home page</GatsbyLink>
        </p>
        <br />
        <br />
      </Container>
    </Layout>
  );
};

export default PageNotFound;
