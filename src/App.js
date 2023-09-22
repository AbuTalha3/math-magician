import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import NavBar from './components/NavBar';
import Quote from './components/Quote';
import './index.css';
import Home from './components/Home';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </>
  );
}

export default App;
