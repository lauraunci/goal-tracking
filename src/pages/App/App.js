// import logo from './logo.svg';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import AddGoalPage from '../AddGoalPage/AddGoalPage';
import ListGoalsPage from '../ListGoalsPage/ListGoalsPage';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      goals: []
    };
  }
  

  handleAddGoal = async newGoal => {
    this.setState(state => ({
      goals: [...this.state.goals, newGoal]
    }), () => this.props.history.push('/')); 
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">Goal Tracker</header>
        <NavBar/>
        <main>
        <Route exact path='/' render={() => 
            <ListGoalsPage/>
          } />
           <Route exact path='/add' render={() => 
            <AddGoalPage
            handleAddGoal={this.handleAddGoal}
            />
          } />
        </main>
      </div>
    )
  }
}

export default App;
