import React from 'react';
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { StaticRouter, Redirect } from 'react-router-dom'

import App from '../App'

configure({ adapter: new Adapter() })

const mockTwitList = [
  {
    'id_str': 1234,
    'user': {}
  },
  {
    'id_str': 5678,
    'user': {}
  }
]

const mockTwit = [
  {
    'id_str': 1234,
    'user': {}
  }
]

describe('App', () => {
  it('should render Empty List of twits for route /', () => {
    const component = mount(
      <StaticRouter context={{}} location={'/'}>
        <App twits={[]}/>
      </StaticRouter>
    )
    expect(component).toMatchSnapshot()
  })

  it('should render List of twits for route /', () => {
    const component = mount(
      <StaticRouter context={{}} location={'/'}>
        <App twits={mockTwitList}/>
      </StaticRouter>
    )
    expect(component).toMatchSnapshot()
  })

  it('should render Twit specific for route /twit/ID', () => {
    const component = mount(
      <StaticRouter context={{}} location={'/twit/1234'}>
        <App twits={mockTwit} />
      </StaticRouter>
    )
    expect(component).toMatchSnapshot()
  })
})
