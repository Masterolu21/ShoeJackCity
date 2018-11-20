import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

import reducers from './reducers';
import {
    createStore,
    applyMiddleware
} from 'redux';

const logger = createLogger();
export default createStore(
    reducers,
    applyMiddleware(thunk, logger)
);
