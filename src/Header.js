import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
  const[{basket},dispatch]=useStateValue();
  return (
    <><div className='header'>
       <Link to="/">
         <img
         className="header__logo"
         src="https://th.bing.com/th/id/R.d397c89c1a7aa0cda1b212fea9f41534?rik=KshYmXFM7JN2oQ&riu=http%3a%2f%2fwww.bizmonthly.com%2fwp-content%2fuploads%2f2020%2f04%2fAmazon-logo-black-template.png&ehk=YSOt1FBVTSDifvm%2fht3SvgMsEPiOyM19r3Y3EQdIKP0%3d&risl=&pid=ImgRaw&r=0" alt=" " />
       </Link>
      
      <div className="header__search">
      <input
        className="header__searchInput"
        type={'text'} />
        <SearchIcon
        className='header__searchIcon'/> 

      </div>

      <div className='header__nav'>
        <Link to='/login'>
          <div className='header__option'>
            <span 
            className='header__optionLineOne'>Hello guest
            </span>
            <span className='header__optionLineTwo'> Sign in
            </span>
          </div>
       </Link>
        
        <div className='header__option'>
           <span className='header__optionLineOne'>Returns
           </span>
           <span className='header__optionLineTwo'> & Orders
           </span>
        </div>

        <div className='header__option'>
           <span 
           className='header__optionLineOne'>Your
           </span>
           <span className='header__optionLineTwo'>Prime
           </span>
        </div>

        <Link to = "/checkout">
          <div className='header__optionBasket'>
            <ShoppingBasketIcon/>
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>

    

      </div>







      </div></>
  )
}

export default Header