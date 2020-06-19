import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='container-fluid'>
                <h2>Dashboard</h2>
                <div className='row text-center'>
                    <div className="col-md-6">
                        <h4>Income</h4>
                        <Form>
                            <Row className="justify-content-center" form>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="source">Source</Label>
                                        <Input bsSize="sm" type="text" name="source" id="source" placeholder="Source"/>
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="amount">Amount</Label>
                                        <Input bsSize="sm" type="number" name="amount" id="amount" placeholder="Amount"/>
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="date">Date</Label>
                                        <Input bsSize="sm" type="date" name="date" id="date" placeholder="Date"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className="justify-content-end">
                            <Button outline size="sm" color="info">Add</Button>
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