import { validateCurrency, checkIfAlreadyOnList } from '../../service/index'

const addButtonHandler = {
  toggleButtonState: function() {
    this.setState(prevState => ({
      active: !prevState.active,
    }))
  },
  addCurrency: function(value, rates, currencyState, currencyList) {
    if (validateCurrency(value, rates) === true && checkIfAlreadyOnList(value, currencyList) === false) {
      this.setState(prevState => ({
        currencyList: [...prevState.currencyList, value],
        addCurrencyValue: '',
      }),
        () => currencyState.setState(prevState => ({
          active: !prevState.active,
        }))
        )
    }
  },
}

export default addButtonHandler
