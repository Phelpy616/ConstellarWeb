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
const logo = document.querySelector('.header img')
logo.addEventListener('click',()=>{
  window.location.href = 'index.html'
})
