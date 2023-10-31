import React from 'react'
import con1 from "../Images/con1.jpeg";
import con2 from "../Images/con2.jpeg";
import './Contact.css';
import Stack from 'react-bootstrap/Stack';


export default function Contact() {
  return (
    <div>
<section className='consec1'>
<div className="p-2">
<img
        className="condiv1"
  src={con1}
        alt="pic1"
    />
    
</div>

<Stack direction="horizontal" gap={2}>

<div className="p-3">

    <h2 className='ch1'>Connect with us via Email </h2>
    <p className='ch2'>Email address:customercare@paypalindia.com</p>
    <br></br>
    <h2 className='ch1'>Connect with us via Phone </h2>
    <p className='ch2'>Phone number :+ 1800 419 9833</p>

</div>
<div ><img className='condiv2'
src={con2}  
alt="pic3"
    />
    </div>
    </Stack>
</section>
</div>
  )
}
