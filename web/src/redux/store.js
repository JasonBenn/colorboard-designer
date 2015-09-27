import _ from 'lodash'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { rollANewGame } from '../utils'
import thunk from 'redux-thunk'
import { allBoards } from '../reducers/all-boards'
import { currentBoard } from '../reducers/current-board'

const finalCreateStore = applyMiddleware(thunk)(createStore)
const reducer = combineReducers({ allBoards, currentBoard })
const store = finalCreateStore(reducer)

export default store
