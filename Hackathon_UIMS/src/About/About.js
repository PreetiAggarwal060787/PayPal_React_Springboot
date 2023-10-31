import React from 'react'
import ab1 from '../Images/ab1.jpeg';
import ab2 from '../Images/ab2.jpeg';
import ab3 from '../Images/ab3.jpeg';
import './About.css';
import Stack from 'react-bootstrap/Stack';


export default function About() {
  return (
    <div>
<section className='sec1'>

<div className="p-2">
<img
        className="abdiv1"
  src={ab1}
        alt="pic1"
    />
    <img
        className="abdiv2"
  src={ab2}
        alt="pic2"
    />
</div>

<Stack direction="horizontal" gap={2}>

<div className="p-3">

    <h1 className='bh1'>Mission, Vision, & Values </h1>
    <p className='bh2'>We are a purpose-driven company whose beliefs are the foundation for how we conduct business every day.</p>

</div>
<div ><img className='abdiv3'
src={ab3}  
alt="pic3"
    />
    </div>
      </Stack>



</section>
    </div>
  )
}
