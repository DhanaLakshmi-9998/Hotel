import React from 'react';

import './MenuItem.css';

const MenuItem = ({title,price,tags}) => (
  <div className='app__menuItem'>
    <div className="app__menuItem_heading">
      <div className="app__menuItem_name">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      </div>
      <div className='app__menuItem_dash'/>
      <div>
        <p className="p__cormorant app__menuItem_price">{price}</p>
      </div>      
    </div>
   
    <div className="app__menuItem_sub">
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
