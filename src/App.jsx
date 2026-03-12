import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WalletDashboard from './pages/WalletDashboard';
import WithdrawalForm from './pages/WithdrawalForm';
import TaxInfo from './pages/TaxInfo';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <div className="container">
            <div className="header-content">
              <Link to="/" className="logo">
                <div className="logo-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="logo-text">BitGo</span>
              </Link>
              <nav className="header-nav">
                <Link to="/" className="nav-link">Dashboard</Link>
                <Link to="/withdraw" className="nav-link">Withdraw</Link>
              </nav>
            </div>
          </div>
        </header>
        
        <main className="app-main">
          <Routes>
            <Route path="/" element={<WalletDashboard />} />
            <Route path="/withdraw" element={<WithdrawalForm />} />
            <Route path="/tax-info" element={<TaxInfo />} />
          </Routes>
        </main>
        
        <footer className="app-footer">
          <div className="container">
            <p className="text-secondary">© 2024 BitGo. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
