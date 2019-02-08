import {
  Store,
  applyMiddleware,
  createStore,
  compose
} from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { History } from 'history';
import { rootEpic, createRootReducer } from './modules';

import { AppRootState } from './types/appRootState'

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = (typeof window !== 'undefined' && composeWithDevTools({})) || compose;

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

  if (module.hot) {
    module.hot.accept('./modules', () => {
      store.replaceReducer(createRootReducer(history));
    });
  }

  return store;
};
