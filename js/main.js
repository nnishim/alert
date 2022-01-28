const overlayContainer = document.querySelector('.overlay-container');
const overlayContent = overlayContainer.querySelector('.content');
const html = `
        <h2 class="title">Alert!</h2>
        <div class="desc">
          Обычный текст с <b> html </b> элементами
        </div>
        <button class="okay" onclick="deact()">OK</button>
`


overlayContainer.onclick = function (event){
  deactivate(event)
}

function activate(){
  overlayContent.innerHTML = html
  overlayContainer.style.display = `flex`
  document.body.classList.add('no-scroll')
}
function deactivate(event){
  if(event.target !== overlayContainer){
    return
  }
  deact()
}
function deact(){
  overlayContainer.style.display = `none`
  document.body.classList.remove('no-scroll')
}