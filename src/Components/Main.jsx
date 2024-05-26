import React from 'react'
import { nanoid } from 'nanoid';
import Tours from './Tours';
import  { useState } from 'react';
import './Tours.css'


const toursData =[
    {
        id:nanoid(),
        tourImg:"https://d3r8gwkgo0io6y.cloudfront.net/upload/RF/RFCOVER.jpg",
        nameOftheTour:"Rajasthan Mewad With Mt. Abu",
        tourDesc :"Boating at Lake Pichola famous for it's picturesque bea,Boating at Lake Pichola famous for it's picturesque bea,Boating at Lake Pichola famous for it's picturesque beaBoating at Lake Pichola famous for it's picturesque bea,Boating at Lake Pichola famous for it's picturesque beaBoating at Lake Pichola famous for it's picturesque bea",
        tourPrice:"₹ 23899"
    },
    {
        id:nanoid(),
        tourImg:"https://d3r8gwkgo0io6y.cloudfront.net/uploadtl_feedback/E6120816tl_feedback/E6120816tl_feedback/E6120816/RB/rsz_rajasthan.jpg",
        nameOftheTour:"Rajasthan Mewad With Ranthambore",
        tourDesc :"Canter safari in Ranthambore National park - one of theCanter safari in Ranthambore National park - one of theCanter safari in Ranthambore National park - one of theCanter safari in Ranthambore National park - one of theCanter safari in Ranthambore National park - one of theCanter safari in Ranthambore National park - one of the",
        tourPrice:"₹ 20000"
    },
    {
        id:nanoid(),
        tourImg:"https://d3r8gwkgo0io6y.cloudfront.net/upload/RH/Humayun-Tomb.jpg",
        nameOftheTour:"Delhi Agra Jaipur",
        tourDesc :"Red Fort – A UNESCO World Heritage Site. Taj Mahal – One of the 7 wonders of the world Qutub   Minar – One of the tallest minarets in the world.Red Fort – A UNESCO World Heritage Site. Taj Mahal – One of the 7 wonders of the world Qutub   Minar – One of the tallest minarets in the world.Red Fort – A UNESCO World Heritage Site. Taj Mahal – One of the 7 wonders of the world Qutub   Minar – One of the tallest minarets in the world.",
        tourPrice:"₹ 26899"
    },
    {
        id:nanoid(),
        tourImg:"https://cdn.tourradar.com/s3/tour/645x430/99250_f147ec.jpg",
        nameOftheTour:"Incredible Golden Triangle tour with Udaipur, Mumbai & Goa",
        tourDesc :"Red Fort – A UNESCO World Heritage Site. Taj Mahal – One of the 7 wonders of the world Qutub   Minar – One of the tallest minarets in the world.Red Fort – A UNESCO World Heritage Site. Taj Mahal – One of the 7 wonders of the world Qutub   Minar – One of the tallest minarets in the world.Red Fort – A UNESCO World Heritage Site. Taj Mahal – One of the 7 wonders of the world Qutub   Minar – One of the tallest minarets in the world.",
        tourPrice:"₹ 22899"
    },
    {
        id:nanoid(),
        tourImg:"https://cdn.tourradar.com/s3/tour/645x430/88881_624547a9a8605.jpg",
        nameOftheTour:"India's Top Selling Golden Triangle",
        tourDesc :"Red Fort – A UNESCO World Heritage Site. Taj Mahal – One of the 7 wonders of the world Qutub   Minar – One of the tallest minarets in the world.Red Fort – A UNESCO World Heritage Site. Taj Mahal – One of the 7 wonders of the world Qutub   Minar – One of the tallest minarets in the world.Red Fort – A UNESCO World Heritage Site. Taj Mahal – One of the 7 wonders of the world Qutub   Minar – One of the tallest minarets in the world.",
        tourPrice:"₹ 19899"
    },
    {
        id:nanoid(),
        tourImg:"https://cdn.tourradar.com/s3/tour/645x430/88875_5be70b31.jpg",
        nameOftheTour:"Royal Tour of India(Golden Triangle with Rajasthan)",
        tourDesc :"Red Fort – A UNESCO World Heritage Site. Taj Mahal – One of the 7 wonders of the world Qutub   Minar – One of the tallest minarets in the world.Red Fort – A UNESCO World Heritage Site. Taj Mahal – One of the 7 wonders of the world Qutub   Minar – One of the tallest minarets in the world.Red Fort – A UNESCO World Heritage Site. Taj Mahal – One of the 7 wonders of the world Qutub   Minar – One of the tallest minarets in the world.",
        tourPrice:"₹ 30899"
    },
    {
        id:nanoid(),
        tourImg:"https://cdn.tourradar.com/s3/tour/645x430/98622_a16aa9bc.jpg",
        nameOftheTour:"Explore Golden Triangle",
        tourDesc :"Red Fort – A UNESCO World Heritage Site. Taj Mahal – One of the 7 wonders of the world Qutub   Minar – One of the tallest minarets in the world.Red Fort – A UNESCO World Heritage Site. Taj Mahal – One of the 7 wonders of the world Qutub   Minar – One of the tallest minarets in the world.Red Fort – A UNESCO World Heritage Site. Taj Mahal – One of the 7 wonders of the world Qutub   Minar – One of the tallest minarets in the world.",
        tourPrice:"₹ 38899"
    },
    
]
function Main() {
    const [ownToursData , setOwnToursData ] = useState(toursData);

    function removeTour(currId){
        const fillterToursData =  ownToursData.filter((tour)=> tour.id !== currId);
        setOwnToursData(fillterToursData);
     }

  return (
    <div>
        <h1><i>O<u>ur Tour</u>s</i></h1> 
    <div className='head' >                   
        {
          ownToursData.map((tour)=>{
            return( <Tours tour={tour} removeTour={removeTour} key={tour.id} />
            )
          })  
        }
    </div>
    </div>
  )
}

export default Main;