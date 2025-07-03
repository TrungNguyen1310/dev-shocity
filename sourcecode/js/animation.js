//Main JS
document.addEventListener('DOMContentLoaded', () => {
  const problems = document.querySelectorAll('.problem-arena');

  // Convert NodeList to Array for random selection
  const problemsArray = Array.from(problems);
  const randomIndex = Math.floor(Math.random() * problemsArray.length);
  // Show the selected div
  if (problemsArray[randomIndex]) {
    problemsArray[randomIndex].classList.add('!order-1');
  }
  // Remove remaining the not selected div from dom
  problemsArray.forEach((problem) => {
    if (problem !== problemsArray[randomIndex]) {
      problem.children[0].remove();
    }
  });
});

// GSAP animation
const tl = gsap.timeline({ duration: 1 });

// Responsive
let mm = gsap.matchMedia(),
  breakPoint = 821;

mm.add(
  {
    // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
    isDesktop: `(min-width: ${breakPoint}px)`,
    isMobile: `(max-width: ${breakPoint - 1}px)`,
    reduceMotion: '(prefers-reduced-motion: reduce)',
  },
  (context) => {
    // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
    let { isDesktop, isMobile, reduceMotion } = context.conditions;

    tl.from(
      '.welcome-info',
      {
        opacity: 1,
        y: isDesktop ? -350 : -200,
        ease: 'bounce.out',
        duration: 1.5,
      },
      0
    )
      .to('.welcome-info', {
        opacity: 0,
        duration: 0,
        delay: 1,
      })
      .to(
        '.welcome-info-02',
        {
          opacity: 1,
          duration: 1,
        },
        'same01'
      )
      .to(
        '.enter-screen-01',
        {
          backgroundColor: 'rgba(255, 255, 255, 0.57)',
        },
        'same01'
      )
      .to('.drag-drop', {
        opacity: 1,
        duration: 1,
      })
      .to('.drag-drop', {
        opacity: 0,
        duration: 1,
        delay: 0.5,
      })
      .to('.drag-drop-02', {
        opacity: 1,
        duration: 1,
      })
      .to(
        '.img-01',
        {
          opacity: 1,
          duration: 0.5,
        },
        'same02'
      )
      .to(
        '.img-02',
        {
          opacity: 0,
          duration: 0.5,
        },
        'same02'
      )
      .to(
        '.enter-screen-01',
        {
          backgroundColor: 'rgba(255, 255, 255, 0)',
          zIndex: 9,
          onComplete: () => {
            // add more className animate__infinite into .drag-drop-03 by Javascript
            const element = document.querySelector('.drag-drop-03');
            // set interval each 2s to add and remove .animate__infinite
            setInterval(() => {
              element.classList.toggle('animate__flash');
            }, 2000);
          },
        },
        '-=0.5'
      );

    return () => {
      // optionally return a cleanup function that will be called when none of the conditions match anymore (after having matched)
      // it'll automatically call context.revert() - do NOT do that here . Only put custom cleanup code here.
    };
  }
);

// Start of Selection
// Use hitTest() Draggable to drag ".fix" to ".problem" to start animation
const droppables = document.querySelectorAll('.problem');
const draggables = document.querySelectorAll('.fix');
const overlapThreshold = 0.5; // 50% overlap

function onDrop(dragged, dropped) {
  // Your animation logic here
  tl.to('.problem-fix', {
    opacity: 0,
  })
    .to('.bg-list', { opacity: 1 }, '<')
    .to('.bg-list .refresh', {
      visibility: 'hidden',
      stagger: 1,
      // redirect to sho-city.html
      onComplete: () => (window.location.href = './sho-city.html'),
    });
}

// Set up event listeners for hover effect outside of Draggable.create
draggables.forEach((draggable) => {
  draggable.addEventListener('mouseenter', () => {
    draggable.classList.add('cursor-large'); // Add the cursor class on hover
  });

  draggable.addEventListener('mouseleave', () => {
    draggable.classList.remove('cursor-large'); // Remove the cursor class when not hovering
  });
});

Draggable.create(draggables, {
  // bounds: window,
  onInitialize: function () {
    gsap.set(this.target, {
      clearProps: 'all',
      transform: 'translate(-50%, -50%) translate3d(0px, 0px, 0px)',
    });
  },
  onPress: function () {
    // Lưu vị trí ban đầu
    this.startX = this.x;
    this.startY = this.y;

    // Reset transform về vị trí ban đầu khi click
    gsap.set(this.target, {
      clearProps: 'transform',
      x: 0,
      y: 0,
    });
  },
  onDrag() {
    droppables.forEach((droppable) => {
      const isOverlapping = this.hitTest(droppable, overlapThreshold);
      droppable.classList.toggle('highlight', isOverlapping);
    });
  },
  onDragEnd: function () {
    // Remove cursor-large class when drag ends
    this.target.classList.remove('cursor-large');

    let isDropped = false;
    droppables.forEach((droppable) => {
      if (this.hitTest(droppable, overlapThreshold)) {
        const draggedParent = this.target.parentElement.parentElement.parentElement;
        const droppedParent = droppable.parentElement;

        if (draggedParent === droppedParent) {
          onDrop(this.target, droppable);
          isDropped = true;
        } else {
          console.warn('Drag and drop elements do not share the same parent.');
          gsap.set('.note-01', { display: 'none' });
          gsap.to('.note', {
            zIndex: 3,
            opacity: 1,
            duration: 0,
            onComplete: () => {
              setTimeout(() => {
                gsap.to('.note', { opacity: 0, zIndex: -1, duration: 0 });
              }, 1200);
            },
          });
          gsap.set('.note-01', { display: 'block', delay: 1.5 });
          // Reset to default transform
          gsap.set(this.target, {
            clearProps: 'all',
            transform: 'translate(-50%, -50%) translate3d(0px, 0px, 0px)',
          });
        }
      }
      droppable.classList.remove('highlight');
    });

    if (!isDropped) {
      // Reset về vị trí ban đầu khi không drop được
      gsap.set(this.target, {
        clearProps: 'transform,x,y',
        x: 0,
        y: 0,
      });
    }
  },
  // Add these default properties
  type: 'x,y',
  inertia: false,
  autoScroll: false,
  lockAxis: false,
  zIndexBoost: false,
  // Set initial transform
  onInitialize: function () {
    gsap.set(this.target, {
      clearProps: 'all',
      x: 0,
      y: 0,
    });
  },
});

// Ngăn zoom qua gesture trên mobile
document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
});

// Ngăn pinch zoom (dùng hai ngón trên trackpad) và zoom bằng phím Ctrl hoặc Command + scroll trên PC và macOS
document.addEventListener(
  'wheel',
  function (e) {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
    }
  },
  { passive: false }
);

// Ngăn zoom qua phím tắt (Ctrl +, Ctrl -, Ctrl 0, hoặc Command + trên macOS)
document.addEventListener('keydown', function (e) {
  if (
    (e.ctrlKey || e.metaKey) &&
    (e.key === '+' || e.key === '-' || e.key === '=' || e.key === '0')
  ) {
    e.preventDefault();
  }
});
