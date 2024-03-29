import React from 'react';

import './AboutUs.css';
import images from '../../constants/images';

const AboutUs = () => (
  <div id='About' className='app__aboutus app__bg flex__center section__padding'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt=''/>
    </div>
    <div className="app__aboutus-content flex__center">
      {/* /About us */}
      <div className="app__aboutus-content-about">
        <h1 className="app__headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt=""  className='spoon__img'/>
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam quidem voluptate quas odio aliquid sunt perspiciatis. Enim eveniet, vitae tempore, ipsa consequatur, nobis dolores ut mollitia deleniti atque similique quas?</p>
        <button className="custom__button">Explore Now</button>
      </div>
      {/* knife */}
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="" />
      </div>
      {/* Our History */}

      <div className="app__aboutus-content-history">
        <h1 className="app__headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="" className='spoon__img'/>
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam quidem voluptate quas odio aliquid sunt perspiciatis. Enim eveniet, vitae tempore, ipsa consequatur, nobis dolores ut mollitia deleniti atque similique quas?</p>
        <button className="custom__button">Explore Now</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
