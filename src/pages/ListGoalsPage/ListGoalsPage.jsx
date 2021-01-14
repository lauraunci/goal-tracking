import React from 'react';
import './ListGoalsPage.css';
import GoalForm from '../../components/GoalForm/GoalForm';

function ListGoalsPage(props) {
    return (
      <div className="ListGoalsPage">
        <h1>Goals List</h1>
         <ul className='head'>
                <li>ToDo</li>
                <li>In progress</li>
                <li>Done</li>
          </ul>
        {props.goals.map(goal => 
          <GoalForm
          key={goal._id}
          goal={goal}
          handleDeleteGoal={props.handleDeleteGoal}
          />
        )}
      </div>
    )
  }


export default ListGoalsPage;