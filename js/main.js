document.addEventListener('DOMContentLoaded', () => {

    // === Accordion ===

    function accordion(){
        const accordionButtons = document.querySelectorAll('.accordion-item');
        const texts = document.querySelectorAll('.accordion-item__text');
        const arrows = document.querySelectorAll('.arrow-down');
        const accordItems = document.querySelectorAll('.accordion-item');
        for(let i = 0; i < accordionButtons.length; i++){
            accordionButtons[i].addEventListener('click', ()=>{
                texts[i].classList.toggle('accordion-item__text--active');
                arrows[i].classList.toggle('rotate');
                accordItems[i].classList.toggle('accordion-item--active');
            });
        }
    }

    accordion();

    // === /Accordion ===

    // === Slider ===

    function slider(){
        const btnNext = document.querySelector('.btn-next');
        const btnPrev = document.querySelector('.btn-prev');
        const sliderLine = document.querySelector('.slider-line');
        const slidesCount = document.querySelectorAll('.slider-item').length;
        let tmp = getComputedStyle(document.querySelector('.slider-line'));
        let sliderItemWidth = tmp.width;
        sliderItemWidth = parseInt(sliderItemWidth);
        let offset = 0;
        sliderLine.style.left = offset + 'px';
        
        btnNext.addEventListener('click', ()=>{
            offset -= sliderItemWidth;
            if(offset <= -(slidesCount * sliderItemWidth)){
                offset = 0;
            }
            sliderLine.style.left = offset + 'px';
        });

        btnPrev.addEventListener('click', ()=>{
            offset += sliderItemWidth;
            console.log(offset);
            if(offset <= (slidesCount * sliderItemWidth)){
                offset = 0;
            }
            // if(offset == (sliderItemWidth)){
            //     offset = (slidesCount * sliderItemWidth) + "px";
            // }
            sliderLine.style.left = offset + 'px';
        });
    }

    slider();

    // === /Slider ===

    // === ThemeMode ===

    function changeTheme(){
        const style = document.getElementById('style');
        const themeButton = document.querySelector('.theme-button');
        themeButton.addEventListener('click', ()=>{
            if(style.getAttribute("href") == "./css/style-light.css"){
                style.href = "./css/style.css";
            }
            else{
                style.href = "./css/style-light.css";
            }
        });
    }

    changeTheme();

    // === /ThemeMode ===

    // === Scrolling ===

    function NavScrolling(){
        const burgerBtn = document.querySelector('.burger-button');
        const aboutUs = document.getElementById('about-us'), portfolio = document.getElementById('portfolio'),services = document.getElementById('services'),promo = document.getElementById('promo'),contacts = document.getElementById('footer'),contactUs = document.getElementById('contact-us');
        const aboutUsLink = document.getElementById('about-us-link'),portfolioLink = document.getElementById('portfolio-link'),servicesLink = document.getElementById('services-link'),contactsLink = document.getElementById('contacts-link'),contactUsLink = document.getElementById('contact-us-link');
        const aboutUsLinkFooter = document.getElementById('about-us-link-footer'),portfolioLinkFooter = document.getElementById('portfolio-link-footer'),servicesLinkFooter = document.getElementById('services-link-footer'),contactUsLinkFooter = document.getElementById('contact-us-link-footer');
        aboutUsLink.addEventListener('click', ()=>{
            burgerBtn.classList.toggle('header-burger--animate');
            aboutUs.scrollIntoView({block: "start", behavior: "smooth"});
            document.querySelector('body').style.overflow = 'auto';
            document.querySelector('.nav-bar').classList.toggle('nav-bar--active');
        });
        portfolioLink.addEventListener('click', ()=>{
            burgerBtn.classList.toggle('header-burger--animate');
            portfolio.scrollIntoView({block: "start", behavior: "smooth"});
            document.querySelector('body').style.overflow = 'auto';
            document.querySelector('.nav-bar').classList.toggle('nav-bar--active');
        });
        servicesLink.addEventListener('click', ()=>{
            burgerBtn.classList.toggle('header-burger--animate');
            services.scrollIntoView({block: "start", behavior: "smooth"});
            document.querySelector('body').style.overflow = 'auto';
            document.querySelector('.nav-bar').classList.toggle('nav-bar--active');
        });
        contactsLink.addEventListener('click', ()=>{
            burgerBtn.classList.toggle('header-burger--animate');
            contacts.scrollIntoView({block: "start", behavior: "smooth"});
            document.querySelector('body').style.overflow = 'auto';
            document.querySelector('.nav-bar').classList.toggle('nav-bar--active');
        });
        contactUsLink.addEventListener('click', ()=>{
            burgerBtn.classList.toggle('header-burger--animate');
            contactUs.scrollIntoView({block: "start", behavior: "smooth"});
            document.querySelector('body').style.overflow = 'auto';
            document.querySelector('.nav-bar').classList.toggle('nav-bar--active');
        });
        aboutUsLinkFooter.addEventListener('click', ()=>{aboutUs.scrollIntoView({
            block: "start", behavior: "smooth"});
        });
        portfolioLinkFooter.addEventListener('click', ()=>{
            portfolio.scrollIntoView({block: "start", behavior: "smooth"});
        });
        servicesLinkFooter.addEventListener('click', ()=>{
            services.scrollIntoView({block: "start", behavior: "smooth"});
        });
        contactUsLinkFooter.addEventListener('click', ()=>{
            contactUs.scrollIntoView({block: "start", behavior: "smooth"});
        });
    }

    NavScrolling();

    // === /Scrolling ===


    // === Burger ===

    function menuBurger(){
        function moveMenuDown(){
            navBar.style.top = '136%';
        }
        const burgerBtn = document.querySelector('.burger-button');
        const navBar = document.querySelector('.nav-bar');
        console.log(navBar);
        burgerBtn.addEventListener('click', ()=>{
            navBar.classList.toggle('nav-bar--active');
            burgerBtn.classList.toggle('header-burger--animate');
            setInterval(moveMenuDown, 20);
            if(navBar.getAttribute('class') === 'nav-bar nav-bar--active'){
                document.querySelector('body').style.overflow = 'hidden';
            }
            else{
                document.querySelector('body').style.overflow = 'auto';
            }
        });
    }

    menuBurger();

    // === /Burger ===

});
