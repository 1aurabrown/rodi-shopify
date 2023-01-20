if (!customElements.get('pdp-slider')) {
  class ProductSlider extends HTMLElement {
    create() {
      this.gallery = new Swiper(this.querySelector('.pdp-swiper'), {
        spaceBetween: 10,
        slidesPerView: 1,
        loop: true,
        loopAdditionalSlides: 2,
        centeredSlides: true,
        simulateTouch: true,
        slideClass: 'swiper-slide',
        breakpoints: {
          768: {
            slidesPerView: 1.25
          },
          1280: {
            slidesPerView: 1
          }
        }
      })
    }

    connectedCallback() {
      if (typeof(Swiper) != 'undefined') {
        this.create()
      } else {
        document.addEventListener('swiperLoaded', () => {
          this.create()
        })
      }
    }

    disconnectedCallback() {
      if (this.gallery) {
        this.gallery.destroy();
      }
    }

  }
  customElements.define('pdp-slider', ProductSlider);
}
