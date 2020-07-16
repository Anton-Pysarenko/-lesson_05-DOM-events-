var collection = [];

function over ( event ) {
    event.target.style.backgroundColor = 'red'
}
function out ( event ) {
    event.target.style.backgroundColor = 'grey'
}
function clickHandler ( event ) {
    event.target.remove()
}

var container = document.body;
[ "first", "second", "third", "fourth" ].forEach (
    function ( tag, index, arr  ) {
        container = container.appendChild(document.createElement ('div'))
        collection.push(container)
        container.style = `
            width: ${(arr.length - index) * 80}px;
            height: ${(arr.length - index) * 80}px;
            background-color: grey;
            border: 1px solid red;
            transform: translate(-50%, -50%);
            position: absolute;
            top: 50%;
            left: 50%;
        `
        container.title = tag
        container.addEventListener ( "mouseover", over )
        container.addEventListener ( "mouseout", out )
        container.onclick = clickHandler
	}
)


///////

var collection = [];

function over ( event ) {
    event.target.style.backgroundColor = 'red'
}
function out ( event ) {
    event.target.style.backgroundColor = 'grey'
}
function unwrap ( event ) {
    event.target.replaceWith(...event.target.childNodes);
}

var container = document.body;
[ 1, 2, 3, 4, 5, 6, 7 ].forEach (
    function ( tag, index, arr  ) {
        container = container.appendChild(document.createElement ('div'))
        collection.push(container)
        container.style = `
            width: ${(arr.length - index) * 80}px;
            height: ${(arr.length - index) * 80}px;
            background-color: grey;
            border: 1px solid red;
            transform: translate(-50%, -50%);
            position: absolute;
            top: 50%;
            left: 50%;
            onclick: 'clickHandler';
        `
        container.title = tag
        container.addEventListener ( "mouseover", over )
        container.addEventListener ( "mouseout", out )
        container.onclick = unwrap
  }
)