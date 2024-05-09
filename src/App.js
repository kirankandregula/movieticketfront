import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './componenets/Login';
import AvailableSeats from './componenets/AvailableSeats';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic here, e.g., authenticate user
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>
        <h1>Movie Booking App</h1>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/home" />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/home"
            element={isLoggedIn ? <AvailableSeats theaterId={1} /> : <Navigate to="/" />}
          />
          <Route path='/available-seats' element={<AvailableSeats/>}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
