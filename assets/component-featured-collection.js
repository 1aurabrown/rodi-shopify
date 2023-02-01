if (!customElements.get('featured-collection')) {
  class FeaturedCollection extends HTMLElement {
    constructor() {
      console.log('constructor')
      super();
      this.swiperEl = this.querySelector('.collection-swiper')
      this.options = {
        spaceBetween: 20,
        slidesPerView: 1.25,
        loop: false,
        simulateTouch: true,
        navigation: {
          nextEl: '.collection-next',
          prevEl: '.collection-prev',
        },
        breakpoints: {
          640: {
            slidesPerView: 2.25,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3.25,
            spaceBetween: 20
          },
          1024: {
            spaceBetween: 40,
            slidesPerView: 4
          },
          1280: {
            spaceBetween: 40,
            slidesPerView: 5
          },
          1440: {
            spaceBetween: 40,
            slidesPerView: 6
          }
        }
      }
    }
    create() {
      this.swiper = new Swiper(this.swiperEl, this.options)
    }

    connectedCallback() {
      console.log('connected')
      if (typeof(Swiper) != 'undefined') {
        console.log('swiper is loaded')
        this.create()
      } else {
        console.log('swiper is undefined')
        document.addEventListener('swiperLoaded', () => {
          console.log('swiper is loaded later')
          this.create()
        })
      }
    }

    disconnectedCallback() {
      if (this.swiper) {
        this.swiper.destroy();
      }
    }

  }
  customElements.define('featured-collection', FeaturedCollection);
}
