import { checkIfAlreadyOnList } from '../../service/index'
import { fetchRates } from '../../core/api/ExchangeRatesApi'

const currencyListHandler = {
  removeListItem: function(e, value, ownState) {
    const { currencyList } = ownState.state
    if (checkIfAlreadyOnList(value, currencyList) === true) {
      const indexOfCurrency = currencyList.indexOf(value)
      currencyList.splice(indexOfCurrency, 1)
      ownState.setState({currencyList: currencyList})
    }
  },
  fetchData: async function() {
    fetchRates()
      .then(response => {
        const { base, rates } = response.data
        this.setState({
          base,
          rates,
          fetch: false,
        })
      })
      .catch(error => {
        console.error(error)
      })
  }
}

export default currencyListHandler
