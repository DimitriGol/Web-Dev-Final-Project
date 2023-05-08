import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function Tasks() {
    return (
        <div className="App">
            <h1> Tasks </h1>
            
            <table className='task-table'>

                <thead>
                    <th>TASK</th>
                    <th>DESCRIPTION</th>
                    <th>PRIORITY</th>
                    <th>COMPLETED</th>
                    <th>ASSIGNED TO</th>
                </thead>

                <tbody>
                    <tr>
                        <td>Code frontend</td>
                        <td>Make frontend responsive</td>
                        <td>High</td>
                        <td>No</td>
                        <td>Johnny III</td>
                    </tr>
                    <tr>
                        <td>Task 2</td>
                        <td>Description 2</td>
                        <td>Medium</td>
                        <td>Yes</td>
                        <td>John Doobah</td>
                    </tr>
                    <tr>
                        <td>Sell something</td>
                        <td>Description</td>
                        <td>Low</td>
                        <td>No</td>
                        <td>John Doe</td>
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