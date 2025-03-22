document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  try{
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the form's default submit behavior

      sendEmail();
    });
  }catch{}
});

function sendEmail() {
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const message = document.getElementById("message").value

  if(!name || !email || !message) return alert('Please fill up all fields')

  const submitBtn = document.querySelector('.contactUsForm form button')
  submitBtn.classList.add('hidden')

  addSpinner();

  const parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("name").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_54knmee", "template_olljhc8", parms)
    .then(() => {
      emailSent();
      const form = document.getElementById("contact-form");
      form.reset(); // Reset form fields after successful submission
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
    });
}

const spinner = document.querySelector(".sendingEmailStatus .spinner");
function addSpinner() {
  spinner.classList.add('display')
}

const emailSentStatus = document.querySelector('.emailSent')
function emailSent() {
  spinner.classList.remove('display')
  emailSentStatus.classList.add('display')
}

const contactBtns = document.querySelectorAll(".contactBtn");
const overlayAndContactForm = document.querySelector(".overlay");
const body = document.body
const closeFormBtn = document.querySelector(".overlay .closeBtn");

try{
  contactBtns.forEach(btn=>{
    btn.addEventListener("click", function () {
      overlayAndContactForm.classList.add("display");
      body.classList.add('no-scroll')
    });
  })
  
  closeFormBtn.addEventListener("click", function () {
    overlayAndContactForm.classList.remove("display");
    body.classList.remove('no-scroll')
  });
}catch{}

//Function to set the pausing effect only when hovering over slider items
const slider = document.querySelector('.slider')
const sliderItems = document.querySelectorAll('.slider .item')

sliderItems.forEach(item => {
  item.addEventListener('mouseover',()=>{
    slider.classList.add('pause-animation')   
  })

  item.addEventListener('mouseout',()=>{
    slider.classList.remove('pause-animation')   
  })

  item.addEventListener('click',()=>{
    window.location.href = item.dataset.url
  })
})


//Show/ hide full info in services page
const basicInfo = document.querySelectorAll('.basicInfo')
basicInfo.forEach(infoBasic=>{
  infoBasic.addEventListener('click',()=>{
    //Selects the element inside the infoBasic
    const fullInfo = infoBasic.querySelector('.fullInfo')

    fullInfo.classList.toggle('display')

    const arrow = infoBasic.querySelector('img')
    arrow.classList.toggle('invertArrow')
  })
})

//Navigate through header
const headerH1s = document.querySelectorAll('.header h1')
headerH1s.forEach(h1=>{
  h1.addEventListener('click',()=>{
    if(!h1.dataset.url) return
    window.location.href = h1.dataset.url
  })
})

//Go to home when click logo
const logos = document.querySelectorAll('.logo')
logos.forEach(logo=>{
  logo.addEventListener('click',()=>{
    window.location.href = 'index.html'
  })
})

//navigate through footer
const footerFrstDivPs = document.querySelectorAll('.footer .frstDiv p')
footerFrstDivPs.forEach(p=>{
  p.addEventListener('click',()=>{
    if(!p.dataset.url) return
    window.location.href = p.dataset.url
  })
})

const footerScndDivP = document.querySelector('.footer .scndDiv p')
footerScndDivP.addEventListener('click',()=>{
   window.location.href = footerScndDivP.dataset.url
})

const footerThrdDivSpan = document.querySelector('.footer .thrdDiv .telegram span')
footerThrdDivSpan.addEventListener('click',()=>{
  window.location.href = footerThrdDivSpan.textContent
})

//Slider animation on mobile
//YOU NEED TO RUN THIS CODE BELOW ONLY WHEN THE DOM IS LOADED
//AND WHEN SCREEN IS LESS OR EQUAL TO 450
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 450) {
    try {
      const bannerMobileSliderImgs = document.querySelectorAll('.bannerMobile .slider img');
      const prevBtn = document.querySelector('.prev');
      const nextBtn = document.querySelector('.next');
      let currentIndex = 0;
      let interval;

      function startAutoSlide() {
        interval = setInterval(() => showImg(), 3000);
      }

      function stopAutoSlide() {
        clearInterval(interval);
      }

      function showImg(index) {
        bannerMobileSliderImgs[currentIndex].classList.remove('display');

        // If index is given, use it; otherwise, go to the next image
        currentIndex = (typeof index === "number" ? index : currentIndex + 1) % bannerMobileSliderImgs.length;

        bannerMobileSliderImgs[currentIndex].classList.add('display');
      }

      // Initial setup
      bannerMobileSliderImgs[currentIndex].classList.add('display');
      startAutoSlide();

      // Button event listeners
      prevBtn.addEventListener('click', () => {
        if(currentIndex === 0) return
        stopAutoSlide(); // Stop auto sliding
        showImg(currentIndex - 1); // Show previous image
        startAutoSlide(); // Restart auto sliding
      });

      nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        showImg(currentIndex + 1);
        startAutoSlide();
      });
    } catch (err) {
      console.error("Error in slider script:", err);
    }
  }
});

//Show/ hide the menu
try{
 const menuBtn = document.querySelector('.bannerMobile .header .menuBtn')
 const menu = document.querySelector('.menu')
 const closeMenuBtn = document.querySelector('.menu div:nth-child(1) img')
 const body = document.body

 menuBtn.addEventListener('click',()=>{
  menu.classList.add('display')
  body.classList.add('no-scroll')
 })

 closeMenuBtn.addEventListener('click',()=>{
  menu.classList.remove('display')
  body.classList.remove('no-scroll')
 })
}catch{}

//Navigate through menu on mobile
try{
const menuH1s = document.querySelectorAll('.menu div h1')
menuH1s.forEach(h1=>{
  if(!h1 || !h1.dataset.url) return

  h1.addEventListener('click',()=>{
    window.location.href = h1.dataset.url
  })
})
}catch{}

//Navigate through footer on mobile
try{
  const footerMobilePs = document.querySelectorAll('.footerMobile div p')
  footerMobilePs.forEach(p=>{
    if(!p.dataset.url) return

    p.addEventListener('click',()=>{
      window.location.href = p.dataset.url
    })
  })

  const telegramSpan = document.querySelector('.footerMobile .telegram span')
  telegramSpan.addEventListener('click',()=>{
    window.location.href = "https://t.me/ConstellarWeb"
  })
}catch{}

//Clicking projetcs span in about will take to home page 
try{
const projetcsSpan = document.querySelector('.about p span')
projetcsSpan.addEventListener('click',()=>{
  window.location.href = 'index.html'
})
}catch{}

//Clicking one of the projects in the top will take you to respective page 
if(window.innerWidth < 450){
  const projectsMobile = document.querySelectorAll('.bannerMobile .slider img')
  projectsMobile.forEach(project=>{
    project.addEventListener('click',()=>{
      window.location.href = project.dataset.url
    })
  })
}