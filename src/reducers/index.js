import { updateRound } from '../core'

export default (state, action) => {
  switch (action.type) {
    case 'END_ROUND':
      return { ...state, ...updateRound(state.round, state.stats, action.player) }
    case 'SET_ROUND':
      return { ...state, round: { ...action.round } }
    case 'SET_STATS':
      return { ...state, stats: { ...action.stats } }
    default:
      return state
  }
}
