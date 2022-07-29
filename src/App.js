import NavTop from '../react-project/src/components/NavTop/NavTop';
import ButtonRoute from '../react-project/src/components/ButtonRoute/ButtonRoute';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../react-project/src/components/Home/Home';

function App() {
  return (
    <div className="container">
      <NavTop />
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<ButtonRoute />}>
          <Route path='Home' element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;