import React from 'react';
import { Col, Row, Badge, Card, Form, ProgressBar } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';

const Crm = () => {
  return (
    <>
      <Row className="g-3 mb-3">
        <Col lg={12}>
          <Card>
            <FalconCardHeader title="Deepracer" light titleTag="h6" />
            <Card.Body className="py-0">{'//HTML FRAME'}</Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Crm;
