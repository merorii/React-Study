import { applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import rootReducer from '../reduecers';



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
