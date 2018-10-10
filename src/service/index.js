/**
 * Converts value from base currency.
 * @param baseCurr {string}
 * @param targetCurr {string}
 * @param value {number}
 * @param rates
 * @returns {number}
 */
export function getConvertedValue(baseCurr, targetCurr, value, rates) {
  // Skips a part calculation if the base currency is Euro
  if (baseCurr === 'EUR') {
    return value * rates[targetCurr]
  }
  // Returns the value if the base or target currency is not available in rates
  if (rates[baseCurr] == null || rates[targetCurr] == null) {
    return value
  }
  return (value / rates[baseCurr]) * rates[targetCurr]
}
