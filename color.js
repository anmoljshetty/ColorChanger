const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( function(button){
    button.addEventListener('click',function(e){
        //console.log(e)--> event
        //console.log(e.target)--> element responsible for event-->here, it is div
        body.style.backgroundColor = e.target.id;
    })
})