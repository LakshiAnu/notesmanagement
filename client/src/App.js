import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Userlist from './pages/Userlist/Userlist';
import Noteslist from './pages/Noteslist/Noteslist';
import Notescreate from './pages/Notescreate/Notescreate';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userlist" element={<Userlist />} />
        <Route path="/noteslist" element={<Noteslist />} />
        <Route path="/notescreate" element={<Notescreate />} />
      </Routes>
    </div>
  );
}

export default App;
