function initTabNav() {
  const tabMenu = document.querySelectorAll(".jsTabMenu li");
  const tabContent = document.querySelectorAll(".jsTabContent section");
  const activeClass = "active";

  if (tabMenu.length) {
    tabContent[0].classList.add(activeClass);

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(activeClass);
      });

      tabContent[index].classList.add(activeClass);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".jsAccordion dt");
  const activeClass = "active";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordion();

function initSmoothScroll() {
  const internalLinks = document.querySelectorAll('.jsMenu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const sectionInit = section.offsetTop;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  internalLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

initSmoothScroll();

function initAnimateScroll() {
  const sections = document.querySelectorAll('.jsScroll');

  if(sections.length) {
    const halfHeight = window.innerHeight * .7;

    function animateScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - halfHeight) < 0;

        if(isSectionVisible)
          section.classList.add('active');
        else
          section.classList.remove('active');
      })
    }
  
    animateScroll();
    window.addEventListener('scroll', animateScroll)
  }
}

initAnimateScroll();