// ==UserScript==
// @name        Open All Problems
// @namespace   JohnZhu04
// @match       https://leetcode.com/contest/*-contest-*/
// @grant       none
// @version     1.0
// @author      JohnZhu04
// @license     MIT
// @supportURL  https://github.com/JohnZhu04/LeetScript/issues
// @icon        https://www.google.com/s2/favicons?sz=64&domain=leetcode.com
// @description Add an "Open All Problems" button on the LeetCode Contest page. Note that Pop-up windows need to be allowed in the web browser.
// ==/UserScript==

const openAllProblems = () => {
  const problems = document.querySelectorAll("ul.contest-question-list li a");
  console.log(problems.length);
  problems.forEach((problem) => {
    window.open(problem.href);
  });
};

const main = () => {
  if (document.querySelector(".col-md-6") === null) {
    window.setTimeout(main, 2000);
  }
  const button = document.createElement("button");
  button.innerText = "Open All Problems";
  button.addEventListener("click", openAllProblems);
  button.className = "btn btn-default panel-hover";
  document.querySelector(".col-md-6").appendChild(button);
};

main();
