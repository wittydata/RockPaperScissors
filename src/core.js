const choices = ['paper', 'rock', 'scissors']
const results = ['draw', 'lose', 'win']

export function endRound (state, player) {
  const computer = getRandomChoice()
  const result = compareChoices(computer, player)
  let { count, draw, lose, win } = state
  count += 1

  if (result === results[0]) {
    draw += 1
  } else if (result === results[1]) {
    lose += 1
  } else if (result === results[2]) {
    win += 1
  }

  return { ...state, count, computer, player, result, draw, lose, win }
}

export function initialState () {
  return { count: 0, computer: '', player: '', result: '', draw: 0, lose: 0, win: 0 }
}

function compareChoices (computer, player) {
  if (computer === choices[0]) {
    if (player === choices[1]) {
      // Player loses
      return results[1]
    } else if (player === choices[2]) {
      // Player wins
      return results[2]
    }
  } else if (computer === choices[1]) {
    if (player === choices[0]) {
      // Player wins
      return results[2]
    } else if (player === choices[2]) {
      // Player loses
      return results[1]
    }
  } else {
    if (player === choices[0]) {
      // Player loses
      return results[1]
    } else if (player === choices[1]) {
      // Player wins
      return results[2]
    }
  }

  return results[0]
}

function getRandomChoice () {
  return choices[getRandomIntInclusive(0, 2)]
}

function getRandomIntInclusive (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
