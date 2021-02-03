import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import usersReducers from '../Reducers/usersReducers';
import thunk from 'redux-thunk';
import { getFirebase, reactReduxFirebase, firebaseReducer, } from 'react-redux-firebase';
import { getFirestore, firestoreReducer, reduxFirestore } from 'redux-firestore';
import firebase from '../Firebase/firebase';

const reducers = combineReducers(
    {
        user: usersReducers,
        firestore: firestoreReducer
    }
)
export const Store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebase),
        reactReduxFirebase(firebase)
    )

);