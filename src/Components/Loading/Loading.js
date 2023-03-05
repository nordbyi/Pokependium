import React from "react";
import spinner from '../../assets/loading-spinner.png'
import title from '../../assets/loading-title.png'

const Loading = () => {
  return (
    <div>
      <img className='spinner' src={spinner} alt='Circle of Pokemon spinning in a circle'/>
      <img className='title' src={title} alt='Pokependium title image'/>
    </div>
  )
}

export default Loading