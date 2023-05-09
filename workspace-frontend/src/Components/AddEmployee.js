import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import list1 from './Data';

function addEmployee(firstName,lastName,department)
{
    list1.addEmployee(firstName, lastName, department);
}

function AddEmployee() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [department, setDepartment] = useState('');


    const saveEmployee = (e) => {
        e.preventDefault();
        addEmployee(firstName,lastName,department);
        console.log(list1.employees);
    }

    return (
        <div className='App'>
            <h1>Add Employee</h1>
            <div className='card-body'>
                <form>
                    <div className='form-group'>
                        <label className='form-label'> First Name: </label>
                        <input
                            className='form-control'
                            type='text'
                            placeholder='Enter First Name'
                            name='firstName'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        >
                        </input>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'> Last Name: </label>
                        <input
                            className='form-control'
                            type='text'
                            placeholder='Enter Last Name'
                            name='lastName'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        >
                        </input>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'> Department: </label>
                        <input
                            className='form-control'
                            type='text'
                            placeholder='Enter Department'
                            name='department'
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                        >
                        </input>
                    </div>
                    <button className='submit-form-btn' onClick={(e) => saveEmployee(e)}>Submit</button>
                </form>
            </div>
            <div>
                <Link to='/employees'>
                    <button className='add-btn'> Back </button>
                </Link>
            </div>
        </div>
    )
}

export default AddEmployee;