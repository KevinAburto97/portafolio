var input = document.getElementsByClassName("form-input"),
    navLinks = document.getElementsByClassName("menu-link"),
    menuToggle = document.querySelector(".menu-toggle")

menuToggle.onclick = function(){
    let navBar = document.querySelector(".head-navigation")
    navBar.classList.toggle("active")
}

for(let i = 0; i < input.length; i++){
    input[i].addEventListener('input', function(){
        this.classList.remove('filled')
        if(this.value.trim() !== ''){
            this.classList.add("filled")
        }
    })
}

for(let i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener('click', function(e){
        e.preventDefault()
        var targetId = this.getAttribute('href'),
            targetElement = document.querySelector(targetId)

        if(targetElement)
            targetElement.scrollIntoView({behavior: 'smooth'})
    })
}

function animation(){
    let section = document.getElementById("about-me")
    section.classList.add("wipe-in-down")
}
