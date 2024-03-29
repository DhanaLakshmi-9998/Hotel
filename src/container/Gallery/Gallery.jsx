import React, { useRef } from 'react';
import { BsArrowLeftShort, BsArrowRightShort, BsInstagram } from 'react-icons/bs';
import './Gallery.css';
import { SubHeading } from '../../components';
import {  images} from '../../constants';

function Gallery(){
  const scrollRef=useRef(null)
  const galleryImages=[images.gallery01, images.gallery02, images.gallery03, images.gallery04]
  function scroll(direction){
    const {current}=scrollRef // destructuring
    if (direction==="left") {
      current.scrollLeft -=300;
    }
    else{
      current.scrollLeft +=300;
    }
  }
  return(
    <div className='app__gallery flex__center'>
      <div className="app__gallery_content">
        <SubHeading title="Instagram"/>
        <h1 className="app__headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{color:"#AAA",marginTop:"2rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat distinctio nobis expedita corrupti veritatis temporibus quaerat iusto doloribus voluptatem consequatur eum, libero dolores tempora a magni repellat voluptatibus tempore hic?</p>
        <button className="custom__button" type='button'>View More</button>
      </div>
      {/* gallery */}
      <div className="app__gallery_images">
         <div className="app__gallery_images_container" ref={scrollRef}>
              {galleryImages.map((image,index)=>
                <div className='app__gallery_card flex__center' key={`gallery_image_${index+1}`}>
                  <img src={image} alt="" />
                  <BsInstagram className='insta__icon'/>
                </div>)}
         </div>
      
        <div className="app__gallery__icons">
          <BsArrowLeftShort className="gallery__icon" onClick={()=>scroll('left')}/>
          <BsArrowRightShort className="gallery__icon" onClick={()=>scroll('right')}/>

        </div>  
      </div>
  </div>

  )};

export default Gallery;
