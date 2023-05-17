import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../App.css';

import list1 from './Server';

function Employees() {
    // GetAllEmployees
    let employees = list1.employees;

    const navigate = useNavigate();

    // DeleteEmployee
    function deleteEmployee(index) {
        return () => {
            list1.deleteEmployee(index);
            // console.log(list1.employees);
            navigate('/employees');
        };
    }

    return (
        <div className="App">
            <h1> Employees </h1>
            {employees.length === 0 ? (
                <p className='error-message'> There are no employees. Click the button below to add one. </p>
            ) : (
           
                <table>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>DEPARTMENT</th>
                            <th>ACTIONS</th>
                        </tr>
                        {
                            employees.map((employee, index) =>
                                <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td>{employee.firstName + " " + employee.lastName}
                                    </td>
                                    <td>{employee.department}</td>
                                    <td>
                                        <Link to={'/employees/' + (index+1)}>
                                            <button className='view-btn'> View </button>
                                        </Link>
                                        <Link to={'/edit-employee/' + (index+1)}>
                                            <button className='edit-btn'> Edit </button>
                                        </Link>
                                        <button className='delete-btn' onClick={deleteEmployee(index)}> X </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            )}
            {/* Add new employee */}
            <div>
                <Link to='/add-employee'>
                    <button className='add-btn'> Add Employee </button>
                </Link>
            </div>
        </div>
    )
}

export default Employees;