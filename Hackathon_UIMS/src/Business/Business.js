import React from 'react'
import bs1 from '../Images/bs1.jpeg';
import './Business.css';
import Stack from 'react-bootstrap/Stack';
import bs2 from "../Images/bs2.jpeg";
import bs3 from "../Images/bs3.jpeg";
import bs4 from "../Images/bs4.jpeg";

export default function Business() {
  return (
    <div>
<section className='sec1'>
<Stack direction="horizontal" gap={2}>

<div className="p-3">

    <h1 className='bh1'>Grow your business </h1>
    <h1 className='bh1'>with PayPal </h1>
    <p className='bh2'>We help you achieve your business goals</p>

</div>
<div ><img className='pic6'
src={bs1}  
alt="pic6"
    />
    </div>
      </Stack>
        </section>

<section className='sec2'>

<div className="p-2">
<img
        className="bddiv2"
  src={bs2}
        alt="pic7"
    />
</div>


<div className="p-2">
<img
        className="bddiv2"
  src={bs3}
        alt="pic8"
    />
<img
        className="bddiv2"
  src={bs4}
        alt="pic9"
    />
</div>

</section>
    </div>
  )
}
