import { Routes, Route } from 'react-router-dom';
import './App.css';
import Admin from './routes/Admin/Admin';
import Login from './routes/Authenticate/Login';
import Register from './routes/Authenticate/Register';
import RequireAuth from './routes/Authenticate/RequireAuth';
import Customer from './routes/Customer/Customer';
import Landing from './routes/Home/Landing';

function App() {
  return (
    <section>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Landing />} />
        <Route path='/admin' element={
          <RequireAuth>
            <Admin />
          </RequireAuth>
        } />
        <Route path='/customer' element={
          <RequireAuth>
            <Customer />
          </RequireAuth>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Landing />} />
      </Routes>
    </section>
  );
}

export default App;
