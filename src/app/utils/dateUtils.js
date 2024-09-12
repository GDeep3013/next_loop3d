// utils/dateUtils.js

/**
 * Formats a date to the specified format.
 * @param {Date|string} date - The date to format.
 * @param {string} format - The format to use (e.g., 'en-GB', 'en-US').
 * @param {object} options - Formatting options (e.g., day, month, year).
 * @returns {string} - The formatted date.
 */
export function formatDate(date, format = 'en-GB', options = { day: '2-digit', month: 'short', year: 'numeric' }) {
    return new Date(date).toLocaleDateString(format, options);
}

/**
 * Formats a date to the 'en-GB' format with specific options.
 * @param {Date|string} date - The date to format.
 * @returns {string} - The formatted date.
 */
export function formatDateGB(date) {
    return formatDate(date, 'en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

/**
 * Formats a date to the 'en-US' format with specific options.
 * @param {Date|string} date - The date to format.
 * @returns {string} - The formatted date.
 */
export function formatDateUS(date) {
    return formatDate(date, 'en-US', { month: 'short', day: '2-digit', year: 'numeric' });
}

// Add more formatting functions as needed
