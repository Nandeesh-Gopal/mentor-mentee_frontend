import { useState } from "react";
import Nav from "react";

function Login(){
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const handlesubmit=()=>{
        console.log("Login form Submitted")
    }
    return(
        <>
            <input onChange={e=>setemail(e.target.value)}/>
            <input onChange={e=>setemail(e.target)}/>
            <button onSubmit={handlesubmit}>submit</button>
        </>
    )
}
export default Login;