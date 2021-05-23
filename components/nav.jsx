import {useState} from 'react'
import SVGs from '../files/svgs'

const Nav = ({}) => {
  
  return (
    <div className="nav">
      <a href="/" className="nav-left">
        <SVGs svg={'logo'} />
        <span>WeASG</span>
      </a>
      <div className="nav-right">
          <a href="/shop">Shop</a>
          <a href="">About</a>
          <a href="">Deals</a>
          <a href="">Event</a>
          <a href="">Custom Merch</a>
          <SVGs svg={'facebook'} />
          <SVGs svg={'twitter'} />
          <SVGs svg={'youtube'} />
          <SVGs svg={'instagram'} />
          <SVGs svg={'bag'} />
      </div>
    </div>
  )
}

export default Nav
