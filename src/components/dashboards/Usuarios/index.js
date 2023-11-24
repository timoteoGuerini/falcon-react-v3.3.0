// USUARIOS

import React from 'react';
import { Col, Row, Badge, Card, Form, ProgressBar } from 'react-bootstrap';
import Powerbi from './powerbi/Powerbi';
import FalconCardHeader from 'components/common/FalconCardHeader';

const Usuarios = () => {
  return (
    <>
      <Row className="g-3 mb-3 mt-3">
        <Col lg={12}>
          <Card className="custom-card mt-4">
            <FalconCardHeader title="Deliveries" light titleTag="h6" />
            <Card.Body className="custom-card">
              <Powerbi url="https://app.powerbi.com/reportEmbed?reportId=52954d58-9923-4bd2-b9f6-7d6988fdce49&autoAuth=true&ctid=344979d0-d31d-4c57-8ba0-491aff4acaed"/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

Usuarios.propTypes = {};

export default Usuarios;
