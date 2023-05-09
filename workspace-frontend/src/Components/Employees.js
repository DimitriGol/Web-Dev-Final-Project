import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import list1 from './Data';

//list1.addEmployee("John", "Doe", "Sales")
//list1.addEmployee("John", "Doobah", "Human Resources");
//list1.addEmployee("Johnny", "III", "Tech");

export function Employees() {
    // const [employees, setEmploes] = useState([])

    const deleteEmployee = (index) => {
        return () => {
            list1.deleteEmployee(index);
            console.log(list1.employees);
        }
    }
    return (
        <div className="App">
            <h1> Employees </h1>
            {/* Employee table  */}
            <table>
                {/* Example Single Employee */}
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>DEPARTMENT</th>
                        <th>ACTIONS</th>
                    </tr>
                    {
                        list1.employees.map((employee, index) =>
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{employee.firstName + " "}
                                    {employee.lastName}
                                </td>
                                <td>{employee.department}</td>
                                <td>
                                    <Link to={'/employees/' + index} element={<ViewEmployee />}>
                                        <button className='view-employee-btn'> View </button>
                                    </Link>
                                    <Link to={'/edit-employee/' + index} element={<EditEmployee />}>
                                        <button className='edit-employee-btn'> Edit </button>
                                    </Link>
                                    <button className='delete-employee-btn' onClick={deleteEmployee(index)}> X </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

            {/* Add new employee */}
            <div>
                <Link to='/add-employee'>
                    <button className='add-btn'> Add Employee </button>
                </Link>
            </div>
        </div>
    )
}

export function EditEmployee() {
    return (<div></div>
    )
}

export function ViewEmployee() {
    return (<div></div>
    )
}

export default Employees;