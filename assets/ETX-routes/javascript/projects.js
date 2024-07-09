
const homeVideo = () =>{
    const video = document.getElementById('home-background-image')

    this.scrollY >= 50 ? video.classList.remove('scale')
                          :video.classList.add('scale')

}

window.addEventListener('scroll', homeVideo)