import React from 'react'
import './banner.scss'
import avatarCard from '../../../assets/avatar_card.jpg'

const Banner = () => {
  return (
    <section className='section-banner'>
      <div className='section-center banner-center'>
        <article className='info_banner'> I'm A Web Developer</article>
        <article className='avatar_banner'> 
          <img src={avatarCard} className='avatar_card' alt='my selfie :)))'/>
        </article>
      </div>
    </section>
  )
}

export default Banner