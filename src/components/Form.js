import React from 'react';
import {Form as BTform, FormGroup, Input, Label, Col, Row, Button} from 'reactstrap';
import DateTime from './Date';


//Form for user input with props from Tracker.js which imports intitial values to be used
const Form = ({name, amount, handleAmount, handleName, handleSubmitForm, handleDeleteExpenses}) => (
    <BTform style={{ margin: 10}} onSubmit={handleSubmitForm}>
        {/*Displays Current Date*/}
        <FormGroup className="row">
        <Label for="exampleName" sm={2} className="col-lg-2">
                <h4> Current Date </h4>
            </Label>
            <Col sm={4} className="col-lg-10">
               <DateTime/>
            </Col>
        </FormGroup>
        {/*Allows user to add expense*/}
        <FormGroup className="row">
            <Label for="exampleName" sm={2} className="col-lg-2">
                <h4> Expense Name </h4>
            </Label>
            <Col sm={4} className="col-lg-10">
                <Input 
                    type="text"
                    name="name"
                    id="expenseName"
                    placeholder="Peanut Butter Sandwich"
                    value={name}
                    onChange={handleName}
                />
            </Col>
        </FormGroup>
        {/*Allows user to add expense amount*/}
        <FormGroup className="row">
            <Label for="exampleAmount" sm={2} className="col-lg-2">
                <h4> Expense Amount (R) </h4>            
            </Label>
            <Col sm={4} className="col-lg-10">
                <Input 
                    type="number"
                    name="amount"
                    id="expenseAmount"
                    placeholder="100.00"
                    value={amount}
                    onChange={handleAmount}
                />
            </Col>
        </FormGroup>
        <Row className="buttons">
            <Col>
                {/*Add Expenses*/}
                <Button type="submit" className="btn btn-primary">
                    Add Expense
                </Button>

                {/*Delete All Expenses*/}
                <Button type="submit" onClick={handleDeleteExpenses} className="btn btn-secondary">
                    Clear Expenses
                </Button>
            </Col>
        </Row>
    </BTform>
)

//exports for use in other files
export default Form