import React from 'react';
//COMPONENTS
import Navbar from './components/Navbar';
//ROUTER
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//PAGES
import HomePage from './pages/Homepage';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/signin' element={<SignInPage   />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
