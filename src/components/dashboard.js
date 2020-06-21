import React from 'react';
import { Row, Button, Form, Input } from 'reactstrap';
import { Table } from 'reactstrap';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            income: [
                {
                    source: '',
                    amount: '',
                    date: '',
                }
            ]
        }
        this.handleChange = this.handleChange.bind(this);
        this.addIncomeRow = this.addIncomeRow.bind(this);
    }

    handleChange(i, event) {
        console.log(i, event.target.value);
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
                        <Input bsSize="sm" onChange={this.handleChange.bind(this, i)} value={el.amount} type="number" name="amount" id="amount" placeholder="Amount" />
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
                <h2>Dashboard</h2>
                <div className='row text-center'>
                    <div className="col-md-6">
                        <h4>Income</h4>
                        <Form onSubmit={this.addIncomeRow}>
                            <div className="dashboard-table">
                                {this.returnRows()}
                            </div>
                            <Row className="justify-content-end mr-1">
                                <Button type="submit" value="submit" outline size="sm" color="info" >Add</Button>
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