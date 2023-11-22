import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Form, Row, Col } from 'react-bootstrap';
import Divider from 'components/common/Divider';
import SocialAuthButtons from './SocialAuthButtons';
import auth from './auth.json';
import axios from 'axios';
import AuthWizardContext from 'context/Context'

const LoginForm = ({ hasLabel, layout }) => {
    // State
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const {user} = useContext(AuthWizardContext);
  
  // Handler
  /*const handleSubmit = e => {
    e.preventDefault();



      if (auth.data[0].email === formData.email && auth.data[0].password === formData.password) {
          toast.success(`Logged in as ${formData.email}`, {
              theme: 'colored'
          });
          navigate('/');
      }
      else {
          toast.error(`Wrong credentials`, {
              theme: 'red'
          });
      }
    };*/

    const handleSubmit = async () => {
        try {
            const response = await axios.get(`http://abmpersonalinternoapi.deliver.ar/api/LoginUid?uid=${formData.email}&pass=${formData.password}`);
            // Manejar la respuesta según la lógica de tu aplicación
            console.log(response.data);
            if (response.status == "ok") {
                toast.success(`Logged in as ${formData.email}`, {
                    theme: 'colored'
                });
                user = formData.email;
                navigate('/');
            }
            else {
                toast.error(`Wrong credentials`, {
                    theme: 'red'
                });
            }

        } catch (error) {
            // Manejar errores
            console.error('Error al iniciar sesión:', error);
        }
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
