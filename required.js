const p = document.body.appendChild(document.createElement('p'))

p.innerText = "Click me"

p.onclick = function ( event ) {
  if (document.getElementById('Picture') === null) {
    let img = document.body.appendChild(document.createElement('IMG'))
    img.id = 'Picture'
    img.src = "https://avatars2.githubusercontent.com/u/46?v=4"
    img.style = `
    width: 100px;
    `
    img.onclick = function (event) {
      elem = event.target.parentNode.removeChild ( event.target )
    }

    img.onmouseover = function ( event ) {
      event.target.style = `
        width: 200px;
        transition: 0.5s;
      `
    }

    img.onmouseout = function ( event ) {
      event.target.style = `
        width: 100px;
        transition: 0.5s;
      `
    }
  } else console.log('Картинка уже создана')
}