import React from 'react'
import PureComponent from 'react-pure-render/component'
import { Provider } from 'react-redux'
import store from './redux/store'
import Routes from './router/Routes'

import 'normalize.css'
import './styles/main.scss'

class Root extends PureComponent {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() => <Routes />}
        </Provider>

      </div>
    )
  }
}

React.render(<Root/>, document.getElementById('main'))
