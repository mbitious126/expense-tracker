import { useMemo } from 'react';
import { isInCurrentMonth } from '../utils/dateUtils';

/**
 * Custom hook to calculate monthly statistics and prepare chart data
 * @param {Array} transactions - All transactions
 * @param {Date} referenceDate - Reference date for month filtering (defaults to current month)
 */
export const useMonthlyData = (transactions, referenceDate = new Date()) => {
  return useMemo(() => {
    // Filter transactions for the current month
    const monthlyTransactions = transactions.filter(t => 
      isInCurrentMonth(t.date, referenceDate)
    );

    // Calculate totals
    const totalIncome = monthlyTransactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + parseFloat(t.amount || 0), 0);

    const totalExpenses = monthlyTransactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + parseFloat(t.amount || 0), 0);

    const netBalance = totalIncome - totalExpenses;

    // Prepare category breakdown data (for expenses only)
    const categoryData = {};
    monthlyTransactions
      .filter(t => t.type === 'expense')
      .forEach(t => {
        const category = t.category || 'Other';
        categoryData[category] = (categoryData[category] || 0) + parseFloat(t.amount || 0);
      });

    const categoryChartData = Object.entries(categoryData).map(([name, value]) => ({
      name,
      value: parseFloat(value.toFixed(2)),
    }));

    // Prepare payment method breakdown data (for expenses only)
    const paymentMethodData = {};
    monthlyTransactions
      .filter(t => t.type === 'expense' && t.paymentMethod)
      .forEach(t => {
        const method = t.paymentMethod;
        paymentMethodData[method] = (paymentMethodData[method] || 0) + parseFloat(t.amount || 0);
      });

    const paymentMethodChartData = Object.entries(paymentMethodData).map(([name, value]) => ({
      name,
      value: parseFloat(value.toFixed(2)),
    }));

    // Prepare income vs expense chart data (daily aggregation)
    const dailyData = {};
    monthlyTransactions.forEach(t => {
      const date = new Date(t.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      if (!dailyData[date]) {
        dailyData[date] = { date, income: 0, expense: 0 };
      }
      const amount = parseFloat(t.amount || 0);
      if (t.type === 'income') {
        dailyData[date].income += amount;
      } else {
        dailyData[date].expense += amount;
      }
    });

    const incomeExpenseChartData = Object.values(dailyData).map(item => ({
      ...item,
      income: parseFloat(item.income.toFixed(2)),
      expense: parseFloat(item.expense.toFixed(2)),
    }));

    return {
      monthlyTransactions,
      totalIncome: parseFloat(totalIncome.toFixed(2)),
      totalExpenses: parseFloat(totalExpenses.toFixed(2)),
      netBalance: parseFloat(netBalance.toFixed(2)),
      categoryChartData,
      paymentMethodChartData,
      incomeExpenseChartData,
    };
  }, [transactions, referenceDate]);
};

