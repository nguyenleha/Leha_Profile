import React from 'react'
import './banner.scss'
import avatarCard from '../../../assets/avatar_card.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-solid-svg-icons'

const Banner = () => {
  return (
    <section className='section-banner'>
      <div className='section-center banner-center'>
        <article className='info_banner'>
          <h1>I'm a web developer</h1>
          <p>Who likes to design a beautiful website</p>
          <div className='btn_banner'>
            <button>ABOUT ME</button>
            <button>PRODUCT</button>
          </div>
        </article>
        <article className='avatar_banner'>
          <img src={avatarCard} className='avatar_card' alt='my selfie :)))' />
        </article>
      </div>
    </section>
  )
}

export default Banner