import React, {useState} from 'react';
import '../App.css';

function AddTask(){

    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [completionStatus, setCompletionStatus] = useState(false);

    const checkHandler = () => {
        setCompletionStatus(!completionStatus);
        console.log(completionStatus);
    }

    const saveTask = (e) => {
        e.preventDefault();
        const task = {description, priority, completionStatus};
        
        console.log(task);
    }

    return(
        <div className='App'>   
            <h1>Add Task</h1>         
            <div className='card-body'>
                <form>
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
                </form>
            </div>
        </div>
    )

}

export default AddTask;