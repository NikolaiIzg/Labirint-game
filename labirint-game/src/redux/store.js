import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import initState from './initState';
import rootReducer from './reducers/rootReducers';


const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
