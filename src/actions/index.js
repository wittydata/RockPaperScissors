import { Round, Stats } from '../core'

export const endRound = (player) => ({
  type: 'END_ROUND',
  player
})

export const newRound = () => (setRound(Round()))

export const newStats = () => (setStats(Stats()))

export const setRound = (round) => ({
  type: 'SET_ROUND',
  round
})

export const setStats = (stats) => ({
  type: 'SET_STATS',
  stats
})
