import { useState, useEffect } from 'react';
import { getMonthYearString } from '../../utils/dateUtils';
import './MonthSlider.css';

const MonthSlider = ({ selectedDate, onDateChange }) => {
  const [months, setMonths] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Generate list of months (12 months back and 12 months forward)
    const monthList = [];
    const today = new Date();
    for (let i = -12; i <= 12; i++) {
      const date = new Date(today.getFullYear(), today.getMonth() + i, 1);
      monthList.push(date);
    }
    setMonths(monthList);
    
    // Find current month index
    const selectedMonth = selectedDate.getMonth();
    const selectedYear = selectedDate.getFullYear();
    const index = monthList.findIndex(d => 
      d.getMonth() === selectedMonth && d.getFullYear() === selectedYear
    );
    if (index !== -1) {
      setCurrentIndex(index);
    }
  }, [selectedDate]);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      onDateChange(months[newIndex]);
    }
  };

  const handleNext = () => {
    if (currentIndex < months.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      onDateChange(months[newIndex]);
    }
  };

  if (months.length === 0) return null;

  return (
    <div className="month-slider">
      <button 
        className="month-slider-button prev" 
        onClick={handlePrevious}
        disabled={currentIndex === 0}
        aria-label="Previous month"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className="month-slider-display">
        {getMonthYearString(months[currentIndex])}
      </div>
      <button 
        className="month-slider-button next" 
        onClick={handleNext}
        disabled={currentIndex === months.length - 1}
        aria-label="Next month"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default MonthSlider;

