import React from 'react';
import 'normalize.css';
import './scss/App.scss';
import './scss/carousel.scss';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function App() {
  return (
    <body className="main-page">
      <header className='main-page__header'></header>
      <main className='main-page__content'>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={5}
        >
          <Slider>
            <Slide index={0}>
              <picture>
                <source
                  srcset='https://mytona.com/images/uploads/banner/5d8dab820727e.jpg'
                  media='(max-width: 875px)'
                />
                <img
                  className='carousel__slide-image'
                  src='https://mytona.com/images/uploads/banner/5d8dab8dd7f34.jpg'
                  alt='Cooking Diary®: Restaurant Game'
                />
              </picture>
            </Slide>
            <Slide index={1}>I am the second Slide.</Slide>
            <Slide index={2}>I am the third Slide.</Slide>
            <Slide index={3}>I am the 4 Slide.</Slide>
            <Slide index={4}>I am the 5 Slide.</Slide>
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
        <section className='main-page__news'>I'am still here</section>
        <section className='main-page__vacancies'></section>
      </main>
      <footer className="main-page__footer"></footer>
    </body>
  );
}

export default App;
