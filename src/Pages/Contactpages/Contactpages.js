import React from 'react';
import './Contactpages.css';
import { FcAlarmClock } from "react-icons/fc";
import { ImLocation} from "react-icons/im";
import { SlEarphonesAlt } from "react-icons/sl";
import Accordion from 'react-bootstrap/Accordion';
const Contactpages = () => {
    return (
        <div>
            {/* <h1 className='contact-hed'>contact</h1> */}
            <div className='contact-types'>
                <div className='times'>
                <FcAlarmClock className='alarm'></FcAlarmClock>
                <h6>Open Hours</h6>

                <p>Mon-Fri: 9 AM – 6 PM</p>
                <p>Saturday: 9 AM – 4 PM </p>
                <p>Sunday: Closed</p>

                </div>
                <div className='times'>
                <ImLocation className='alarm'></ImLocation>
                <h6>Open Hours</h6>

                <p>Mon-Fri: 9 AM – 6 PM</p>
                <p>Saturday: 9 AM – 4 PM </p>
                <p>Sunday: Closed</p>

                </div>
                <div className='times'>
                <SlEarphonesAlt className='alarm'></SlEarphonesAlt>
                <h6>Open Hours</h6>

                <p>Mon-Fri: 9 AM – 6 PM</p>
                <p>Saturday: 9 AM – 4 PM </p>
                <p>Sunday: Closed</p>

                </div>
            </div>
            <div className='questons-con'>
            <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What are the clinic’s operating hours?</Accordion.Header>
        <Accordion.Body>
        Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What are the services that you offer?</Accordion.Header>
        <Accordion.Body>
        Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What is considered an emergency?</Accordion.Header>
        <Accordion.Body>
        Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How much does a consultation cost?</Accordion.Header>
        <Accordion.Body>
        Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


            </div>

        </div>
    );
};

export default Contactpages;