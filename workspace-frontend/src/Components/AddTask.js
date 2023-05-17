import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

import list1 from './Server';

function AddTask(){

    let employees = list1.employees;

    function addTask(user) {
        // let user = list1.employees[0];
        list1.addTask(user, description, priority, completionStatus);
    }

    const [user, setUser] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [completionStatus, setCompletionStatus] = useState(false);

    const navigate = useNavigate();

    const checkHandler = () => {
        setCompletionStatus(!completionStatus);
    }

    const saveTask = (e) => {
        if (user.length === 0 || description.length === 0 || priority.length === 0){
            alert('Please fill out all fields');
            
        }
        else{
            e.preventDefault();
            addTask();
            const task = {user, description, priority, completionStatus};
            
            console.log(task);

            // Navigate back to tasks page when form is submitted
            navigate('/tasks');
        }
    }

    return(
        <div className='App'>   
            <h1>Add Task</h1>
            {employees.length === 0 ? (
                <div>
                    <p className='error-message'> There are no employees. Click the button below to add one. </p>
                    <Link to='/add-employee'>
                        <button className='add-btn'> Add Employee </button>
                    </Link>
                </div>
            ) : (         
            <div className='card-body'>
                <form>
                    <div className='form-group'>
                        <label className='form-label'> Assign To: </label>
                        <select
                        className='assign-to-control' 
                        name='user'
                        value={user} 
                        onChange={(e) => setUser(e.target.value)} 
                        >   
                            <option value=''>Select an employee</option>
                            {employees.map((employee, index) => (
                                <option key={index} value={employee.firstName + " " + employee.lastName}>
                                    {employee.firstName} {employee.lastName}
                                </option>
                            ))}

                        </select>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'> Description: </label>
                        <input 
                            className='form-control'
                            type = 'text'
                            placeholder='Enter Description'
                            name = 'description'
                            value = {description}
                            onChange = {(e) => setDescription(e.target.value)}
                        >
                        </input>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'> Priority: </label>
                        <select 
                            className='option-control' 
                            name='priority'
                            value={priority} 
                            onChange={(e) => setPriority(e.target.value)} 
                        >
                            <option value='none'></option>
                            <option value='1'>Low</option>
                            <option value='2'>Medium</option>
                            <option value='3'>High</option>
                        </select>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'> Completion Status: </label>
                        <input 
                            className='checkbox-control'
                            type = 'checkbox'
                            placeholder='Completed?'
                            name = 'completionStatus'
                            value = {completionStatus}
                            onChange = {checkHandler}
                        >
                        </input>
                    </div>

                    <button className='submit-form-btn' onClick={(e) => saveTask(e)}>Submit</button>
                    <button className='back-btn' onClick={() => navigate('/employees')}>Back</button>'
                </form>
            </div>
        )}
        </div>
    )

}

export default AddTask;