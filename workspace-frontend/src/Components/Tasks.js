import React from 'react';
import '../App.css';

function Tasks() {
    return (
        <div className="App">
            <h1> Tasks </h1>
            <button className='add-btn'>Add Task</button>
            
            <table className='task-table'>

                <thead>
                    <th>Task</th>
                    <th>Description</th>
                    <th>Priority</th>
                    <th>Completed</th>
                    <th>Assigned To</th>
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
        </div>
    )
}

export default Tasks;