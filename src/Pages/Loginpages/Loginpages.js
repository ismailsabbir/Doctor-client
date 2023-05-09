import React from 'react';
import './Loginpages.css';
import Form from 'react-bootstrap/Form';
import loginimg from '../../../src/images/login.svg';
import { BsFacebook } from "react-icons/bs";
import { FcGoogle} from "react-icons/fc";
import { FaMobile } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Loginpages = () => {
    const handlelogin=(event)=>{
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;
        console.log(email,password);
    }
    const sigingoogle=()=>{

    }
    return (
        <div className='login-container'>
        <div className='login-left'>
        <img src={loginimg} alt='not found'/>
        </div>
        <div className='login-right'>
        <h4>Login</h4>
        <Form onSubmit={handlelogin}>
      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name='email' placeholder="Your email" />
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
      </div>
    </Form>
        </div>

        </div>
    );
};

export default Loginpages;