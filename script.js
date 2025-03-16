document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form's default submit behavior
    sendEmail();
  });
});

function sendEmail() {
  const parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("name").value,
    message: document.getElementById("message").value,
  };

  addSpinner();

  emailjs
    .send("service_54knmee", "template_olljhc8", parms)
    .then(() => {
      emailSent();
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
    });
}

const spinner = document.querySelector(".sendingEmailStatus");

function addSpinner() {
  const html = `
    <div class="spinner">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAclJREFUaEPtmVFuAyEMRJOTtT1Zm5M1OVkbS7GEiM3YgFkj7f6lpDBv7HUMXC+bP9fN9V9OgKMjODMCny+Y7wKK/jZzjTe/ZkxOIkk0A9SLzFhDDfTI5CT415BCI2vA6XsmR46njsDPK100Z+7PnL8Vg/Q59PFEoCWeRNP48scKoIk/TDg7ZQHQxH89K094iqCQIgCt0qQQT3AI4E9wII14BCClzuE576nRtfvpxLciILmP0g29byHjmihqEcreJqX7rQjU6ZPSfQ2gTh+q9VR5Uj6SszVA2vTRIlDnf6q6bymj2wNs8wJrKZQNoKlHeokzpVDdTL5VxBMg+McBlnQpAjBswaLL6WFLYwFAbXckDywomZs5U0ujAUhbydUNnWk/0hJlmiAof8z7kRaAFIUVfZFrK4vSoq4CZHgkhHYKoupEACuPVbrWQgDk+IpTOU083ItYAKIhhgyyArQgaAw6JVSrKYfFHgAEQePULT6KM1M+Oy1POFq3OW4zvAC0gPVmxvsTwXcLrgPjHgAWhi47PADdpXkEoAT5aFzyaSBdjls29R7n6u/yLQ0Bcbrxu8Hf5SsoV6poomZEYAR4+H9PgGELByfYPgL/hz5oMXRLDekAAAAASUVORK5CYII="
          />
        </div>`;
  spinner.insertAdjacentHTML("afterbegin", html);
}

function emailSent() {
  spinner.innerHTML = "";
  const html = `
    <div class="emailSent">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAnhJREFUaEPtmW1uwzAIhsPJtp5s68nWnswrkT15hG8cVZXaP5OyxOEBXowJbC/+gxe3f3sDPDuCyyLQWvvsMF8T1Lh269fu+BcAvleBlwFaa2jMx7Ztw1ivbQh1r8KkAbrhs7e9hnP3XbMgYYCeKj8Va5VnwyAhAIfXMS2uw0AA2HN/0genE8oTgnADGMZfhrHeyBjruSFcAMrL3C+SwKprmwDKC8JeVyAwtThdmQ5SAQTj9zyPpowntVprCEHLseooC6DRF8Oj3nmMydwjVTjtnaIxgveXpU0wncRU0gCo9818zHide4ZznhQFFiCyQNZoTBdNR+1hBFmbdaAEQMW01PuTg8R1GT3cAOBy0KQQwn/0K4XLRFeDoFE4aPAQgcgLoukT3VOYsvo8gMyO60kjLgI0/8ulM2P81ATOO/RBByUAq5J0I/DAw50bzMKQjYBLwM5KkjZ+6IuWU1pQuAiYAB6hZ9OGFoYMgKoB5UT2lxILjadd6hoNaAYyk4nhVDPnGe+fA2CIc9mh3ZOqnAZM6klgkkhniLDnlfUPa3kAcBAVbbvTaTOTWwLGe73NnLqZCZpIe15I0VAzd0gNq6EjECXjO0C+nY4sQEK+zzyzUzZNW6EDjVJlyn2R1cEK+0z8SClEAS+fCsGcxNQiYk0luHkNKybLs9b/u+ex6aNjFVVP5ogkegixDBVOgOcMthwb1opqU+pYzQg4IPCWMIgxpnev5wZw9j9jtL6P1ZnxOl7m8jzdeoQAnBAZGYxnwhUuDOBMqSiEO2XowmkAAvJ6H/mEcjg+nyIQ/uhn1l3wsz6ioVoegaoB1efLKVQ1oPr8G6Dqwerzv6YRyEAmjVX/AAAAAElFTkSuQmCC"
            />
            <p>E-mail sent!</p>
          </div>
        </div>`;
  spinner.insertAdjacentHTML("afterbegin", html);
}

const form = document.querySelector(".contactUsForm");
const contactUs = document.querySelector(".contactUsText");
const closeForm = document.querySelector(".closeButtom");

contactUs.addEventListener("click", function () {
  form.classList.toggle("hidden");
});

closeForm.addEventListener("click", function () {
  form.classList.add("hidden");
});

//Function to set the pausing effect only when hovering over slider items
const slider = document.querySelector('.slider')
const sliderItems = document.querySelectorAll('.slider .item')

sliderItems.forEach(item => {
  item.addEventListener('mouseover',()=>{
    console.log('ok')

    slider.classList.add('pause-animation')   
  })

  item.addEventListener('mouseout',()=>{
    slider.classList.remove('pause-animation')   
  })

  item.addEventListener('click',()=>{
    window.location.href = item.dataset.url
  })
})