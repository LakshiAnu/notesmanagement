import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Userlist from './pages/Userlist/Userlist';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userlist" element={<Userlist />} />
      </Routes>
    </div>
  );
}

export default App;
