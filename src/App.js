import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.min.css';
import Layout from './layouts/Layout';
import AuthWizardProvider from 'components/wizard/AuthWizardProvider';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AuthWizardProvider>
        <Layout />
      </AuthWizardProvider>
    </Router>
  );
};

export default App;
