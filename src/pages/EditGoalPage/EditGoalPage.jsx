import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './EditGoalPage.css';

class EditGoalPage extends Component {

    render() {
        return (
            <div className='EditGoalPage'>
                <h2>Edit Goal</h2>

                <hr />
                <Link to='/'>Cancel</Link>
            </div>
        );
    }
}

export default EditGoalPage;