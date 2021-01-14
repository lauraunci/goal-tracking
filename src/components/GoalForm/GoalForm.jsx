import React from 'react';
import { Link } from 'react-router-dom';
import './GoalForm.css';

function GoalForm({goal, handleDeleteGoal}) {
  return (
    <div className ="GoalForm">
      <ul className='list'>
        <Link to='/editgoal'><li>{goal.title}&nbsp;&nbsp;
            <button
              className='btnlist'
              onClick={() => handleDeleteGoal(goal._id)}
            >
            X
            </button></li></Link>
        <li>{}</li>
        <li>{}</li>
      </ul>
    </div>
  )
}
  
  export default GoalForm;