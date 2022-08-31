// Give a scroll class to change the navbar color once it has scrolled passed a certain point
window.onscroll = () =>{
    const nav = document.querySelector("#navbar")
    let height = document.documentElement.clientHeight * .2
    if(this.scrollY < height) nav.className = "navbar "
    else nav.className = 'navbar scroll';
}
