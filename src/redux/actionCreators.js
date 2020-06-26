import * as ActionTypes from './actionTypes';

export const calulationsLoading = () => ({
    type: ActionTypes.CALCULATIONS_LOADING
})

export const calulationsFailed = (errMess) => ({
    type: ActionTypes.CALCULATIONS_FAILED,
    payload: errMess
})

export const addIncomeCalculations = (incomeData) => ({
    type: ActionTypes.ADD_INCOME_CALCULATIONS,
    payload: incomeData
})

export const addExpenseCalculations = (expenseData) => ({
    type: ActionTypes.ADD_EXPENSE_CALCULATIONS,
    payload: expenseData
})