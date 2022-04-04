import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

// Componentes
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import Layout from '../containers/Layout/Layout';
import Login from '../pages/Login/Login';
import PasswordRecovery from '../pages/PasswordRecovery/PasswordRecovery';

// Contexto
import AppContext  from '../context/AppContext';
//Hooks
import useInitialState from '../Hooks/useInitialState';

// styles
import '../styles/index.css';

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={ initialState }>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="login" element={<Login/>} />
                <Route path="password-recovery" element={<PasswordRecovery/>} />
                <Route path="*" element={<NotFound/>} />  
              </Routes>
            </Layout>
          </BrowserRouter>
    </AppContext.Provider>
  )
};

export default App;