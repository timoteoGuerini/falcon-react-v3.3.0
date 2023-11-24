import React, { useContext } from 'react';
import { Col, Row, Badge, Card, Form, ProgressBar } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';
import Powerbi from '../analytics/powerbi/Powerbi';
import { AuthWizardContext } from 'context/Context';

const Crm = () => {
  const { user } = useContext(AuthWizardContext);
  return (
    <>
      <Row className="g-3 mb-3 mt-3">
        <Col lg={12}>
          <Card className="custom-card mt-4">
            <FalconCardHeader title="Deepracer" light titleTag="h6" />
            <Card.Body className="py-0">
              {
                //TODO
                user.email === 'CEO' ? (
                  <Powerbi url="https://app.powerbi.com/reportEmbed?reportId=243c4454-58ae-4fa2-8659-480c7c183675&autoAuth=true&ctid=344979d0-d31d-4c57-8ba0-491aff4acaed" />
                ) : undefined
              }
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

export default Crm;
