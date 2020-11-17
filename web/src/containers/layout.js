/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import GlobalStyle from '../global/GlobalStyle';
import MainNav from '../components/MainNav';
import MainFooter from '../components/MainFooter';
import { mapMainNavToProps, mapMainFooterToProps } from '../lib/mapToProps';

const FooterWrapper = styled.div`
  @media (max-width: 576px) {
    margin-bottom: 48px;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      sanityCompanyInfo {
        _key
        address1
        city
        email
        postalCode
        province
        name
      }
      sanityNavMenu(title: { eq: "Main Navigation" }) {
        title
        _id
        menu {
          ... on SanityNavBrand {
            _key
            _type
            nav {
              slug {
                current
              }
            }
            brand {
              title
              logo {
                asset {
                  url
                }
              }
            }
          }
          ... on SanityNavJumpLink {
            _key
            _type
            link
            title
            isButton
          }
        }
      }
      allSanitySocialInfo {
        edges {
          node {
            _id
            social
            link
          }
        }
      }
      sanityCompanyLogo(title: { eq: "Sunny Guides logo white" }) {
        title
        logo {
          asset {
            url
          }
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Source+Sans+Pro:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <MainNav {...mapMainNavToProps(data.sanityNavMenu)} />
      <>{children}</>
      <FooterWrapper>
        <MainFooter
          {...mapMainFooterToProps(
            data.sanityCompanyInfo,
            data.sanityCompanyLogo,
            data.allSanitySocialInfo,
          )}
        />
      </FooterWrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
