import Nav from "./Nav";
import {useNavigate} from 'react-router-dom'
function Home(){
    const navigate = useNavigate();
    return(
        <div>
            <Nav/>
            <button onClick={() => navigate('/courses')}>get started</button>

            <h1>Welcome to Mentor Meet</h1>
        </div>
    )       
}
export default Home;   