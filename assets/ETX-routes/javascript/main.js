

const homeVideo = () =>{
    const video = document.getElementById('home-video')

    this.scrollY >= 50 ? video.classList.remove('scale')
                          :video.classList.add('scale')
}

window.addEventListener('scroll', homeVideo)

var swiper = new Swiper('.portfolio-card-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,

    autoplay: {
        delay: 1800,
        disableOnInteraction: true,
      },
    
      breakpoints: {
        600: {
            slidesPerView: 2,
        },

        1000: {
          slidesPerView: 3,
        },
    },
});


/*=============== SCROLL SECTIONS ACTIVE ===============*/

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav-list a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link');
		}else{
			sectionsClass.classList.remove('active-link');
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


