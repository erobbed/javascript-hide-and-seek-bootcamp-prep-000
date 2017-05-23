function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('app').querySelectorAll('div.target')[0]
}

function deepestChild(){
  return document.getElementById('app').querySelectorAll('div#grand-node div')[0]
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let n = 0, l = lis.length; n < l; n++) {
    lis[n].innerHTML = parseInt(lis[n].innerHTML + n, 10)
  }
}
