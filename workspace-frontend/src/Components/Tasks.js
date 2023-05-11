import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import list1 from './Server';

function Tasks() {

    let tasks = list1.tasks;

    const navigate = useNavigate();

    function deleteTask(index) {
        return () => {
            list1.deleteTask(index);
            console.log(list1.tasks);
            navigate('/tasks');
        };
    }

    return (
        <div className="App">
            <h1> Tasks </h1>
            <table className='task-table'>
                <tbody>
                    <tr>
                        <th>ASSIGNED TO</th>
                        <th>DESCRIPTION</th>
                        <th>PRIORITY</th>
                        <th>COMPLETED</th>
                        <th>ACTIONS</th
                    </tr>
                    {
                        tasks.map((task, index) =>
                            <tr key={index + 1}>
                                <td>{task.user.firstName + " " + task.user.lastName}</td>
                                <td>{task.description}</td>
                                <td>{task.priority}</td>
                                <td>{task.completetion}</td>
                                <td>
                                    <Link to={'/tasks/view-task'}>
                                        <button className='view-btn'> View </button>
                                    </Link>
                                    <Link to={'/tasks/edit-task' + index}>
                                        <button className='edit-btn'> Edit </button>
                                    </Link>
                                    <button className='delete-btn' onClick={deleteTask(index)}> X </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            {/* Add Task Button */}
            <div>
                <Link to='/add-task'>
                    <button className='add-btn'> Add Task </button>
                </Link>
            </div>
        </div>
    )
}

export default Tasks;