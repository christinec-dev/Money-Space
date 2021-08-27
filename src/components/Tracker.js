import React, { useState, useEffect  } from 'react';
//note the useState hook adds states to functional components and the useEffect hook handles lifecycle methods for functional components
import { Jumbotron, Container,   Card, CardText, CardBody, CardTitle } from 'reactstrap';
import Form from './Form';
import List from '../layout/List'

//Array that stores the loacalstorage API to access the storage expenses object during the browser session
const MY_EXPENSES = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []

//Main Tracker Component
function Tracker() {

    //initial values
    const [name, setName] = useState('');
    const [amount, setAmount] = useState("");
    const [expenses, setExpenses] = useState(MY_EXPENSES);
  
    //updates name input when a value is entered
    const handleName = event => {
        console.log('Name ', event.target.value)
        setName(event.target.value)
    }

    //updates amount input when a value is entered
    const handleAmount = event => {
        console.log('Amount ', event.target.value)
        setAmount(event.target.value)
    }

    //event handler to submit the form when it is submitted
    const handleSubmitForm = event => {
    //stops page from reloading upon submission
    event.preventDefault()
    //check whether the name string is not empty and the amount >0
    if (name !== '' && amount > 0 ) {
        // single expense object
        const expense = { name, amount }
        //spread operator accesses previous values
        setExpenses([...expenses,expense])
        //cleans the input fields
        setName('')
        setAmount('')
    } 
    //error handler
    else {
        alert('Invalid expense name or amount, please try again.')
        }
    }

    //when ever the initial values are updated (name, amount) then the useEffect hook will make sure the list will not clear after browser reload
    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses))
    }, [expenses])

    //event handler to delete all expenses
    const handleDeleteExpenses = () => {
        setExpenses([])
    }

    //event handler to delete expense
    const handleDeleteExpense = index => {
        const item = [...expenses]
        //deletes the singular expense
        item.splice(index, 1);
        setExpenses(item);
    }
      
    return (
        <Container className="text-center container-fluid">
        <Jumbotron fluid>
          <Card className="Card">
              <CardTitle>
                  <div className="header-row">
                      <h3>
                          Modify Expenses
                      </h3>
                  </div>
              </CardTitle>
            <CardBody className="CardBody">
                {/*Will display the total expenses*/}
                <CardTitle className="CardTitle">
                Expenses Total: {' '}
                </CardTitle>
               
                <CardText className="amount-full"> 
                R{' '} 
                {/*The reduce) method executes a function to output a single value from all the individual values from an array*/}         
               
                {/*accumulator returns the value of the previous invocation of the callback.*/}
                
                {/*currentValue is going to be equal to the iterated value of the array*/}
                {expenses.reduce((accumulator, currentValue) => {
                    return (accumulator += parseInt(currentValue.amount))
                }, 0)}
                </CardText>
            </CardBody>
            
            {/*Allows for user expense input/modification*/}
            <Form 
                name={name}
                amount={amount}
                handleName={handleName}
                handleAmount={handleAmount}
                handleSubmitForm={handleSubmitForm}
                handleDeleteExpenses={handleDeleteExpenses}
            />
            </Card>

            {/*Displays expenses List from List.js*/}
            <List expenses={expenses} handleDeleteExpense={handleDeleteExpense}/>
        </Jumbotron>
      </Container>
    )
}

export default Tracker;