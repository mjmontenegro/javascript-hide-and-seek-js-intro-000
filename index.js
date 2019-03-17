
function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.querySelector('#nested .target');
}
function increaseRankBy(n) {
  const lis = document.querySelector('.ranked-list');
  lis.forEach((e) => e.innerHTML = `${parseInt(e.innerHTML) + 1}`);
}