import React from 'react';
import { Row, Container } from 'react-bootstrap';
import Card from './Card1';
import { mapCardToProps } from '../lib/mapToProps';

function Grid({ id, title, subtitle, col, cards }) {
  return (
    <Container as="section" id={id}>
      <h2 className="text-center">{title}</h2>
      <p className="text-center subtitle">{subtitle}</p>
      <Row>
        {cards.map((card) => {
          return (
            <div className={col} key={card._key}>
              <Card {...mapCardToProps(card)} />
            </div>
          );
        })}
      </Row>
    </Container>
  );
}

export default Grid;
