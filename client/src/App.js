import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";

import { CircularProgress } from '@mui/material';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { app } from './firebase-config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import Form from './pages/components/common/Form';
import './App.css';
import Home from './pages/Home';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token');
    if (authToken) {
      navigate('/home');
    }
  }, [])

  const handleAction = (id) => {
    const authentication = getAuth();
    if (id === 'signIn') {
      setLoading(true);
      signInWithEmailAndPassword(authentication, email, password)
        .then(response => {
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
          navigate('/home')
        }).catch(error => {
          if (error.code === 'auth/user-not-found') {
            toast.error('User not found');
          } else if (error.code === 'auth/wrong-password') {
            toast.error('Wrong password');
          } else {
            toast.error(error.message);
          }
        })
      setLoading(false);
    }
    if (id === 'signUp') {
      setLoading(true);
      createUserWithEmailAndPassword(authentication, email, password)
        .then(response => {
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
          navigate('/home')
        }).catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            toast.error('Email already in use');
          } else {
            toast.error(error.message);
          }
        })
      setLoading(false);
    }
  };



  return (
    <div className="App">
      <>
        <ToastContainer />
        <Routes>
          <Route path='/'
            element={
              <>
                {loading ? <CircularProgress size={20} /> : null}
                <Form title="Login" setEmail={setEmail} setPassword={setPassword}
                  handleAction={() => handleAction('signIn')} />
              </>
            }
          />
          <Route path='/register'
            element={
              <>
                {loading ? <CircularProgress size={20} /> : null}
                <Form title="Register" setEmail={setEmail} setPassword={setPassword}
                  handleAction={() => handleAction('signUp')} />
              </>
            }
          />
          <Route path='/home' element={
            <Home />
          } />
        </Routes>
      </>
    </div>
  )
};

export default App;