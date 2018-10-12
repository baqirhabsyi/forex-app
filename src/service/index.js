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

  // Change the operation to division when target currency is euro
  if (targetCurr === 'EUR') {
    return value / rates[baseCurr]
  }

  // Returns the value if the base or target currency is not available in rates
  if (rates[baseCurr] == null || rates[targetCurr] == null) {
    return value
  }
  return (value / rates[baseCurr]) * rates[targetCurr]
}

/**
 * Validates whether the currency is available in the list or not
 * @param value
 * @param rates
 * @returns {boolean}
 */
export function validateCurrency(value, rates) {
  if (value === 'EUR') {
    return true
  }
  const ratesArr = Object.keys(rates)
  const currIndex = ratesArr.indexOf(value)
  return currIndex !== -1
}

/**
 * Checks whether the currency is already listed on the list or not.
 * @param value
 * @param list
 * @returns {boolean}
 */
export function checkIfAlreadyOnList(value, list) {
  if (list.length === 0) {
    return false
  }
  const valueIndex = list.indexOf(value)
  return valueIndex !== -1
}
