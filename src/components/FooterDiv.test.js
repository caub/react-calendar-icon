import React from 'react'
import ReactDOM from 'react-dom'
import FooterDiv from './FooterDiv'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FooterDiv />, div)
})
