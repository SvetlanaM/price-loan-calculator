export type CalculatorType = {
	defaultValue: number
	max: number
	min: number
	step: number
}

export type CalculatorResult = {
	totalPrincipal: number,
	term: number,
	totalCostOfCredit: number,
	totalRepayableAmount: number,
	monthlyPayment: number
}

export enum States {
	NonInitialited = 'not-initiated',
	Loading = 'loading',
	Error = 'error',
	Loaded = 'loaded'
}

