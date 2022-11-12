import * as Turbo from "@hotwired/turbo";

document.addEventListener("turbo:before-fetch-response", (event) => {
  const fetchResponse = event.detail.fetchResponse;

  const loading = document.getElementById("turbo-loading");

  if (loading) {
    document.getElementById("turbo-loading").classList.remove("!flex");
  }

  if (fetchResponse.response.headers.get("session-terminada")) {
    event.preventDefault();
    Turbo.clearCache();
    Turbo.visit(fetchResponse.response.headers.get("Turbo-Location"));
  }
});

document.addEventListener("turbo:before-fetch-request", async (event) => {
  const loading = document.getElementById("turbo-loading");

  if (loading) {
    document.getElementById("turbo-loading").classList.add("!flex");
  }

  event.detail.fetchOptions.headers["turbo-request"] = true;
});
