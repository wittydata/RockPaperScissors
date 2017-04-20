import { initialState, endRound } from '../core'

export default (state, action) => {
  switch (action.type) {
    case 'END_ROUND':
      return { ...endRound(state, action.player) }
    case 'RESET':
      return { ...initialState() }
    default:
      return state
  }
}
