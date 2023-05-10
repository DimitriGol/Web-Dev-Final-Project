import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function ViewEmployee() {
    return (
        <div className="App">
            <h1 className='single-employee-title'> Single Employee View</h1>
            <p className='single-employee-department'> Department: goes here{/* department goes here */}</p>
            <div>
                <table>



                    <tbody>

                        <tr>
                            <th>DESCRIPTION</th>
                            <th>PRIORITY</th>
                            <th>COMPLETED</th>
                            <th>ACTIONS</th>
                        </tr>
                        
                        <tr>
                            <td>Sample</td>
                            <td>Medium</td>
                            <td>No</td>
                            <td>
                                <button className='view-btn'> View </button>
                            </td>
                        </tr>

                        <tr>
                            <td>Make frontend responsive</td>
                            <td>Low</td>
                            <td>No</td>
                            <td>
                                <button className='view-btn'> View </button>
                            </td>
                        </tr>

                        <tr>
                            <td>Debug code in server.js file</td>
                            <td>High</td>
                            <td>Yes</td>
                            <td>
                                <button className='view-btn'> View </button>
                            </td>
                        </tr>

                    </tbody>

                </table>

                <Link to='/employees'>
                    <button className='back-btn'> Back </button>
                </Link>
            </div>
        </div>
    )
} 

export default ViewEmployee;