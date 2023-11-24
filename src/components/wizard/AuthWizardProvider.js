import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AuthWizardContext } from 'context/Context';


const AuthWizardProvider = ({ children }) => {
  const [user, setUser] = useState({email:'manny@manny.com', password:'Manny2023*'});
  return (
    <AuthWizardContext.Provider value={{user, setUser}}>
      {children}
    </AuthWizardContext.Provider>
  );
};

AuthWizardProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthWizardProvider;
