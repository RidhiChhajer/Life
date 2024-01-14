import React from 'react'
import './feature.scss'

const Feature = (props) => {
  return (
    <div className='Feature'>
        <img src={props.img} alt={props.title}></img>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
    </div>
  )
}

export default Feature