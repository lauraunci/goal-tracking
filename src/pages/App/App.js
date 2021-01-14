import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import AddGoalPage from '../AddGoalPage/AddGoalPage';
import ListGoalsPage from '../ListGoalsPage/ListGoalsPage';
import EditGoalPage from '../EditGoalPage/EditGoalPage';
import goalService from '../../utils/goalService';
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

  handleDeleteGoal = async id => {
    console.log(id)
    await goalService.deleteOne(id);
    this.setState(state => ({
      goals: this.state.goals.filter(a => a._id !== id)
    }), () => this.props.history.push('/'));
  }

  async componentDidMount() {
    const goals = await goalService.getAll();
    console.log(goals);
    this.setState({goals});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Goal Tracker</header>
        <NavBar/>
        <main>
        <Route exact path='/add' render={() => 
            <AddGoalPage
            handleAddGoal={this.handleAddGoal}
            />
          } />
        <Route exact path='/' render={() => 
            <ListGoalsPage
            goals={this.state.goals}
            handleDeleteGoal={this.handleDeleteGoal}
            />
          } />
        <Route exact path='/editgoal' render={() => 
            <EditGoalPage
            />
          }/>
        </main>
        <footer className='App-footer'></footer>
      </div>
    )
  }
}

export default App;
