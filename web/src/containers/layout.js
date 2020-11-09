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
        <script
          rel="preload"
          src="https://kit.fontawesome.com/e4a269ffa7.js"
          crossOrigin="anonymous"
          async
        />
        <script>
          {`(function(d) {
    var config = {
      kitId: 'mwy2rpa',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);`}
        </script>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Ranchers&display=swap"
          rel="stylesheet"
        /> */}
      </Helmet>
      <GlobalStyle />
      <div>Main Nagivation</div>
      <>{children}</>
      <div>Footer</div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
