if (document.getElementById("load-diffs-btn") === null) {
  const loadDiffsBtn = document.createElement("div");
  loadDiffsBtn.setAttribute("class", "btn btn-sm");
  loadDiffsBtn.setAttribute("id", "load-diffs-btn");
  loadDiffsBtn.setAttribute("style", "margin-left:10px; float:right;");
  loadDiffsBtn.textContent = "Load More Diffs";

  loadDiffsBtn.onclick = () => {
    if (loadDiffsBtn.getAttribute("aria-disabled") != "true") {
      loadDiffsBtn.setAttribute("aria-disabled", "true");

      [...document.querySelectorAll("button.load-diff-button")]
        .filter(y => y.textContent
          .includes("Load diff"))
        .slice(0, 25)
        .forEach((btn) => {
          setTimeout(() => btn.click(), 100)
        });

      setTimeout(() => {
        loadDiffsBtn.setAttribute("aria-disabled", "false")
      }, 5000);
    }
  };

  const prReviewTools = document.getElementsByClassName("pr-review-tools")[0];
  if (prReviewTools != undefined) {
    prReviewTools.append(loadDiffsBtn);
  }
}