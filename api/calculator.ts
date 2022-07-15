import { CalculatorResult, CalculatorType } from './../utils/Types';
import axios, { AxiosResponse } from 'axios'
axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL

const headers =  {
	'Content-Type': 'application/json',
}

//rewrite these 2 calls with universal funcion
const CalculatorAPI = {
	get_constraints: async (): Promise<Omit<AxiosResponse, 'statusText' | 'headers' | 'config'>> => {
		const {data, status } = await axios.get<Record<'amountInterval' | 'termInterval', CalculatorType>>(`/constraints`, {
			headers: headers,
		})
		return {
			data,
			status,
		}
	},
	get_loan: async (
		amount: number,
		term: number,
	): Promise<Omit<AxiosResponse, 'statusText' | 'headers' | 'config'>> => {
		const {data, status} = await axios.get<CalculatorResult>(
			`/real-first-loan-offer?amount=${amount}&term=${term}`,
			{
				headers: headers,
			}
		)
		return {
			data,
			status,
		}
	},
}

export default CalculatorAPI