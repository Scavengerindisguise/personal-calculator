import * as ActionTypes from './actionTypes';

export const Reducer = (state = { isLoading: true, errMess: null, incomeData: [], expenseData: [] }, action) => {
    console.log(state.incomeData,state.expenseData);
    switch (action.type) {
        case ActionTypes.ADD_INCOME_CALCULATIONS:
            return { ...state, isLoading: false, errMess: null, incomeData: action.payload }
        case ActionTypes.ADD_EXPENSE_CALCULATIONS:
            return { ...state, isLoading: false, errMess: null, expenseData: action.payload }
        case ActionTypes.CALCULATIONS_LOADING:
            return { ...state, isLoading: true, errMess: null, incomeData: [], expenseData: []}
        case ActionTypes.CALCULATIONS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload }
        default:
            return state;
    }
};
export default Reducer;