const scrollBtn = document.querySelector(".scroll-top")

scrollBtn.addEventListener("click", () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

const refreshButtonVisibility= () =>{
document.addEventListener("scroll", (e) =>{
    if(document.documentElement.scrollTop <= 700){
        scrollBtn.style.display="none";
    } 
    else{
        scrollBtn.style.display="block";
    }
})}
refreshButtonVisibility();

scrollBtn.addEventListener("click", (e) => {
    refreshButtonVisibility();
})
