import React from 'react'
import logo from '../../images/amazone.png'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

function Header() {

  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <section className='header'>
      <Link to="/">
        <img className='header__logo'
          src={logo} alt="amazone" />

      </Link>


      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className="header__nav">
        <Link to = "/SigIn">
          <div className="header__option">
            <span className='header__optionLineOne'>Hello Guest</span>
            <span className="header__optionLineTwo">
              Sign In
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className='header__optionLineOne'>Returns</span>
          <span className="header__optionLineTwo">
            & Orders
          </span>
        </div>

        <div className="header__option">
          <span className='header__optionLineOne'>your</span>
          <span className="header__optionLineTwo">
            Prime
          </span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLinegTwo header__basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>


    </section>
  )
}

export default Header;