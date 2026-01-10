import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import './CategoryChart.css';

const CategoryChart = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="chart-container">
        <h3 className="chart-title">Expenses by Category</h3>
        <div className="chart-empty">No expense data available for this month</div>
      </div>
    );
  }

  // Calculate total for percentage calculation
  const total = data.reduce((sum, item) => sum + item.value, 0);

  // Sort by value descending
  const sortedData = [...data].sort((a, b) => b.value - a.value);

  const COLORS = ['#8e8e93', '#636366', '#30d158', '#ff9500', '#ff3b30', '#af52de', '#5ac8fa', '#ffcc00'];

  return (
    <div className="chart-container">
      <h3 className="chart-title">Expenses by Category</h3>
      <div className="chart-content">
        <div className="chart-visualization">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={sortedData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                innerRadius={50}
                fill="#8884d8"
                dataKey="value"
              >
                {sortedData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-legend">
          {sortedData.map((item, index) => (
            <div key={item.name} className="legend-item">
              <div className="legend-color" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
              <span className="legend-name">{item.name}</span>
              <span className="legend-value">
                ${item.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryChart;
