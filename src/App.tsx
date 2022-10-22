import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { AuthPage } from './pages/auth_page';
import { AboutPage } from './pages/about_page';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/auth" element={<AuthPage/>}/>
          <Route path='/' element={<AboutPage/>}/>
        </Routes>
    </Router>
    // <AuthPage />
  );
}

export default App;
