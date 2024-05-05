document.addEventListener('DOMContentLoaded', () => {
    changeNavSig()

    const navExpand = document.getElementById('nav-expand')

    navExpand.addEventListener('click', () => {
        const nav = document.querySelector('nav')

        nav.classList.toggle('show')
    })
    

    window.addEventListener('resize', (e) => {
        changeNavSig()
    })
})

function changeNavSig() {
    const signature = document.querySelector('.nav-sig')
    if (window.innerWidth < 1024) {
        signature.src = '../assets/VerticleSignatures.png'            
    } else {
        signature.src = '../assets/signature.png'
    }
}
