import { useState } from 'react';
import { useMonthlyData } from '../../hooks/useMonthlyData';
import SummaryCards from './SummaryCards';
import CategoryChart from './CategoryChart';
import PaymentMethodChart from './PaymentMethodChart';
import IncomeExpenseChart from './IncomeExpenseChart';
import MonthSlider from './MonthSlider';
import './Dashboard.css';

const Dashboard = ({ transactions, onAddTransactionClick }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const monthlyData = useMonthlyData(transactions, selectedDate);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <button 
          className="dashboard-add-button"
          onClick={onAddTransactionClick}
          aria-label="Add Transaction"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <MonthSlider selectedDate={selectedDate} onDateChange={setSelectedDate} />

      <SummaryCards
        totalIncome={monthlyData.totalIncome}
        totalExpenses={monthlyData.totalExpenses}
        netBalance={monthlyData.netBalance}
      />

      <IncomeExpenseChart data={monthlyData.incomeExpenseChartData} />
      <CategoryChart data={monthlyData.categoryChartData} />
      <PaymentMethodChart data={monthlyData.paymentMethodChartData} />
    </div>
  );
};

export default Dashboard;

