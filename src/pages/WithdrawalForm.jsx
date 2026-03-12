import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WithdrawalForm.css';

const WithdrawalForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    accountNumber: '',
    routingNumber: '',
    bankName: '',
    accountHolderName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    amount: '',
    email: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required field validation
    if (!formData.accountNumber.trim()) {
      newErrors.accountNumber = 'Account number is required';
    } else if (!/^\d{8,17}$/.test(formData.accountNumber)) {
      newErrors.accountNumber = 'Account number must be 8-17 digits';
    }

    if (!formData.routingNumber.trim()) {
      newErrors.routingNumber = 'Routing number is required';
    } else if (!/^\d{9}$/.test(formData.routingNumber)) {
      newErrors.routingNumber = 'Routing number must be 9 digits';
    }

    if (!formData.bankName.trim()) {
      newErrors.bankName = 'Bank name is required';
    }

    if (!formData.accountHolderName.trim()) {
      newErrors.accountHolderName = 'Account holder name is required';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    } else if (formData.state.length !== 2) {
      newErrors.state = 'State must be 2 letters';
    }

    if (!formData.zipCode.trim()) {
      newErrors.zipCode = 'ZIP code is required';
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.zipCode)) {
      newErrors.zipCode = 'Please enter a valid ZIP code';
    }

    if (!formData.amount.trim()) {
      newErrors.amount = 'Withdrawal amount is required';
    } else {
      const amount = parseFloat(formData.amount);
      if (isNaN(amount) || amount <= 0) {
        newErrors.amount = 'Please enter a valid amount';
      } else if (amount > 344000) {
        newErrors.amount = 'Withdrawal amount exceeds available balance';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Navigate to tax info page
      navigate('/tax-info');
    } catch (error) {
      console.error('Withdrawal submission failed:', error);
      setErrors({ submit: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatCurrency = (value) => {
    if (!value) return '';
    const num = parseFloat(value);
    if (isNaN(num)) return value;
    return num.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  return (
    <div className="withdrawal-form">
      <div className="container">
        <div className="form-header">
          <h1>Withdraw Funds</h1>
          <p className="text-secondary">Transfer funds from your wallet to your bank account</p>
        </div>

        <form onSubmit={handleSubmit} className="withdrawal-form-container">
          <div className="form-section">
            <h2>Bank Account Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label" htmlFor="accountNumber">
                  Account Number <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="accountNumber"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  className={`form-input ${errors.accountNumber ? 'error' : ''}`}
                  placeholder="Enter your bank account number"
                  maxLength="17"
                />
                {errors.accountNumber && <span className="form-error">{errors.accountNumber}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="routingNumber">
                  Routing Number <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="routingNumber"
                  name="routingNumber"
                  value={formData.routingNumber}
                  onChange={handleChange}
                  className={`form-input ${errors.routingNumber ? 'error' : ''}`}
                  placeholder="Enter your bank routing number"
                  maxLength="9"
                />
                {errors.routingNumber && <span className="form-error">{errors.routingNumber}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="bankName">
                  Bank Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="bankName"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  className={`form-input ${errors.bankName ? 'error' : ''}`}
                  placeholder="Enter your bank name"
                />
                {errors.bankName && <span className="form-error">{errors.bankName}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="accountHolderName">
                  Account Holder Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="accountHolderName"
                  name="accountHolderName"
                  value={formData.accountHolderName}
                  onChange={handleChange}
                  className={`form-input ${errors.accountHolderName ? 'error' : ''}`}
                  placeholder="Enter account holder name as it appears on bank account"
                />
                {errors.accountHolderName && <span className="form-error">{errors.accountHolderName}</span>}
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Address Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label" htmlFor="address">
                  Street Address <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`form-input ${errors.address ? 'error' : ''}`}
                  placeholder="Enter your street address"
                />
                {errors.address && <span className="form-error">{errors.address}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="city">
                  City <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`form-input ${errors.city ? 'error' : ''}`}
                  placeholder="Enter your city"
                />
                {errors.city && <span className="form-error">{errors.city}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="state">
                  State <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={`form-input ${errors.state ? 'error' : ''}`}
                  placeholder="Enter your state (e.g., CA)"
                  maxLength="2"
                  style={{ textTransform: 'uppercase' }}
                />
                {errors.state && <span className="form-error">{errors.state}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="zipCode">
                  ZIP Code <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className={`form-input ${errors.zipCode ? 'error' : ''}`}
                  placeholder="Enter your ZIP code"
                  maxLength="10"
                />
                {errors.zipCode && <span className="form-error">{errors.zipCode}</span>}
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Withdrawal Details</h2>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label" htmlFor="amount">
                  Amount to Withdraw <span className="required">*</span>
                </label>
                <div className="input-with-prefix">
                  <span className="currency-prefix">$</span>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className={`form-input amount-input ${errors.amount ? 'error' : ''}`}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    max="344000"
                  />
                </div>
                <div className="form-hint">
                  Available balance: $344,000.00
                </div>
                {errors.amount && <span className="form-error">{errors.amount}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="Enter your email address"
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>
            </div>
          </div>

          {errors.submit && (
            <div className="form-error submit-error">
              {errors.submit}
            </div>
          )}

          <div className="form-actions">
            <button 
              type="submit" 
              className={`btn btn-primary btn-lg ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Processing...
                </>
              ) : (
                'Withdraw Now'
              )}
            </button>
            
            <button 
              type="button" 
              className="btn btn-secondary btn-lg"
              onClick={() => navigate('/')}
              disabled={isSubmitting}
            >
              Cancel
            </button>
          </div>

          <div className="form-notice">
            <div className="notice-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#f59e0b" strokeWidth="2"/>
                <path d="M12 8V12" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 16H12.01" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="notice-content">
              <h4>Important Information</h4>
              <p>
                Withdrawal requests are processed within 1-3 business days. 
                Please ensure all information is accurate to avoid delays. 
                You will receive email confirmation once your withdrawal is processed.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WithdrawalForm;