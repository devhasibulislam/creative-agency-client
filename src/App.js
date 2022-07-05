import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddService from './routes/Admin/AddService';
import Admin from './routes/Admin/Admin';
import MakeAdmin from './routes/Admin/MakeAdmin';
import ServiceList from './routes/Admin/ServiceList';
import Login from './routes/Authenticate/Login';
import Register from './routes/Authenticate/Register';
import RequireAuth from './routes/Authenticate/RequireAuth';
import Customer from './routes/Customer/Customer';
import Order from './routes/Customer/Order';
import Review from './routes/Customer/Review';
import ShowServices from './routes/Customer/ShowServices';
import Landing from './routes/Home/Landing';

function App() {
  return (
    <section>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Landing />} />
        <Route path='/admin' element={<RequireAuth><Admin /></RequireAuth>}>
          <Route index element={<ServiceList />} />
          <Route path='addService' element={<AddService />} />
          <Route path='makeAdmin' element={<MakeAdmin />} />
        </Route>
        <Route path='/customer' element={<RequireAuth><Customer /></RequireAuth>}>
          <Route index element={<Order />} />
          <Route path='showServices' element={<ShowServices />} />
          <Route path='review' element={<Review />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Landing />} />
      </Routes>
    </section>
  );
}

export default App;
