import React from 'react';
import './Aboutpage.css';
import image from '../../../src/images/doctorprofile.jpg'
import { Link } from 'react-router-dom';
import { BiTime} from "react-icons/bi";
import { TfiMobile} from "react-icons/tfi";
const Aboutpage = () => {
    return (
        <div className='about-hole'>
        <div className='about-top'>
        <div className='about-top-text'>
        <p>Pediatrician</p>
            <h1>SUSSIE WOLFF</h1>
        </div>
        </div>
        <div className='about-container'>
       <div className='row justify-content-center'>
       <div className='col col-12 col-sm-12 col-md-12 col-lg-4 left-about'>
       <img src={image} alt='not found'/>
       <p>Book a visit with Sussie</p>
       <h3>WORKING HOURS</h3>
       <div className='working-hour-con'>
        <div className='working-hour'>
            <h6>MONDAY</h6>
            <p>08:00-18:30</p>
            <Link className='timebooking'>
                <p>Book</p>
                <BiTime></BiTime>

            </Link>
        </div>
       </div>
       <div className='working-hour-con'>
        <div className='working-hour'>
            <h6>MONDAY</h6>
            <p>08:00-18:30</p>
            <Link className='timebooking'>
                <p>Book</p>
                <BiTime></BiTime>

            </Link>
        </div>
       </div>
       <div className='working-hour-con'>
        <div className='working-hour'>
            <h6>MONDAY</h6>
            <p>08:00-18:30</p>
            <Link className='timebooking'>
                <p>Book</p>
                <BiTime></BiTime>

            </Link>
        </div>
       </div>
       <div className='working-hour-con'>
        <div className='working-hour'>
            <h6>MONDAY</h6>
            <p>08:00-18:30</p>
            <Link className='timebooking'>
                <p>Book</p>
                <BiTime></BiTime>

            </Link>
        </div>
       </div>
       <div className='working-hour-con'>
        <div className='working-hour'>
            <h6>MONDAY</h6>
            <p>08:00-18:30</p>
            <Link className='timebooking'>
                <p>Book</p>
                <BiTime></BiTime>

            </Link>
        </div>
       </div>
       <div className='working-hour-con'>
        <div className='working-hour'>
            <h6>MONDAY</h6>
            <p>08:00-18:30</p>
            <Link className='timebooking'>
                <p>Book</p>
                <BiTime></BiTime>

            </Link>
        </div>
       </div>
       <p>Contact Sussie</p>
       <h3>CONTACT INFO</h3>
       <div className='contact-mobile'>
       <TfiMobile></TfiMobile>
       <p>+00025915454</p>
       </div>
       <div className='contact-mobile'>
       <TfiMobile></TfiMobile>
       <p>medica123care@gmail.com</p>
       </div>
       <div className='contact-mobile'>
       <TfiMobile></TfiMobile>
       <p>Appoinment</p>
       </div>
       </div>
       <div className='col col-12 col-sm-12 col-md-12 col-lg-7 right-about'>
       <p id='about-top-text'>A physician/doctor in pediatrics is a medical practitioner that works directly with children. Also known as pediatricians, these doctors collaborate with nurses, X-ray technicians, medical assistants, and other doctors (such as emergency room doctors and surgeons) to treat children.</p>
       <div className='about-bottom-text'>
        <div className='about-botom-left'>
            <p>A typical day for a pediatrician may include appointments with sick children, conducting physicals to assess overall health, prescribing medicine, discussing treatment options with families, coordinating with other medical professionals for diagnosis, dealing with pediatric emergencies, and educating parents about their children’s illness and how to assist in the treatment process. Pediatricians may work during regular business hours or other shifts depending on the needs of their employer; some pediatricians work in private practice, and others work in hospitals and clinics that are open 24 hours a day. Most of this work is performed indoors in a medical setting.
            </p>
            <p>
            To become a pediatrician, individuals must first get a bachelor’s degree and apply to medical school. Once accepted, they complete four years of medical school and receive the medical degree and begin a residency in their chosen field.

            </p>
            <p>
            One of the many things you need to do to prepare for your little one’s arrival is to choose a doctor to oversee his or her health care. A pediatrician is medical doctor who manages the physical, behavioral, and mental health of children from birth until age 21. A pediatrician is trained to diagnose and treat a broad range of childhood illnesses from minor health problems to serious diseases.

            </p>
        </div>
        <div className='about-botom-left'>
            <p>
            Pediatricians must have basic computer skills, as lots of hospitals use digital records.

            </p>
            <p>
            They must also have strong interpersonal skills, as most of their interaction is often with sick children and their (often worried) parents. This may be a high-stress position, so the ability to work in high-stress situations and handle unexpected issues and outcomes.

            </p>
            <p>
            A typical day for a pediatrician may include appointments with sick children, conducting physicals to assess overall health, prescribing medicine, discussing treatment options with families, coordinating with other medical professionals for diagnosis, dealing with pediatric emergencies, and educating parents about their children’s illness and how to assist in the treatment process.

            </p>
            <p>
            Most hospitals ask if you have a pediatrician when you go in to deliver. Your baby’s first examination may be with a hospital pediatrician or your chosen pediatrician. This depends on hospital policy and whether your pediatrician makes rounds at the hospital where you deliver. If a hospital pediatrician examines your baby, he or she will provide your pediatrician with the records from these exams.
            </p>
        </div>
       </div>
       </div>
       </div>
</div>
        </div>

    );
};

export default Aboutpage;