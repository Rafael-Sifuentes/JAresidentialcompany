
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



/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_z8fni4v', 'template_1bsr0gn', '#contact-form', 'on_mfnKJl6uSgNNI5')

        .then(() =>{
          contactMessage.textContent = 'Message sent succesfully ✅'
          alert("Message sent succesfully");
        }, () =>{
          contactMessage.textContent = 'Message not sent (service error) ❌'
          alert("Message not sent succesfully (service error)");
        })
}

contactForm.addEventListener('submit', sendEmail)