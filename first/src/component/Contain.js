import React from "react";
import "./Contain.css";
import Image1 from "../Imag/Kyc.jpeg";
import Image2 from "../Imag/Consult.jpeg";
import Image3  from "../Imag/Secured.jpeg";

const Contain = () => {
  return (
    <div>
      <section className="contain1">
        <p>
      

          Audit <em>Service</em> For{" "}
        </p>
      </section>
      <section className="contain2">
        <p>
          Defi. Dapps.
          <p></p>
        </p>
       

      </section>
  

      <section className="contain3">
        <p id="contain4">
          Audit, KYC, Escrow, and Development -<br></br>
          <p>One stop solution</p>
        </p>
      </section>
      <section className="contain5">
        <form className="contain6">
          <h3>Rapid Audit Request</h3>
          <p>Complete the form, and we'll get in touch</p>

          <input
            className="one"
            type="text"
            placeholder="Source code"
            id="text"
          ></input>
          <input
            className="one"
            type="text"
            placeholder="Email*"
            id="email"
          ></input>
          <input
            className="one"
            type="text"
            placeholder="Telegram/discord"
            id="Telegram"
          ></input>
          <button className="btns">Submit</button>
        </form>
       </section>
       <div className="card">
       <img src={Image1} width={50} className="containImg" ></img>
       <h6>
        Audit
        </h6>
       
         </div>
         <div className="card ">
       <img src={Image2} width={50} className="containImg" ></img>
      
          <h6>

        KYC
        </h6>

        
     </div>
     <div className="card">
       <img src={Image3} width={50} className="containImg" ></img>
      <h6>
        Consult

        

        </h6>
    
     </div>
         

         
        
       
    
 </div>
  );
};

export default Contain;
