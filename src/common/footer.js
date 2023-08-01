import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='upper-container'>
            <h1 className='heading'>
                Start your business today for $0 state fees
            </h1>
            <div className='buttons'>
                <button className='get-started-btn'>Get Started</button>
                <button className='contact-btn'>Contact Sales</button>
            </div>
        </div>
        <div className='divider'></div>
        <div className='lower-section'>
            <div className='left-section'>
                <div className='logo'>furni.shop</div>
                <div className='small-text'>Shop that manually connects your members with the community resources</div>
            </div>  
            <div className='right-section'>
                <div className='menu-items'>
                    <div className='heading'>Entity Types</div>
                    <div className='items'>Knowledge Issue</div>
                    <div className='items'>Security</div>
                    <div className='items'>Privacy Policy</div>
                    <div className='items'>Parteners</div>
                </div>
                <div className='menu-items'>
                <div className='heading'>Services</div>
                    <div className='items'>Contact Us</div>
                    <div className='items'>Prices</div>
                    <div className='items'>Payroll</div>
                    <div className='items'>Library</div>
                </div>
                <div className='menu-items'>
                <div className='heading'>Resources</div>
                    <div className='items'>Pricing</div>
                    <div className='items'>FAQs</div>
                    <div className='items'>Contact Support</div>
                    <div className='items'>Privacy Policy</div>
                </div>
                <div className='menu-items'>
                <div className='heading'>Support</div>
                    <div className='items'>Contact</div>
                    <div className='items'>Allumnies</div>
                    <div className='items'>Stamp</div>
                    <div className='items'>Cancellation Policy</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;