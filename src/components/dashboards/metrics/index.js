import React from 'react';
import { Col, Row, Badge, Card, Form, ProgressBar } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';

const Metrics = () => {
  return (
    <>
      <Row className="g-3 mb-3 mt-3">
        <Col lg={12}>
          <Card className="custom-card">
            <FalconCardHeader title="Metrics" light titleTag="h6" />
            <Card.Body className="py-0">
              <iframe
                width="100%"
                height="800px"
                title="Metrics"
                src="https://training.fr-testing-alpha.com.ar/api/v1/deepracer-analysis/metrics"
              ></iframe>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Metrics;
