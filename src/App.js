
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing/Landing';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
      <Router>
        <div className="App">
        <Routes>
          <Route path='/' element={<Landing/>} />  
          <Route path='*' element={<NotFound/>} />  
        </Routes>
        </div>
      </Router>
  );
}

export default App;
