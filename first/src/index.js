import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './component/Navbar';
import Contain from './component/Contain';
import Anothercon from './component/Anothercon';
import Abouts from './component/Abouts';
import Subscribe from './component/Subscribe';
import Footer from './component/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
  <Navbar
    Name={'Home'}Name1={'AbouteUs'} Name2={'Contect'} Name3={'Service'} Name4={'Project'} Name5={'Service'} Name6={'Blog'} />
  <Contain/>
<Anothercon />

<Abouts/>

<Subscribe/>



<Footer/>
  <App />


</div>

);
