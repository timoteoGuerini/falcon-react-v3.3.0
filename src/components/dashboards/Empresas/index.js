import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';
import Powerbi from '../analytics/powerbi/Powerbi';

const Empresa = () => {
  return (
    <>
      <Row className="g-3 mb-3 mt-3">
        <Col lg={12}>
          <Card className="custom-card" style={{ marginTop: 5 }}>
            <FalconCardHeader title="Marketplace" light titleTag="h6" />
            <Card.Body className="py-0">
              <Powerbi url="https://app.powerbi.com/reportEmbed?reportId=620d3793-7b97-4d5d-936c-aebc41cc2ce9&autoAuth=true&ctid=344979d0-d31d-4c57-8ba0-491aff4acaed" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Empresa;
