import React, { Component } from 'react';
import './ListGoalsPage.css';
import GoalForm from '../../components/GoalForm/GoalForm';

class ListGoalsPage extends Component {
  render() {
    return (
      <div className="ListGoalsPage">
        <h1>Goals List</h1>
        <GoalForm/>
      </div>
    )
  }
}

export default ListGoalsPage;