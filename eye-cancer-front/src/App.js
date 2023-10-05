import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Chatbot from './components/pages/Chatbot';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chatbot' element={<Chatbot />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
