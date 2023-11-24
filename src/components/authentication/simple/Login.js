import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import Flex from 'components/common/Flex';
import LoginForm from 'components/authentication/LoginForm';
import Card from 'components/doc-components/Cards';
import Logo from 'components/common/Logo';
import { AuthWizardContext } from 'context/Context';

const CardCustom = ({ children }) => (
  <div
    style={{
      maxWidth: '400px',
      margin: 'auto', // Ajusta el ancho de la tarjeta según tus necesidades
      marginTop: '150px', // Centra la tarjeta horizontalmente
      padding: '20px', // Agrega espacio interno a la tarjeta
      border: '1px solid #ddd', // Añade un borde para mayor estilo
      borderRadius: '8px', // Agrega bordes redondeados// Asegura que la tarjeta ocupe al menos toda la altura de la pantalla
      display: 'flex', // Usa flexbox para centrar verticalmente
      flexDirection: 'column', // Alinea los elementos en una columna
      justifyContent: 'center', // Centra verticalmente los elementos
      backgroundColor:'#101418'
    }}
  >
    {children}
  </div>
);

const Login = () => {
  // setUser({
  //   ...user,
  //   email:'hola', 
  //   password:'mundo'})
  return (
    <CardCustom>
      <>
        <Flex justifyContent="center" alignItems="center">
          <Logo width={70} textClass="fs-4" />
        </Flex>
        <Flex justifyContent="between" alignItems="center" className="mb-3">
          <h5>Log in</h5>
          <p className="fs--1 text-600 mb-0"></p>
        </Flex>
        <LoginForm />
      </>
    </CardCustom>
  );
};

export default Login;
