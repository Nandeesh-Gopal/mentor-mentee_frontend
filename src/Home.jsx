import Nav from "./Nav";
import {useNavigate} from 'react-router-dom'
function Home(){
    const navigate = useNavigate();
    return(
        <div>
            <Nav/>
            <button onClick={() => navigate('/courses')}>get started</button>

            <h1>Welcome to Mentor Meet</h1>
            <p>Your journey to knowledge starts here. Connect with expert mentors and explore a wide range of courses designed to help you succeed.</p>
        </div>
    )       
}
export default Home;   