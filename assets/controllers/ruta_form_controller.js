import { Controller } from "@hotwired/stimulus";
import { useDispatch } from "stimulus-use";
/*
 * The following line makes this controller "lazy": it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */
/* stimulusFetch: 'lazy' */
export default class extends Controller {
  connect() {
    useDispatch(this);
    this.dispatch("reservacion:paso", { paso: 0 });
  }
}
