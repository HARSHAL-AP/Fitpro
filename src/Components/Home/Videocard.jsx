import React from 'react'
import Style from "./Videocard.module.css"


const Videocard = ({obj}) => {
 
  return (
    <div className={Style.videocomp}>
      <video width="640" height="360" controls>
          <source src={obj.video} type="video/mp4" />
        </video>
    
      <div>
      <h2>{obj.heading}</h2>{obj.tags.map((el,index)=>{
          return <p key={index}>,{el}</p>
        })}
      </div>

    </div>
  )
}

export default Videocard