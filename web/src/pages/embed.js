import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { navigate } from '@reach/router';
import Layout from '../containers/layout';
import SEO from '../components/Seo';
import Cloud from '../images/SY-404-page-image.svg';

const Embed = () => {
  return (
    <Layout>
      <SEO nofollow noindex />
      <Container>
        <iframe
          src="https://drive.google.com/file/d/17FJaChlS8keNaXmrSWH5YjfBsbQMNFmp/preview"
          width="100%"
          height="1000"
        />
        <a href="https://drive.google.com/file/d/17FJaChlS8keNaXmrSWH5YjfBsbQMNFmp/preview">preview link</a>
      </Container>
    </Layout>
  );
};

export default Embed;
