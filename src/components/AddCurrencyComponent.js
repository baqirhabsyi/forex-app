import React, { Component } from 'react'
import { AddCurrencyButton, AddCurrencyForm } from '../layout'
import AddButtonHandler from '../core/handler/AddButtonHandler'

const initialState = {
  active: false,
}

class AddCurrencyComponent extends Component {
  constructor(props) {
    super(props)
    this.state = initialState

    Object.assign(this, AddButtonHandler)

    this.toggleButtonState = this.toggleButtonState.bind(this)
  }

  render() {
    if (this.state.active === true) {
      return <AddCurrencyForm onPress={() => this.props.onSubmit(this)} onChange={this.props.onChange} value={this.props.value} />
    } else {
      return <AddCurrencyButton onPress={this.toggleButtonState} text={this.props.text} />
    }
  }
}

export default AddCurrencyComponent
