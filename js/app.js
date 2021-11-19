document.querySelector("header").addEventListener("click",(e)=>{
    e.preventDefault();
    let arrFromSection=Array.from(document.querySelector("header").children);
    arrFromSection.forEach((item)=>{
        if(e.target.textContent===item.textContent){
            open(`${item.textContent}.html`,"index");
        }
    })
})