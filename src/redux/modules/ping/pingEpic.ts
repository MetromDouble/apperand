
import { Action } from 'redux';
import { PING, pongAction } from '.';
import { ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { delay, mapTo } from 'rxjs/operators';

export const pingEpic = (action$: Observable<Action>) => action$.pipe(
  ofType(PING),
  delay(1000),
  mapTo(pongAction())
);
