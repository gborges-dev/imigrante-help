import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Forum from './pages/Forum';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path='/login' Component={Login} />
          <Route path='/signin' Component={Signin} />
          <Route path='/forum' Component={Forum} />
          <Route path='/admin' Component={AdminPanel} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
