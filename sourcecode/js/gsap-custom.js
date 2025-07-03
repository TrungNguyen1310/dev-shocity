// Kiểm tra giá trị từ localStorage khi khởi tạo
let hasAnimationRun = localStorage.getItem('hasAnimationRun') === 'true';

// GSAP animation
const tl = gsap.timeline({ duration: 0.5 });

// Responsive
let mm = gsap.matchMedia(),
  breakPoint = 821;

// Utility function to wait for an element to be available in the DOM and have width > window.innerWidth
function waitForElementWidth(selector) {
  return new Promise((resolve) => {
    const checkElement = () => {
      const element = document.querySelector(selector);
      if (element && element.offsetWidth > window.innerWidth) {
        resolve(element);
      } else {
        const observer = new MutationObserver((mutations, me) => {
          const element = document.querySelector(selector);
          if (element && element.offsetWidth > window.innerWidth) {
            resolve(element);
            me.disconnect();
          }
        });
        observer.observe(document, {
          childList: true,
          subtree: true,
          attributes: true,
        });
      }
    };
    checkElement();
  });
}

mm.add(
  {
    isDesktop: `(min-width: ${breakPoint}px)`,
    isMobile: `(max-width: ${breakPoint - 1}px)`,
    reduceMotion: '(prefers-reduced-motion: reduce)',
  },
  (context) => {
    let { isDesktop, isMobile, reduceMotion } = context.conditions;

    // Thêm đoạn này để chạy ngay lập tức nếu đã có animation trước đó
    if (hasAnimationRun) {
      document.querySelector('.view-main')?.classList.add('has-visited');
    }

    // Sau đó mới vào điều kiện chính
    if (!hasAnimationRun) {
      tl.to(
        '.clouds-01',
        {
          duration: 8,
          x: '-80%',
          onComplete: () => gsap.set('.clouds-01', { display: 'none' }),
        },
        '00'
      )
        .to(
          '.clouds-02',
          {
            duration: 8,
            x: '120%',
            onComplete: () => gsap.set('.clouds-02', { display: 'none' }),
          },
          '00'
        )
        .to(
          '.clouds-03',
          {
            duration: 8,
            x: '-70%',
            onComplete: () => gsap.set('.clouds-03', { display: 'none' }),
          },
          '00'
        )
        .to(
          '.clouds-hd',
          {
            backgroundColor: 'transparent',
            duration: 8,
            onStart: () => {
              if (isMobile) {
                waitForElementWidth('.canvas-container').then((element) => {
                  seamless.scrollIntoView(element, {
                    behavior: 'instant',
                    block: 'center',
                    inline: 'center',
                  });
                });
              }
            },
          },
          '00'
        )
        .to(
          '.sho-city',
          {
            duration: 2,
            width: isDesktop ? '100%' : 'fit-content',
            height: isDesktop ? '' : '100%',
            onComplete: () => {
              gsap.to('.sho-city-bg', { opacity: 0, duration: 1 });
            },
          },
          '00'
        )
        .to(
          '.logo-menu',
          {
            zIndex: 7,
            opacity: 1,
            y: 0,
            onComplete: () => gsap.set('.sho-city-bg', { display: 'none' }),
          },
          '>'
        )
        // .to(
        //   '.logo',
        //   {
        //     zIndex: 2,
        //     opacity: 1,
        //     y: 0,
        //   },
        //   '>'
        // )
        // .to(
        //   '.menu',
        //   {
        //     zIndex: 2,
        //     opacity: 1,
        //     y: 0,
        //     onComplete: () => gsap.set('.sho-city-bg', { display: 'none' }),
        //   },
        //   '<'
        // )
        .to('.copyright', {
          zIndex: 2,
          opacity: 1,
          y: 0,
          onComplete: () => {
            document.querySelector('.view-main')?.classList.add('has-visited');
          },
        });
      // Đánh dấu là animation đã chạy
      hasAnimationRun = true;
      localStorage.setItem('hasAnimationRun', 'true');
    } else {
      // scroll center canvas
      if (isMobile) {
        waitForElementWidth('.canvas-container').then((element) => {
          seamless.scrollIntoView(element, {
            behavior: 'instant',
            block: 'center',
            inline: 'center',
          });
        });
      }
      tl.to('.sho-city-bg', {
        delay: 0.5,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          gsap.set('.sho-city-bg', { display: 'none' });
        },
      });
    }
    return () => {
      gsap.set('.sho-city-bg', { display: 'none' });
    };
  }
);
