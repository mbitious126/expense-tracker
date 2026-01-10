import { STORAGE_KEY } from '../constants/categories';

/**
 * Get all transactions from localStorage
 * @returns {Array} Array of transactions
 */
export const getTransactions = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return [];
  }
};

/**
 * Save transactions to localStorage
 * @param {Array} transactions - Array of transactions to save
 */
export const saveTransactions = (transactions) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    // Handle quota exceeded error
    if (error.name === 'QuotaExceededError') {
      alert('Storage limit exceeded. Please delete some old transactions.');
    }
  }
};

/**
 * Add a new transaction
 * @param {Object} transaction - Transaction object to add
 * @returns {Array} Updated transactions array
 */
export const addTransaction = (transaction) => {
  const transactions = getTransactions();
  const updated = [...transactions, transaction];
  saveTransactions(updated);
  return updated;
};

/**
 * Delete a transaction by ID
 * @param {string} id - Transaction ID to delete
 * @returns {Array} Updated transactions array
 */
export const deleteTransaction = (id) => {
  const transactions = getTransactions();
  const updated = transactions.filter(t => t.id !== id);
  saveTransactions(updated);
  return updated;
};

