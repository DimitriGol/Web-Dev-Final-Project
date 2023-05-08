import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function Tasks() {
    return (
        <div className="App">
            <h1> Tasks </h1>
            
            <table className='task-table'>

                <thead>
                    <th>ASSIGNED TO</th>
                    <th>DESCRIPTION</th>
                    <th>PRIORITY</th>
                    <th>COMPLETED</th>
                </thead>

                <tbody>
                    <tr>
                        <td>Johnny III</td>
                        <td>Make frontend responsive</td>
                        <td>High</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td>John Doobah</td>
                        <td>Description 2</td>
                        <td>Medium</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>Description</td>
                        <td>Low</td>
                        <td>No</td>
                    </tr>
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