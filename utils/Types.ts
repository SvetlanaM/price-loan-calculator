export type CalculatorType = {
	defaultValue: number
	max: number
	min: number
	step: number
}

export type CalculatorResult = {
	totalPrincipal?: number | undefined,
	term?: number | undefined,
	totalCostOfCredit?: number | undefined,
	totalRepayableAmount?: number | undefined,
	monthlyPayment?: number | undefined
}

export enum States {
	NonInitialited = 'not-initiated',
	Loading = 'loading',
	Error = 'error',
	Loaded = 'loaded'
}

