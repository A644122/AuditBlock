import React from 'react'
import './Navbar.css';
import Img3 from "../Imag/Audit.jpg";

const Navbar = (props) => {
  return (
    <div>
   
        <div className='flexbox1'>
        <span>
     Block Audit
     <img src={Img3} width={50} className='Ima'></img>
</span>
    
        <li className='list_item'><a href='#'>{props.Name}</a></li>
         <li className='list_item'><a href='#'>{props.Name1}</a></li>
        <li className='list_item'><a href='#'>Contect</a></li>
        <li className='list_item'><a href='#'>Service</a></li>
        <li className='list_item'><a href='#'>Project</a></li>
        <li className='list_item'><a href='#'>Service</a></li>
        <li className='list_item'><a href='#'>Blog</a></li>

        </div>
        <section className='fisrtsection'>
            <button id='btn'>Telegram
                {/* <image className='logo' src="telegram"></image> */}
            </button>
        </section>

    </div>
  )
}

export default Navbar