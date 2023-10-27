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
      <Row className="g-3 mb-3">
        <Col lg={12}>
          <Card className="custom-card">
            <FalconCardHeader title="Analytics" light titleTag="h6" />
            <Card.Body className="custom-card">
              <Powerbi />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

Analytics.propTypes = {};

export default Analytics;
