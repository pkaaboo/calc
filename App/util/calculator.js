export const initialState = {
    currentValue: '0',
    operator: null,
    previousValue: null,
};

const calculator = (type, value, state) => {
    if (type === 'number') {
        if (state.currentValue === 0) {
            return { currentValue: `${value}` }
        }
        return {
            currentValue: `${state.currentValue}${value}`
        }
    }
    if (type === 'operator') {
        return {
            operator: value,
            previousValue: state.currentValue,
            currentValue: "0"
        }
    }
    if (type === 'equal') {
        const { currentValue, previousValue, operator } = state
        const current = parseFloat(currentValue)
        const previous = parseFloat(previousValue)
        const resetState = {
            operator: null,
            previousValue: null
        }

        switch (operator) {
            case '/':
                return {
                    currentValue: previous / current,
                    ...resetState
                }
            case '*':
                return {
                    currentValue: previous * current,
                    ...resetState

                }
            case '+':
                return {
                    currentValue: previous + current,
                    ...resetState

                }
            case '-':
                return {
                    currentValue: previous - current,
                    ...resetState
                }
            default:
                return state
        }
    }
    if (type === 'clear') {
        return initialState;

    }
    if (type === 'posneg') {
        return {
            currentValue: `${parseFloat(state.currentValue) * -1}`
        }
    }
    if (type === 'percentage') {
        return {
            currentValue: `${parseFloat(state.currentValue) * 0.01}`
        }
    }
    return state
}

export default calculator