// mark flag scrollingSprite to true
localStorage.setItem('hasShowScrollingSprite', 'true');

// GSAP animation cho icon và info
const tl = gsap.timeline({ duration: 1 });

// Animation cho icon và info
tl.to(
  '.head-office-icon',
  {
    opacity: 1,
    duration: 0,
    delay: 1,
  },
  '0'
)
  .to(
    '.head-office-info',
    {
      visibility: 'visible',
      duration: 0.5,
      delay: 1,
    },
    '0'
  )
  .to(
    '.head-office-icon',
    {
      opacity: 0,
      duration: 0,
      delay: 6,
    },
    '0'
  )
  .to(
    '.head-office-info',
    {
      visibility: 'hidden',
      duration: 0,
      delay: 5.7,
    },
    '0'
  );

// Thêm biến để lưu trữ các animation
let roboTween, shadowTween, lightsTween;

async function initHeadOffice() {
  // Get the head-office element
  const headOfficeElement = document.getElementById('head-office');

  // Create PIXI application with the head-office element dimensions
  const app = new PIXI.Application();

  await app.init({
    // Use head-office element dimensions
    width: headOfficeElement.clientWidth,
    height: headOfficeElement.clientHeight,
    backgroundAlpha: 0, // Make background transparent
    autoDensity: true,
    resolution: window.devicePixelRatio || 1,
    scaleMode: PIXI.SCALE_MODES.LINEAR,
  });

  // Di chuyển dòng này vào đây, sau khi app được khởi tạo
  app.canvas.style.touchAction = 'inherit';

  // Add the PIXI canvas to head-office element
  headOfficeElement.appendChild(app.view);

  await PIXI.Assets.load([
    {
      src: './images/animals/man-01.json',
      data: { resolution: 2 },
    },
    {
      src: './images/animals/man-02.json',
      data: { resolution: 2 },
    },
    {
      src: './images/table.png',
      data: { resolution: 2 },
    },
    {
      src: './images/light.png',
      data: { resolution: 2 },
    },
    {
      src: './images/robo-shadow.png',
      data: { resolution: 2 },
    },
    {
      src: './images/robo.png',
      data: { resolution: 2 },
    },
  ]);

  // Create texture for robo shadow
  const roboShadowTexture = PIXI.Texture.from('./images/robo-shadow.png');
  const roboShadow = new PIXI.Sprite(roboShadowTexture);
  roboShadow.width = headOfficeElement.clientWidth * 0.0455;
  roboShadow.height = roboShadow.width * (roboShadowTexture.height / roboShadowTexture.width);
  roboShadow.x = headOfficeElement.clientWidth * 0.59;
  roboShadow.y = headOfficeElement.clientHeight * 0.55;
  roboShadow.anchor.set(0.5, 0.5);
  // Create texture for robo
  const roboTexture = PIXI.Texture.from('./images/robo.png');
  const robo = new PIXI.Sprite(roboTexture);
  robo.width = headOfficeElement.clientWidth * 0.065;
  robo.height = robo.width * (roboTexture.height / roboTexture.width);
  robo.x = headOfficeElement.clientWidth * 0.582;
  robo.y = headOfficeElement.clientHeight * 0.49;
  robo.anchor.set(0.5, 0.5);

  // resize robo and robo shadow
  function resizeRobo() {
    robo.width = headOfficeElement.clientWidth * 0.065;
    robo.height = robo.width * (roboTexture.height / roboTexture.width);
    robo.x = headOfficeElement.clientWidth * 0.582;
    robo.y = headOfficeElement.clientHeight * 0.49;

    roboShadow.width = headOfficeElement.clientWidth * 0.0455;
    roboShadow.height = roboShadow.width * (roboShadowTexture.height / roboShadowTexture.width);
    roboShadow.x = headOfficeElement.clientWidth * 0.59;
    roboShadow.y = headOfficeElement.clientHeight * 0.55;
  }

  resizeRobo();

  // Create textures for man-01
  const man01Texture = [
    PIXI.Texture.from('b1.png'),
    PIXI.Texture.from('b2.png'),
    PIXI.Texture.from('b3.png'),
    PIXI.Texture.from('b4.png'),
  ];
  const man01 = new PIXI.AnimatedSprite(man01Texture);
  man01.animationSpeed = 0.05;
  man01.play();

  // Tạo hàm resize
  function resizeMan01() {
    const man01Width = headOfficeElement.clientWidth * 0.1427;
    const man01OriginalWidth = man01.textures[0].orig.width;
    const man01Scale = man01Width / man01OriginalWidth;
    man01.scale.set(man01Scale);
    man01.x = headOfficeElement.clientWidth * 0.069;
    man01.y = headOfficeElement.clientHeight * 0.491;
  }

  // Di chuyển code scale hiện tại vào hàm resize
  resizeMan01();

  // Create textures for man-02
  const man02Texture = [
    PIXI.Texture.from('a1.png'),
    PIXI.Texture.from('a2.png'),
    PIXI.Texture.from('a3.png'),
    PIXI.Texture.from('a4.png'),
    PIXI.Texture.from('a5.png'),
  ];

  const man02 = new PIXI.AnimatedSprite(man02Texture);
  man02.animationSpeed = 0.04;
  man02.play();

  // Tạo hàm resize
  function resizeMan02() {
    const man02Width = headOfficeElement.clientWidth * 0.051;
    const man02OriginalWidth = man02.textures[0].orig.width;
    const man02Scale = man02Width / man02OriginalWidth;
    man02.scale.set(man02Scale);
    man02.x = headOfficeElement.clientWidth * 0.49;
    man02.y = headOfficeElement.clientHeight * 0.565;
    man02.opacity = 0.7;
  }

  // Di chuyển code scale hiện tại vào hàm resize
  resizeMan02();

  // Create textures for table
  const tableTexture = PIXI.Texture.from('./images/table.png');
  const table = new PIXI.Sprite(tableTexture);

  // Tạo hàm resize cho table với giữ nguyên tỷ lệ
  function resizeTable() {
    // Set width theo tỷ lệ màn hình
    table.width = headOfficeElement.clientWidth * 0.315;
    // Tính height tự động theo tỷ lệ gốc của texture
    table.height = table.width * (tableTexture.height / tableTexture.width);

    table.x = headOfficeElement.clientWidth * 0.342;
    table.y = headOfficeElement.clientHeight * 0.575;
  }

  // Gọi resize lần đầu
  resizeTable();

  // Create textures for lights
  const light01Texture = PIXI.Texture.from('./images/light.png');
  const light01 = new PIXI.Sprite(light01Texture);
  light01.width = headOfficeElement.clientWidth * 0.051;
  light01.height = light01.width * (light01Texture.height / light01Texture.width);
  light01.x = headOfficeElement.clientWidth * 0.782;
  light01.y = headOfficeElement.clientHeight * 0.366;
  light01.visible = false;
  const light02Texture = PIXI.Texture.from('./images/light.png');
  const light02 = new PIXI.Sprite(light02Texture);
  light02.width = headOfficeElement.clientWidth * 0.051;
  light02.height = light02.width * (light02Texture.height / light02Texture.width);
  light02.x = headOfficeElement.clientWidth * 0.84;
  light02.y = headOfficeElement.clientHeight * 0.418;
  light02.visible = false;
  const light03Texture = PIXI.Texture.from('./images/light.png');
  const light03 = new PIXI.Sprite(light03Texture);
  light03.width = headOfficeElement.clientWidth * 0.051;
  light03.height = light03.width * (light03Texture.height / light03Texture.width);
  light03.x = headOfficeElement.clientWidth * 0.898;
  light03.y = headOfficeElement.clientHeight * 0.47;
  light03.visible = false;
  // Create resize function for lights
  function resizeLights() {
    light01.width = headOfficeElement.clientWidth * 0.051;
    light01.x = headOfficeElement.clientWidth * 0.782;
    light01.y = headOfficeElement.clientHeight * 0.366;
    light01.height = light01.width * (light01Texture.height / light01Texture.width);
    light02.width = headOfficeElement.clientWidth * 0.051;
    light02.x = headOfficeElement.clientWidth * 0.84;
    light02.y = headOfficeElement.clientHeight * 0.418;
    light02.height = light02.width * (light02Texture.height / light02Texture.width);
    light03.width = headOfficeElement.clientWidth * 0.051;
    light03.x = headOfficeElement.clientWidth * 0.898;
    light03.y = headOfficeElement.clientHeight * 0.47;
    light03.height = light03.width * (light03Texture.height / light03Texture.width);
  }

  // Update window resize event listener
  window.addEventListener('resize', () => {
    // Kill các animation hiện tại
    if (roboTween) roboTween.kill();
    if (shadowTween) shadowTween.kill();

    app.renderer.resize(headOfficeElement.clientWidth, headOfficeElement.clientHeight);
    resizeRobo();
    resizeMan01();
    resizeMan02();
    resizeTable();
    resizeLights();

    // Khởi động lại animation sau khi resize
    roboTween = gsap.to(robo, {
      y: headOfficeElement.clientHeight * 0.47,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    });

    shadowTween = gsap.to(roboShadow, {
      width: headOfficeElement.clientWidth * 0.055,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    });
  });

  app.stage.addChild(man01, man02, table, light01, light02, light03, roboShadow, robo);

  // Bắt đầu animation robo và đèn sau khi animation icon/info kết thúc
  tl.eventCallback('onComplete', () => {
    // Animation cho robo
    roboTween = gsap.to(robo, {
      y: headOfficeElement.clientHeight * 0.47,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    });

    // Animation cho shadow
    shadowTween = gsap.to(roboShadow, {
      width: headOfficeElement.clientWidth * 0.055,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    });

    // Animation cho đèn
    lightsTween = gsap.timeline({
      repeat: -1,
    });

    // Set visible ban đầu cho tất cả đèn là false
    light01.visible = false;
    light02.visible = false;
    light03.visible = false;

    // Thêm animation tuần tự cho từng đèn
    lightsTween
      .set(light01, {
        visible: true,
      })
      .set(
        light02,
        {
          visible: true,
        },
        '+=0.5'
      )
      .set(
        light03,
        {
          visible: true,
        },
        '+=0.5'
      )
      .to({}, { duration: 3 })
      .set([light01, light02, light03], {
        visible: false,
      })
      .to({}, { duration: 3 });
  });
}

