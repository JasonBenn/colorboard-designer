export const allBoards = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVED_ALL_BOARDS': {
      return action.boards
    }
    default: return state;
  }
}
