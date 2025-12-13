import Nav from './Nav.jsx'
import Home from './Home.jsx'
import Courses from './Courses.jsx'
import {useNavigate} from 'react-router-dom'
import{Route,Routes,BrowserRouter} from 'react-router-dom'
function App() {
  const navigate = useNavigate();
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={<Courses/>}/>
    </Routes>
    </BrowserRouter>      
    <Nav/>
    </>
  )
}

export default App
