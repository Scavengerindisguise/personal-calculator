import React from 'react';
import Header from './header';
import Dashboard from './dashboard';
import { connect } from 'react-redux';
import { addIncomeCalculations, addExpenseCalculations, calulationsLoading } from '../redux/actionCreators';
import { INCOMEDATA } from '../shared/income-data';
import { EXPENSEDATA } from '../shared/expense-data';

const mapStateToProps = state => {
    console.log(state);
    return {
        income: state.incomeData,
        expense: state.expenseData,
        isLoading: state.isLoading,
        errMess: state.errMess
    }
}

const mapDispatchToProps = dispatch => ({
    addIncomeCalculations: (incomeData) => dispatch(addIncomeCalculations(incomeData)),
    addExpenseCalculations: (expenseData) => dispatch(addExpenseCalculations(expenseData)),
    calulationsLoading: () => dispatch(calulationsLoading(true))
})


class Main extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    
    }

    componentDidMount(){
        console.log('Component Mounted');
        this.props.calulationsLoading();
        setTimeout(() => {
            this.props.addIncomeCalculations(INCOMEDATA);
            this.props.addExpenseCalculations(EXPENSEDATA);
        }, 2000);
     
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Header />
                <Dashboard isLoading={this.props.isLoading} errMess={this.props.errMess}
                 incomeData={this.props.income} expenseData={this.props.expense} />
            </div >
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
