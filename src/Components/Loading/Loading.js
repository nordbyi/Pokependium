import React from "react";
import spinner from '../../assets/loading-spinner.png'
import title from '../../assets/loading-title.png'

const Loading = () => {
  return (
    <div>
      <img className='spinner' src={spinner}/>
      <img className='title' src={title}/>
    </div>
  )
}

export default Loading