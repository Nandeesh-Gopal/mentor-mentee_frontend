import {useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
function Register() {
    const[course,setCourse]=useState('Please select a course');
    const location = useLocation();
    useEffect(() => {
        if(location.state?.course)
            setCourse(location.state.course);
    }, [location.state]);
    return (
        <div className="register">
            <h1>Register Page</h1>
            <p>Selected Course: {course}</p>
        </div>
    )
}
export default Register;