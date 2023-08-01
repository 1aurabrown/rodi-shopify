if (!customElements.get('mailchimp-form')) {
  class MailchimpForm extends HTMLElement {
    constructor() {
      super();
      debugger
      this.form = this.querySelector('form')
      this.url = this.form.action.replace('json', 'post-json').concat('&c=?')
      this.data = new FormData(this.form);
      this.form.addEventListener('submit', this.submit.bind(this))
    }

    submit(e) {
      e.preventDefault()
      debugger

      // dataType: 'json',
      // contentType: "application/json; charset=utf-8",

      fetch(this.url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // redirect: "follow", // manual, *follow, error
        // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(this.data), // body data type must match "Content-Type" header
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
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
      if (this.swiper) {
        this.swiper.destroy();
      }
    }

  }
  customElements.define('mailchimp-form', MailchimpForm);
}
