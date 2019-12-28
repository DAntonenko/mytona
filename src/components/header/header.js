import React from 'react'
import { HamburgerBoring } from 'react-animated-burgers'
import './header.scss'

class Header extends React.Component {
  state = {
    isActive: false
  }

  toggleButton = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    return (
      <header className='header'>
        <div className='header__wrapper'>
          <a href='#top'>
            <img
              className='header__logo-leaf'
              src='https://mytona.com/static/images/logoleaf.svg'
              alt='MYTONA Official'
            />
          </a>
          <h1 className='header__logo-name'>MYTONA</h1>
          <HamburgerBoring
            className='header__burger'
            buttonWidth={24}
            buttonColor='transparent'
            isActive={this.state.isActive}
            toggleButton={this.toggleButton}
          />
        </div>
        <div className={!this.state.isActive ? 'header__dropdown' : 'header__dropdown header__dropdown--visible'}>
          <nav className='header__navigation'>
            <ul className='header__navigation-options-list'>
              
              <li className='header__navigation-option header__navigation-option--active'>
                <a href='/'>MAIN</a>
              </li>
              <li className='header__navigation-option'>
                <a href='/'>COMPANY</a>
              </li>
              <li className='header__navigation-option'>
                <a href='/'>CAREER</a>
              </li>
              <li className='header__navigation-option'>
                <a href='/'>GAMES</a>
              </li>
              <li className='header__navigation-option'>
                <a href='/'>NEWS</a>
              </li>
              <li className='header__navigation-option'>
                <a href='/'>SUPPORT</a>
              </li>
              <li className='header__navigation-option'>
                <a href='/'>РУС</a>
              </li>
            </ul>
          </nav>
          <section className='header__social-buttons'>

          </section>
          <div className='header__dropdown-logo' />
        </div>
      </header>
    );
  }
}
export default Header;