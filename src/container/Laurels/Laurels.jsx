import React from 'react';
import './Laurels.css';
import { SubHeading } from '../../components';
import {images, data} from '../../constants';

function AwardCard({awardProp:{imgUrl,title,subtitle}}){
  return(
    <div className="app__laurels_awardscard">
    <img src={imgUrl} alt=''/>
    <div className="app__laurels_content">
      <p className="p__cormorant" style={{color:"#DCCA87"}}>{title}</p>
      <p className="p__cormorant" >{subtitle}</p>

    </div>
  </div>

  )
 
}

export function Laurels(){
  return(
  <div className='app__bg app__wrapper section__padding' id='Awards'>
    <div className='app__wrapper_info'>
      <SubHeading title="Awards & recognition"/>
      <h1 className="app__headtext__cormorant">Our Laurels</h1>
      {/* awards */}
      <div className="app__laurels_awards">
        {data.awards.map(award=><AwardCard key={award.title} awardProp={award}/>)}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="" />

    </div>
  </div>
)};

export default Laurels;
