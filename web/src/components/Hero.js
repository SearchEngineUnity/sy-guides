import React from 'react';
import { Row, Col } from 'react-bootstrap';
// import styled from 'styled-components';
// const StyledDiv = styled.div`
//   text-align: center;
// `;
function Hero() {
  return (
    <div fluid className="p-5">
      <Row>
        <Col className="col-md-8 col-12" />
        <Col className="col-md-4 col-12">
          <div>Title</div>
        </Col>
      </Row>
    </div>
  );
}
export default Hero;
