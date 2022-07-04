import { Routes, Route } from 'react-router-dom';
import './App.css';
import Admin from './routes/Admin/Admin';
import Login from './routes/Authenticate/Login';
import Register from './routes/Authenticate/Register';
import Customer from './routes/Customer/Customer';
import Landing from './routes/Home/Landing';

function App() {
  return (
    <section>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Landing />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/customer' element={<Customer />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Landing />} />
      </Routes>
    </section>
  );
}

export default App;
