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
import GlobalStyle from '../global/GlobalStyle';
import MainNav from '../components/MainNav';
import MainFooter from '../components/MainFooter';
import CookieConsent from '../components/CookieConsent';
import { mapMainNavToProps, mapMainFooterToProps } from '../lib/mapToProps';

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
      <GlobalStyle />
      <MainNav {...mapMainNavToProps(data.sanityNavMenu)} />
      <>{children}</>
      <MainFooter
        {...mapMainFooterToProps(
          data.sanityCompanyInfo,
          data.sanityCompanyLogo,
          data.allSanitySocialInfo,
        )}
      />
      <CookieConsent />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
