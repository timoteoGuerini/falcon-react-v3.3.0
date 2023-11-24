import React, { useContext } from 'react';
import { Col, Row, Badge, Card, Form, ProgressBar } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';
import Powerbi from '../analytics/powerbi/Powerbi';
import { AuthWizardContext } from 'context/Context';

const CoreContable = () => {
  const { user } = useContext(AuthWizardContext);
  return (
    <>
      <Row className="g-3 mb-3 mt-3">
        <Col lg={12}>
          <Card className="custom-card" style={{ marginTop: 5 }}>
            <FalconCardHeader title="Core Contable" light titleTag="h6" />
            <Card.Body className="py-0">
              <Powerbi url="https://app.powerbi.com/reportEmbed?reportId=f36e97f3-c77a-4a5e-868f-4f231c86b0c8&autoAuth=true&ctid=344979d0-d31d-4c57-8ba0-491aff4acaed" />
              {/* <iframe
                width="100%"
                height="800px"
                title="Training Analysis"
                src="https://training.fr-testing-alpha.com.ar/api/v1/deepracer-analysis/training"
              ></iframe> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CoreContable;
