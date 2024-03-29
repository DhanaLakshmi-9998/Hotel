import React from 'react';

import './Footer.css';
import {FiFacebook, FiInstagram, FiTwitter} from "react-icons/fi"
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';

export default function Footer(){
  return(
  <div className='app__footer section__padding' >
    <FooterOverlay/>
    <Newsletter/>
    {/* details */}
    <div className="app__footer_links">
      {/* contact us*/}
      <div className='app__links_content'>
        <h1 className="app__footer_headtext">Contact Us</h1>
        <p className="p__opensans">Kukatpally, Hyderabad, Telangana</p>
        <p className="p__opensans">+91 0801234567</p>
        <p className="p__opensans">+91 0800011123</p>

      </div>
      {/* logo links */}
      <div className="app__links_logo">
        <img src={images.gericht} alt="" />
        <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others."</p>
        <img src={images.spoon} alt="" className='spoon__img' style={{marginTop:"15px"}}/>
        <div className="app__footer_links_icons">
          <FiFacebook/>
          <FiInstagram/>
          <FiTwitter/>
        </div>
      </div>
      {/* working hours */}
      <div className="app__links_work">
        <h1 className="app__footer_headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00Am - 10:00Pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">10:00Am - 07:00Pm</p>
      </div>
    </div>
    {/* copyrights section */}
    <div className="footer__copyright">
      <p className="p__opensans">2021 Gerchit. All copyrights reserved.</p>
    </div>
  </div>
)};

