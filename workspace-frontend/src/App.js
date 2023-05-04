import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Employees from './Components/Employees';
import Tasks from './Components/Tasks';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact={true} element={<Home/>} />
          <Route path="/employees" element={<Employees/>} />
          <Route path="/tasks" element={<Tasks/>} />
        </Routes>
      </div>
    </Router>
  );
}

// const Home = () => (
//   <div>
//     <h1>Logo</h1>
//     <p>All-in-one hub for managing employees and tasks</p>
//   </div>
// );

export default App;
