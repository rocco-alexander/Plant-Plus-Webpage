// Give a scroll class to change the navbar color once it has scrolled passed a certain point
window.onscroll = () =>{
    const nav = document.querySelector("#navbar")
    let height = document.documentElement.clientHeight * .2
    if(this.scrollY < height) nav.className = "navbar "
    else nav.className = 'navbar scroll';
}

// Scrolls the user to the section elements defined on the html file 
// (ie 'equipment' take you to the section of id equipment)
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
        })
    })
})
