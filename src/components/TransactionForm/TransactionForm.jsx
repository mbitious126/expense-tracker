import { useState } from 'react';
import { CATEGORIES, PAYMENT_METHODS } from '../../constants/categories';
import { getTodayISO } from '../../utils/dateUtils';
import './TransactionForm.css';

const TransactionForm = ({ onSubmit, onClose }) => {
  const [type, setType] = useState('expense');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [customCategory, setCustomCategory] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [date, setDate] = useState(getTodayISO());
  const [note, setNote] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation
    if (!amount || parseFloat(amount) <= 0) {
      newErrors.amount = 'Amount must be greater than 0';
    }

    if (!category) {
      newErrors.category = 'Category is required';
    }

    if (category === 'Other' && !customCategory.trim()) {
      newErrors.customCategory = 'Please enter a category name';
    }

    if (type === 'expense' && !paymentMethod) {
      newErrors.paymentMethod = 'Payment method is required for expenses';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Prepare transaction data
    const finalCategory = category === 'Other' ? customCategory.trim() : category;
    const transactionData = {
      type,
      amount: parseFloat(amount),
      category: finalCategory,
      paymentMethod: type === 'expense' ? paymentMethod : null,
      date,
      note: note.trim() || null,
    };

    onSubmit(transactionData);
    
    // Reset form
    setType('expense');
    setAmount('');
    setCategory('');
    setCustomCategory('');
    setPaymentMethod('');
    setDate(getTodayISO());
    setNote('');
    setErrors({});
    
    onClose();
  };

  const handleClose = () => {
    setErrors({});
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add Transaction</h2>
          <button className="close-button" onClick={handleClose} aria-label="Close">
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="transaction-form">
          {/* Transaction Type */}
          <div className="form-group">
            <label>Transaction Type</label>
            <div className="segmented-control">
              <button
                type="button"
                className={`segment ${type === 'income' ? 'active' : ''}`}
                onClick={() => {
                  setType('income');
                  setPaymentMethod('');
                  setErrors({ ...errors, paymentMethod: '' });
                }}
              >
                Income
              </button>
              <button
                type="button"
                className={`segment ${type === 'expense' ? 'active' : ''}`}
                onClick={() => setType('expense')}
              >
                Expense
              </button>
            </div>
          </div>

          {/* Amount */}
          <div className="form-group">
            <label htmlFor="amount">
              Amount <span className="required">*</span>
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                setErrors({ ...errors, amount: '' });
              }}
              step="0.01"
              min="0.01"
              placeholder="0.00"
              className={errors.amount ? 'error' : ''}
            />
            {errors.amount && <span className="error-message">{errors.amount}</span>}
          </div>

          {/* Category */}
          <div className="form-group">
            <label htmlFor="category">
              Category <span className="required">*</span>
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setCustomCategory('');
                setErrors({ ...errors, category: '', customCategory: '' });
              }}
              className={errors.category ? 'error' : ''}
            >
              <option value="">Select category</option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            {errors.category && <span className="error-message">{errors.category}</span>}
          </div>

          {/* Custom Category (only when "Other" is selected) */}
          {category === 'Other' && (
            <div className="form-group">
              <label htmlFor="customCategory">
                Category Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="customCategory"
                value={customCategory}
                onChange={(e) => {
                  setCustomCategory(e.target.value);
                  setErrors({ ...errors, customCategory: '' });
                }}
                placeholder="Enter category name"
                className={errors.customCategory ? 'error' : ''}
              />
              {errors.customCategory && (
                <span className="error-message">{errors.customCategory}</span>
              )}
            </div>
          )}

          {/* Payment Method (only for expenses) */}
          {type === 'expense' && (
            <div className="form-group">
              <label htmlFor="paymentMethod">
                Payment Method <span className="required">*</span>
              </label>
              <select
                id="paymentMethod"
                value={paymentMethod}
                onChange={(e) => {
                  setPaymentMethod(e.target.value);
                  setErrors({ ...errors, paymentMethod: '' });
                }}
                className={errors.paymentMethod ? 'error' : ''}
              >
                <option value="">Select payment method</option>
                {PAYMENT_METHODS.map((method) => (
                  <option key={method} value={method}>
                    {method}
                  </option>
                ))}
              </select>
              {errors.paymentMethod && (
                <span className="error-message">{errors.paymentMethod}</span>
              )}
            </div>
          )}

          {/* Date */}
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Note */}
          <div className="form-group">
            <label htmlFor="note">Note (optional)</label>
            <textarea
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows="3"
              placeholder="Add a note..."
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Save Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default TransactionForm;

