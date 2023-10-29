import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    const handleBudgetBlur = () => {
        // hard coded this not sure how to fix it
        // just want to get val from expenseTotal
        if(newBudget < totalExpenses) { 
            alert("You cannot reduce the budget value lower than the spending");
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{newBudget} </span>
<input 
    type="number" 
    step="10" 
    value={newBudget} 
    onChange={handleBudgetChange}
    onBlur={handleBudgetBlur}></input>
    
</div>
    );
};
export default Budget;
