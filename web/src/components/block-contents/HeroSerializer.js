import BaseBlockContent from '@sanity/block-content-to-react';
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const serializers = {
  marks: {
    internalLink: ({ mark, children }) => {
      const { slug = {} } = mark.reference;
      const href = slug.current === '/' ? `/` : `/${slug.current}`;

      return <Link to={href}>{children}</Link>;
    },
    externalLink: ({ mark, children }) => {
      const { href } = mark;
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    },
    inlineImage: ({ mark, children }) => {
      return <img src={mark.asset.url} alt={children} loading="lazy" />;
    },
  },
};

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />;

export default BlockContent;
