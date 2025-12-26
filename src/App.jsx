import Home from './Home.jsx'
import Courses from './Courses.jsx'
import Register from './Register.jsx'
import{Route,Routes,BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>      
    </>
  )
}

export default App
