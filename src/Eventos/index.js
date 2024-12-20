import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'typed.js';
import GLightbox from 'glightbox';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { PureCounter } from '@srexi/purecounterjs';

const Eventos = () => {
  useEffect(() => {
    /**
     * Header toggle
     */
    const headerToggleBtn = document.querySelector('.header-toggle');

    const headerToggle = () => {
      document.querySelector('#header').classList.toggle('header-show');
      headerToggleBtn.classList.toggle('bi-list');
      headerToggleBtn.classList.toggle('bi-x');
    };

    headerToggleBtn?.addEventListener('click', headerToggle);

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navmenu a').forEach((navmenu) => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.header-show')) {
          headerToggle();
        }
      });
    });

    /**
     * Toggle mobile nav dropdowns
     */
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach((navmenu) => {
      navmenu.addEventListener('click', (e) => {
        e.preventDefault();
        navmenu.parentNode.classList.toggle('active');
        navmenu.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      });
    });

    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }

    /**
     * Scroll top button
     */
    const scrollTop = document.querySelector('.scroll-top');

    const toggleScrollTop = () => {
      if (scrollTop) {
        window.scrollY > 100
          ? scrollTop.classList.add('active')
          : scrollTop.classList.remove('active');
      }
    };

    scrollTop?.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });

    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);

    /**
     * Animation on scroll
     */
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });

    /**
     * Init typed.js
     */
    const selectTyped = document.querySelector('.typed');
    if (selectTyped) {
      const typedStrings = selectTyped.getAttribute('data-typed-items')?.split(',');
      new Typed('.typed', {
        strings: typedStrings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      });
    }

    /**
     * Initiate Pure Counter
     */
    new PureCounter();

    /**
     * Animate skills items on reveal
     */
    const skillsAnimation = document.querySelectorAll('.skills-animation');
    skillsAnimation.forEach((item) => {
      new Waypoint({
        element: item,
        offset: '80%',
        handler: () => {
          const progress = item.querySelectorAll('.progress .progress-bar');
          progress.forEach((el) => {
            el.style.width = el.getAttribute('aria-valuenow') + '%';
          });
        },
      });
    });

    /**
     * Initiate glightbox
     */
    GLightbox({ selector: '.glightbox' });

    /**
     * Init isotope layout and filters
     */
    document.querySelectorAll('.isotope-layout').forEach((isotopeItem) => {
      const layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      const filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      const sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

      imagesLoaded(isotopeItem.querySelector('.isotope-container'), () => {
        const initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter,
          sortBy: sort,
        });

        isotopeItem.querySelectorAll('.isotope-filters li').forEach((filters) => {
          filters.addEventListener('click', function () {
            isotopeItem.querySelector('.isotope-filters .filter-active')?.classList.remove('filter-active');
            this.classList.add('filter-active');
            initIsotope.arrange({
              filter: this.getAttribute('data-filter'),
            });
            if (typeof aosInit === 'function') {
              AOS.refresh();
            }
          });
        });
      });
    });

    /**
     * Init swiper sliders
     */
    document.querySelectorAll('.init-swiper').forEach((swiperElement) => {
      const config = JSON.parse(swiperElement.querySelector('.swiper-config').innerHTML.trim());
      new Swiper(swiperElement, config);
    });

    /**
     * Correct scrolling position upon page load for URLs containing hash links.
     */
    if (window.location.hash) {
      const section = document.querySelector(window.location.hash);
      if (section) {
        setTimeout(() => {
          const scrollMarginTop = parseInt(getComputedStyle(section).scrollMarginTop, 10);
          window.scrollTo({
            top: section.offsetTop - scrollMarginTop,
            behavior: 'smooth',
          });
        }, 100);
      }
    }

    /**
     * Navmenu Scrollspy
     */
    const navMenuLinks = document.querySelectorAll('.navmenu a');

    const navMenuScrollSpy = () => {
      navMenuLinks.forEach((navMenuLink) => {
        if (!navMenuLink.hash) return;
        const section = document.querySelector(navMenuLink.hash);
        if (!section) return;
        const position = window.scrollY + 200;
        if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
          document.querySelector('.navmenu a.active')?.classList.remove('active');
          navMenuLink.classList.add('active');
        } else {
          navMenuLink.classList.remove('active');
        }
      });
    };

    window.addEventListener('load', navMenuScrollSpy);
    document.addEventListener('scroll', navMenuScrollSpy);
  }, []);

  return null;
};

export default Eventos;
