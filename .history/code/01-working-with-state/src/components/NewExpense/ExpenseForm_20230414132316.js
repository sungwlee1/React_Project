import React from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
    return <form>
        <div className='expense__controls'>
            <div className='expense__control'>
                <label>Title</label>
                <input type='text' />
            </div>
        </div>
    </form>
}

export default ExpenseForm