if (document.getElementById("load-diffs-btn") === null) {
  const loadDiffsBtn = document.createElement("div");
  loadDiffsBtn.setAttribute("class", "diffbar-item btn btn-sm");
  loadDiffsBtn.setAttribute("id", "load-diffs-btn");
  loadDiffsBtn.setAttribute("style", "margin-right:15px;");
  loadDiffsBtn.textContent = "Load More Diffs";

  loadDiffsBtn.onclick = () => {
    if (loadDiffsBtn.getAttribute("aria-disabled") != "true") {
      loadDiffsBtn.setAttribute("aria-disabled", "true");

      [...document.querySelectorAll("button.load-diff-button")]
        .filter(y => y.textContent.includes("Load diff"))
        .slice(0, 25)
        .forEach((btn) => {
          setTimeout(() => btn.click(), 100)
        });

      setTimeout(() => {
        loadDiffsBtn.setAttribute("aria-disabled", "false")
      }, 5000);
    }
  };

  const jsReviewsContainer = document.getElementsByClassName("diffbar-item dropdown js-reviews-container")[0];
  if (jsReviewsContainer != undefined) {
    jsReviewsContainer.insertAdjacentElement('beforebegin', loadDiffsBtn);
  }
}
