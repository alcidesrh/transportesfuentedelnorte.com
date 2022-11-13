import * as Turbo from "@hotwired/turbo";

document.addEventListener("turbo:before-fetch-response", (event) => {
  const fetchResponse = event.detail.fetchResponse;

  document.addEventListener("typed-stop", _onStopTyped);

  if (fetchResponse.response.headers.get("session-terminada")) {
    event.preventDefault();
    Turbo.clearCache();
    Turbo.visit(fetchResponse.response.headers.get("Turbo-Location"));
  }
});

function _onStopTyped({ detail: { typed } }) {
  typed.stop();
}

document.addEventListener("turbo:before-fetch-request", async (event) => {
  document.removeEventListener("typed-stop", _onStopTyped);

  const loading = document.getElementById("turbo-loading");

  if (loading) {
    document.getElementById("turbo-loading").classList.add("!flex");
  }

  event.detail.fetchOptions.headers["turbo-request"] = true;
});

document.addEventListener("turbo:frame-load", (event) => {
  const loading = document.getElementById("turbo-loading");
  if (loading) {
    document.getElementById("turbo-loading").classList.remove("!flex");
  }
});
