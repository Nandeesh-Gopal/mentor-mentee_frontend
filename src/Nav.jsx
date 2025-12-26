import {useNavigate} from 'react-router-dom'
function Nav() {
  const navigate = useNavigate();
  return (
    <nav>
      <h1>Mentor Meet</h1>      
      <button onClick={()=>navigate("/")}>Home</button>
      <button onClick={()=>navigate("/login")}>Login</button>
      <button onClick={()=>navigate("/signup")}>Sign Up</button>
      <button onClick={()=>navigate("/courses")}>Courses</button>
    </nav>
  )
}
export default Nav