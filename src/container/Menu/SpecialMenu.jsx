import React from 'react';
import {images, data} from '../../constants';
import './SpecialMenu.css';
import { MenuItem, SubHeading } from '../../components';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='Menu'>
    {/* for heading */}
    <div className='app__specialMenu_title'>
       <SubHeading title="Menu That Fits You Pallete"/>
       <h1 className='app__headtext__cormorant'>Today's Special</h1>
    </div>
    {/* item details */}
    <div className="app__specialMenu_menu">
      {/* wines */}
      <div className="app__specialMenu_menu_wine flex__center">
        <p className="app__specialMenu_menu_heading">Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine,index)=><MenuItem title={wine.title} price={wine.price} key={wine.title+index} tags={wine.tags}/>)}
        </div>
      </div>
   
      {/* image section */}
      <div className="app__specialMenu_menu_img">
        <img src={images.menu} alt="" />
      </div>
      {/* cocktails */}
      <div className="app__specialMenu_menu_cocktail flex__center">
          <p className="app__specialMenu_menu_heading">Cocktails</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((cocktail,index)=><MenuItem title={cocktail.title} price={cocktail.price
            } key={cocktail.title+index} tags={cocktail.tags}/>)}
          </div>
      </div>
    </div>
    {/* view more button */}
    <div style={{margin:"15px"}}>
      <button type='button' className='custom__button'>
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
