import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Dashboard extends React.Component {
    items = [];
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
        income[i] = {...income[i], [name]: event.target.value}
        this.setState({income});
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
        return this.state.income.map((el, i) => (
            <>
                <Row key={i} className="justify-content-center" form>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="source">Source</Label>
                            <Input bsSize="sm" onChange={this.handleChange.bind(this,i)} value={el.source} type="text" name="source" id="source" placeholder="Source" />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="amount">Amount</Label>
                            <Input bsSize="sm" onChange={this.handleChange.bind(this,i)} value={el.amount} type="number" name="amount" id="amount" placeholder="Amount" />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="date">Date</Label>
                            <Input bsSize="sm" onChange={this.handleChange.bind(this,i)} value={el.date} type="date" name="date" id="date" placeholder="Date" />
                        </FormGroup>
                    </Col>
                </Row>
            </>
        ))

    }

    render() {
        return (
            <div className='container-fluid'>
                <h2>Dashboard</h2>
                <div className='row text-center'>
                    <div className="col-md-6">
                        <h4>Income</h4>
                        <Form onSubmit={this.addIncomeRow}>
                            {this.returnRows()}
                            <Row className="justify-content-end">
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