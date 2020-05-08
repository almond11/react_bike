import React from 'react';
import './OpacityBackgroundImg.css'

const OpacityBackgroundImg = ({
  opacity,
  imgSrc
})=>(
  <img
    id='background-image'
    style={Number(opacity)>=0?{opacity}:{}}
    src={`/images/${imgSrc}`}
    alt=''
  />
)

export default OpacityBackgroundImg;
