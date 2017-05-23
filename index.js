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

  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML, 10) + n
  }
}
