import React from 'react';

import './Chef.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => (
  <div>
    <div className="app__bg app__wrapper section__padding">
      {/* chef image */}
      <div className="app__wrapper_img app__wrapper_img_reverse">
        <img src={images.chef} alt="" />
      </div>
      {/* chef details */}
      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word"/>
        <h1 className="app__headtext__cormorant">
          What we believe in
        </h1>
        <div className="app__chef_content">
          <div className="app__chef_content_quote">
            <img src={images.quote} alt="" />
          </div>
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ad ea soluta enim error mollitia dolore velit, quos magni consequuntur id quis incidunt, tenetur ullam praesentium. Iste magnam, distinctio praesentium provident corrupti aperiam molestiae voluptatem?</p>
        </div>
        {/* chef's name */}
        <div className="app__chef_sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef and founder</p>
          <img src={images.sign} alt="" />
        </div>
      </div>

    </div>
  </div>
);

export default Chef;
