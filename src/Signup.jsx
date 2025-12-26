import { useState } from "react";
function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    return (
        <div>
            <h1>Signup Page</h1>
            <form>
                <input type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange} required/>
                <br/>       
                <br/>
                <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required/>  
                <br/>
                <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required/>
                <br/>           
            </form>
        </div>
    )
}   
export default Signup;