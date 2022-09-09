const contact = document.querySelector("#contact")
const about = document.querySelector("#about-me")
const projects = document.querySelector("#projects")

const navbar = document.querySelector("#navbar")
const botonNav = document.querySelectorAll("#navbar button")
function onHover(){
    botonNav.forEach(item=>{
        item.classList.remove("hover:border-2", "border-indigo-800")
        this.classList.add("hover:border-2", "border-indigo-800")
    })

}
botonNav.forEach(item =>{
    item.addEventListener("mouseover", onHover);
})

function clickAbout() {
    if (about.classList.contains("hidden")) {
        about.classList.remove("hidden")
    about.classList.add("")
    } else {
        about.classList.add("hidden")
    }
}


function clickProjects() {
    if (projects.classList.contains("hidden")) {
        projects.classList.remove("hidden")
        projects.classList.add("bg-gray-600")
    } else {
        projects.classList.add("hidden")
    }

}

function clickContact() {
    if (contact.classList.contains("hidden")) {
        contact.classList.remove("hidden")
        contact.classList.add("bg-cyan-500")

    } else {
        contact.classList.add("hidden")
    }

}
//Aqui se debe validar que no choquen los click que llaman a la secciones 
botonNav[0].addEventListener("click", clickAbout, false)
botonNav[1].addEventListener("click", clickProjects, false)
botonNav[2].addEventListener("click", clickContact, false)
