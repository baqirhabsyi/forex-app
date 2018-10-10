const textInputHandler = {
  onChange: function(event) {
    this.setState({
      value: event.target.value.replace(/\D/, ''),
    })
  }
}

export default textInputHandler
