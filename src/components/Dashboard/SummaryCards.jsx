import './SummaryCards.css';

const SummaryCards = ({ totalIncome, totalExpenses, netBalance }) => {
  return (
    <div className="summary-cards">
      <div className="summary-card income-card">
        <div className="card-label">Total Income</div>
        <div className="card-value income-value">
          ${totalIncome.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
      </div>

      <div className="summary-card expense-card">
        <div className="card-label">Total Expenses</div>
        <div className="card-value expense-value">
          ${totalExpenses.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
      </div>

      <div className="summary-card balance-card">
        <div className="card-label">Net Balance</div>
        <div className={`card-value balance-value ${netBalance >= 0 ? 'positive' : 'negative'}`}>
          ${netBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;

