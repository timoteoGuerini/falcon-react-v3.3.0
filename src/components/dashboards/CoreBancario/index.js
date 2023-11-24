import React from 'react';
import { Col, Row, Badge, Card, Form, ProgressBar } from 'react-bootstrap';
import Powerbi from './powerbi/Powerbi';
import FalconCardHeader from 'components/common/FalconCardHeader';

const CoreBancario = () => {
  return (
    <>
      <Row className="g-3 mb-3 mt-3">
        <Col lg={12}>
          <Card className="custom-card" style={{ marginTop: 5 }}>
            <FalconCardHeader title="Core Bancario" light titleTag="h6" />
            <Card.Body className="custom-card">
              <Powerbi url="https://app.powerbi.com/reportEmbed?reportId=85f3168c-585c-4dff-8e21-30940c397e07&autoAuth=true&ctid=344979d0-d31d-4c57-8ba0-491aff4acaed" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

CoreBancario.propTypes = {};

export default CoreBancario;
