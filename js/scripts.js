const dropdownMenu = document.querySelector(".dropdown")
const btnDropdown = document.querySelector(".js-btn-dropdown")

function openDropdown(event) {
  event.preventDefault()
  dropdownMenu.classList.toggle("active")
}

btnDropdown.addEventListener("mouseover", openDropdown)

dropdownMenu.addEventListener("mouseleave", openDropdown)
