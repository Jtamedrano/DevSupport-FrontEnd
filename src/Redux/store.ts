import { createStore } from 'redux';
import { allReducers } from './root_reducer';

const Store = createStore(allReducers);

export default Store;
