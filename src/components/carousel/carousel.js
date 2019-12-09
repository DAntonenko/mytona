import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './carousel.scss'
 
class Carousel extends React.Component {
  items = [
    {
      srcset: 'https://mytona.com/images/uploads/banner/5d8dab820727e.jpg',
      src: 'https://mytona.com/images/uploads/banner/5d8dab8dd7f34.jpg',
      alt: 'Cooking Diary®: Restaurant Game',
    },
    {
      srcset: 'https://mytona.com/images/uploads/banner/5d9470ae79cdf.jpg',
      src: 'https://mytona.com/images/uploads/banner/5d94abd78e359.jpg',
      alt: 'Ravenhill®: Hidden Mystery'
    },
    {
      srcset: 'https://mytona.com//images/uploads/banner/5d8dabc15f62c.jpg',
      src: 'https://mytona.com/images/uploads/banner/5d8dcb552289d.jpg',
      alt: 'Seekers Notes®: Hidden Mystery',
    },
    {
      srcset: 'https://mytona.com///images/uploads/banner/5d945fa73ef02.jpg',
      src: 'https://mytona.com/images/uploads/banner/5d945f729912c.jpg',
      alt: 'Manastorm: Arena of Legends®',
    },
    {
      srcset: 'https://mytona.com//images/uploads/banner/5dc562c36a195.jpg',
      src: 'https://mytona.com/images/uploads/banner/5dc55e4367c98.jpg',
      alt: 'Riddleside®: Fading Legacy®',
    },
  ]
 
  state = {
    galleryItems: this.items.map((item, itemIndex) =>
      <a href={`game/${itemIndex}`}>
        <picture>
          <source
            srcset={item.srcset}
            media='(max-width: 875px)'
          />
          <img
            className='carousel__slide-image'
            src={item.src}
            alt={item.alt}
          />
        </picture>
      </a>
    ),
  }
 
  thumbItems = {
    thumbItem: this.items.map((item, itemIndex) =>
      <img
        className='carousel__thumb-image'
        src={item.src}
        alt={`preview for ${item.alt}`}
        key={item}
        onClick={() => this.Carousel.slideTo(itemIndex)}
      />
    ),
  }

  render() {
    return (
      <div className='carousel'>
        <div className='carousel__wrapper'>
          <AliceCarousel
            dotsDisabled={true}
            buttonsDisabled={true}
            items={this.state.galleryItems}
            ref={(el) => (this.Carousel = el)}
          />
          <button
            className='carousel__button carousel__button--prev'
            onClick={() => this.Carousel.slidePrev()}
          >
          </button>
          <button
            className='carousel__button carousel__button--next'
            onClick={() => this.Carousel.slideNext()}
          />
        </div>
        <nav className='carousel__thumbs'>{this.thumbItems.thumbItem}</nav>
      </div>
    )
  }
}

export default Carousel;