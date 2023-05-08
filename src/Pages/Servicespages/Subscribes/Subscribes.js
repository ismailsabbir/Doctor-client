import React from 'react';
import './Subscribes.css'
const Subscribes = () => {
    return (
        <div className='subscribe-con'>
            <h1>Subscribe to the <br/> exclusive updates!</h1>
            <div>
                <input className='subscribe-email' type='email' placeholder='Enter Email'/>
                <button className='suibscribe-btn' type='submit'>SUBSCRIBES</button> <br/>
                <input className='sub-condition' type="checkbox" id="vehicle1" name="vehicle1" value="Except Terams ans condition"></input>
                <label for="vehicle1"> Except Terams ans condition</label><br></br>
            </div>
        </div>
    );
};

export default Subscribes;