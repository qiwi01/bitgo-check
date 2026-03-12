import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './WalletDashboard.css';

const WalletDashboard = () => {
  const [isWithdrawing, setIsWithdrawing] = useState(false);

  // Mock user data
  const user = {
    name: "Rosene Julie Ann",
    joinDate: "2025-03-15"
  };

  // Mock wallet data
  const walletData = {
    totalBalance: 344000,
    availableBalance: 344000,
    pendingWithdrawals: 0,
    currency: "USD"
  };

  const handleWithdrawClick = () => {
    setIsWithdrawing(true);
    // Navigate to withdraw page after a small delay for animation
    setTimeout(() => {
      window.location.href = '/withdraw';
    }, 500);
  };

  return (
    <div className="wallet-dashboard">
      <div className="container">
        {/* Header Section */}
        <header className="dashboard-header">
          <div className="welcome-section">
            <h1>Welcome back, {user.name}</h1>
            <p className="text-secondary">Your secure digital wallet</p>
          </div>
          
          <div className="user-info">
            <div className="user-card">
              <div className="user-avatar">
                <span>{user.name.charAt(0)}</span>
              </div>
              <div className="user-details">
                <h3>{user.name}</h3>
                <span className="status-badge status-active">Verified</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="dashboard-content">
          {/* Balance Overview */}
          <section className="balance-section">
            <div className="card balance-card">
              <div className="card-header">
                <h2>Wallet Balance</h2>
                <p className="text-secondary">Current available balance in your wallet</p>
              </div>
              
              <div className="card-body">
                <div className="balance-grid">
                  <div className="balance-item">
                    <div className="balance-label">Total Balance</div>
                    <div className="balance-amount">
                      ${walletData.totalBalance.toLocaleString()}
                    </div>
                    <div className="balance-currency">{walletData.currency}</div>
                  </div>
                  
                  <div className="balance-divider"></div>
                  
                  <div className="balance-item">
                    <div className="balance-label">Available</div>
                    <div className="balance-amount available">
                      ${walletData.availableBalance.toLocaleString()}
                    </div>
                    <div className="balance-currency">{walletData.currency}</div>
                  </div>
                  
                  <div className="balance-divider"></div>
                  
                  <div className="balance-item">
                    <div className="balance-label">Pending</div>
                    <div className="balance-amount pending">
                      ${walletData.pendingWithdrawals.toLocaleString()}
                    </div>
                    <div className="balance-currency">{walletData.currency}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Actions Section */}
          <section className="actions-section">
            <div className="card actions-card">
              <div className="card-header">
                <h2>Quick Actions</h2>
                <p className="text-secondary">Manage your wallet and transactions</p>
              </div>
              
              <div className="card-body">
                <div className="actions-grid">
                  <div className="action-item">
                    <div className="action-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12L12 17L22 12" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="action-content">
                      <h3>Deposit Funds</h3>
                      <p>Add funds to your wallet</p>
                    </div>
                    <button className="btn btn-secondary">Deposit</button>
                  </div>
                  
                  <div className="action-item">
                    <div className="action-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 11L12 6L17 11" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 18V6" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="action-content">
                      <h3>Withdraw Funds</h3>
                      <p>Transfer funds to your bank</p>
                    </div>
                    <button 
                      className={`btn btn-primary ${isWithdrawing ? 'loading' : ''}`}
                      onClick={handleWithdrawClick}
                      disabled={isWithdrawing}
                    >
                      {isWithdrawing ? 'Processing...' : 'Withdraw Now'}
                    </button>
                  </div>
                  
                </div>
              </div>
            </div>
          </section>

          {/* Wallet Information */}
          <section className="wallet-info-section">
            <div className="card wallet-info-card">
              <div className="card-header">
                <h2>Wallet Information</h2>
                <p className="text-secondary">Your wallet details and security</p>
              </div>
              
              <div className="card-body">
                <div className="wallet-details-grid">
                  <div className="detail-item">
                    <label className="detail-label">Member Since</label>
                    <div className="detail-value">{new Date(user.joinDate).toLocaleDateString()}</div>
                  </div>
                  
                  <div className="detail-item">
                    <label className="detail-label">Account Status</label>
                    <div className="detail-value">
                      <span className="status-badge status-active">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default WalletDashboard;
