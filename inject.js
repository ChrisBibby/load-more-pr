var lmprBtn = document.getElementById("lmpr-btn");
if (lmprBtn === null) {
  const diffButton = document.createElement("div");
  diffButton.setAttribute("class", "btn btn-sm");
  diffButton.setAttribute("id", "lmpr-btn");
  diffButton.setAttribute("style", "margin-left:10px; float:right;");
  diffButton.textContent = "Load More Diffs";

  diffButton.onclick = () => {
    if (diffButton.getAttribute("aria-disabled") != "true") {
      diffButton.setAttribute("aria-disabled", "true");

      [...document.querySelectorAll("button.load-diff-button")]
        .filter(y => y.textContent
          .includes("Load diff"))
        .slice(0, 25)
        .forEach((btn) => {
          setTimeout(() => btn.click(), 100)
        });

      setTimeout(() => {
        diffButton.setAttribute("aria-disabled", "false")
      }, 5000);
    }
  };

  const prReviewTools = document.getElementsByClassName("pr-review-tools")[0];
  if (prReviewTools != undefined) {
    prReviewTools.append(diffButton);
  }
}