import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator/Calculator';
import Quote from './components/Quote/quote.api';
import HomePage from './components/Home/Home';
import FourOFour from './components/404/404';
import Nav from './components/Navigation/Navigation';

function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </div>
  );
}

export default App;
