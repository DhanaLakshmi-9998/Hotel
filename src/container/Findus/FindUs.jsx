import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding'>
      {/* content section */}
      <div className="app__wrapper_info">
        <SubHeading title="Content"/>
        <h1 className="app__headtext__cormorant" style={{marginBottom:"3rem"}}>Find Us</h1>
        <p className="p__cormorant">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, iure.</p>
        <p className="p__cormorant">Opening Hours</p>
        <p className="p__cormorant">Mon - Fri 08:00Am - 10:00Pm</p>
        <p className="p__cormorant">Sat - Sun 10:00Am - 07:00Pm</p>
        <div>
          <button className='custom__button'>View Us</button>
        </div>
      </div>
      {/* image section */}
      <div className="app__wrapper_img">
          <img src={images.findus} alt=''/>
      </div>
  </div>
);

export default FindUs;
