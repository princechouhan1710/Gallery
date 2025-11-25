import { legacy_createStore } from 'redux';
import { root } from './productReducers';
 
export let store = legacy_createStore(root);
 
console.log(store.getState())
 