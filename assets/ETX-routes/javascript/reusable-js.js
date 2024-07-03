
/*=============== SCROLL REVEAL JS ===============*/
const sr = ScrollReveal({
	distance: '50px',
	duration: 2500,
  })
  
  sr.reveal(`.top`,{
	origin: 'top',
  })

  sr.reveal(`.bottom`,{
	origin: 'bottom',
  })

  sr.reveal(`.bottom-delayed`,{
    origin: 'bottom',
    delay: 400,
    interval: 350,

  })

  sr.reveal(`.left`,{
    origin: 'left',
  })

  sr.reveal(`.left-delayed`,{
    origin: 'left',
    delay: 400,
    interval: 350,

  })

  sr.reveal(`.right`,{
    origin: 'right',
  })