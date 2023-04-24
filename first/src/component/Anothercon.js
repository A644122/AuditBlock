import React from 'react';


import "./Anothercon.css";
import Image1 from "../Imag/Mizan.jpeg";



const Anothercon = () => {
  return (
    <div className='firstcss'>
        <h2>What We Offer
            <div>
            We specialize in providing a range of services tailored to web3 projects. At BlockAudit, our dedicated team delivers expert support and customized solutions to ensure your project thrives in the ever-changing digital landscape.
            </div>
        </h2>
     

      <section className='secondcss'>
        <p>Smart Contract
            <h1>
            AUDITS
            </h1>
            <p>Trust in our expertise to ensure optimal security and performance for your smart contracts within the dynamic web3 landscape.</p>
            <button type='submit' className='buttons'>Explore</button>
        </p>

      </section>
      <section className='thirdcss'>
        <p>Advanced
            <h1>
            Pen Test
            </h1>
            <p>Utilising advanced techniques to identify and eliminate potential security risks, you can rest assured that your project is secure and optimised.</p>
            <button type='submit' className='buttons'>Explore</button>
        </p>

      </section>
  
      <section className='fourthcss'>
        {/* <span>
            <image src="" alt=""></image>
        </span> */}
        <p>Risk
            <h1>
            Management
            </h1>
            <p>Ensure industry-standard methodologies to evaluate your project's risk profile and identify and mitigate potential threats to your digital infrastructure. </p>
            
            <button type='submit' className='buttons'>Contact Us</button>
        </p>

      </section>

      <section className='fifthcss'>
        <p>Security Policy
            <h1>
            Consultation
            </h1>
            <p>We develop customised security policies and provide guidance on regulatory compliances, risk management, and incident response planning.</p>
          
            <button type='submit' className='buttons'>Contact Us</button>
        </p>
       

    <h3 className='firstcard'>Testimonials
    </h3>
    <div className='secondcard'>
      BlockAudit exceeded our expectations in providing exceptional Smart Contract Auditing and Risk Management services. 
      

Their experienced team, in-depth knowledge, and personalized approach made working with them an absolute pleasure. We highly recommend BlockAudit for top-tier web3 project security and compliance services.
      <b className='name'>
        <img src={Image1} width={50} className='img'></img>
      Mizan_BhaiYa</b>
<b>Web3 Warriors</b>
<b>@Web3_Warriors</b>
      
    </div>

    
      </section>
     <div className='circle'></div>
  

    
    </div>
  )
}

export default Anothercon