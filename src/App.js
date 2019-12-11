import React from 'react';
import 'normalize.css';
import './scss/App.scss';
// import './scss/carousel.scss';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";
import Header from './components/header/header.js'
import Carousel from './components/carousel/carousel.js'
import 'react-alice-carousel/lib/alice-carousel.css'

function App() {
  return (
    <body className="main-page">
      <a name='top-screen' href='/'>top-screen</a>
      <Header />
      <main className='main-page__content'>
        <Carousel className='main-page__carousel' />
        <section className='main-page__news'>I'am still here</section>
        <section className='main-page__vacancies'></section>
      </main>
      <footer className="main-page__footer"></footer>
    </body>
  );
}

export default App;
