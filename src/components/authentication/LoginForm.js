import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Form, Row, Col } from 'react-bootstrap';
// import Divider from 'components/common/Divider';
// import SocialAuthButtons from './SocialAuthButtons';
// import auth from './auth.json';
import axios from 'axios';
import AuthWizardContext from 'context/Context';
import { getUser } from 'actions/user';
import { useDispatch } from 'react-redux';


const LoginForm = ({ hasLabel, layout }) => {
  // State
  //const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  useEffect(()=>{
    
  }, [])

  const navigate = useNavigate();

  const handleSubmit = async () => {

    let permission
    if (formData.email == "lpardo@uade.edu.ar"){
      permission = "user"
    }
    else {
      permission = "admin"
    }

    localStorage.setItem("email", formData.email)
    localStorage.setItem("role", permission)

    navigate('/dashboard/marketplace');
  };

  const handleFieldChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        {hasLabel && <Form.Label>Email address</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? 'Email address' : ''}
          value={formData.email}
          name="email"
          onChange={handleFieldChange}
          type="email"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        {hasLabel && <Form.Label>Password</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? 'Password' : ''}
          value={formData.password}
          name="password"
          onChange={handleFieldChange}
          type="password"
        />
      </Form.Group>

      <Form.Group>
        <Button
          type="submit"
          color="primary"
          className="mt-3 w-100"
          disabled={!formData.email || !formData.password}
        >
          Log in
        </Button>
      </Form.Group>
    </Form>
  );
};

LoginForm.propTypes = {
  layout: PropTypes.string,
  hasLabel: PropTypes.bool
};

LoginForm.defaultProps = {
  layout: 'simple',
  hasLabel: false
};

export default LoginForm;
