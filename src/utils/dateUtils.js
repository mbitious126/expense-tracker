/**
 * Get the start of the month for a given date
 * @param {Date} date - Date object
 * @returns {Date} Start of the month
 */
export const getMonthStart = (date = new Date()) => {
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

/**
 * Get the end of the month for a given date
 * @param {Date} date - Date object
 * @returns {Date} End of the month
 */
export const getMonthEnd = (date = new Date()) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59, 999);
};

/**
 * Check if a date string falls within the current month
 * @param {string} dateString - ISO date string
 * @param {Date} referenceDate - Reference date (defaults to today)
 * @returns {boolean} True if date is in the month
 */
export const isInCurrentMonth = (dateString, referenceDate = new Date()) => {
  const date = new Date(dateString);
  const monthStart = getMonthStart(referenceDate);
  const monthEnd = getMonthEnd(referenceDate);
  return date >= monthStart && date <= monthEnd;
};

/**
 * Format date for display (MM/DD/YYYY)
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date string
 */
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

/**
 * Get current month and year as string (e.g., "January 2024")
 * @param {Date} date - Date object (defaults to today)
 * @returns {string} Month and year string
 */
export const getMonthYearString = (date = new Date()) => {
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
};

/**
 * Get today's date as ISO string (YYYY-MM-DD)
 * @returns {string} ISO date string
 */
export const getTodayISO = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

