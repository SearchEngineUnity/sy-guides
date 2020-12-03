import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import BlockContent from './block-contents/simpleSerializer';

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
`;

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

function Hero({ id, title, media, subtitle }) {
  return (
    <Container as="section" id={id} className="page-section">
      <h1>{title}</h1>
      {media._type === 'illustration' && (
        <Row>
          <Col xs={12} md={8} lg={7} className="mx-auto">
            <img
              src={media.asset.url}
              alt={media.alt}
              loading="eager"
              width="100%"
              height="auto"
              style={{
                marginBottom: '0.5rem',
                aspectRatio: 'calc( attr(width) / attr(height) * 100%)',
              }}
            />
          </Col>
        </Row>
      )}
      {media._type === 'video' && (
        <PlayerWrapper>
          <StyledReactPlayer url={media.url} controls width="100%" height="100%" />
        </PlayerWrapper>
      )}
      <BlockContent blocks={subtitle} />
    </Container>
  );
}
export default Hero;
