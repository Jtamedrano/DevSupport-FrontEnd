import { createStore } from 'redux';
import { useDispatch } from 'react-redux';
import RootReducer from './root_reducer';

const Store = createStore({
  reducer: null,
});

export default Store;
