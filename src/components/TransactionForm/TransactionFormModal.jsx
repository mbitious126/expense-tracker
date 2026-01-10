import TransactionForm from './TransactionForm';

const TransactionFormModal = ({ onTransactionAdded, onClose }) => {
  const handleSubmit = (transactionData) => {
    onTransactionAdded(transactionData);
  };

  return (
    <TransactionForm onSubmit={handleSubmit} onClose={onClose} />
  );
};

export default TransactionFormModal;

