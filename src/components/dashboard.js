import React from 'react';
import { Row, Button, Form, Input } from 'reactstrap';
import { Table } from 'reactstrap';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            incomeTotal: 0,
            income: [
                {
                    source: '',
                    amount: 0,
                    date: '',
                }
            ]
        }
        this.handleChange = this.handleChange.bind(this);
        this.addIncomeRow = this.addIncomeRow.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleBlur(event) {
        console.log(event);
        let total = 0;
        for (let i = 0; i < this.state.income.length; i++) {
            total = parseInt(this.state.incomeTotal, 10) + parseInt(this.state.income[i].amount, 10);
        }
        console.log(total, typeof (this.state.incomeTotal), this.state.income);
        this.setState({
            incomeTotal: total
        });
    }

    handleChange(i, event) {
        // console.log(i, event.target.value);
        const name = event.target.name;
        const income = [...this.state.income];
        income[i] = { ...income[i], [name]: event.target.value }
        this.setState({ income });
    }

    addIncomeRow(event) {
        this.setState((prevState) => ({
            income: [...prevState.income, {
                source: '',
                amount: '',
                date: '',
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;                                                                        