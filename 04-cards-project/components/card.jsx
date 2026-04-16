import React from 'react'
import { Bookmark } from "lucide-React"


const card = (props) => {

  
  return (
     <div className="card">
        <div>
          <div className="top">
            <img src={props.brandLogo} alt="" />
            <button>Save <Bookmark color='rgba(128, 128, 128, 0.751)' size={25} /> </button>
          </div>

          
          <div className="center">
            <h3>{props.companyName} <span>{props.datePosted}</span> </h3>
            <h2>{props.post}</h2>
            <div className='section'>
              <h4>{props.tag1} </h4>
              <h4>{props.tag2}</h4>
            </div>


          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>

      </div>

  )
}

export default card
