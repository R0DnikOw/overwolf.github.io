
// take the state and return string for use as state class name
const stateClassNames = {
  [-1]: 'Deprecated',
  0: 'unsupported',
  1: 'good',
  2: 'medium',
  3: 'bad'
}
export const stateToCss = (state: number) => stateClassNames[state];

const stateLabels = {
  [-1]: 'Deprecated',
  0: 'Unsupported',
  1: 'Good to go',
  2: 'May be unavailable',
  3: 'Currently unavailable'
}

export const stateToTxt = (state: number) => stateLabels[state];;