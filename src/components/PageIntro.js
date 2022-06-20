import React from 'react'
import miere from '../images/miere4.jpg'
import CoolButton from './CoolButton'

const PageIntro = () => {
  return (
    <div className='pageIntro'>
        <img src={miere} className='imgIntro'></img>
        <div className='textIntro'>
            <CoolButton  text={'Go shopping'} pathname={"/shoping"} />
            <h3>We are a family company from Romania producing apiculture products in a natural and bio-friendly environment.Our company does not use additives in our products and provide quality honey naturally made. We take pride in producing and delivering natural and delicious products to our customers at affordable prices.</h3>
        </div>
    </div>
  )
}

export default PageIntro