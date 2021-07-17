const mountains = document.querySelectorAll('.mountain')

mountains.forEach(mountain => {
    mountain.addEventListener('click', () => {
        removeActiveClasses()
        mountain.classList.add('active')
    })
})

function removeActiveClasses() {
    mountains.forEach(mountain => {
        mountain.classList.remove('active')
    })
}