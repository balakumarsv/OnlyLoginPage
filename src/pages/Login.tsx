import { useState} from 'react'
// import { useRouter } from 'react-router-dom';
import { Card, Input } from 'antd';
import '../styles/Login.css'
import { FaUser, FaLock } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validmail] = useState("abc@gmail.com")
    const [validpassword] = useState("Char@123")
    // const navigate = useNavigate();
    const router = useRouter();


    // function onLogin() {
      const handleSubmit = (e) => {
        e.preventDefault();
        if ((email === "abinash@gmail.com" && password === "secret") || (email === "Mark@gmail.com" && password === "facebook")) {
          localStorage.setItem("token", "my_secret_token");
          router.replace("/");
        }
      // };
    
    //     if ((email === validmail) && (password === validpassword)) {
    //         console.log(email);
    //         console.log(password);   
    //         navigate("/Landing");  
    //     } 
    //     else{ 
    //         console.log("Invalid Email Or Password ")
    //     }
    }
    return (
        <div className="body">
                <img className='image' src="assets\images1.jpg" alt="" height={70} width={70}/>
                <Card className='text-center border-0 sub-div' title="Login" style={{ width: 300, fontSize: '18px' }}>
                <Input className='my-2' size="large" type='email' placeholder="Employee Email" prefix={<FaUser />} onChange={(ev) => setEmail(ev.target.value)} /><br />
                <Input className='my-2' size="large" type='password' placeholder="Employee Password" prefix={<FaLock />} onChange={(ev) => setPassword(ev.target.value)} /><br />
                <button type="button" className="btn btn-primary" style={{color:''}} onClick={handleSubmit}>Login </button>
            </Card>
        </div>
    );
}


