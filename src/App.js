import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Signup from './Login/Signup';
import AllTodo from './Pages/AllTodo';
import Navbar from './Pages/Navbar';
import AddToDo from './Pages/AddToDo';
import Home from './Pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Shaired/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/todo' element={<RequireAuth><AllTodo></AllTodo></RequireAuth>}></Route>
        <Route path='/addTodo' element={<RequireAuth><AddToDo></AddToDo></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
