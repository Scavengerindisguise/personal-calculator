import React from 'react';
import { Row, Button, Form, Input } from 'reactstrap';
import { Table } from 'reactstrap';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            incomeTotal: 0,
            expenseTotal: 0,
            paidTotal: 0,
            income: [
                {
                    source: '',
                    amount: null,
                    date: '',
                }
            ],
            expense: [
                {
                    source: '',
                    amount: null,
                    date: '',
                    paid: null,
                    status: false
                }
            ]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleExpenseChange = this.handleExpenseChange.bind(this);
        this.addIncomeRow = this.addIncomeRow.bind(this);
        this.addExpenseRow = this.addExpenseRow.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleExpenseBlur = this.handleExpenseBlur.bind(this);
        this.handlePaidBlur = this.handlePaidBlur.bind(this);
    }

    handleBlur(event) {
        console.log(event);
        let totalI = 0;
        for (let i = 0; i < this.state.income.length; i++) {
            // debugger
            if (this.state.income[i].amount !== null)
                totalI = totalI + parseInt(this.state.income[i].amount);
        }
        console.log(totalI, typeof (totalI), typeof (this.state.incomeTotal), this.state.income);
        this.setState({
            incomeTotal: parseInt(totalI)
        });
    }


    handleExpenseBlur(event) {
        console.log(event);
        let totalE = 0;
        for (let i = 0; i < this.state.expense.length; i++) {
            if (this.state.expense[i].amount !== null)
                totalE = totalE + parseInt(this.state.expense[i].amount);
        }
        console.log(totalE, typeof (this.state.expenseTotal), this.state.expense);
        this.setState({
            expenseTotal: totalE
        });
    }
    handlePaidBlur(event) {
        console.log(event);
        let totalP = 0;
        for (let i = 0; i < this.state.expense.length; i++) {
            if (this.state.expense[i].paid !== null)
                totalP = totalP + parseInt(this.state.expense[i].paid);
        }
        console.log(totalP, typeof (this.state.paidTotal), this.state.expense);
        this.setState({
            paidTotal: totalP
        });
    }

    handleChange(i, event) {
        // console.log(i, event.target.value);
        const name = event.target.name;
        const income = [...this.state.income];
        income[i] = { ...income[i], [name]: event.target.value }
        this.setState({ income });

    }
    handleExpenseChange(i, event) {
        // console.log(i, event.target.value);
        const name = event.target.name;
        const expense = [...this.state.expense];
        expense[i] = { ...expense[i], [name]: event.target.value }
        this.setState({ expense });

    }

    addIncomeRow(event) {
        this.setState((prevState) => ({
            income: [...prevState.income, {
                source: '',
                amount: null,
                date: '',
            }]
        }));
        console.log(this.state);
        event.preventDefault();
    }
    addExpenseRow(event) {
        this.setState((prevState) => ({
            expense: [...prevState.expense, {
                source: '',
                amount: null,
                date: '',
                paid: null,
                status: false
            }]
        }));
        console.log(this.state);
        event.preventDefault();
    }

    returnRows() {
        const tableRows = this.state.income.map((el, i) => {
            return (
                <tr key={i} >
                    <td>
                        <Input bsSize="sm" onChange={this.handleChange.bind(this, i)} value={el.source} type="text" name="source" id="source" placeholder="Source" />
                    </td>
                    <td>
                        <Input bsSize="sm" onBlur={this.handleBlur} onChange={this.handleChange.bind(this, i)} value={el.amount} type="number" name="amount" id="amount" placeholder="Amount" />
                    </td>
                    <td>
                        <Input bsSize="sm" onChange={this.handleChange.bind(this, i)} value={el.date} type="date" name="date" id="date" placeholder="Date" />
                    </td>
                </tr>
            );
        })


        return (
            <Table size="sm" bordered>
                <thead>
                    <tr>
                        <th>Source</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </Table>
        )
    }

    returnExpenseRows() {
        const tableRows = this.state.expense.map((el, i) => {
            return (
                <tr key={i} >
                    <td>
                        <Input bsSize="sm" onChange={this.handleExpenseChange.bind(this, i)} value={el.source} type="text" name="source" id="source" placeholder="Source" />
                    </td>
                    <td>
                        <Input bsSize="sm" onBlur={this.handleExpenseBlur} onChange={this.handleExpenseChange.bind(this, i)} value={el.amount} type="number" name="amount" id="amount" placeholder="Amount" />
                    </td>
                    <td>
                        <Input bsSize="sm" onChange={this.handleExpenseChange.bind(this, i)} value={el.date} type="date" name="date" id="date" placeholder="Date" />
                    </td>
                    <td>
                        <Input onBlur={this.handlePaidBlur} bsSize="sm" onChange={this.handleExpenseChange.bind(this, i)} value={el.paid} type="number" name="paid" id="paid" placeholder="Paid" />
                    </td>
                    <td>
                        <Input onChange={this.handleExpenseChange.bind(this, i)} type="checkbox" id="status" name="status" placeholder="Status" />
                    </td>
                </tr>
            );
        })


        return (
            <Table size="sm" bordered>
                <thead>
                    <tr>
                        <th>Source</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Paid</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </Table>
        )
    }




    render() {
        return (
            <div className='container-fluid'>
                <div className='row text-center'>
                    <div className="col-md-6">
                        <h4>Income</h4>
                        <Form onSubmit={this.addIncomeRow}>
                            <div className="dashboard-table">
                                {this.returnRows()}
                            </div>
                            <Row className="mr-1">
                                <div className="col-md-8">
                                    <p>Total: {this.state.incomeTotal}</p>
                                </div>
                                <div className="col-md-4 text-right">
                                    <Button type="submit" value="submit" outline size="sm" color="info" >Add</Button>
                                </div>
                            </Row>
                        </Form>
                    </div>
                    <div className="col-md-6">
                        <h4>Expense</h4>
                        <Form onSubmit={this.addExpenseRow}>
                            <div className="dashboard-table">
                                {this.returnExpenseRows()}
                            </div>
                            <Row className="mr-1">
                                <div className="col-md-8">
                                    <p>TotalExpense: {this.state.expenseTotal}</p>
                                    <p>TotalPaid:{this.state.paidTotal}</p>
                                </div>
                                <div className="col-md-4 text-right">
                                    <Button type="submit" value="submit" outline size="sm" color="info" >Add</Button>
                                </div>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;                                                                        