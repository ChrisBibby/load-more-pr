if (typeof loadDiffsButton === 'undefined') {

  const loadDiffsButton = document.createElement("div");
  loadDiffsButton.onclick = () => {
  [...document.querySelectorAll("button.load-diff-button")]
    .filter( xyz => xyz.textContent.includes("Load diff")).forEach((btn, i) => setTimeout(() => btn.click(), i * 100));
  }

  loadDiffsButton.setAttribute("class", "btn btn-sm");
  loadDiffsButton.setAttribute("style", "margin-left:10px; float:right;");
  loadDiffsButton.textContent = "Load Diffs";

  const prReviewTools = document.getElementsByClassName("pr-review-tools")[0];
  if (prReviewTools != undefined) {
    prReviewTools.append(loadDiffsButton);
  }
}