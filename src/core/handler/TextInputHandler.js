const textInputHandler = {
  onChange: function(event) {
    this.setState({
      value: event.target.value.replace(/\D/, ''),
    })
  },
  onAddCurrencyChange: function(event) {
    if (event.target.value.length <= 3) {
      this.setState({ addCurrencyValue: event.target.value.replace(/[0-9]/, '').toUpperCase() })
    }
  }
}

export default textInputHandler
