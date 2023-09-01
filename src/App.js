import './App.css';
import './App.scss';
import Login from './auth/login';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Public from './public/public';
import Order from './public/components/order/order';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />}> </Route>
          <Route path='/main' element={<Public />}>
            <Route path='order' element={<Order />}> </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
