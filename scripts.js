document.addEventListener('DOMContentLoaded', () => {
    const navExpand = document.getElementById('nav-expand')

    navExpand.addEventListener('click', () => {
        const nav = document.querySelector('nav')

        nav.classList.toggle('show')
    })
    

    // window.addEventListener('resize', (e) => {
    //     if (window.innerWidth < 1024) return 
    //     const nav = document.querySelector('nav')
    
    //     nav.classList.remove('hide')
    // })
})

