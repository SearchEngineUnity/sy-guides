import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const PaddedDiv = styled.div`
  margin-bottom: 30px;
`;
function Tile1({ title, image, imageAlt, col }) {
  return (
    <PaddedDiv className={`align-items-stretch ${col}`}>
      <Card className="borderdesign h-100 p-0">
        {image && (
          <Card.Img
            loading="lazy"
            alt={imageAlt}
            className="w-50 h-auto mx-auto"
            variant="top"
            src={image}
          />
        )}
        <Card.Body className="p-0">
          {title && (
            <Card.Title className="font-weight-bold text-center px-2 pb-3">{title}</Card.Title>
          )}
        </Card.Body>
      </Card>
    </PaddedDiv>
  );
}
export default Tile1;
