import { Route, Routes } from 'react-router-dom';
import './App.css';
import Maingame from './components/Maingame/Maingame';
import StartePage from './components/StartPages/StartePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<StartePage />} />
        <Route path='/game' element={<Maingame />} />
      </Routes>
    </div> 
  );
}

export default App;
