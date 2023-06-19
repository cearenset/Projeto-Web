function togglemode() {
    const html = document.documentElement
    html.classList.toggle("light")

    //pegar a tag img
    const img = document.querySelector("#profile img")
    
    //substituir a img
    if(html.classList.contains('light')) {
        img.setAttribute("src", "./assets/kng.png")
    }
    else {
        img.setAttribute("src", "./assets/kngNight.png")
    }
}