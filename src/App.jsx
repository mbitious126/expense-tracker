import { useState } from 'react';
import { useTransactions } from './hooks/useTransactions';
import Dashboard from './components/Dashboard/Dashboard';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import BottomNav from './components/Navigation/BottomNav';
import TransactionFormModal from './components/TransactionForm/TransactionFormModal';
import './App.css';

function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const { transactions, addTransaction, deleteTransaction } = useTransactions();

  const handleTransactionAdded = (transactionData) => {
    addTransaction(transactionData);
    setIsFormModalOpen(false);
  };

  const handleTransactionDeleted = (transactionId) => {
    deleteTransaction(transactionId);
  };

  return (
    <div className="app">
      <main className="app-main">
        {activeView === 'dashboard' && (
          <Dashboard 
            transactions={transactions} 
            onAddTransactionClick={() => setIsFormModalOpen(true)}
          />
        )}
        {activeView === 'history' && (
          <TransactionHistory 
            transactions={transactions} 
            onDeleteTransaction={handleTransactionDeleted}
          />
        )}
      </main>
      <BottomNav activeView={activeView} onViewChange={setActiveView} />
      {isFormModalOpen && (
        <TransactionFormModal 
          onTransactionAdded={handleTransactionAdded}
          onClose={() => setIsFormModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;

