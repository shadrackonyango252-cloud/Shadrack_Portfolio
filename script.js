const hamburgerMenu = document.querySelector('.hamburger-menu')
const mobileLinks = document.querySelector('.mobile-sidebar')
const links = document.querySelectorAll('.mobile-sidebar .link')
const mobileSidebar = document.querySelector('.mobile-sidebar')
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
            mobileSidebar.classList.remove('active')
        })
        link.classList.add('active')
        // mobileLinks.classList.remove('active')
    })
})
document.addEventListener('click', (e) => {

    if (
        mobileSidebar &&
        !mobileSidebar.contains(e.target) &&
        !hamburgerMenu.contains(e.target)
    ) {
       // console.log("twgyuah")
        mobileSidebar.classList.remove('active');
    }

});
openSideBar()



