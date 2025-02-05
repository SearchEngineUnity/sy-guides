/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var cpm = {};
              (function(h,u,b){
                var d=h.getElementsByTagName("script")[0],e=h.createElement("script");
                e.async=true;e.src='https://cookiehub.net/c2/4ceda521.js';
                e.onload=function(){u.cookiehub.load(b);}
                d.parentNode.insertBefore(e,d);
              })(document,window,cpm);
            `,
          }}
        />
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
