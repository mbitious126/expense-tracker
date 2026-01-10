import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getTransactions, saveTransactions, addTransaction as addTransactionToStorage, deleteTransaction as deleteTransactionFromStorage } from '../utils/storage';

/**
 * Custom hook to manage transactions state and localStorage sync
 */
export const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  // Load transactions from localStorage on mount
  useEffect(() => {
    const stored = getTransactions();
    setTransactions(stored);
  }, []);

  /**
   * Add a new transaction
   * @param {Object} transactionData - Transaction data (without id)
   */
  const addTransaction = (transactionData) => {
    const newTransaction = {
      id: uuidv4(),
      ...transactionData,
    };
    const updated = addTransactionToStorage(newTransaction);
    setTransactions(updated);
    return newTransaction;
  };

  /**
   * Delete a transaction by ID
   * @param {string} id - Transaction ID
   */
  const deleteTransaction = (id) => {
    const updated = deleteTransactionFromStorage(id);
    setTransactions(updated);
  };

  return {
    transactions,
    addTransaction,
    deleteTransaction,
  };
};

