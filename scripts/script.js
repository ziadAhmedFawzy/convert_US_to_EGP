const USA = document.getElementById("USA");
const CONV = document.getElementById("convert");
const SHOW = document.getElementById("show");


function convert(dollar) {
    return 32 * dollar
}

CONV.onclick = function() {
    SHOW.innerHTML = `${ convert(USA.value)} EGP`
    SHOW.setAttribute("class" , "show")
}