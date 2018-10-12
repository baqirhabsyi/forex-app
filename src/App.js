import React, { Component } from 'react';
import { CurrencyInput, CurrencyList } from './layout'
import TextInputHandler from './core/handler/TextInputHandler'
import AddCurrencyComponent from './components/AddCurrencyComponent'
import AddButtonHandler from './core/handler/AddButtonHandler'
import CurrencyListHandler from './core/handler/CurrencyListHandler'
import './App.css';

const initialState = {
  fetch: true,
  value: 1.00,
  addCurrencyValue: '',
  rates: {},
  base: '',
  mainCurrency: 'USD',
  currencyList: [],
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = initialState

    Object.assign(this, TextInputHandler)
    Object.assign(this, AddButtonHandler)
    Object.assign(this, CurrencyListHandler)

    this.onChange = this.onChange.bind(this)
    this.onAddCurrencyChange = this.onAddCurrencyChange.bind(this)
    this.addCurrency = this.addCurrency.bind(this)
    this.removeListItem = this.removeListItem.bind(this)
    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return (
      (this.state.fetch ?
        <div>
          Loading...
        </div> :
        <div className="App">
          <CurrencyInput value={this.state.value} onChange={this.onChange} currencyName="USD - United States Dollar" currencyCode={this.state.mainCurrency} />
          <CurrencyList data={this.state.currencyList} from={this.state.mainCurrency} value={this.state.value} rates={this.state.rates} onPressMinus={this.removeListItem} ownState={this} />
          <AddCurrencyComponent value={this.state.addCurrencyValue} text="Add More Currency" onSubmit={(currencyState) => this.addCurrency(this.state.addCurrencyValue, this.state.rates, currencyState, this.state.currencyList)} onChange={this.onAddCurrencyChange} />
        </div>
      )
    );
  }
}

export default App;
