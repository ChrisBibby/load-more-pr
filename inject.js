if (typeof loadDiffsButton === 'undefined') {

  const loadDiffsButton = document.createElement("div");
  loadDiffsButton.onclick = () => {
  [...document.querySelectorAll("button.load-diff-button")]
    .filter( xyz => xyz.textContent
      .includes("Load diff"))
      .forEach((btn, x) => setTimeout(() => btn.click(), x * 100));

    loadDiffsButton.setAttribute("aria-disabled", "true");
    document.getElementById("loadMorePRBtn").onclick = undefined;
  }

  loadDiffsButton.setAttribute("class", "btn btn-sm");
  loadDiffsButton.setAttribute("id", "loadMorePRBtn");
  loadDiffsButton.setAttribute("style", "margin-left:10px; float:right;");
  loadDiffsButton.textContent = "Load Diffs";

  const prReviewTools = document.getElementsByClassName("pr-review-tools")[0];
  if (prReviewTools != undefined) {
    prReviewTools.append(loadDiffsButton);
  }
}