import React, { useContext, useState } from 'react';
import './Loginpages.css';
import Form from 'react-bootstrap/Form';
import loginimg from '../../../src/images/login.svg';
import { BsFacebook } from "react-icons/bs";
import { FcGoogle} from "react-icons/fc";
import { FaMobile } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import Alert from 'react-bootstrap/Alert';
const Loginpages = () => {
  const{signupwithgoogle,signinwithemail,resetpassword}=useContext(AuthContext);
  const[passworderror,setpassworderror]=useState('');
  const[sucessmessage,setsucessmessage]=useState(false);
  const[getemail,setgetemail]=useState('');
  const navigate=useNavigate();
      const handlelogin=(event)=>{
        event.preventDefault();
        setsucessmessage(false);
        const email=event.target.email.value;
        const password=event.target.password.value;
        console.log(email,password);
        setpassworderror('');
        signinwithemail(email,password)
        .then(req=>{
          const userinfo=req.user;
          console.log(userinfo);
          setsucessmessage(true);
          navigate('/home');
        })
        .catch((error)=>{
          setpassworderror(error.message);
        })
    }
    const sigingoogle=()=>{
      signupwithgoogle()
      .then(req=>{
        const userinfo=req.user;
        console.log(userinfo);
        setsucessmessage(true);
      })
      .catch((error)=>{
        setpassworderror(error.message);
      })

    }
    const handlegetemail=(event)=>{
      const email=event.target.value;
      setgetemail(email);
      
    }
    const handleforgetpassword=()=>{
      if(!getemail){
        alert('please Give your email');
        return;
      }
      resetpassword(getemail)
      .then(()=>{
        alert('Please check your email');

      })
      .catch((error)=>{
        console.error(error);
      })

    }
    return (
        <div className='login-container'>
        <div className='login-left'>
        <img src={loginimg} alt='not found'/>
        </div>
        <div className='login-right'>
        {
          sucessmessage&&<Alert key='success' variant='success'>
          Login Sucessfull !!!!
        </Alert>
        }
        {
          passworderror&&<Alert key='danger' variant='danger'>
          {passworderror}
        </Alert>
        }
        <h4>Login</h4>
        <Form onSubmit={handlelogin}>
      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control onBlur={handlegetemail} type="email" name='email' placeholder="Your email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder=" Your Password" />
      </Form.Group>

      <button className='signin-btn'  type="submit">
        Signin
      </button>
      <div className='another-method-con'>
        <p>or signin with</p>
        <div className='another-method'>
            <BsFacebook className='facebok'></BsFacebook>
            <button onClick={sigingoogle}>
            <FcGoogle className='facebok'></FcGoogle>
            </button>

            <FaMobile className='facebok'></FaMobile>
        </div>
        <p>New user ? please <Link className='sign-btn' to='/signup'>Signup</Link></p>
        <p>Forget password ? <Link onClick={handleforgetpassword}>Reset password</Link></p>
      </div>
    </Form>
        </div>
        </div>

       
    );
};

export default Loginpages;