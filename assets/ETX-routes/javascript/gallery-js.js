

const homeVideo = () =>{
    const video = document.getElementById('gallery-home-background')

    this.scrollY >= 50 ? video.classList.remove('scale')
                          :video.classList.add('scale')

}

window.addEventListener('scroll', homeVideo)