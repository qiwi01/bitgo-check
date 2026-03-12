import React from 'react';
import { Link } from 'react-router-dom';
import './TaxInfo.css';

const TaxInfo = () => {
  const taxInfo = {
    totalAmount: 344000,
    taxes: 11900,
    fees: 3440,
    netAmount: 320700,
    taxRate: "3.46%",
    feeRate: "1%"
  };

  return (
    <div className="tax-info">
      <div className="container">
        <div className="tax-info-header">
          <div className="status-icon pending">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#f59e0b" strokeWidth="2"/>
              <path d="M12 8V12" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 16H12.01" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h1>Tax and Fee Assessment</h1>
          <p className="text-secondary">
            Your withdrawal request has been received and is currently being processed. 
            Please review the tax and fee information below.
          </p>
        </div>

        <div className="tax-info-content">
          <div className="card tax-summary-card">
            <div className="card-header">
              <h2>Transaction Summary</h2>
              <span className="status-badge status-pending">Pending Review</span>
            </div>
            
            <div className="card-body">
              <div className="summary-grid">
                <div className="summary-item">
                  <div className="summary-label">Requested Amount</div>
                  <div className="summary-value">${taxInfo.totalAmount.toLocaleString()}</div>
                </div>
                
                <div className="summary-divider"></div>
                
                <div className="summary-item">
                  <div className="summary-label">Taxes ({taxInfo.taxRate})</div>
                  <div className="summary-value negative">-${taxInfo.taxes.toLocaleString()}</div>
                </div>
                
                <div className="summary-divider"></div>
                
                <div className="summary-item">
                  <div className="summary-label">Processing Fees ({taxInfo.feeRate})</div>
                  <div className="summary-value negative">-${taxInfo.fees.toLocaleString()}</div>
                </div>
                
                <div className="summary-divider"></div>
                
                <div className="summary-item total">
                  <div className="summary-label">Net Amount Payable</div>
                  <div className="summary-value total-amount">${taxInfo.netAmount.toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card tax-details-card">
            <div className="card-header">
              <h2>Tax Information</h2>
              <p className="text-secondary">Important tax considerations for your withdrawal</p>
            </div>
            
            <div className="card-body">
              <div className="tax-details-grid">
                <div className="tax-detail-item">
                  <div className="detail-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 7H20" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M10 11H14" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M8 15H16" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M9 3V7" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M15 3V7" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="detail-content">
                    <h3>Tax Withholding</h3>
                    <p>
                      A 15% tax is automatically withheld from cryptocurrency withdrawals 
                      as per regulatory requirements. This amount will be remitted to the 
                      appropriate tax authorities.
                    </p>
                  </div>
                </div>
                
                <div className="tax-detail-item">
                  <div className="detail-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#f59e0b" strokeWidth="2"/>
                      <path d="M12 8V12" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 16H12.01" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="detail-content">
                    <h3>Processing Fees</h3>
                    <p>
                      A 1% processing fee is applied to cover transaction costs and 
                      network fees associated with your withdrawal request.
                    </p>
                  </div>
                </div>
                
                <div className="tax-detail-item">
                  <div className="detail-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#f59e0b" strokeWidth="2"/>
                      <path d="M9 12H15" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 9V15" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="detail-content">
                    <h3>Documentation Required</h3>
                    <p>
                      Additional documentation may be required to complete your 
                      withdrawal. Our support team will contact you if needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card support-card">
            <div className="card-header">
              <h2>Next Steps</h2>
              <p className="text-secondary">What happens next and how to get help</p>
            </div>
            
            <div className="card-body">
              <div className="support-steps">
                <div className="step-item">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3>Review Process</h3>
                    <p>Our compliance team will review your withdrawal request within 1-3 business days.</p>
                  </div>
                </div>
                
                <div className="step-item">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3>Documentation</h3>
                    <p>You may be contacted for additional verification documents if required.</p>
                  </div>
                </div>
                
                <div className="step-item">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3>Approval & Disbursement</h3>
                    <p>Once approved, funds will be transferred to your designated bank account.</p>
                  </div>
                </div>
              </div>

              <div className="support-contact">
                <div className="contact-info">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h3>Contact Support</h3>
                    <p className="support-note">
                      For questions about your withdrawal, tax documentation, or to provide 
                      additional information, please contact our support team.
                    </p>
                  </div>
                </div>
                
                <div className="support-actions">
                  <Link to="/" className="btn btn-secondary">
                    Return to Dashboard
                  </Link>
                  <a href="mailto:support@bitgosupport.co" className="btn btn-primary">
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxInfo;