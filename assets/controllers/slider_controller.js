import { Controller } from "@hotwired/stimulus";

/*
 * The following line makes this controller "lazy": it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */
/* stimulusFetch: 'lazy' */
export default class extends Controller {
  static targets = ["image"];
  static values = {
    images: String,
  };
  count = 1;
  images = [];
  connect() {
    return;
    this.images = JSON.parse(this.imagesValue);
    let timeout = setInterval(() => {
      this.imageTarget.style.backgroundImage = `url('${
        this.images[this.count]
      }')`;

      if (this.count == this.images.length - 1) {
        this.count = 0;
      } else {
        this.count++;
      }
    }, 5000);
  }
}
