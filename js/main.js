const overlayContainer = document.querySelector('.overlay-container');
const overlay = document.querySelector('.overlay');
const html = `
        <h2 class="title">Alert!</h2>
        <div class="desc">
          Обычный текст с <b> html </b> элементами
        </div>
        <button class="okay" onclick="deact()"> OK <i class="bi bi-check btn-icon"></i></button>
`;


overlayContainer.onclick = function (){
  deactivate(event);
}

function activate(){
  overlay.innerHTML = html;
  overlayContainer.style.display = `flex`;
  overlay.style.display = `block`;
  document.body.classList.add('no-scroll');
}
function deactivate(event){
  if(event.target !== overlayContainer){
    return
  }
  deact();
}
function deact(){
  overlayContainer.style.display = `none`;
  overlay.style.display = `none`;
  document.body.classList.remove('no-scroll');
}