import React from 'react';
import Form from 'react-bootstrap/Form';
import loginimg from '../../../src/images/login.svg';
import './Signuppages.css';
import { BsFacebook } from "react-icons/bs";
import { FcGoogle} from "react-icons/fc";
import { FaMobile } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Signuppages = () => {
    const handleregister=(event)=>{
        event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const password=event.target.password.value;
    const confram=event.target.conpassword.value;
    console.log(email,password,name,confram);

    }
    const signupgoogle=()=>{

    }
    return (
<div className='login-container'>
        <div className='login-left'>
        <img src={loginimg} alt='not found'/>
        </div>
        <div className='login-right'>
        <h4>Signup</h4>
        <Form onSubmit={handleregister}>
        <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Your name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name='email' placeholder="Your email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder=" Your Password" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Confarm Password</Form.Label>
        <Form.Control type="password" name='conpassword' placeholder=" Your Password" />
      </Form.Group>

      <button className='signin-btn'  type="submit">
        Signup
      </button>
      <div className='another-method-con'>
        <p>or signup with</p>
        <div className='another-method'>
            <BsFacebook className='facebok'></BsFacebook>
            <button onClick={signupgoogle}><FcGoogle className='facebok'></FcGoogle></button>
            <FaMobile className='facebok'></FaMobile>
        </div>
        <p>Have an acount? please <Link className='sign-btn' to='/login'>Login</Link></p>
      </div>
    </Form>
        </div>

        </div>
    );
};

export default Signuppages;