import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
