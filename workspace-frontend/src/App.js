import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Employees from './Components/Employees';
import AddEmployee from './Components/AddEmployee';
import ViewEmployee from './Components/ViewEmployee';
import ViewTask from './Components/ViewTask';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact={true} element={<Home/>} />

          {/* Employee Routes */}
          <Route path="/employees" element={<Employees/>} />
          <Route path="/add-employee" element={<AddEmployee/>} />
          <Route path="/tasks" element={<Tasks/>} />
          <Route path="/add-task" element={<AddTask/>} />

          {/* These routes will be changed later, just used to test */}
          <Route path="/employees/:id" element={<ViewEmployee/>} />
          {/* <Route path="/view-employees/:id" element={<EditEmployee/>} /> */}
          <Route path="/tasks/view-task" element={<ViewTask/>} />"
        </Routes>
      </div>
    </Router>
  );
}

export default App;
