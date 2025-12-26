import { useNavigate } from "react-router-dom";
function Courses(){
    const navigate = useNavigate();
    const courses = ['dsa','full stack','node .js','devops','cloud'];
    const handleEnroll = (course) => {
        navigate('/register',{
            state: {course}
        });
    }
    return(
        <div>
            <h1>Courses Page</h1>
            {
                courses.map((course,index) => (
                    <div key={index}>
                       <li>{course}</li>
                       <button onClick={()=>handleEnroll(course)}>Enroll</button>
                    </div>
                ))
            }

        </div>
    )
}
export default Courses;