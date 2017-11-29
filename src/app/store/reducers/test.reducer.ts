import * as TestActions from '../actions/test.actions';
import { Test } from '../models/test.model';

export type Action = TestActions.All;

const defaultState: Test = {
  text: 'Hello. I am the default post'
};

const newState = (state: Test, newData: any) => {
  return Object.assign({}, state, newData);
};

export function testReducer(state: Test = defaultState, action: Action) {
  switch (action.type) {
    case TestActions.EDIT_TEXT:
      return newState(state, { text: action.payload });
    default:
      return defaultState;
  }
}
