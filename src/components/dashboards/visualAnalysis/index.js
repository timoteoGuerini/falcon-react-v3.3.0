import React, { useContext } from 'react';
import { Col, Row, Badge, Card, Form, ProgressBar } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';
import Powerbi from '../analytics/powerbi/Powerbi';
import { AuthWizardContext } from 'context/Context';

const VisualAnalysis = () => {
  const { user } = useContext(AuthWizardContext);
  return (
    <>
      <Row className="g-3 mb-3 mt-3">
        <Col lg={12}>
          <Card className="custom-card mt-4">
            <FalconCardHeader title="Visual Analysis" light titleTag="h6" />
            <Card.Body className="py-0">
              
              {//TODO
              user ? (
                <Powerbi url="https://app.powerbi.com/reportEmbed?reportId=f36e97f3-c77a-4a5e-868f-4f231c86b0c8&autoAuth=true&ctid=344979d0-d31d-4c57-8ba0-491aff4acaed" />
              ) : undefined}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default VisualAnalysis;
