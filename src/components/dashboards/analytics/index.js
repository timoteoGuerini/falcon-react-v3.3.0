import React from 'react';
import { Col, Row, Badge, Card, Form, ProgressBar } from 'react-bootstrap';
import RealTimeUsers from './real-time-users/RealTimeUsers';
import Audience from './audience/Audience';
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
import { useState } from 'react';
import trainingAnalysis from './trainingAnalysis.html';

const Analytics = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch(trainingAnalysis)
      .then(response => response.text())
      .then(data => setHtmlContent(data));
  }, []);

  return (
    <>
      <Row className="g-3 mb-3">
        <Col lg={12}>
          <Card>
            <FalconCardHeader title="Analytics" light titleTag="h6" />
            <Card.Body className="py-0">
              {/* <button onClick={handleFileUpload} className="btn btn-primary">
                Cargar archivo
              </button>
              {showImportedHTML && (
                <div dangerouslySetInnerHTML={{ __html: importedHTML }} />
              )} */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

Analytics.propTypes = {};

export default Analytics;
