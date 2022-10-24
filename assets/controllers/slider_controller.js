import { Controller } from "@hotwired/stimulus";

/*
 * The following line makes this controller "lazy": it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */
/* stimulusFetch: 'lazy' */
export default class extends Controller {
  static targets = ["image"];
  count = 0;
  image = "";
  connect() {
    let timeout = setInterval(() => {
      if (this.count % 2) {
        this.image = "/images/image.webp";
      } else {
        this.image = "/images/image2.webp";
      }
      this.imageTarget.style.backgroundImage = `url('${this.image}')`;
      this.count++;
    }, 5000);
  }
}
