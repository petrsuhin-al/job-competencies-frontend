import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { all } from 'redux-saga/effects';
import { connectRouter } from 'connected-react-router';
import history from '../history';
import sagas from './sagas';
import { skillsReducer } from './reducers/Skills';

const rootReducer = combineReducers({
  router: connectRouter(history),
  skillsReducer
});

function * rootSaga() {
  yield all([sagas()]);
}

const sagaMiddleware = createSagaMiddleware();
const middleware = [routerMiddleware(history), thunkMiddleware, sagaMiddleware];

let store: Store;

if (process.env.NODE_ENV === 'development') {
  store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
} else {
  store = createStore(rootReducer, applyMiddleware(...middleware));
}

export type AppState = ReturnType<typeof rootReducer>;

sagaMiddleware.run(rootSaga);
export default store;
