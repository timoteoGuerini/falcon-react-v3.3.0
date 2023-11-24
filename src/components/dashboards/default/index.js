import React, { useEffect, useState } from 'react';
import WeeklySales from './WeeklySales';
import { Col, Row, Badge, Card, Form, ProgressBar } from 'react-bootstrap';
import {
  // marketShare,
  // totalOrder,
  // totalSales,
  // weeklySalesData,
  // weather,
  // products,
  // storageStatus,
  // files,
  // users,
  // topProducts,
  runningProjects
} from 'data/dashboard/clientes';

// import TotalOrder from './TotalOrder';
// import MarketShare from './MarketShare';
// import TotalSales from './TotalSales';
import RunningProjects from './RunningProjects';
// import StorageStatus from './StorageStatus';
// import SpaceWarning from './SpaceWarning';
// import BestSellingProducts from './BestSellingProducts';
// import SharedFiles from './SharedFiles';
// import ActiveUsers from './ActiveUsers';
// import BandwidthSaved from './BandwidthSaved';
// import TopProducts from './TopProducts';
// import Weather from './Weather';
import FalconCardHeader from 'components/common/FalconCardHeader';
import Powerbi from '../analytics/powerbi/Powerbi';

const Marketplace = () => {
  const [frame, setFrame] = useState('');

  useEffect(() => {
    const fetchFrame = () => {};
  }, []);

  
  return (
    <>
      <Row className="g-3 mb-3 mt-3">
        <Col lg={12}>
          <Card className="custom-card mt-4">
            <FalconCardHeader title="Purchases" light titleTag="h6" />
            <Card.Body className="py-0">
              <Powerbi url="https://app.powerbi.com/reportEmbed?reportId=620d3793-7b97-4d5d-936c-aebc41cc2ce9&autoAuth=true&ctid=344979d0-d31d-4c57-8ba0-491aff4acaed" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Marketplace;
