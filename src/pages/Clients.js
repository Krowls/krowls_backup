import React from 'react';
// import Marquee from 'react-fast-marquee';
import './Clients.css'
// import '../data/Clients'
import img1 from '../assets/images/clients/vge.png'
import img2 from '../assets/images/clients/akila.png'
import img3 from '../assets/images/clients/beyou.png'
import img4 from '../assets/images/clients/etc.png'
import img5 from '../assets/images/clients/frescobar.png'
import img6 from '../assets/images/clients/HIT.png'
import img7 from '../assets/images/clients/alessio.png'
import img8 from '../assets/images/clients/skrage.png'
import img9 from '../assets/images/clients/muvitaab.png'
import img10 from '../assets/images/clients/vcl.png'
import img11 from '../assets/images/clients/loop.png'
import img12 from '../assets/images/clients/ttm.png'

// const images = [
//     img1,
//     img2,  
//     img3,
//     img4,
//     img5,
//     img6,
//     img7,
//     img8,
//     img9,
//     img10,
//     img11,
//     img12,
//   ];

function Clients() {
  return (
    <div className='marq-images'>
   
<marquee loop="-1">
<img src={img1} alt="" />
<img src={img2} alt="" />
<img src={img3} alt="" />
<img src={img4} alt="" />
<img src={img5} alt="" />
<img src={img6} alt="" />
<img src={img7} alt="" />
<img src={img8} alt="" />
<img src={img9} alt="" />
<img src={img10} alt="" />
<img src={img11} alt="" />
<img src={img12} alt="" />

</marquee>

    </div>
  )
}

export default Clients