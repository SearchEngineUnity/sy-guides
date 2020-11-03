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
import MainFooter from '../components/MainFooter';
import MainNav from '../components/MainNav';
import { mapMainNavToProps, mapMainFooterToProps } from '../lib/mapToProps';
import GlobalStyle from '../global/GlobalStyle';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      sanityCompanyInfo {
        _key
        address1
        city
        email
        postalCode
        province
        name
      }
      sanityMainNavbar {
        title
        logo {
          asset {
            url
          }
        }
        menu {
          ... on SanityNavJumpLink {
            _key
            _type
            isButton
            link
            title
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
      <MainNav {...mapMainNavToProps(data.sanityMainNavbar)} />
      <>{children}</>
      <MainFooter {...mapMainFooterToProps(data.sanityCompanyInfo)} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
