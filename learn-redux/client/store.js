import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import the root reduser
import rootReducer from './redusers/index';
//import data
import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
    posts,
    comments
}

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
    module.hot.accept('./redusers/',() => {
        const nextRootReducer = require('./redusers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;
