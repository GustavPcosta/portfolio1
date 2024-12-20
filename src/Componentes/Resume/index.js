import './styles.css';
import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'typed.js';
import GLightbox from 'glightbox';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import Swiper from 'swiper';
import 'swiper/css';
import { Waypoint } from 'react-waypoint';
import  PureCounter from '@srexi/purecounterjs';

function Resume() {
  const headerToggleBtn = useRef(null); 

  useEffect(() => {
    
    const aosInit = () => {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      });
    };

    
    if (headerToggleBtn.current) {
      const headerToggle = () => {
        const header = document.querySelector('#header');
        header.classList.toggle('header-show');
        headerToggleBtn.current.classList.toggle('bi-list');
        headerToggleBtn.current.classList.toggle('bi-x');
      };

      headerToggleBtn.current.addEventListener('click', headerToggle);

      document.querySelectorAll('#navmenu a').forEach((navmenu) => {
        navmenu.addEventListener('click', () => {
          if (document.querySelector('.header-show')) {
            headerToggle();
          }
        });
      });
    }

    document.querySelectorAll('.navmenu .toggle-dropdown').forEach((navmenu) => {
      navmenu.addEventListener('click', function (e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      });
    });

    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }

    const scrollTop = document.querySelector('.scroll-top');
    function toggleScrollTop() {
      if (scrollTop) {
        window.scrollY > 100
          ? scrollTop.classList.add('active')
          : scrollTop.classList.remove('active');
      }
    }
    if (scrollTop) {
      scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });
    }

    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);

    // Inicialização do AOS
    AOS.init();

    const selectTyped = document.querySelector('.typed');
    if (selectTyped) {
      let typedStrings = selectTyped.getAttribute('data-typed-items');
      typedStrings = typedStrings.split(',');
      new Typed('.typed', {
        strings: typedStrings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      });
    }

    new PureCounter();

    document.querySelectorAll('.skills-animation').forEach((item) => {
      new Waypoint({
        element: item,
        offset: '80%',
        handler: function () {
          let progress = item.querySelectorAll('.progress .progress-bar');
          progress.forEach((el) => {
            el.style.width = el.getAttribute('aria-valuenow') + '%';
          });
        },
      });
    });

    const glightbox = GLightbox({
      selector: '.glightbox',
    });

    document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
      let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

      let initIsotope;
      imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
        initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort,
        });
      });

      isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
        filters.addEventListener('click', function () {
          isotopeItem
            .querySelector('.isotope-filters .filter-active')
            .classList.remove('filter-active');
          this.classList.add('filter-active');
          initIsotope.arrange({
            filter: this.getAttribute('data-filter'),
          });
          aosInit(); 
        });
      });
    });

    document.querySelectorAll('.init-swiper').forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector('.swiper-config').innerHTML.trim()
      );
      new Swiper(swiperElement, config);
    });

    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth',
          });
        }, 100);
      }
    }

    let navMenuLinks = document.querySelectorAll('.navmenu a');

    function navMenuScrollSpy() {
      navMenuLinks.forEach((navMenuLink) => {
        if (!navMenuLink.hash) return;
        let section = document.querySelector(navMenuLink.hash);
        if (!section) return;
        let position = window.scrollY + 200;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          document.querySelectorAll('.navmenu a.active').forEach((link) =>
            link.classList.remove('active')
          );
          navMenuLink.classList.add('active');
        } else {
          navMenuLink.classList.remove('active');
        }
      });
    }

    window.addEventListener('load', navMenuScrollSpy);
    document.addEventListener('scroll', navMenuScrollSpy);
  }, []);

  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>Resumo das minhas jornadas.</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Sumário</h3>
            <h3 className="resume-title">Educação</h3>
            <div className="resume-item">
              <h4>Desenvolvimento de software &amp; Web design</h4>
              <h5>2023 - 2024</h5>
              <p><em>Curso de nível técnico: <strong>Recode Pro</strong></em></p>
              <p><em>Curso de nível técnico: <strong>Cubos Academy</strong></em></p>
              <p>Desenvolver competências na área de desenvolvimento de software FullStack</p>
            </div>

            <div className="resume-item">
              <h4>Engenharia Química</h4>
              <h5>Atualmente</h5>
              <p><em>Bacharelado</em></p>
              <p>Localizada na Bahia e na cidade de Salobrinho</p>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Experiência profissional</h3>
            <div className="resume-item">
              <h4>Júnior</h4>
              <h5></h5>
              <p><em>Atuação remoto</em></p>
              <ul>
                <li>Já atuei em projetos reais e individuais.</li>
                <li>Empresa de atuação <strong>Economy Software</strong></li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Habilidade com Design</h4>
              <ul>
                <li>Figma.</li>
                <li>Templates.</li>
                <li>Arquitetura com React, HTML, CSS e JavaScript puro.</li>
                <li>Criação de sites responsivos.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
