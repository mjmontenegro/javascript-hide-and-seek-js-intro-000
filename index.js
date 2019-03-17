
function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.querySelector('#nested .target');
}
function increaseRankBy(n) {
  const lis = document.querySelector('.ranked-list');
  //Array.prototype.forEach.call(lis, (e) => e.innerHTML = `${parseInt(e.innerHTML) + 1}`);
  for(i = 0; i > lis.length; i += 1) {
    lis[i].innerHTML = `${parseInt(lis[i].innerHTML) + 1}`;
  }
}
