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
    .send("service_w8np9sl", "template_jgoyr7o", parms)
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

try {
  const projectsSpan = document.querySelector('.about p .projects-link');
  projectsSpan.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
} catch (err) {
  console.error('Could not attach click event to projects span:', err);
}

//Clicking one of the projects in the top will take you to respective page 
if(window.innerWidth < 450){
  const projectsMobile = document.querySelectorAll('.bannerMobile .slider img')
  projectsMobile.forEach(project=>{
    project.addEventListener('click',()=>{
      window.location.href = project.dataset.url
    })
  })
}

//auto detect user location to change language
document.addEventListener('DOMContentLoaded',()=>{
  fetch("https://ipinfo.io/json?token=e33cd93f74e57e")
  .then(res => res.json())
  .then(data => {
    const country = data.country; // "US", "BR", etc.
    // const country = "US";
    console.log(country)

    
    if (country === "BR") {
      localStorage.setItem("lang", "pt");

      //header
      document.querySelector('.header .headerAbout').textContent = 'Sobre'
      document.querySelector('.header .headerServices').textContent = 'Serviços'
      document.querySelector('.header .headerContact').textContent = 'Contato'

      //Business type
      try{const businessType = document.querySelector('.banner .content .businessType')
      businessType.textContent = 'Desenvolvimento web'}catch{}

      //page bottom
      try{
      document.querySelector('.pageBottom .text .h1Desktop').textContent = "Dando vida às suas ideias"
      document.querySelector('.pageBottom .text p').textContent = `Entendemos, você não precisa lidar com complexidades técnicas.  
      É aí que entramos. Cuidamos de tudo, do design e desenvolvimento  
      até a implantação e manutenção, para que você possa focar no seu negócio.  
      Com a nossa experiência, você terá um site ou aplicativo web com aparência incrível,  
      funcionamento impecável e que ajuda você a alcançar seus objetivos com facilidade.`
      }catch{}

      //contact field
      try{
      document.querySelector('.contactContainer .contactBlock h1').textContent = 'CONTATE-NOS'
      document.querySelector('.contactContainer .contactBlock p').textContent = `Entre em contato com a gente para qualquer dúvida!  
      Receba uma prévia gratuita do seu site ou aplicativo web, feita com base nas suas necessidades.  
      Gostou? A gente constrói. Não ficou satisfeito? Ajeitamos até você ficar!`
      document.querySelector('.contactContainer .contactBlock .contactBtn h2').textContent = 'Contate-nos'
      }catch{}

      //Contact overlay
      try{
        document.querySelector('.overlay .contactUsForm h1').textContent = 'Contate-nos'
        document.querySelector('.overlay .contactUsForm form input:nth-child(1)').placeholder = 'Nome'
        document.querySelector('.overlay .contactUsForm form textarea').placeholder = 'Deixe uma mensagem'
        document.querySelector('.overlay .contactUsForm form button').textContent = 'Enviar'
      }catch{}

      //about
      try{
      document.querySelector('.about h1').textContent = 'Sobre nós'
      document.querySelector('.about p').innerHTML = `Somos uma equipe de desenvolvedores jovens com profundo conhecimento  
      em tecnologias web como HTML, CSS e JavaScript a linguagem mais poderosa  
      para desenvolvimento web moderno. Mas não paramos por aí.  
      Criamos nossas próprias APIs e bancos de dados, o que nos permite desenvolver  
      sites e aplicativos web completos e de alto desempenho.  
      Nossas habilidades nos permitem dar vida às ideias,  
      como os <span class="projects-link">projetos</span> que você pode explorar na página inicial.  
      Se você tem uma visão para seu próximo projeto, vamos adorar  
      ouvir sobre ela e transformá-la em realidade! :)`
      }catch{}
    } 

    //services 
    document.querySelector('.servicesTxt').textContent = 'Serviços'
    document.querySelector('.services .webHosting div:nth-child(1) h2').textContent = 'Hospedagem'
    document.querySelector('.services .maintenance div:nth-child(1) h2').textContent = 'Manutenção'

    //services info
    document.querySelector('.services .websites .fullInfo p').textContent = `
Um site é um conjunto de páginas web acessíveis pela internet. Ele funciona como um espaço digital onde empresas, pessoas e organizações podem apresentar informações, produtos ou serviços.
Pense nele como sua vitrine ou portfólio online, seja uma landing page simples, um blog ou uma plataforma totalmente interativa, um site ajuda você a se conectar com seu público, construir credibilidade e compartilhar conteúdo valioso.
Em resumo, se você precisa de uma presença online, um site é a base de tudo! 🚀
`

document.querySelector('.services .webapps .fullInfo p').innerHTML = `
Um aplicativo web (ou web app) é um site interativo criado para realizar tarefas específicas ou oferecer serviços online. Diferente de um site comum que serve principalmente para exibir informações, uma web app permite que os usuários interajam, façam login, realizem compras ou gerenciem dados.<br><br>

Exemplos de web apps incluem:<br>

Lojas online com sistema de checkout<br>

Sistemas de agendamento e reservas<br>

Dashboards para gerenciamento de operações empresariais<br><br>

As web apps podem ser acessadas de qualquer dispositivo com conexão à internet, o que as torna práticas e fáceis de usar. Elas geralmente se parecem com apps de celular ou desktop, mas rodam diretamente no navegador, sem necessidade de download!`

document.querySelector('.services .e-commerce .fullInfo p').innerHTML = `
E-commerce se refere a lojas online onde os usuários podem navegar, comprar e gerenciar pedidos de qualquer lugar. Diferente de um site comum, uma plataforma de e-commerce inclui recursos que tornam as compras online fáceis e seguras.<br><br>

Principais recursos de um site de e-commerce:<br>
🛒 Catálogo de Produtos – Exiba produtos com imagens, descrições e preços.<br>
💳 Checkout Seguro – Aceite pagamentos por cartão de crédito, PayPal ou outros métodos.<br>
📦 Gestão de Pedidos – Acompanhe compras, envios e entregas.<br>
👤 Contas de Usuário – Permita que clientes salvem favoritos, vejam histórico de pedidos e gerenciem seus perfis.<br><br>

Sites de e-commerce tornam as compras mais convenientes, rápidas e acessíveis tanto para empresas quanto para clientes.`

document.querySelector('.services .saas .fullInfo p').innerHTML = `
SaaS (Software como Serviço) é uma solução baseada na nuvem que permite aos usuários acessar e usar softwares online sem precisar instalar nada em seus dispositivos. É ideal para empresas e pessoas que buscam ferramentas poderosas com atualizações automáticas e acesso fácil de qualquer lugar.<br><br>

Por que escolher SaaS?<br>
☁️ Acessível de Qualquer Lugar – Use o software em qualquer dispositivo com conexão à internet.<br>
🔄 Sempre Atualizado – Nada de instalar atualizações; elas acontecem automaticamente.<br>
💰 Custo-Benefício – Pague apenas pelo que usar, geralmente por meio de assinaturas.<br>
🤝 Colaboração Facilitada – Equipes podem trabalhar juntas em tempo real, de locais diferentes.<br><br>

Plataformas SaaS otimizam fluxos de trabalho, aumentam a eficiência e oferecem uma experiência de uso fluida, sem complicações com instalações ou manutenções manuais.`

document.querySelector('.services .webHosting .fullInfo p').innerHTML = `
Hospedagem de Sites é o serviço que torna seu site acessível na internet, armazenando seus arquivos em um servidor.<br><br>

Por que escolher Hospedagem de Sites?<br>
🌐 Confiável – Mantém seu site sempre online.<br>
⚡ Rápida – Garante tempos de carregamento rápidos.<br>
🔒 Segura – Protege seu site contra ameaças.<br>
📈 Escalável – Fácil de atualizar conforme seu site cresce.<br>
🛠️ Suporte 24/7 – Ajuda sempre que você precisar.<br><br>

A hospedagem garante que seu site funcione bem, carregue rápido e permaneça seguro. É a base para colocar seu site no ar! 🌍🚀`

document.querySelector('.services .maintenance .fullInfo p').innerHTML = `
Se você escolher que a gente hospede seu site ou aplicativo web, a manutenção é gratuita. Caso contrário, oferecemos manutenção por um preço muito acessível.<br><br>

A manutenção garante que seu site ou aplicativo web esteja sempre atualizado, seguro e com o melhor desempenho possível.<br><br>

Por que escolher Manutenção com a gente?<br>
🔧 Correção de Bugs – Resolve problemas para manter tudo funcionando perfeitamente.<br>
🛡️ Atualizações de Segurança – Protege seu site contra possíveis ameaças.<br>
⚡ Otimização de Desempenho – Melhora a velocidade e a confiabilidade.<br>
📅 Suporte Contínuo – Verificações regulares para garantir que tudo esteja em ordem.<br><br>

Com manutenção, seu site ou aplicativo web se mantém eficiente, seguro e sempre atualizado!`

      //Clicking projetcs span in about will take to home page 
      try {
        const projectsSpan = document.querySelector('.about p .projects-link');
        projectsSpan.addEventListener('click', () => {
        window.location.href = 'index.html';
      });
      } catch (err) {
          console.error('Could not attach click event to projects span:', err);
      }
  });
})

