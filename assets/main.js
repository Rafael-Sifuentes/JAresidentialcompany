

function callNumber() {
    var phoneNumber = "9033399017";
    window.location.href = "tel:" + phoneNumber;
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); 
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.button-alt');
  
    // Loop through each item
    navItems.forEach(item => {
      // Add a click listener to each one
      item.addEventListener('click', function() {
        // Get the URL from the 'data-url' attribute of the clicked item
        const pageUrl = this.dataset.url;
        
        // Navigate to that URL
        if (pageUrl) {
          window.location.href = pageUrl;
        }
      });
    });
  });



document.addEventListener('DOMContentLoaded', function() {
  // --- SELECTORS ---
  const nav = document.getElementById('nav');
  const toggleButton = document.querySelector('.nav-toggle-container');
  const wordContainer = document.querySelector('.nav-word-toggle-container');
  const iconContainer = document.querySelector('.nav-icon-container');
  const navContainer = document.querySelector('.nav-contents-container');
  const navLinks = document.querySelectorAll('.nav-link a');
  const sections = document.querySelectorAll('section[id]');

  // --- FUNCTIONS ---
  function closeNav() {
      wordContainer.classList.remove('toggled');
      iconContainer.classList.remove('toggled');
      navContainer.classList.remove('toggled');
      nav.classList.remove('nav-is-open');
  }

  function toggleNav() {
      wordContainer.classList.toggle('toggled');
      iconContainer.classList.toggle('toggled');
      navContainer.classList.toggle('toggled');
      nav.classList.toggle('nav-is-open');
  }

  // --- EVENT LISTENERS ---
  if (toggleButton) {
      toggleButton.addEventListener('click', toggleNav);
  } else {
      console.error('Navigation toggle button not found.');
  }

  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          setTimeout(closeNav, 100);
      });
  });

  // --- SCROLL-BASED BEHAVIOR ---

  // Logic to hide nav on scroll down and show on scroll up
  let lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
      if (navContainer.classList.contains('toggled')) return;
      if (lastScrollY < window.scrollY && window.scrollY > 100) {
          nav.classList.add('hidden');
      } else {
          nav.classList.remove('hidden');
      }
      lastScrollY = window.scrollY;
  });

  // Intersection Observer for Active Link Highlighting
  const activeLinkObserverOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0
  };
  const activeLinkObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              navLinks.forEach(link => link.parentElement.classList.remove('active-link'));
              const id = entry.target.getAttribute('id');
              const activeLink = document.querySelector(`.nav-link a[href="#${id}"]`);
              if (activeLink) activeLink.parentElement.classList.add('active-link');
          }
      });
  }, activeLinkObserverOptions);
  sections.forEach(section => activeLinkObserver.observe(section));

  // --- CORRECTED: Intersection Observer for Nav Header Theme ---
  const visibleSections = new Map();

  const themeObserverOptions = {
      root: null,
      rootMargin: "-110px 0px -85% 0px", 
      threshold: 0
  };

  const themeObserver = new IntersectionObserver((entries) => {
    console.log('--- Observer Fired ---'); // See when it runs
      entries.forEach(entry => {
          // Add or remove sections from our map of visible sections
          if (entry.isIntersecting) {
              visibleSections.set(entry.target, entry);
          }
          if (entry.isIntersecting) {
            console.log(entry.target.id, 'is intersecting.'); // See which section is triggering
        } else {
              visibleSections.delete(entry.target);
          }
      });

      // Find the highest section on the page among the visible ones
      let highestSection = null;
      let highestY = Infinity;

      visibleSections.forEach(entry => {
          const y = entry.boundingClientRect.y;
          if (y < highestY) {
              highestY = y;
              highestSection = entry.target;
          }
      });

      // Apply the theme based on the highest visible section
      if (highestSection) {
          const theme = highestSection.getAttribute('data-nav-theme');
          if (theme === 'dark') {
              nav.classList.add('nav-theme-dark');
          } else {
              nav.classList.remove('nav-theme-dark');
          }
      } else if (window.scrollY < 100) {
          // Edge case: if we're at the very top, use the first section's theme
          const firstSectionTheme = sections[0].getAttribute('data-nav-theme');
           if (firstSectionTheme === 'dark') {
              nav.classList.add('nav-theme-dark');
          } else {
              nav.classList.remove('nav-theme-dark');
          }
      }
  }, themeObserverOptions);

  sections.forEach(section => themeObserver.observe(section));
});



// --- Count Up Animation ---
document.querySelectorAll('.count-up').forEach((element) => {
    const target = parseInt(element.dataset.target);
    let current = 0;
    const span = element.querySelector('span');
    gsap.utils.toArray(element).forEach((el) => {
        gsap.to(el, { scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 20%', once: true, }, onUpdate: function () { current = Math.ceil(this.progress() * target); element.textContent = current; element.appendChild(span); }, duration: 2, ease: 'power2.out', });
    });
});

gsap.registerPlugin(ScrollTrigger);

        // Create a timeline to sequence the animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".gallery-cards-container",
                start: "top top",
                // Increase the end value to give more scroll distance for the sequence
                end: "+=5000", 
                scrub: true,
                pin: true,
            }
        });

        // Add animations to the timeline sequentially

        tl.to(".gallery-card-6", { 
          yPercent: -100 
        });

        tl.to(".gallery-card-5", { 
          yPercent: -100 
        });

        // 1. Animate Card 4 up to reveal Card 3
        tl.to(".gallery-card-4", { 
            yPercent: -100 
        });

        // 2. Animate Card 3 up to reveal Card 2
        tl.to(".gallery-card-3", { 
            yPercent: -100 
        });

        // 3. Animate Card 2 up to reveal Card 1
        // This is the last animation in the sequence
        tl.to(".gallery-card-2", { 
            yPercent: -100 
        });


// SCROLL REVEAL JS
const sr = ScrollReveal({
  distance: '50px',
  duration: 2000,
})

sr.reveal(`.left`,{
  origin: 'left',
  interval: 450,
})

sr.reveal(`.right`,{
  origin: 'right',
  interval: 450,
})

sr.reveal(`.bottom`,{
  origin: 'bottom',
  interval: 450,
})

sr.reveal(`.top`,{
  origin: 'top',
  interval: 250,
})