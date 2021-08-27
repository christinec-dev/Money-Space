import React from 'react';
import { Row, Col, ListGroup, ListGroupItem, Button } from 'reactstrap';

//will display the expenses added as a list to the Tracker.js UI
const List = ({ expenses, handleDeleteExpense }) => (
    <div>
        <ListGroup className="list">
            <ListGroupItem className="header-row">
             {/*List Headers*/}
                    <Row>
                        <Col className="col-4">
                            <h3>Expense</h3>
                        </Col>
                        <Col className="col-4">
                            <h3>Amount</h3>
                        </Col>
                        <Col className="col-4">
                            <h3>Delete</h3>
                        </Col>
                    </Row>
            </ListGroupItem>
            {/*Will iterate over array to display values*/}
            {expenses.map((item, index) => (
                <ListGroupItem key={item.id} name={item.id} className="list-row">
                    <Row>
                        {/*Show Expense Name*/}
                        <Col className="col-4" name={item.name}>
                            <p className="list-item"> {item.name} </p>
                        </Col>
                        {/*Show Expense Amount*/}
                        <Col className="col-4" name={item.amount}>
                            <p className="list-item-amount"> R {item.amount} </p>
                        </Col>
                        {/*Delete Expense*/}
                        <Col className="col-4">
                            <Button type="button" onClick={() => handleDeleteExpense(index)} value="delete" delete="delete" className="list-item-button">
                                <i class="fas fa-trash-alt"></i>
                            </Button>
                        </Col>
                    </Row>
                </ListGroupItem>
            ))}
        </ListGroup>
        
    </div>
)

//exports for use in other files
export default List