import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types';
import { Card, Col, Row, Tab, Nav, Form } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AudienceChart from './AudienceChart';
import FalconLink from 'components/common/FalconLink';
import SimpleBarReact from 'simplebar-react';
import classNames from 'classnames';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models, Report, Embed, service, Page } from 'powerbi-client';
import 'assets/scss/theme/_power-bi-embed.scss'

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


function Powerbi() {

    const sampleReportUrl = 'https://aka.ms/CaptureViewsReportEmbedConfig'; //'https://app.powerbi.com/reportEmbed?reportId=e6eccbab-3cd0-4e55-a33f-e9fbc149b53f&autoAuth=true&ctid=344979d0-d31d-4c57-8ba0-491aff4acaed'//

const [report, setReport] = useState()

// Track Report embedding status
const [isEmbedded, setIsEmbedded] = useState(false)

// Overall status message of embedding
const [displayMessage, setMessage] = useState(
    `The report is bootstrapped. Click the Embed Report button to set the access token`
)

// CSS Class to be passed to the embedded component
const reportClass = "report-container"

// Pass the basic embed configurations to the embedded component to bootstrap the report on first load
// Values for properties like embedUrl, accessToken and settings will be set on click of button
const [sampleReportConfig, setReportConfig] = useState({
    type: "report",
    embedUrl: undefined,
    tokenType: models.TokenType.Embed,
    accessToken: undefined,
    settings: undefined
})

/**
 * Map of event handlers to be applied to the embedded report
 * Update event handlers for the report by redefining the map using the setEventHandlersMap function
 * Set event handler to null if event needs to be removed
 * More events can be provided from here
 * https://docs.microsoft.com/en-us/javascript/api/overview/powerbi/handle-events#report-events
 */
const [eventHandlersMap, setEventHandlersMap] = useState(
    new Map([
        ["loaded", () => console.log("Report has loaded")],
        ["rendered", () => console.log("Report has rendered")],
        [
            "error",
            event => {
                if (event) {
                    console.error(event.detail)
                }
            }
        ],
        ["visualClicked", () => console.log("visual clicked")],
        ["pageChanged", event => console.log(event)]
    ])
)

useEffect(() => {
    if (report) {
        report.setComponentTitle("Embedded Report")
    }
}, [report])

/**
 * Embeds report
 *
 * @returns Promise<void>
 */
const embedReport = async () => {
    console.log("Embed Report clicked")

    // Get the embed config from the service
    const reportConfigResponse = await fetch(sampleReportUrl)

    if (reportConfigResponse === null) {
        return
    }

    if (!reportConfigResponse?.ok) {
        console.error(
            `Failed to fetch config for report. Status: ${reportConfigResponse.status} ${reportConfigResponse.statusText}`
        )
        return
    }

    const reportConfig = await reportConfigResponse.json()

    // Update the reportConfig to embed the PowerBI report
    setReportConfig({
        ...sampleReportConfig,
        embedUrl: reportConfig.EmbedUrl,
        accessToken: reportConfig.EmbedToken.Token
    })
    setIsEmbedded(true)

    // Update the display message
    setMessage(
        "Use the buttons above to interact with the report using Power BI Client APIs."
    )
}

/**
 * Hide Filter Pane
 *
 * @returns Promise<IHttpPostMessageResponse<void> | undefined>
 */
const hideFilterPane = async () => {
    // Check if report is available or not
    if (!report) {
        setDisplayMessageAndConsole("Report not available")
        return
    }

    // New settings to hide filter pane
    const settings = {
        panes: {
            filters: {
                expanded: false,
                visible: false
            }
        }
    }

    try {
        const response = await report.updateSettings(settings)

        // Update display message
        setDisplayMessageAndConsole("Filter pane is hidden.")
        return response
    } catch (error) {
        console.error(error)
        return
    }
}

/**
 * Set data selected event
 *
 * @returns void
 */
const setDataSelectedEvent = () => {
    setEventHandlersMap(
        new Map([
            ...eventHandlersMap,
            ["dataSelected", event => console.log(event)]
        ])
    )

    setMessage(
        "Data Selected event set successfully. Select data to see event in console."
    )
}

/**
 * Change visual type
 *
 * @returns Promise<void>
 */
const changeVisualType = async () => {
    // Check if report is available or not
    if (!report) {
        setDisplayMessageAndConsole("Report not available")
        return
    }

    // Get active page of the report
    const activePage = await report.getActivePage()

    if (!activePage) {
        setMessage("No Active page found")
        return
    }

    try {
        // Change the visual type using powerbi-report-authoring
        // For more information: https://docs.microsoft.com/en-us/javascript/api/overview/powerbi/report-authoring-overview
        const visual = await activePage.getVisualByName("VisualContainer6")

        const response = await visual.changeType("lineChart")

        setDisplayMessageAndConsole(
            `The ${visual.type} was updated to lineChart.`
        )

        return response
    } catch (error) {
        if (error === "PowerBIEntityNotFound") {
            console.log("No Visual found with that name")
        } else {
            console.log(error)
        }
    }
}

/**
 * Set display message and log it in the console
 *
 * @returns void
 */
const setDisplayMessageAndConsole = message => {
    setMessage(message)
    console.log(message)
}

const controlButtons = isEmbedded ? (
    <>
        <button onClick={changeVisualType}>Change visual type</button>

        <button onClick={hideFilterPane}>Hide filter pane</button>

        <button onClick={setDataSelectedEvent}>Set event</button>

        <label className="display-message">{displayMessage}</label>
    </>
) : (
    <>
        <label className="display-message position">{displayMessage}</label>

        <button onClick={embedReport} className="embed-report">
            Embed Report
        </button>
    </>
)

const header = (
    <div className="header">Power BI Embedded</div>
)

    const reportComponent = (
            <PowerBIEmbed
                embedConfig={sampleReportConfig}
                eventHandlers={eventHandlersMap}
                cssClassName={reportClass}
                getEmbeddedComponent={embedObject => {
                    console.log(
                        `Embedded object of type "${embedObject.embedtype}" received`
                    )
                    setReport(embedObject)
                }}

            />
)

const footer = (
    <div className="footer">
        <p>This demo is powered by Power BI Embedded Analytics</p>
        <label className="separator-pipe">|</label>
        <img
            title="Power-BI"
            alt="PowerBI_Icon"
            className="footer-icon"
            src="./assets/PowerBI_Icon.png"
        />
        <p>
            Explore our
            <a
                href="https://aka.ms/pbijs/"
                target="_blank"
                rel="noreferrer noopener"
            >
                Playground
            </a>
        </p>
        <label className="separator-pipe">|</label>
        <img
            title="GitHub"
            alt="GitHub_Icon"
            className="footer-icon"
            src="./assets/GitHub_Icon.png"
        />
        <p>
            Find the
            <a
                href="https://github.com/microsoft/PowerBI-client-react"
                target="_blank"
                rel="noreferrer noopener"
            >
                source code
            </a>
        </p>
    </div>
)


    return (
        <Card className="custom-card" >
                    <Card.Header className="p-0 bg-light">
                        {header}
                    </Card.Header>
                <Card.Body className="custom-card" >
                    {isEmbedded ? null : controlButtons}
                    {isEmbedded ? reportComponent : null}
                </Card.Body>
        </Card>
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
