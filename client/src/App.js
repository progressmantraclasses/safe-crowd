import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import CCTVFeed from './components/CCTVFeed';
import Heatmap from './components/Heatmap';
import HomePage from './components/HomePage';
import Gethelp from './components/Gethelp';
import EmergencyAdmin from './components/EmergencyAdmin';
import CCTV from './components/CCTV';

const App = () => {
  return (
    <Router>  {/* Wrap everything inside BrowserRouter */}
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/cctv' element={<CCTVFeed />} />
        <Route path='/heatmap' element={<Heatmap />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/admin' element={<EmergencyAdmin />} />
        <Route path='/contact' element={<Gethelp />} />
        <Route path='/cctvs' element={<CCTV/>} />

      </Routes>
    </Router>
  );
};

export default App;
