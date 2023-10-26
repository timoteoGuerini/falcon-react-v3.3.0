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

const Dashboard = () => {
  const [frame, setFrame] = useState('');

  useEffect(() => {
    const fetchFrame = () => {};
  }, []);

  return (
    <>
      <Row className="g-3 mb-3">
        <Col lg={12}>
          <Card>
            <FalconCardHeader title="Clientes" light titleTag="h6" />
            <Card.Body className="py-0">{'//HTML FRAME'}</Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
