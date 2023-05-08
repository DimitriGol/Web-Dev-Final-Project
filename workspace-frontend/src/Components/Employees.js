import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function Employees() {

    // const [employees, setEmploes] = useState([])

    return (
        <div className="App">
            <h1> Employees </h1>            

            {/* Get list of employees and output it here */}

            {/* Employee table  */}
            <table>
                <thead>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>DEPARTMENT</th>
                    <th>ACTIONS</th>
                </thead>
                {/* Example Single Employee */}
                {/* <tbody>
                    {
                        employees.map(
                            employee => 
                            <tr key={employee.id}>
                                <td>{employee.id}</td> 
                                <td>{employee.name}</td>
                                <td>{employee.department}</td>
                                <td>
                                    <button className='view-employee-btn'> View </button>
                                    <button className='delete-employee-btn'> X </button>
                                </td>   
                            </tr>  
                              
                        )
                    }
                </tbody> */}
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>Sales</td>
                        <td>
                            <button className='edit-employee-btn'> Edit </button>   
                            <button className='view-employee-btn'> View </button>
                            <button className='delete-employee-btn'> X </button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>John Doobah</td>
                        <td>Human Resources</td>
                        <td>
                            <button className='edit-employee-btn'> Edit </button>
                            <button className='view-employee-btn'> View </button>
                            <button className='delete-employee-btn'> X </button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Johnny III</td>
                        <td>Tech</td>
                        <td>
                            <button className='edit-employee-btn'> Edit </button>
                            <button className='view-employee-btn'> View </button>
                            <button className='delete-employee-btn'> X </button>
                        </td>
                    </tr>
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

export default Employees;