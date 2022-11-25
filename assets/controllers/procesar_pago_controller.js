import { Controller } from "@hotwired/stimulus";
import { postData } from "../fetch-wrap";
/*
 * The following line makes this controller "lazy": it won't be downloaded until needed
 * See https://github.com/symfony/stimulus-bridge#lazy-controllers
 */
export default class extends Controller {
  static values = {
    checkEnrollmentPath: String,
  };

  connect() {
    const data = new FormData();
    data.append("check_enrollment", true);
    postData(this.checkEnrollmentPathValue, data).then((res) =>
      console.log(res)
    );
    return;
    var ddcForm = document.querySelector("#ddc-form");
    if (ddcForm) {
      // ddc form exists
      ddcForm.submit();
    }
    window.addEventListener(
      "message",
      (event) => {
        //{MessageType: "profile.completed", Session Id: "0_57f063fd-659a-4779-b45b-9e456fdb7935", Status: true}
        console.log(event);
        if (event.origin === "https://centinelapistag.cardinalcommerce.com") {
          let data = JSON.parse(event.data);
          console.log("Merchant received a message:", data);
          // if (data.Status) {
          //   postData.
          // }
        }
      },
      false
    );
  }

  disconnect() {
    // You should always remove listeners when the controller is disconnected to avoid side-effects
    window.removeEventListener("message", () => {});
  }
}
