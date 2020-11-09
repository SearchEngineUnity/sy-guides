import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';

const PaddedDiv = styled.div`
  margin-bottom: 30px;
`;
function Card1({ title, col, icons }) {
  return (
    <PaddedDiv className={`align-items-stretch ${col}`}>
      <Card>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Title>{icons}</Card.Title>
          <Button variant="primary">Download Guide</Button>
        </Card.Body>
      </Card>
    </PaddedDiv>
  );
}
export default Card1;
