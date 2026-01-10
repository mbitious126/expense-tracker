import { formatDate } from '../../utils/dateUtils';
import './TransactionItem.css';

const TransactionItem = ({ transaction, onDelete }) => {
  const isIncome = transaction.type === 'income';
  const amount = parseFloat(transaction.amount || 0);

  const handleDelete = (e) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      onDelete(transaction.id);
    }
  };

  return (
    <div className={`transaction-item ${isIncome ? 'income' : 'expense'}`}>
      <div className="transaction-main">
        <div className="transaction-header">
          <span className="transaction-category">{transaction.category}</span>
          <span className={`transaction-amount ${isIncome ? 'income' : 'expense'}`}>
            {isIncome ? '+' : '-'}${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
        {!isIncome && transaction.paymentMethod && (
          <div className="transaction-payment-method">
            {transaction.paymentMethod}
          </div>
        )}
        {transaction.note && (
          <div className="transaction-note">{transaction.note}</div>
        )}
        <div className="transaction-footer">
          <div className="transaction-date">{formatDate(transaction.date)}</div>
          <button 
            className="transaction-delete-button"
            onClick={handleDelete}
            aria-label="Delete transaction"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;

