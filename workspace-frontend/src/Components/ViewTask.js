import React from "react";
import { Link } from 'react-router-dom';
import '../App.css'

function ViewTask() {
    return(
        <div className="App">
            <h1>Single Task View</h1>

            <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Priority Level: High</p>
            <p>Completion Status: Completed</p>

            <Link to='/tasks'>
                <button className='back-btn'> Back </button>
            </Link>
        </div>
    )
}

export default ViewTask;