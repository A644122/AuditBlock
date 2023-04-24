import React from 'react'
import "./Footer.css"
// import Img2 from "../Imag/telegram.jpg";
import Img3 from "../Imag/Audit.jpg";

const Footer = () => {
  return (
    <div className='footer'>
        <footer className='footer2'>
    <div class="content">
      <div className="top">
        <div className="logo-details">
          <i className="fab fa-slack"></i>
          <span className="logo_name">BlockAudit
          <p className='name_logo'>Secure your web3 future with BlockAudit's expert solutions.</p>
          </span>
        </div>
        {/* <img src={Img2} alt='imagess show' className='image' width={25}></img> */}
        <img src={Img3} alt='imagess show' className='image' width={65}></img>
      </div>
      <div className="link-boxes">
        <ul className="box">
          <li className="link_name">Social Media</li>
          <li><a href="#">Twitter</a></li>

          <li><a href="#">Telegram</a></li>
          <li><a href="#">linkedin</a></li>
          <li><a href="#">Github</a></li>
          <li><a href="#">Medium</a></li>

        </ul>
       
        <ul className="box">
          <li className="link_name">Services</li>
          <li><a href="#"> Audits</a></li>
          <li><a href="#">Pen Testing</a></li>
          <li><a href="#">Security Policies</a></li>
          <li><a href="#">Consulting</a></li>
          <li><a href="#"> Risk Management</a></li>

         
        </ul>
        <ul className="box">
          <li className="link_name">Other Links</li>
   
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Disclaimer</a></li>
          <li><a href="#">T&C</a></li>
          <li><a href="#">Cookies Policy</a></li>
        </ul>
        
      </div>
    </div>
    <div className="bottom-details">
      <div className="bottom_text">
        <span className="copyright_text">Copyright © 2023 <a href="#">||</a>All rights reserved</span>
        <span className="policy_terms">
         
          Secured By: BlockAudit
        
        </span>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer