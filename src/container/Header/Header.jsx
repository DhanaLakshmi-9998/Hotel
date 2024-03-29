import React from 'react';
import './Header.css';
import { SubHeading } from '../../components';
import images from '../../constants/images';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
   <div className="app__wrapper_info">
   <SubHeading title="Chase the new flavor"/>  {/*here title is a props*/}
      <h1 className="app__header_h1">
        The Key To Fine Dining
      </h1>
      <p className="p__opensans text-justify" style={{margin:"2rem 0"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet amet minus debitis voluptas repudiandae nesciunt labore libero dolores rerum fuga, sit, accusantium animi suscipit? Consequatur facilis quae fuga est quod.   </p>
        <button type='button' className='custom__button'>Explore Now</button>
  
   </div>
   <div className="app__wrapper_img">
      <img src={images.welcome} alt=''/>

   </div>
  </div>
);

export default Header;
