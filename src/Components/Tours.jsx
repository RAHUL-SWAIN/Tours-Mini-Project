import  { useState } from 'react';
import './Tours.css';
import { nanoid } from 'nanoid';



function Tours({tour, removeTour}) {
    const {id , tourImg, nameOftheTour, tourDesc , tourPrice} = tour;
    const [showContent , setShowContent ] = useState(false);
   
    
  return (
  
        <div className='card'>                          
                            <img src={tourImg} alt={nameOftheTour} />
                            <h3><i>{nameOftheTour}</i></h3>
                            <p>{showContent ? tourDesc : tourDesc.slice(0,157)}....<b onClick={()=>{setShowContent(!showContent)}}>{showContent ? "See Less": "Read More"}</b></p>
                            <b>{tourPrice}</b>
                            <button onClick={()=> removeTour(id)}>Not Intrested</button>
        </div>         
                     
                
    
  )
}

export default Tours;