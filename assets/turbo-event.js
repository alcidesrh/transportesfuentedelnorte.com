import * as Turbo from "@hotwired/turbo";

document.addEventListener("turbo:before-fetch-response", (event) => {
  const fetchResponse = event.detail.fetchResponse;

  if (fetchResponse.response.headers.get("session-terminada")) {
    event.preventDefault();
    Turbo.clearCache();
    Turbo.visit(fetchResponse.response.headers.get("Turbo-Location"));
  }
});

document.addEventListener("turbo:before-fetch-request", async (event) => {
  event.preventDefault();
  event.detail.fetchOptions.headers["turbo-request"] = true;
  event.detail.resume();
});
