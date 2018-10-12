import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import sinon from 'sinon'
import ReactDOM from 'react-dom'
import App from '../../App'

const initialState = {
  fetch: true,
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<App />', () => {
  describe('render()', () => {
    it('renders the loading text', () => {
      const component = shallow(<App />)

      expect(toJson(component)).toMatchSnapshot()
    })
  })
})
