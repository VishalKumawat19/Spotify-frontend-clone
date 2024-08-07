let showButton = document.querySelector(".show-all");
let showAndHide = document.querySelectorAll(".hide-show")
let artistContainer = document.querySelector(".artist-footer-container");

showButton.addEventListener("click",()=>{
    showAndHide.forEach((element) => {
       if(element.classList.contains("hide-show")){
        element.classList.remove("hide-show");
        artistContainer.classList.add("padding-top");
       } else{
        element.classList.add("hide-show");
        artistContainer.classList.remove("padding-top")
       }
    });
})