import React from 'react';

import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';

const Newsletter = () => (
  <div className='app__newsletter' id='Contact'>
    <div className="app__newsletter_heading">
      <SubHeading title="Newsletter"/>
      <h1 className='app__headtext__cormorant'>Subscribe to our newsletter</h1>
      <p className="p__opensans">And never miss latest updates</p>
    </div>
    <div className="app__newsletter_input flex__center">
      <input type="email" placeholder='enter email' />
      <button className="custom__button">Subscribe</button>
    </div>
    
  </div>
);

export default Newsletter;
