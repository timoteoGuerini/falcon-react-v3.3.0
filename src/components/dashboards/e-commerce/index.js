import React from 'react';
import { Col, Row, Badge, Card, Form, ProgressBar } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';
import Powerbi from '../analytics/powerbi/Powerbi';

const Ecommerce = () => {
  return (
    <>
      <Row className="g-3 mb-3 mt-3">
        <Col lg={12}>
          <Card className="custom-card mt-4">
            <FalconCardHeader title="Users & Robots" light titleTag="h6" />
            <Card.Body className="py-0">
              <Powerbi url="https://app.powerbi.com/reportEmbed?reportId=afc80df0-ebaa-4fcf-b11d-ed7eb55a994a&autoAuth=true&ctid=344979d0-d31d-4c57-8ba0-491aff4acaed" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Ecommerce;
