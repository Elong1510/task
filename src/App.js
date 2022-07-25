import NavTop from './components/NavTop/NavTop';
import ButtonRoute from './components/ButtonRoute/ButtonRoute';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="container">
      <NavTop />
      <BrowserRouter>
        <Routes>
          <Route path='./Components/Home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
