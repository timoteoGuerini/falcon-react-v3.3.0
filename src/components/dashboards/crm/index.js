import React from 'react';
import { Col, Row, Badge, Card, Form, ProgressBar } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';

const Crm = () => {
  return (
    <>
      <Row className="g-3 mb-3 mt-3">
        <Col lg={12}>
          <Card className="custom-card mt-4">
            <FalconCardHeader title="Deepracer" light titleTag="h6" />
            <Card.Body className="py-0">
              <iframe
                width="100%"
                height="800px"
                title="Training Analysis"
                src="https://timoteoguerini.github.io/trainingAnalysis/"
              ></iframe>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Crm;
