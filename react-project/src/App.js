import NavTop from './components/NavTop/NavTop'
import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact'
import GridView from './components/Home/Post/Grid/GridView'
import ListView from './components/Home/Post/List/ListView'
import { Routes, Route,} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <div className='container'>
        <NavTop/>
        <div className=''>
     <Routes>
     <Route path="/" element={<Home/>}>
      <Route index element={<GridView/>}/>
     <Route path="Grid" element={<GridView />} />
                                            <Route path="List" element={<ListView />} />
                                            </Route>
<Route path="AboutUs" element={<AboutUs/>}/>
<Route path="Contact" element={<Contact/>}/>
      </Routes>
      </div>
      </div>
    </div>
  );
}

export default App;
