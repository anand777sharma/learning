const container=document.createElement('div');
container.classList.add('container')
document.body.append(container)

for(let i=1;i<=1025;i++){

    const myimage=document.createElement('img');
    myimage.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    myimage.alt=i
    const para=document.createElement('p');
    para.innerText=i
    
    const imageContainer=document.createElement('div');
    imageContainer.classList.add('image-container')
    container.append(imageContainer);
    imageContainer.append(myimage,para)
}

