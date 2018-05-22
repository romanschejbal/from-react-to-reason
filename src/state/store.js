import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/Reducer.bs';

const fromReasonToJs = store => next => action => {
  if (action.tag !== undefined) {
    // reason action
    const { tag, ...rest } = action;
    action = {
      type: `REASON_ACTION_${tag}`,
      tag,
      payload: rest,
      reasonAction: action
    };
  }
  next(action);
};

const reasonReducer = reducer => (state, action) => {
  if (action.reasonAction) return reducer(state, action.reasonAction);
  return reducer(state, { ...action, tag: -1 });
};

const initialState = undefined;

export default () =>
  createStore(
    reasonReducer(rootReducer),
    applyMiddleware(thunk, fromReasonToJs),
    initialState
  );
