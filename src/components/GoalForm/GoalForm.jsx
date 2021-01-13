import React, { Component } from 'react';
import './GoalForm.css';

class GoalForm extends Component {
    render() {
      return (
        <div className ="GoalForm">
            <ul>
                <li>ToDo</li>
                <li>In progress</li>
                <li>Done</li>
            </ul>
        </div>
      )
    }
  }
  
  export default GoalForm;