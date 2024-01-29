let darken = document.getElementsByClassName("darken")[0]
let light = document.getElementsByClassName("light")[0]
let modeWeb = document.getElementById("modeWeb")

darken.addEventListener("click", function() {
    light.setAttribute("class", "mode light display")
    darken.setAttribute("class", "mode darken hidden")
})

light.addEventListener("click", function() {
    light.setAttribute("class", "mode light hidden")
    darken.setAttribute("class", "mode darken display")
})

modeWeb.addEventListener("click" , function() {
    document.body.classList.toggle("dark")
})