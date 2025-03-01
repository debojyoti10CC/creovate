// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Initialize AOS animation library
    // Add AOS import here.  Assuming you are using a CDN, you would add something like this to your HTML file:
    // <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    })
  
    // Preloader
    const preloader = document.querySelector(".preloader")
  
    if (preloader) {
      window.addEventListener("load", () => {
        setTimeout(() => {
          preloader.style.opacity = "0"
          setTimeout(() => {
            preloader.style.display = "none"
          }, 500)
        }, 1000)
      })
    }
  
    // Custom cursor
    const cursorDot = document.querySelector(".cursor-dot")
    const cursorOutline = document.querySelector(".cursor-dot-outline")
  
    if (cursorDot && cursorOutline) {
      window.addEventListener("DOMContentLoaded", () => {
        cursorDot.style.opacity = "1"
        cursorOutline.style.opacity = "1"
      })
  
      window.addEventListener("mousemove", (e) => {
        const posX = e.clientX
        const posY = e.clientY
  
        cursorDot.style.left = `${posX}px`
        cursorDot.style.top = `${posY}px`
  
        cursorOutline.style.left = `${posX}px`
        cursorOutline.style.top = `${posY}px`
  
        // Add animation to cursor when hovering over links and buttons
        const hoverElements = document.querySelectorAll("a, button, .btn, .nav-item, .portfolio-item, .team-member")
  
        hoverElements.forEach((element) => {
          element.addEventListener("mouseenter", () => {
            cursorDot.style.transform = "translate(-50%, -50%) scale(1.5)"
            cursorOutline.style.transform = "translate(-50%, -50%) scale(1.5)"
            cursorOutline.style.backgroundColor = "rgba(108, 99, 255, 0.3)"
          })
  
          element.addEventListener("mouseleave", () => {
            cursorDot.style.transform = "translate(-50%, -50%) scale(1)"
            cursorOutline.style.transform = "translate(-50%, -50%) scale(1)"
            cursorOutline.style.backgroundColor = "rgba(108, 99, 255, 0.2)"
          })
        })
      })
  
      // Hide cursor when mouse leaves window
      document.addEventListener("mouseleave", () => {
        cursorDot.style.opacity = "0"
        cursorOutline.style.opacity = "0"
      })
  
      document.addEventListener("mouseenter", () => {
        cursorDot.style.opacity = "1"
        cursorOutline.style.opacity = "1"
      })
    }
  
    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle")
    const navLinks = document.querySelector(".nav-links")
  
    if (menuToggle) {
      menuToggle.addEventListener("click", function () {
        this.classList.toggle("active")
        navLinks.classList.toggle("active")
      })
    }
  
    // Close mobile menu when clicking on a nav link
    const navItems = document.querySelectorAll(".nav-links a")
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        if (menuToggle.classList.contains("active")) {
          menuToggle.classList.remove("active")
          navLinks.classList.remove("active")
        }
      })
    })
  
    // Portfolio Filtering
    const filterBtns = document.querySelectorAll(".filter-btn")
    const portfolioItems = document.querySelectorAll(".portfolio-item")
  
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        // Remove active class from all buttons
        filterBtns.forEach((btn) => btn.classList.remove("active"))
  
        // Add active class to clicked button
        this.classList.add("active")
  
        const filterValue = this.getAttribute("data-filter")
  
        portfolioItems.forEach((item) => {
          if (filterValue === "all" || item.classList.contains(filterValue)) {
            item.style.display = "block"
            setTimeout(() => {
              item.style.opacity = "1"
              item.style.transform = "scale(1)"
            }, 200)
          } else {
            item.style.opacity = "0"
            item.style.transform = "scale(0.8)"
            setTimeout(() => {
              item.style.display = "none"
            }, 500)
          }
        })
      })
    })
  
    // Portfolio Modal
    const portfolioLinks = document.querySelectorAll(".portfolio-link")
    const portfolioModal = document.querySelector(".portfolio-modal")
    const modalClose = document.querySelector(".modal-close")
    const modalImage = document.getElementById("modal-image")
    const modalTitle = document.getElementById("modal-title")
    const modalDescription = document.getElementById("modal-description")
  
    if (portfolioLinks.length > 0 && portfolioModal) {
      portfolioLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
          e.preventDefault()
  
          const portfolioItem = this.closest(".portfolio-item")
          const image = portfolioItem.querySelector("img").getAttribute("src")
          const title = portfolioItem.querySelector("h3").textContent
          const description = portfolioItem.querySelector("p").textContent
  
          modalImage.setAttribute("src", image)
          modalTitle.textContent = title
          modalDescription.textContent = description
  
          portfolioModal.classList.add("active")
          document.body.style.overflow = "hidden"
        })
      })
  
      modalClose.addEventListener("click", () => {
        portfolioModal.classList.remove("active")
        document.body.style.overflow = "auto"
      })
  
      // Close modal when clicking outside of content
      portfolioModal.addEventListener("click", (e) => {
        if (e.target === portfolioModal) {
          portfolioModal.classList.remove("active")
          document.body.style.overflow = "auto"
        }
      })
    }
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for fixed header
            behavior: "smooth",
          })
        }
      })
    })
  
    // Navbar scroll effect
    const nav = document.querySelector("nav")
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        nav.style.background = "#ffffff"
        nav.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
      } else {
        nav.style.background = "rgba(255, 255, 255, 0.95)"
        nav.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
      }
    })
  
    // Back to top button
    const backToTopBtn = document.querySelector(".back-to-top")
  
    if (backToTopBtn) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          backToTopBtn.classList.add("active")
        } else {
          backToTopBtn.classList.remove("active")
        }
      })
  
      backToTopBtn.addEventListener("click", (e) => {
        e.preventDefault()
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      })
    }
  
    // Form submission with validation and animation
    const contactForm = document.getElementById("contactForm")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        // Validate form
        let isValid = true
  
        if (name.trim() === "") {
          isValid = false
          document.getElementById("name").style.borderColor = "red"
        } else {
          document.getElementById("name").style.borderColor = "#ddd"
        }
  
        if (email.trim() === "" || !isValidEmail(email)) {
          isValid = false
          document.getElementById("email").style.borderColor = "red"
        } else {
          document.getElementById("email").style.borderColor = "#ddd"
        }
  
        if (subject.trim() === "") {
          isValid = false
          document.getElementById("subject").style.borderColor = "red"
        } else {
          document.getElementById("subject").style.borderColor = "#ddd"
        }
  
        if (message.trim() === "") {
          isValid = false
          document.getElementById("message").style.borderColor = "red"
        } else {
          document.getElementById("message").style.borderColor = "#ddd"
        }
  
        if (isValid) {
          // Here you would typically send the form data to a server
          // For now, we'll just log it to the console
          console.log("Form submitted:", { name, email, subject, message })
  
          // Show success message (you can replace this with your own UI feedback)
          alert("Thank you for your message! We will get back to you soon.")
  
          // Reset form
          contactForm.reset()
        }
      })
  
      // Email validation function
      function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
      }
    }
  
    // Animate particles
    const particles = document.querySelectorAll(".particle")
  
    if (particles.length > 0) {
      particles.forEach((particle) => {
        const randomX = Math.random() * 100
        const randomY = Math.random() * 100
        const randomDelay = Math.random() * 5
        const randomDuration = 10 + Math.random() * 20
  
        particle.style.left = `${randomX}%`
        particle.style.top = `${randomY}%`
        particle.style.animationDelay = `${randomDelay}s`
        particle.style.animationDuration = `${randomDuration}s`
      })
    }
  
    // Animate elements when they come into view
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".service-card, .portfolio-item, .team-member")
  
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const screenPosition = window.innerHeight / 1.2
  
        if (elementPosition < screenPosition) {
          element.classList.add("animate")
        }
      })
    }
  
    // Run animation check on scroll
    window.addEventListener("scroll", animateOnScroll)
  
    // Run once on page load
    animateOnScroll()
  })
  
  