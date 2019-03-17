
function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.querySelector('#nested .target');
}
function increaseRankBy(n) {
  const lis = document.querySelector('.ranked-list');
  Array.forEach.call(lis, (e) => e.innerHTML = `${parseInt(e.innerHTML) + 1}`);
}
