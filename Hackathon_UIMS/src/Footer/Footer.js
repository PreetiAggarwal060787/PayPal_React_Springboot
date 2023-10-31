import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
  
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';



export default function Footer() {
  return (
    
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
     
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Company name
              </h6>
              <p>
              PayPal Services in India are provided by PayPal Payments Private Limited (CIN U74990MH2009PTC194653). Users are advised to read the terms and conditions carefully.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a className='text-reset'>
                  Accept Payments
                </a>
              </p>
              <p>
                <a className='text-reset'>
                  Make Payments
                </a>
              </p>
              <p>
                <a className='text-reset'>
                  Manage Risk 
                </a>
              </p>
              <p>
                <a className='text-reset'>
                  Accelrate Growth
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a className='text-reset'>
                  Online Security
                </a>
              </p>
              <p>
                <a className='text-reset'>
                  Fraud Prevention
                </a>
              </p>
              <p>
                <a className='text-reset'>
                  Phishing
                </a>
              </p>
              <p>
                <a className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Futura Park, Chennai, India
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-2' />
                customercare@paypalindia.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-2' /> + 1800 419 9833
              </p>
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          PayPal.com
        </a>
      </div>
    </MDBFooter>

  );
}