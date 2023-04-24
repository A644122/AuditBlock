import React from "react";
import "./Abouts.css";
// import Image1 from "../Imag/Mizan.jpeg";
import Image1 from "../Imag/logoAudit.jpeg";
import Image2 from "../Imag/Kyc.jpeg";
import Image3 from "../Imag/Consult.jpeg";
import Image4  from "../Imag/Secured.jpeg";




const Abouts = () => {
  return (
    <div>
      <section className="abouts gaga1">
        <h1>About Us</h1>
        <p>
          Our personalised approach to client service, coupled with our
          dedication to delivering exceptional results, sets us apart as a
          trusted partner in the rapidly-evolving web3 ecosystem.
        </p>
        <p>
          Partner with BlockAudit to take your web3 project to the next level
          and achieve unparalleled security and compliance.
        </p>
        <b>Reach Out To Us</b>

        <section className="afroz afroz1">
          {" "}
          <img src={Image1} width={50} className='img1'></img>
        
          {/* <p>350+ </p> */}
          <p className="position">
            350+
            <h6>Audits</h6>
          </p>
        </section>
        <section className="afroz afroz2">
          {" "}
          <img src={Image2} width={50} className='img1'></img>
          
          <p className="position">
            85+
            <h6>KYC</h6>
          </p>
        </section>
        <section className="afroz afroz3">
          {" "}
          <img src={Image4} width={50} className='img1'></img>
          
          <p className="position">
            20+
            <h6>Secured</h6>
          </p>
        </section>
        <section className="afroz afroz4">
          {" "}
          <img src={Image3} width={50} className='img1'></img>
          
          <p className="position">
            1B$ +<h6>Consultation</h6>
          </p>
        </section>

       
      </section>


    </div>
  );
};

export default Abouts;
