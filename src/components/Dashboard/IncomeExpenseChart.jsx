import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './IncomeExpenseChart.css';

const IncomeExpenseChart = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="chart-container">
        <h3 className="chart-title">Income vs Expense</h3>
        <div className="chart-empty">No data available for this month</div>
      </div>
    );
  }

  return (
    <div className="chart-container">
      <h3 className="chart-title">Income vs Expense</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 0, 0, 0.05)" />
          <XAxis dataKey="date" stroke="#8e8e93" fontSize={12} fontWeight={500} />
          <YAxis stroke="#8e8e93" fontSize={12} fontWeight={500} />
          <Tooltip
            formatter={(value) => `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(40px)',
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
            }}
          />
          <Legend />
          <Bar dataKey="income" fill="#30d158" name="Income" radius={[8, 8, 0, 0]} />
          <Bar dataKey="expense" fill="#ff3b30" name="Expense" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeExpenseChart;

