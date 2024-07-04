const card_container= document.querySelector(".card-container");
const card= document.querySelector(".card");

card.addEventListener("click",()=>{
    const color_card=document.createElement("div")
    color_card.classList.add("color-card");
    card_container.append(color_card);
    const d=355
    const a=Math.floor(Math.random()*d)
    const b=Math.floor(Math.random()*d)
    const c=Math.floor(Math.random()*d)
    color_card.style.backgroundColor=`rgb(${a},${b},${c})`
console.log(a);
})
