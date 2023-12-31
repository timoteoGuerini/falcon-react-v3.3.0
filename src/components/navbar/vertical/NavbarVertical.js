import React, { useContext, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Nav, Navbar, Row, Col, Image } from 'react-bootstrap';
import { navbarBreakPoint, topNavbarBreakpoint } from 'config';
import { useNavigate } from 'react-router-dom';
import logo from 'assets/img/illustrations/analytics-logo.png';

import AppContext from 'context/Context';
import Flex from 'components/common/Flex';
import Logo from 'components/common/Logo';
import NavbarVerticalMenu from './NavbarVerticalMenu';
import ToggleButton from './ToggleButton';
import routes from 'routes/routes';
import { capitalize } from 'helpers/utils';
import NavbarTopDropDownMenus from 'components/navbar/top/NavbarTopDropDownMenus';
import PurchaseCard from './PurchaseCard';
import bgNavbar from 'assets/img/generic/bg-navbar.png';
import { toast } from 'react-toastify';
import NavbarNavLink from '../top/NavbarNavLink';
import { NavLink } from 'react-router-dom';

const NavbarVertical = () => {
  console.log('ROUTES', routes);
  const user = localStorage.getItem('email');
  const navigate = useNavigate();

  const renderLinks = dashboardRoutes => {
    let arrayTemp = [];
    if (user === 'manny@manny.com.ar') {
      arrayTemp = dashboardRoutes[0].children[0].children.filter(
        route => !route.name.includes('CEO')
      );
    } else if (user === 'billgates@deliver.ar') {
      arrayTemp = dashboardRoutes[0].children[0].children.filter(route =>
        route.name.includes('CEO')
      );
    } else {
      toast.error('credenciales incorrectas');
      navigate('/');
    }
    const newArray = [
      {
        children: [
          {
            active: routes[0].active,
            children: arrayTemp,
            icon: routes[0].icon,
            name: routes[0].name
          }
        ],
        label: routes[0].label,
        labelDisable: routes[0].labelDisable
      }
    ];

    return newArray;
  };

  console.log('RENDER LINKS: ', renderLinks(routes));

  const {
    config: {
      navbarPosition,
      navbarStyle,
      isNavbarVerticalCollapsed,
      showBurgerMenu
    }
  } = useContext(AppContext);

  const HTMLClassList = document.getElementsByTagName('html')[0].classList;

  useEffect(() => {
    if (isNavbarVerticalCollapsed) {
      HTMLClassList.add('navbar-vertical-collapsed');
    } else {
      HTMLClassList.remove('navbar-vertical-collapsed');
    }
    return () => {
      HTMLClassList.remove('navbar-vertical-collapsed-hover');
    };
  }, [isNavbarVerticalCollapsed, HTMLClassList]);

  //Control mouseEnter event
  let time = null;
  const handleMouseEnter = () => {
    if (isNavbarVerticalCollapsed) {
      time = setTimeout(() => {
        HTMLClassList.add('navbar-vertical-collapsed-hover');
      }, 100);
    }
  };
  const handleMouseLeave = () => {
    clearTimeout(time);
    HTMLClassList.remove('navbar-vertical-collapsed-hover');
  };

  const NavbarLabel = ({ label }) => (
    <Nav.Item as="li">
      <Row className="mt-3 mb-2 navbar-vertical-label-wrapper">
        <Col xs="auto" className="navbar-vertical-label navbar-vertical-label">
          {label}
        </Col>
        <Col className="ps-0">
          <hr className="mb-0 navbar-vertical-divider"></hr>
        </Col>
      </Row>
    </Nav.Item>
  );

  return (
    <Navbar
      expand={navbarBreakPoint}
      className={classNames('navbar-vertical', {
        [`navbar-${navbarStyle}`]: navbarStyle !== 'transparent'
      })}
      variant="dark"
    >
      <Flex alignItems="center">
        <Logo at="navbar-vertical" width={90} />
      </Flex>
      <Navbar.Collapse
        in={showBurgerMenu}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundImage:
            navbarStyle === 'vibrant'
              ? `linear-gradient(-45deg, rgba(0, 160, 255, 0.86), #0048a2),url(${bgNavbar})`
              : 'none'
        }}
      >
        <div
          className="navbar-vertical-content scrollbar"
          style={{ backgroundColor: '#101418' }}
        >
          <Nav className="flex-column" as="ul">
            {renderLinks(routes).map(route => (
              <Fragment key={route.name}>
                {!route.labelDisable && (
                  <NavbarLabel label={capitalize(route.name)} />
                )}
                <NavbarVerticalMenu routes={route.children} />
              </Fragment>
            ))}
            <Nav.Item as="li">
              <NavLink to={'/'}>Log out</NavLink>
            </Nav.Item>
          </Nav>

          <>
            {navbarPosition === 'combo' && (
              <div className={`d-${topNavbarBreakpoint}-none`}>
                <div className="navbar-vertical-divider">
                  <hr className="navbar-vertical-hr my-2" />
                </div>
                <Nav navbar>
                  <NavbarTopDropDownMenus />
                </Nav>
              </div>
            )}
            <PurchaseCard />
          </>
          <Image src={logo} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

NavbarVertical.propTypes = {
  label: PropTypes.string
};

export default NavbarVertical;
