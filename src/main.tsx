import './requisites'

import 'style-loader!css-loader!normalize.css'
import './styles/base.scss'

import * as React      from 'react'
import { render }      from 'react-dom'
import { Provider }    from 'react-redux'
import { createStore } from 'redux'

import App     from './components/App'
import reducer from './reducers'

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
