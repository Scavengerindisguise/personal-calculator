import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            income: [
                { source: '', amount: '', date: '' }
            ]
        }
        this.handleChange = this.handleChange.bind(this);
        this.addIncomeRow = this.addIncomeRow.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }

    addIncomeRow(event) {
        alert(JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return (
            <div className='container-fluid'>
                <h2>Dashboard</h2>
                <div className='row text-center'>
                    <div className="col-md-6">
                        <h4>Income</h4>
                        
                        <Form onSubmit={this.addIncomeRow}>
                            <Row className="justify-content-center" form>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="source">Source</Label>
                                        <Input bsSize="sm" onChange={this.handleChange} value={this.state.source} type="text" name="source" id="source" placeholder="Source" />
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="amount">Amount</Label>
                                        <Input bsSize="sm" onChange={this.handleChange} value={this.state.amount} type="number" name="amount" id="amount" placeholder="Amount" />
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="date">Date</Label>
                                        <Input bsSize="sm" onChange={this.handleChange} value={this.state.date} type="date" name="date" id="date" placeholder="Date" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className="justify-content-end">
                                <Button type="submit" value="submit" outline size="sm" color="info">Add</Button>
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