import history from '../router/history'
import { generateUUID } from '../utils'
import randomColor from 'randomcolor/randomColor'
import { merge, set } from 'lodash'

const initialState = {
  id: '',
  numRows: 1,
  numCols: 1,
  colored: {}
}

export const currentBoard = (state = initialState, action) => {
  switch (action.type) {
    case 'CHOOSE_BOARD': {
      history.pushState(null, `/boards/${action.board.id}`)
      return action.board
    }

    case 'NEW_BOARD': {
      const id = generateUUID()
      const { numRows, numCols } = action

      history.pushState(null, `/boards/${id}`)
      return { id, numRows, numCols, colored: {} }
    }

    case 'TOGGLE_COLOR': {
      const color = randomColor({ luminosity: 'dark' })
      const coord = [action.row, action.col].join(',')

      if (state.colored[coord]) {
        const newColored = { ...state.colored }
        delete newColored[coord]
        return { ...state, colored: newColored }
      } else {
        const newState = { ...state }
        return set(newState, ['colored', coord], color)
      }
    }

    case 'RESET_COLORS': {
      return { ...state, colored: {} }
    }

    default: return state;
  }
}
