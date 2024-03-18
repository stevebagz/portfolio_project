const nameText = document.getElementsByClassName("nav-glow");

for(let i = 0; i < nameText.length; i++) {
    nameText[i].addEventListener("mouseover", () => {
        nameText[i].style.transition="all, 1.2s";
    });
}





