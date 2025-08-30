import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Header from './pages/Header'
import ExchangeRatelist from './pages/ExchangeRateList';
import ExchangeRateDetail from './pages/ExchangeRateDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/ratelist' element={<ExchangeRatelist />} />
          <Route path='/ratedetail' element={<ExchangeRateDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
