import React from 'react';
import { Col, Row, Badge, Card, Form, ProgressBar } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';

const VisualAnalysis = () => {
  return (
    <>
      <Row className="g-3 mb-3 mt-3">
        <Col lg={12}>
          <Card className="custom-card mt-4">
            <FalconCardHeader title="Visual Analysis" light titleTag="h6" />
            <Card.Body className="py-0">
              <iframe
                width="100%"
                height="800px"
                title="Visual Analysis"
                src="https://training.fr-testing-alpha.com.ar/api/v1/deepracer-analysis/visual"
              ></iframe>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default VisualAnalysis;
