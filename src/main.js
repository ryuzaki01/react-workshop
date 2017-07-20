import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {applyRouterMiddleware, Router, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {ReduxAsyncConnect} from 'redux-connect'
import {AppContainer as HotEnabler} from 'react-hot-loader'
import {useScroll} from 'react-router-scroll';
import createStore from './redux/create'
import getRoutes from './routes'
import client from 'isomorphic-fetch'

const store = createStore(browserHistory, client, window.__data);
const history = syncHistoryWithStore(browserHistory, store);
const renderRouter = props => (<ReduxAsyncConnect
  {...props}
  helpers={{client}}
  filter={item => !item.deferred}
  render={applyRouterMiddleware(useScroll())}/>);

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

const logPageView = () => {
  console.log('Changing page')
}

const render = routes => {
  ReactDOM.render(
    <HotEnabler>
      <Provider store={store} key="provider">
        <Router history={history} render={renderRouter} onUpdate={logPageView}>
          {routes}
        </Router>
      </Provider>
    </HotEnabler>,
    document.getElementById('root'),
    () => {
      console.log('Rendered...')
    }
  );
};

render(getRoutes(store));