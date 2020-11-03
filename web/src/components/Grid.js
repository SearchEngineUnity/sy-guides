import React from 'react';
import { Row, Container } from 'react-bootstrap';
import { mapTileToProps } from '../lib/mapToProps';

function Grid({ id, leader, title, subtitle, col, design, cards }) {
  const componentTypeSwitch = (tileDesign, tileCol, tile) => {
    switch (tileDesign) {


      default:
        return <div>Tile Design undefined</div>;
    }
  };

  return (
    <Container as="section" id={id}>
      <p className="text-center leader">{leader}</p>
      <h2 className="text-center">{title}</h2>
      <p className="text-center subtitle">{subtitle}</p>
      <Row>{cards.map((card) => componentTypeSwitch(design, col, card))}</Row>
    </Container>
  );
}

export default Grid;
