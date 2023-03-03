var lmprBtn = document.getElementById("lmpr-btn");
if (lmprBtn === null) {
  const diffButton = document.createElement("div");
  diffButton.onclick = () => {

  [...document.querySelectorAll("button.load-diff-button")]
    .filter( y => y.textContent
      .includes("Load diff"))
      .slice(0, 50)
      .forEach((btn) => { 
        setTimeout(() => btn.click(), 100)
      });
    
    diffButton.setAttribute("aria-disabled", "true");
    setTimeout(() => diffButton.setAttribute("aria-disabled", "false"), 5000);
  };

  diffButton.setAttribute("class", "btn btn-sm");
  diffButton.setAttribute("id", "lmpr-btn");
  diffButton.setAttribute("style", "margin-left:10px; float:right;");
  diffButton.textContent = "Load Diffs";

  const prReviewTools = document.getElementsByClassName("pr-review-tools")[0];
  if (prReviewTools != undefined) {
    prReviewTools.append(diffButton);
  }
}