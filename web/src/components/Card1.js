import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

function Card1({ idTag, pdfURL, appName, appIcon, osName, osIcon, osDevice }) {
  return (
    <Card id={idTag}>
      <Card.Header>
        <span>{appName}</span> for <span>{osName}</span> ({osDevice})
      </Card.Header>
      <Card.Body>
        <Row className="justify-content-center">
          <Col>
          <img src={appIcon} alt={appName} loading="lazy"></img>
        <Card.Title>{appName}</Card.Title>
          </Col>
          <Col>
          <img src={osIcon} alt={osName} loading="lazy"/>
          <Card.Title>{osName}</Card.Title>
          </Col>
        </Row>
        <Button variant="primary">Download Guide</Button>
      </Card.Body>
    </Card>
  );
}
export default Card1;
