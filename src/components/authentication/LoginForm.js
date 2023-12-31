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

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const validate = await validateUserPass(formData.email, formData.password);

    if (validate) {
      let permission;

      if (formData.email == 'manny@manny.com.ar') {
        permission = 'user';
      } else {
        permission = 'admin';
      }

      localStorage.setItem('email', formData.email);
      localStorage.setItem('role', permission);
      permission==='user' ? 
      navigate('dashboard/robots')
      :
      navigate('dashboard/marketplace')
    } else {
      toast.error('Usuario o contraseña incorrectos');
    }
  };

  const validateUserPass = async (user, pass) => {
    const url = `http://abmpersonalinternoapi.deliver.ar/api/LoginUid?uid=${user}&pass=${pass}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return res.status == 200 ? true : false;
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
