import React, { Fragment } from 'react'
import {
  Button,
  FormGroup,
  InputGroup,
  FormControl,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap'
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

export const CurrencyItem = ({...params}) => {
  const {onPressMinus, data, ownState, from, value, rates} = params

  return data.map(item => (
    <ListGroupItem header={item}>
      {getConvertedValue(from, item, value, rates).toFixed(2)}
      <Button onClick={(e) => onPressMinus(e, item, ownState)}>
        -
      </Button>
    </ListGroupItem>
  ))
}

export const CurrencyList = ({...params}) => (
  <ListGroup>
    <CurrencyItem {...params} />
  </ListGroup>
)

export const AddCurrencyButton = ({ text, onPress }) => (
  <Button bsStyle="primary" bsSize="sm" onClick={onPress}>
    {text}
  </Button>
)

export const AddCurrencyForm = ({ onPress, onChange, value }) => (
  <FormGroup>
    <InputGroup>
      <FormControl type="text" onChange={onChange} value={value}/>
      <InputGroup.Button>
        <Button onClick={onPress}>Submit</Button>
      </InputGroup.Button>
    </InputGroup>
  </FormGroup>
)
