import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import Layout from '../containers/Layout/Layout';
import Login from '../pages/Login/Login';
import RecoveryPassword from '../pages/PasswordRecovery/PasswordRecovery';
import '../styles/index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="login" element={<Login/>} />
          <Route path="recovery-password" element={<RecoveryPassword/>} />
          <Route path="*" element={<NotFound/>} />  
        </Routes>
      </Layout>
    </BrowserRouter>
  )
};

export default App;