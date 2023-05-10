import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import loginimg from '../../../src/images/login.svg';
import './Signuppages.css';
import { BsFacebook } from "react-icons/bs";
import { FcGoogle} from "react-icons/fc";
import { FaMobile } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import Alert from 'react-bootstrap/Alert';
const Signuppages = () => {
  const[passworderror,setpassworderror]=useState('');
  const[sucess,setsucess]=useState(false);
  const{user,createuser,signupwithgoogle,updateusername}=useContext(AuthContext);
  console.log(user);
    const handleregister=(event)=>{
      setsucess(false);
        event.preventDefault();
        const form=event.target;
    const name=event.target.name.value;
    const email=event.target.email.value;
    const password=event.target.password.value;
    const confram=event.target.conpassword.value;
    if(password.length<8){
      setpassworderror('Password at least 8 digit !');
      return;
    }
    if(password!==confram){
      setpassworderror('Please check confram password !');
    }
     setpassworderror('');
    createuser(email,password)
    .then(req=>{
      const useerinfo=req.user;
      console.log(useerinfo);
      updateusername(name)
      .then(req=>{
        const update=req.user;
        console.log(update);
      })
      .catch((error)=>{
        console.error(error);
      })
      setsucess(true);
      form.reset();
    })
    .catch((error)=>{
      console.error(error);
      setpassworderror(error.message);
    })
    }
   
    const signupgoogle=()=>{
      signupwithgoogle()
      .then(req=>{
        const userinfo=req.user;
        console.log(userinfo);
        setsucess(true);
      })
      .catch(error=>{
        setpassworderror(error.message);
      })

    }


    return (
<div className='login-container'>

        <div className='login-left'>
        <img src={loginimg} alt='not found'/>
        </div>
        <div className='login-right'>
        {
          passworderror&&<Alert key='danger' variant='danger'>
          {passworderror}
        </Alert>
        }
        {
          sucess&& <Alert key='success' variant='success'>
          Account created !!!!
        </Alert>
        }
        <h4>Signup</h4>
        <Form onSubmit={handleregister}>
        <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Your name" required />
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