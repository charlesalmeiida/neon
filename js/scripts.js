const dropdownMenu = document.querySelector(".dropdown")
const btnDropdown = document.querySelector(".js-btn-dropdown")

function openDropdown(event) {
  event.preventDefault()
  dropdownMenu.classList.toggle("active")
}

btnDropdown.addEventListener("mouseover", openDropdown)

dropdownMenu.addEventListener("mouseleave", openDropdown)

const header = document.getElementById("js-header")

function fixedMenu() {
  if (window.pageYOffset <= 80) {
    header.classList.remove("fixed-menu")
  } else {
    header.classList.add("fixed-menu")
  }
}

document.addEventListener("scroll", fixedMenu)
