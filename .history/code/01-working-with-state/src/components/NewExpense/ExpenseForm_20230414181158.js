import React, {useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }
    return (
      <form>
        <div className="expense__controls">
          <div className="expense__control">
            <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
          </div>
          <div className="expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
                        step="0.01"
                        onChange={}
            />
          </div>
          <div className="expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              step="2022-12-31"
            />
          </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
      </form>
    );
}

export default ExpenseForm