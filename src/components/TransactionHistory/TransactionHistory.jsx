import TransactionItem from './TransactionItem';
import './TransactionHistory.css';

const TransactionHistory = ({ transactions, onDeleteTransaction }) => {
  // Sort transactions by date (newest first)
  const sortedTransactions = [...transactions].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  if (sortedTransactions.length === 0) {
    return (
      <div className="transaction-history">
        <div className="transaction-history-header">
          <h1 className="transaction-history-title">Transaction History</h1>
        </div>
        <div className="transaction-history-empty">
          <p>No transactions yet.</p>
          <p className="empty-hint">Tap the + button to add your first transaction.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="transaction-history">
      <div className="transaction-history-header">
        <h1 className="transaction-history-title">Transaction History</h1>
        <p className="transaction-history-count">
          {sortedTransactions.length} {sortedTransactions.length === 1 ? 'transaction' : 'transactions'}
        </p>
      </div>
      <div className="transaction-list">
        {sortedTransactions.map((transaction) => (
          <TransactionItem 
            key={transaction.id} 
            transaction={transaction} 
            onDelete={onDeleteTransaction}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;

