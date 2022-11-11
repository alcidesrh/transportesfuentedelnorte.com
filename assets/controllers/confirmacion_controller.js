import { Controller } from "@hotwired/stimulus";

/*
 * The following line makes this controller "lazy": it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */
/* stimulusFetch: 'lazy' */
export default class extends Controller {
  static targets = ["pdf_link"];
  connect() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.pdf_linkTarget.click();

    this.dispatch("slider", { detail: { stop: false } });

    const sections = document.getElementsByTagName("section");

    Array.prototype.filter.call(sections, (section) =>
      section.classList.remove("section-blur")
    );
  }
}
