import React, { useContext } from 'react';
import { Col, Row, Badge, Card, Form, ProgressBar } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';
import Powerbi from '../analytics/powerbi/Powerbi';
import { AuthWizardContext } from 'context/Context';

const Ecommerce = () => {
  const { user } = useContext(AuthWizardContext);
  return (
    <>
      <Row className="g-3 mb-3 mt-3">
        <Col lg={12}>
          <Card className="custom-card">
            <FalconCardHeader title="Users & Robots" light titleTag="h6" />
            <Card.Body className="py-0">
              {
                //TODO
                user ? (
                  <Powerbi url="https://app.powerbi.com/reportEmbed?reportId=52954d58-9923-4bd2-b9f6-7d6988fdce49&autoAuth=true&ctid=344979d0-d31d-4c57-8ba0-491aff4acaed" />
                ) : undefined
              }{' '}
            </Card.Body>
            <Card.Body className="py-0">
              {
                //TODO
                user ? (
                  <Powerbi url="https://app.powerbi.com/reportEmbed?reportId=e0f48a7d-009f-4b2f-b07b-6f46966d08b8&autoAuth=true&ctid=344979d0-d31d-4c57-8ba0-491aff4acaed" />
                ) : undefined
              }{' '}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Ecommerce;
