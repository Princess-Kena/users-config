import {createStore} from 'redux';
import usersReducers from '../Reducers/usersReducers';


export const Store = createStore(usersReducers);