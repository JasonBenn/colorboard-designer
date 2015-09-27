import { responseToJSON, generateUUID, normalizeKeys } from '../utils'

export const chooseBoard = board => {
  return { type: 'CHOOSE_BOARD', board }
}

export const receivedAllBoards = boards => {
  return { type: 'RECEIVED_ALL_BOARDS', boards }
}

// store.dispatch(receivedAllBoards([1, 2, 3]))

// note: fetchAllBoards and saveBoard are higher-order functions ("thunks")
// Their job is to trigger asynchronous work and dispatch an action to the reducer when something notable happens
// In this case: when an API response comes back with information, wrap that in an action and dispatch it to a reducer.
export const fetchAllBoards = () => dispatch => {
  fetch('/api/boards')
  .then(responseToJSON)
  .then(response => {
    const boards = response.data.map(normalizeKeys)
    dispatch(receivedAllBoards(boards))
  })
  // TODO: handle errors
}

export const toggleColor = (row, col) => {
  return { type: 'TOGGLE_COLOR', row, col }
}

export const resetColors = () => {
  return { type: 'RESET_COLORS' }
}

export const newBoard = (numRows, numCols) => {
  return { type: 'NEW_BOARD', numRows, numCols }
}

// Idempotent PUT (instead of POST) for creating (or updating) board records
export const saveBoard = board => dispatch => {
  const boardID = generateUUID()
  fetch(`/api/boards/${boardID}`, {
    method: 'PUT',
    headers: { "Content-Type": 'application/json' },
    body: JSON.stringify({ board })
  })
  // TODO: handle errors
}

