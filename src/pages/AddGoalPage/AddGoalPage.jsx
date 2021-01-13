import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import goalService from '../../utils/goalService';
import './AddGoalPage.css';

class AddGoalPage extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            // date: ''
        };
    }
    

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let newGoal = await goalService.create(this.state);
            this.props.handleAddGoal(newGoal);
        } catch (err) {
            console.log(err);
        }
    }

    handleChange = (e) =>
        this.setState({
            [e.target.name]: e.target.value
        });
    
    isFormInvalid() {
        return !(this.state.title && this.state.description);
    }

    render() {
        return(
            <div>
                <h1>Add Goal</h1>
                <form autoComplete='off' onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>Title</label>
                        <input
                        type='text'
                        name='title'
                        className='form-control'
                        placeholder='Title'
                        value={this.title}
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Description</label>
                        <input
                        type='text'
                        name='description'
                        className='form-control'
                        placeholder='Description'
                        value={this.description}
                        onChange={this.handleChange}
                        required
                        />
                    </div>
                    {/* <div className='form-group'>
                        <label>Date</label>
                        <input
                        type='date'
                        name='date'
                        className='form-control'
                        placeholder='Date'
                        value={this.state.date}
                        onChange={this.handleChange}
                        required
                        />
                    </div> */}
                    <div>
                        <button
                        type='submit'
                        className='btn btn-default'
                        // disabled={this.isFormInvalid()}
                        >SUBMIT</button>&nbsp;&nbsp;&nbsp;
                        <Link to='/'>Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddGoalPage;