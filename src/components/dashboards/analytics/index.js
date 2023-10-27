import React from 'react';
import { Col, Row, Badge, Card, Form, ProgressBar } from 'react-bootstrap';
import RealTimeUsers from './real-time-users/RealTimeUsers';
import Audience from './audience/Audience';
import Powerbi from './powerbi/Powerbi';
import ConnectCard from './ConnectCard';
import SessionByBrowser from './session-by-browser/SessionByBrowser';
import {
  audienceChart,
  intelligence,
  realTimeUsers,
  sessionByBrowser,
  sessionByCountry,
  topPagesTableData
} from 'data/dashboard/transacciones';
import FalconCardHeader from 'components/common/FalconCardHeader';

const Analytics = () => {
  return (
    <>
      <Row className="g-3 mb-3 mt-3">
        <Col lg={12}>
          <Card className="custom-card mt-4">
            <FalconCardHeader title="Deliveries" light titleTag="h6" />
            <Card.Body className="custom-card">
              <Powerbi url="https://app.powerbi.com/reportEmbed?reportId=c0d2c740-0cf7-4811-9190-3d23ddf73c07&autoAuth=true&ctid=344979d0-d31d-4c57-8ba0-491aff4acaed" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

Analytics.propTypes = {};

export default Analytics;
