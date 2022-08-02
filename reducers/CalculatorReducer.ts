type ActionType = {
  type: string
  dataValue: number
}

export const calculatorReducer = (value: Record<'amountInterval' | 'termInterval', number | string>, action: ActionType) => {
  switch (action.type) {
    case 'change_amount': {
      return { ...value, amountInterval: action.dataValue }
    }
    case 'change_term': {
      return ({ ...value, termInterval: action.dataValue })
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}