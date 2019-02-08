import {
  Store,
  applyMiddleware,
  createStore,
  compose
} from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { rootEpic, createRootReducer } from './modules';

import { AppRootState } from './types/appRootState'

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = compose;

export default function configureStore(
  history: History,
  initialState: AppRootState = {},
): Store<AppRootState> {
  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), epicMiddleware)),
  );

  epicMiddleware.run(rootEpic);

  return store;
};
