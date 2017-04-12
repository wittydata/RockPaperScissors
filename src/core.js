const choices = ['paper', 'rock', 'scissors']
const results = ['draw', 'lose', 'win']

export function Round () {
  return { count: 0, computer: '', player: '', result: '' }
}

export function Stats () {
  return { draw: 0, lose: 0, win: 0 }
}

export function compareChoices (computer, player) {
  if (computer === 'paper') {
    if (player === 'rock') {
      // Player loses
      return results[1]
    } else if (player === 'scissors') {
      // Player wins
      return results[2]
    }
  } else if (computer === 'rock') {
    if (player === 'paper') {
      // Player wins
      return results[2]
    } else if (player === 'scissors') {
      // Player loses
      return results[1]
    }
  } else {
    if (player === 'paper') {
      // Player loses
      return results[1]
    } else if (player === 'rock') {
      // Player wins
      return results[2]
    }
  }

  return results[0]
}

export function getRandomChoice () {
  return choices[getRandomIntInclusive(0, 2)]
}

export function initState () {
  return { round: Round(), stats: Stats() }
}

export function updateRound (round, stats, player) {
  const computer = getRandomChoice()
  const result = compareChoices(computer, player)
  const newRound = { count: round.count += 1, computer, player, result }
  const newStats = updateStats(result, stats)

  return { round: newRound, stats: newStats }
}

export function updateStats (result, stats) {
  if (result === 'draw') {
    stats.draw += 1
  } else if (result === 'lose') {
    stats.lose += 1
  } else if (result === 'win') {
    stats.win += 1
  }

  return { ...stats }
}

function getRandomIntInclusive (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
