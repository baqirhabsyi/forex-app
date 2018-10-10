import React, { Fragment } from 'react'
import { getConvertedValue } from '../service'

export const CurrencyInput = ({ currencyName, currencyCode, value, onChange, ...props }) => (
  <Fragment>
    <p>
      {currencyName}
    </p>
    <form>
      <label>
        {currencyCode}
        <input type="text" name="currency" value={value} onInput={onChange} />
      </label>
    </form>
  </Fragment>
)

export const CurrencyList = ({ data, from, value, rates }) => data.map(item => (
  <div>
    <div>
      <p>{item}</p>
      <p>{getConvertedValue(from, item, value, rates).toFixed(2)}</p>
    </div>
  </div>
))

export const AddCurrencyButton = ({ text, onPress }) => (
  <Fragment>
    
  </Fragment>
)
