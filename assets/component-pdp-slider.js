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
        on: {
          touchMove: function(swiper, event) {
            updateCursor(event)
          },
          touchStart: function(swiper, event) {
            clickCursor(event)
          },
          touchEnd: function(swiper, event) {
            releaseCursor(event)
          }
        },
        breakpoints: {
          768: {
            slidesPerView: 1.125,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 1,
            centeredSlides: false,
          },
          1280: {
            slidesPerView: 1,
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
