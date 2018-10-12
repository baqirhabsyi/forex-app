import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import App from '../../App'
import ReactDOM from 'react-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App displays loading text for the first time', () => {
  describe('render()', () => {
    test('renders the loading text', () => {
      const component = shallow(<App />)

      expect(toJson(component)).toMatchSnapshot()
    })
  })
})


