import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

import list1 from './Server';
let tasks = list1.tasks;

// let lastName = employees[id-1].lastName;

function ViewEmployee() {
    
    let id = window.location.href.split('employees/').pop();
    
    function getEmployeeFullName(id) {
        let firstName = list1.getEmployeeFirstName(id);
        let lastName = list1.getEmployeeLastName(id);
        return (firstName + " " + lastName);
    }

    function getEmployeeDepartment(id){
        let department = list1.getEmployeeDepartment(id);
        return (department);
    }
    
    // //Checks to see if the employee has tasks
    // function employeeHasTasks(id){
    //    //Implement here   
    // }
    

    return (
        <div className="App">

            <h1 className='single-employee-title'> Name: {getEmployeeFullName(id)}</h1>
            <p className='single-employee-department'> Department: {getEmployeeDepartment(id)}</p>
            {/* {employeeHasTasks(id) ? (
                <div>
                    <p className='error-message'> There are no tasks assigned to this employee. Click the button below to add one. </p>
                    <div>
                        <Link to='/add-task'>
                            <button className='add-btn'> Add Task </button>
                        </Link>
                    </div>
                </div>
            ) : ( */}
                <div>
                    <table>
                        <tbody>

                            <tr>
                                <th>DESCRIPTION</th>
                                <th>PRIORITY</th>
                                <th>COMPLETED</th>
                                <th>ACTIONS</th>
                            </tr>
                            
                            {
                                tasks.map((task, index) => {
                                    // if (task.user === ()) {
                                        return (
                                            <tr key={index}>
                                                <td>{task.description}</td>
                                                <td>{task.priority}</td>
                                                <td>{task.completion}</td>
                                                <td>
                                                    <Link to={`/tasks/${index}`}>
                                                        <button className='view-btn'> View </button>
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    // }
                                })
                            }

                        </tbody>

                    </table>

                    <Link to='/employees'>
                        <button className='back-btn'> Back </button>
                    </Link>
                </div>
            {/* )} */}
        </div>
    )
} 

export default ViewEmployee;