document.addEventListener('DOMContentLoaded', initHeadOffice);

// Giả lập hover của head-office khi hover vào head-office-svg
document.addEventListener('DOMContentLoaded', () => {
  const svgElement = document.querySelector('.head-office-05-svg');
  const targetElement = document.querySelector('.head-office-05');
  const svgElement01 = document.querySelector('.head-office-01-svg');
  const targetElement01 = document.querySelector('.head-office-01');
  const svgElement02 = document.querySelector('.head-office-02-svg');
  const targetElement02 = document.querySelector('.head-office-02');
  const svgElement03 = document.querySelector('.head-office-03-svg');
  const targetElement03 = document.querySelector('.head-office-03');
  const svgElement04 = document.querySelector('.head-office-04-svg');
  const targetElement04 = document.querySelector('.head-office-04');

  if (svgElement && targetElement) {
    svgElement.addEventListener('mouseenter', () => {
      targetElement.classList.add('pseudo-hover');
    });

    svgElement.addEventListener('mouseleave', () => {
      setTimeout(() => {
        targetElement.classList.remove('pseudo-hover');
      }, 500);
    });
  }
  if (svgElement01 && targetElement01) {
    svgElement01.addEventListener('mouseenter', () => {
      targetElement01.classList.add('pseudo-hover');
    });

    svgElement01.addEventListener('mouseleave', () => {
      targetElement01.classList.remove('pseudo-hover');
    });
  }
  if (svgElement02 && targetElement02) {
    svgElement02.addEventListener('mouseenter', () => {
      targetElement02.classList.add('pseudo-hover');
    });

    svgElement02.addEventListener('mouseleave', () => {
      targetElement02.classList.remove('pseudo-hover');
    });
  }
  if (svgElement03 && targetElement03) {
    svgElement03.addEventListener('mouseenter', () => {
      targetElement03.classList.add('pseudo-hover');
    });

    svgElement03.addEventListener('mouseleave', () => {
      targetElement03.classList.remove('pseudo-hover');
    });
  }

  if (svgElement04 && targetElement04) {
    svgElement04.addEventListener('mouseenter', () => {
      targetElement04.classList.add('pseudo-hover');
    });

    svgElement04.addEventListener('mouseleave', () => {
      targetElement04.classList.remove('pseudo-hover');
    });
  }
});

// Ngăn zoom qua gesture trên mobile
// document.addEventListener('gesturestart', function (e) {
//   e.preventDefault();
// });

// Ngăn pinch zoom (dùng hai ngón trên trackpad) và zoom bằng phím Ctrl hoặc Command + scroll trên PC và macOS
// document.addEventListener(
//   'wheel',
//   function (e) {
//     if (e.ctrlKey || e.metaKey) {
//       e.preventDefault();
//     }
//   },
//   { passive: false }
// );

// Ngăn zoom qua phím tắt (Ctrl +, Ctrl -, Ctrl 0, hoặc Command + trên macOS)
document.addEventListener('keydown', function (e) {
  if (
    (e.ctrlKey || e.metaKey) &&
    (e.key === '+' || e.key === '-' || e.key === '=' || e.key === '0')
  ) {
    e.preventDefault();
  }
});
