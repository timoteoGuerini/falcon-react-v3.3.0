import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row, Tab, Nav, Form } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AudienceChart from './AudienceChart';
import FalconLink from 'components/common/FalconLink';
import SimpleBarReact from 'simplebar-react';
import classNames from 'classnames';
// { PowerBIEmbed } from 'powerbi-client-react';
//import { models, Report, Embed, service, Page } from 'powerbi-client';
import 'assets/scss/theme/_power-bi-embed.scss';

const TabTitle = ({ title, value, percentage, progress }) => (
  <div className="p-2 pe-4 text-start cursor-pointer">
    <h6 className="text-800 fs--2 text-nowrap">{title}</h6>
    <h5 className="text-800">{value}</h5>
    <Flex alignItems="center">
      <FontAwesomeIcon
        icon={progress ? 'caret-up' : 'caret-down'}
        className={progress ? 'text-success' : 'text-warning'}
      />
      <h6
        className={`fs--2 mb-0 ms-2 ${
          progress ? 'text-success' : 'text-warning'
        }`}
      >
        {percentage}
      </h6>
    </Flex>
  </div>
);

function Powerbi({ url }) {
  
  const reportComponent = (

    <iframe
      title="Deliver.ar-Analitica"
      width="100%"
      height="541"
      src={url}
      frameborder="0"
      allowFullScreen="true"
    ></iframe>
  );

  

  return (
    <>
      {reportComponent}
    </>
  );

  TabTitle.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired,
    progress: PropTypes.bool
  };

  Audience.propTypes = {
    chartData: PropTypes.shape({
      users: PropTypes.arrayOf(PropTypes.array),
      sessions: PropTypes.arrayOf(PropTypes.array),
      rate: PropTypes.arrayOf(PropTypes.array),
      duration: PropTypes.arrayOf(PropTypes.array)
    }).isRequired,
    className: PropTypes.string.isRequired
  };
}

export default Powerbi;
