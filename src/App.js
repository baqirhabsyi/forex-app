import React, { Component } from 'react';
import { CurrencyInput, CurrencyList } from './layout'
import TextInputHandler from './core/TextInputHandler'
import './App.css';

const initialState = {
  value: 1.00,
  rates: {
    "RON": 4.6723,
    "RUB": 76.6491,
    "BRL": 4.5116,
    "TRY": 7.0525,
    "DKK": 7.4567,
    "KRW": 1298.27,
    "JPY": 131.31,
    "HUF": 324.43,
    "SGD": 1.587,
    "PHP": 62.482,
    "CNY": 7.9006,
    "NOK": 9.4643,
    "SEK": 10.4015,
    "MXN": 21.9097,
    "GBP": 0.8858,
    "IDR": 17448.53,
    "HRK": 7.424,
    "AUD": 1.6234,
    "ZAR": 16.8813,
    "BGN": 1.9558,
    "CZK": 25.78,
    "NZD": 1.7706,
    "INR": 84.628,
    "CAD": 1.48,
    "THB": 37.537,
    "HKD": 9.0114,
    "MYR": 4.7699,
    "PLN": 4.3071,
    "ILS": 4.1862,
    "ISK": 130.9,
    "USD": 1.1502,
    "CHF": 1.1409
  },
  base: 'EUR',
  mainCurrency: 'USD',
  currencyList: ['IDR', 'CAD'],
  dataCurr: [
    {
      id: 'IDR',
    }
  ]
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = initialState

    Object.assign(this, TextInputHandler)

    this.onChange = this.onChange.bind(this)
  }

  render() {
    return (
      <div className="App">
        <CurrencyInput value={this.state.value} onChange={this.onChange} currencyName="USD - United States Dollar" currencyCode="USD" />
        <CurrencyList data={this.state.currencyList} from={this.state.mainCurrency} value={this.state.value} rates={this.state.rates} />
      </div>
    );
  }
}

export default App;
