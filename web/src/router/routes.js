import React from 'react'
import PureComponent from 'react-pure-render/component'
import { Router, Route } from 'react-router'
import history from './history'

import ChooseBoard from '../components/ChooseBoard'
import ChangeBoard from '../components/ChangeBoard'

export default class Routes extends PureComponent {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={ChooseBoard} />
        <Route path="/boards/:id" component={ChangeBoard} />
      </Router>
    )
  }
}
