import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Userlist from './pages/Userlist/Userlist';
import Noteslist from './pages/Noteslist/Noteslist';
import Notescreate from './pages/Notescreate/Notescreate';
import Notesedit from './pages/Notesedit/Notesedit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userlist" element={<Userlist />} />
        <Route path="/noteslist/:id" element={<Noteslist />} />
        <Route path="/notescreate/:id" element={<Notescreate />} />
        <Route path="/notesedit/:id/:note" element={<Notesedit />} />
      </Routes>
    </div>
  );
}

export default App;
