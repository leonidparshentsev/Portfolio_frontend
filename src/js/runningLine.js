const runningLine = document.querySelector('.footer__animated_text');

cloneNodes();

function cloneNodes() {
  let span = runningLine.children;
  
  for(let i = 0; i < 5; i++) {
    let clone = span[0].cloneNode(true);
    runningLine.appendChild(clone);
  }
}