import React from 'react'
import img1 from '../Images/pp2.jpg'
import img2 from '../Images/pp5.jpg'
import img3 from '../Images/pp3.jpg'
import img4 from '../Images/pp6.jpg'
import img5 from '../Images/img5.png'
import img6 from '../Images/img6.png'
import Carousel from 'react-bootstrap/Carousel';
import './Crousel.css';
import Stack from 'react-bootstrap/Stack';


export default function Crousel() {
  return (
<div> 

<section className='sec1'> 

    <div><Carousel>
    <Carousel.Item interval={1500}>
    <img
        className="d-block"
src={img1}
        alt="pic1"
    />
    <Carousel.Caption>
        <div className='cf1'>
        <h1>Welcome to PayPal</h1>
        <p>Take care of you and yours at home, and we can take care of you online</p>
        </div>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
    <img
        className="d-block"
src={img2}
        alt="pic2"
    />
    <Carousel.Caption>
    <div className='cf1'>
        <h1 className='Heading2'>View Statements & manage financial data consents</h1>
        </div>
    </Carousel.Caption>
    </Carousel.Item>
<Carousel.Item interval={500}>
    <img
        className="d-block"
  src={img3}
        alt="pic3"
    />
    <Carousel.Caption>
    <div className='cf1'>
        <h1 className='Heading2'>Shop leaving all worries on us</h1>
        </div>
    </Carousel.Caption>
    </Carousel.Item>
<Carousel.Item interval={500}>
    <img
        className="d-block"
src={img4}
        alt="pic4"
    />
    <Carousel.Caption>

    <div className='cf1'>
        <h1 className='Heading4'>Recharge, pay bills & send money safely from anywhere!</h1>
        <p className="para4">Help your family and friends make safe payment with PayPal</p>
        </div>


    </Carousel.Caption>
    </Carousel.Item>
</Carousel></div>
</section>



<div className="p-2">

    <h1 className='head'>Simple, Fast & Secure</h1>
    <h4>One app for all things money</h4>
    <p>Pay bills, recharge, send money, buy gold, invest and shop at your favourite stores.</p>
    <p>-----------------------------------------------------------------------------------</p>
    <h4>Pay whenever you like, wherever you like.</h4>
    <p>Choose from options like UPI, the PayPal wallet or your Debit and Credit Card.</p>
    <p>-----------------------------------------------------------------------------------</p>
    <h4>Find all your favourite apps on PayPal Switch.</h4>
    <p>Book flights, order food or buy groceries. Use all your favourite apps without downloading them.</p>

</div>

      
      <div className="c1"><img className='pic5'
src={img5}  
alt="pic5"
    />
    </div>
 
<section className='sec3'>

<Stack direction="horizontal" gap={2}>

<div className="p-3">

    <h1 className='head'>The world is your shopping mall</h1>
    <p>From big brands to little boutiques, you can shop safely at millions of online stores with PayPal.</p>
  

</div>
<div className="p-3"><img 
src={img6}  
alt="pic6"
    />
    </div>
      </Stack>

</section>

</div>



  )
}
