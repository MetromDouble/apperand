import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { pingEpic, pingReducer } from './ping';

export const rootEpic = combineEpics(
  pingEpic,
);

export const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  pingReducer,
});
