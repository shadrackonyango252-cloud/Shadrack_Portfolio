const hamburgerMenu = document.querySelector('.hamburger-menu')
const mobileLinks = document.querySelector('.mobile-sidebar')
const links = document.querySelectorAll('.mobile-sidebar .link')
console.log(mobileLinks)

const openSideBar = () =>{
if(!hamburgerMenu || !mobileLinks) return ;
hamburgerMenu.addEventListener('click' ,() =>{
    mobileLinks.classList.toggle('active')
})

}

links.forEach(link =>{
    link.addEventListener('click', () =>{
        links.forEach(item => {
            item.classList.remove('active')
        })
        link.classList.add('active')
        // mobileLinks.classList.remove('active')
    })
})
openSideBar()



