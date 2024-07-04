const popoverbtn = document.getElementById('popoverbtn');
const popover=document.getElementById('popover');
const overlay=document.getElementById('overlay');

popoverbtn.addEventListener('click',()=>{
    popover.style.display='block'
    overlay.style.display='block'
})
popover.addEventListener('click',()=>{
    popover.style.display='none'
    overlay.style.display='none'
})
overlay.addEventListener('click',()=>{
    popover.style.display='none'
    overlay.style.display='none'
})

