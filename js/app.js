document.querySelector("section").addEventListener("click",(e)=>{
    e.preventDefault();
    let arrFromSection=Array.from(document.querySelector("section").children);
    arrFromSection.forEach((item)=>{
        if(e.target.textContent===item.textContent){
            open(`${item.textContent}.html`,"index");
        }
    })
})