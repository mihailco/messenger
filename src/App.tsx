import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { AuthPage } from './pages/auth_page';
import { AboutPage } from './pages/about_page';
import MessengerPage from './pages/messages_page';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<AboutPage/>}/>
          <Route path="/auth" element={<AuthPage/>}/>
          <Route path='/messages' element={<MessengerPage/>}/>
        </Routes>
    </Router>
    // <AuthPage />
  );
}

export default App;
