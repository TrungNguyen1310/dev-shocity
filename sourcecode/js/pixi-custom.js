async function initPixiApp() {
  // Đăng ký plugins
  gsap.registerPlugin(PixiPlugin, MotionPathPlugin);

  const app = new PIXI.Application();

  await app.init({
    width: window.screen.width,
    height: window.screen.height,
    autoDensity: true,
    resolution: window.devicePixelRatio || 1,
    scaleMode: PIXI.SCALE_MODES.LINEAR,
  });

  // Tạo container div
  const container = document.createElement('div');
  container.className = 'canvas-container';

  // Set touch-action: inherit for the canvas
  app.canvas.style.touchAction = 'inherit';

  // Thêm canvas vào container thay vì trực tiếp vào main-stage
  container.appendChild(app.canvas);

  // Thêm container vào main-stage
  document.getElementById('main-stage').appendChild(container);

  // Modify asset loading with higher resolution
  await PIXI.Assets.load([
    {
      src: './images/map-12dec.webp',
      data: { resolution: 2 },
    },
    {
      src: './images/campsite-icon.png',
      data: { resolution: 2 },
    },
    {
      src: './images/zoo-site-icon.png',
      data: { resolution: 2 },
    },
    {
      src: './images/park-icon.png',
      data: { resolution: 2 },
    },
    {
      src: './images/island-icon.png',
      data: { resolution: 2 },
    },
    {
      src: './images/turtle-icon-02.png',
      data: { resolution: 2 },
    },
    {
      src: './images/turtle-icon-hover-02.png',
      data: { resolution: 2 },
    },
    {
      src: './images/train-01.svg',
      data: { resolution: 2 },
    },
    {
      src: './images/train-02.svg',
      data: { resolution: 2 },
    },
    {
      src: './images/train-03.svg',
      data: { resolution: 2 },
    },
    {
      src: './images/train-04.svg',
      data: { resolution: 2 },
    },
    {
      src: './images/wall-01.svg',
      data: { resolution: 2 },
    },
    {
      src: './images/bridge-01.svg',
      data: { resolution: 2 },
    },

    {
      src: './images/car-a.svg',
      data: { resolution: 2 },
    },

    {
      src: './images/car-a-01.svg',
      data: { resolution: 2 },
    },
    {
      src: './images/car-a-02.svg',
      data: { resolution: 2 },
    },
    {
      src: './images/car-b.svg',
      data: { resolution: 2 },
    },
    {
      src: './images/car-b-01.svg',
      data: { resolution: 2 },
    },
    {
      src: './images/car-b-02.svg',
      data: { resolution: 2 },
    },
    {
      src: './images/car-c.svg',
      data: { resolution: 2 },
    },
    {
      src: './images/car-c-01.svg',
      data: { resolution: 2 },
    },
    {
      src: './images/car-c-02.svg',
      data: { resolution: 2 },
    },
    {
      src: './images/car-d.svg',
      data: { resolution: 2 },
    },
    {
      src: './images/car-d-01.svg',
      data: { resolution: 2 },
    },
    {
      src: './images/car-d-02.svg',
      data: { resolution: 2 },
    },
    {
      src: './images/car-e.svg',
      data: { resolution: 2 },
    },
    {
      src: './images/car-e-01.svg',
      data: { resolution: 2 },
    },
    {
      src: './images/wall-02.svg',
      data: { resolution: 2 },
    },
    {
      src: './images/wall-03.svg',
      data: { resolution: 2 },
    },
    {
      src: './images/building-a.png',
      data: { resolution: 2 },
    },
    {
      src: './images/building-a-icon.png',
      data: { resolution: 2 },
    },
    {
      src: './images/building-b-02.png',
      data: { resolution: 2 },
    },
    {
      src: './images/building-b-icon.png',
      data: { resolution: 2 },
    },
    {
      src: './images/building-c-02.png',
      data: { resolution: 2 },
    },
    {
      src: './images/building-c-icon.png',
      data: { resolution: 2 },
    },
    {
      src: './images/building-d.png',
      data: { resolution: 2 },
    },
    {
      src: './images/building-d-icon.png',
      data: { resolution: 2 },
    },
    {
      src: './images/building-e-02.png',
      data: { resolution: 2 },
    },
    {
      src: './images/building-e-icon.png',
      data: { resolution: 2 },
    },
    {
      src: './images/building-f-02.png',
      data: { resolution: 2 },
    },
    {
      src: './images/building-f-icon.png',
      data: { resolution: 2 },
    },
    {
      src: './images/building-g-02.png',
      data: { resolution: 2 },
    },
    {
      src: './images/building-g-icon.png',
      data: { resolution: 2 },
    },
    {
      src: './images/building_h_update02.webp',
      data: { resolution: 2 },
    },
    {
      src: './images/building-h-icon-02.png',
      data: { resolution: 2 },
    },
    {
      src: './images/building-j.png',
      data: { resolution: 2 },
    },
    {
      src: './images/building-j-icon.png',
      data: { resolution: 2 },
    },
    {
      src: './images/building-k-02.png',
      data: { resolution: 2 },
    },
    {
      src: './images/building-k-icon.png',
      data: { resolution: 2 },
    },
    {
      src: './images/building-l.png',
      data: { resolution: 2 },
    },
    {
      src: './images/building-l-icon.png',
      data: { resolution: 2 },
    },
    {
      src: './images/building-q.png',
      data: { resolution: 2 },
    },
    {
      src: './images/building-q-icon.png',
      data: { resolution: 2 },
    },
    {
      src: './images/tree-q.png',
      data: { resolution: 2 },
    },
    {
      src: './images/board-q.png',
      data: { resolution: 2 },
    },
    {
      src: './images/board-d.png',
      data: { resolution: 2 },
    },
    {
      src: './images/building-w.png',
      data: { resolution: 2 },
    },
    {
      src: './images/building-w-icon.png',
      data: { resolution: 2 },
    },
    {
      src: './images/truck-w.png',
      data: { resolution: 2 },
    },
    {
      src: './images/pulley-w.png',
      data: { resolution: 2 },
    },
    {
      src: './images/building-r-02.png',
      data: { resolution: 2 },
    },
    {
      src: './images/building-r-icon.png',
      data: { resolution: 2 },
    },
    {
      src: './images/construction.png',
      data: { resolution: 2 },
    },
    {
      src: './images/tree-01.png',
      data: { resolution: 2 },
    },
    {
      src: './images/animals/fire.json',
      data: { resolution: 2 },
    },
    {
      src: './images/animals/human-01.json',
      data: { resolution: 2 },
    },
    {
      src: './images/animals/human-02.json',
      data: { resolution: 2 },
    },
    {
      src: './images/animals/human-03.json',
      data: { resolution: 2 },
    },
    {
      src: './images/animals/human-04.json',
      data: { resolution: 2 },
    },
    {
      src: './images/animals/boy-blue.json',
      data: { resolution: 2 },
    },
    {
      src: './images/animals/boy-pink.json',
      data: { resolution: 2 },
    },
    {
      src: './images/red-ball.png',
      data: { resolution: 2 },
    },
    {
      src: './images/animals/turtle.json',
      data: { resolution: 2 },
    },
    {
      src: './images/scrolling.png',
      data: { resolution: 2 },
    },
  ]);

  // Tạo map sprite
  const mapSprite = PIXI.Sprite.from('./images/map-12dec.webp');

  // mapSprite.scrollIntoView({
  //   behavior: 'instant',
  //   block: 'center',
  //   inline: 'center',
  // });

  // Check if the viewport is mobile-sized
  const isMobile = window.screen.width < window.screen.height;
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (isMobile) {
    // Set height to 100vh and adjust width proportionally
    mapSprite.height = window.screen.height;
    const ratio = mapSprite.height / mapSprite.texture.height;
    mapSprite.width = mapSprite.texture.width * ratio;
  } else {
    // Default dimensions
    const ratio = mapSprite.texture.height / mapSprite.texture.width;
    mapSprite.width = window.screen.width;
    mapSprite.height = mapSprite.width * ratio;
    const viewCenter = document.querySelector('#view-center');
    // set width for view-center is screen width
    viewCenter.style.width = window.screen.width + 'px';
    // only desktop set height for view-center is screen height
    viewCenter.style.height = window.screen.height + 'px';
    // check if browser is zooming add class for view-center
    const bodyStage = document.querySelector('#body');
    if (window.innerWidth !== window.screen.width) {
      bodyStage.classList.add('zooming');
      bodyStage.classList.remove('hidden-scroll');
    } else {
      bodyStage.classList.remove('zooming');
      bodyStage.classList.add('hidden-scroll');
    }
    // Get all elements with tabindex="-1" and style them
    // const elements = document.querySelectorAll('[tabindex="-1"]');
    // elements.forEach((element) => {
    //   element.style.width = window.screen.width + 'px';
    //   element.style.height = window.screen.height + 'px';
    //   element.style.margin = '0 auto';
    // });

    // Ngăn pinch zoom (dùng hai ngón trên trackpad) và zoom bằng phím Ctrl/Command + scroll
    // document.addEventListener(
    //   'wheel',
    //   function (e) {
    //     // Kiểm tra xem người dùng có đang nhấn Ctrl (Windows/Linux) hoặc Command (macOS) khi dùng trackpad hay không
    //     if (e.ctrlKey || e.metaKey) {
    //       e.preventDefault();
    //     }
    //   },
    //   { passive: false }
    // );

    // Ngăn pinch zoom qua gesture trên mobile hoặc trackpad macOS
    // document.addEventListener('gesturestart', function (e) {
    //   e.preventDefault();
    // });
  }

  // Resize the renderer to fit the map dimensions
  app.renderer.resize(mapSprite.width, mapSprite.height);
  mapSprite.zIndex = 0;

  // create scrolling sprite
  const scrollingSprite = PIXI.Sprite.from('./images/scrolling.png');
  scrollingSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  scrollingSprite.zIndex = 6;
  const scrollingSpriteWidth = mapSprite.width * 0.23475;
  const scrollingSpriteRatio = scrollingSprite.height / scrollingSprite.width;
  scrollingSprite.width = scrollingSpriteWidth;
  scrollingSprite.height = scrollingSpriteWidth * scrollingSpriteRatio;
  scrollingSprite.x = mapSprite.width * 0.5;
  scrollingSprite.y = mapSprite.height * 0.35;
  scrollingSprite.anchor.set(0.5, 0.5);
  scrollingSprite.alpha = 0;

  // Create campsite sprite
  const campsiteSprite = new PIXI.Sprite(PIXI.Texture.EMPTY);
  campsiteSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  campsiteSprite.zIndex = 4;
  const campsiteWidth = mapSprite.width * 0.28;
  const campsiteHeight = mapSprite.height * 0.15;
  campsiteSprite.width = campsiteWidth;
  campsiteSprite.height = campsiteHeight;
  // Đặt vị trí
  campsiteSprite.x = mapSprite.width * 0.34;
  campsiteSprite.y = mapSprite.height * 0.13;
  //Angle 330
  campsiteSprite.rotation = 330 * (Math.PI / 180);
  // Create campsite icon
  const campsiteIcon = PIXI.Sprite.from('./images/campsite-icon.png');
  campsiteIcon.name = 'campsiteIcon';
  campsiteIcon.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  const campsiteIconWidth = mapSprite.width * 0.075;
  campsiteIcon.zIndex = 4;
  const campsiteIconRatio = campsiteIcon.height / campsiteIcon.width;
  campsiteIcon.width = campsiteIconWidth;
  campsiteIcon.height = campsiteIconWidth * campsiteIconRatio;
  campsiteIcon.x = campsiteSprite.x + campsiteSprite.width * 0.55;
  campsiteIcon.y = campsiteSprite.y;
  campsiteIcon.anchor.set(0.5, 1);
  campsiteIcon.alpha = 0;
  // Click on campsite icon show Drawer (hover..)
  campsiteSprite.on('mouseover', () => {
    gsap.to(campsiteIcon, {
      duration: 0.5,
      alpha: 1,
    });
  });
  campsiteSprite.on('mouseout', () => {
    gsap.to(campsiteIcon, {
      duration: 0.5,
      alpha: 0,
    });
  });

  let startX = 0;
  let startY = 0;

  campsiteSprite.interactive = true;
  campsiteSprite.buttonMode = true;

  // Bắt đầu sự kiện: lưu tọa độ ban đầu
  campsiteSprite.on('pointerdown', (event) => {
    const { x, y } = event.data.global;
    startX = x;
    startY = y;
  });

  // Kết thúc sự kiện: xử lý logic nhấn
  campsiteSprite.on('pointerup', (event) => {
    const { x, y } = event.data.global;
    const distance = Math.sqrt((x - startX) ** 2 + (y - startY) ** 2);

    // Chỉ kích hoạt khi không phải vuốt (khoảng cách nhỏ)
    if (distance < 10) {
      if (campsiteIcon.alpha > 0) {
        const drawerButton = document.querySelector('[data-drawer-target="drawer-12"]');

        // Giả lập click nút
        setTimeout(() => {
          drawerButton.click();
        }, 200);
      } else {
        const icons = getAllBubbleIcons(app.stage);
        icons.forEach((icon) => {
          gsap.to(icon, { duration: 0.5, alpha: 0 });
        });
        gsap.to(campsiteIcon, { duration: 0.5, alpha: 1 });
      }
    }
  });

  // Create zoosite sprite
  const zoositeSprite = new PIXI.Sprite();
  zoositeSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  const zoositeWidth = mapSprite.width * 0.22;
  const zoositeHeight = mapSprite.height * 0.15;
  zoositeSprite.width = zoositeWidth;
  zoositeSprite.height = zoositeHeight;
  zoositeSprite.x = mapSprite.width * 0.34;
  zoositeSprite.y = mapSprite.height * 0.28;
  zoositeSprite.rotation = Math.PI / 1.2;
  // Create zoosite icon
  const zoositeIcon = PIXI.Sprite.from('./images/zoo-site-icon.png');
  zoositeIcon.name = 'zoositeIcon';
  zoositeIcon.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  const zoositeIconWidth = mapSprite.width * 0.075;
  const zoositeIconRatio = zoositeIcon.height / zoositeIcon.width;
  zoositeIcon.width = zoositeIconWidth;
  zoositeIcon.height = zoositeIconWidth * zoositeIconRatio;
  zoositeIcon.x = mapSprite.width * 0.2;
  zoositeIcon.y = mapSprite.height * 0.2;
  zoositeIcon.anchor.set(0.5, -0.5);
  zoositeIcon.alpha = 0;
  // Click on zoosite icon show Drawer (hover..)
  zoositeSprite.on('mouseover', () => {
    gsap.to(zoositeIcon, {
      duration: 0.5,
      alpha: 1,
    });
  });
  zoositeSprite.on('mouseout', () => {
    gsap.to(zoositeIcon, { duration: 0.5, alpha: 0 });
  });

  zoositeSprite.interactive = true;
  zoositeSprite.buttonMode = true;

  // Bắt đầu sự kiện: lưu tọa độ ban đầu
  zoositeSprite.on('pointerdown', (event) => {
    const { x, y } = event.data.global;
    startX = x;
    startY = y;
  });

  // Kết thúc sự kiện: xử lý logic nhấn
  zoositeSprite.on('pointerup', (event) => {
    const { x, y } = event.data.global;
    const distance = Math.sqrt((x - startX) ** 2 + (y - startY) ** 2);

    // Chỉ kích hoạt khi không phải vuốt (khoảng cách nhỏ)
    if (distance < 10) {
      if (zoositeIcon.alpha > 0) {
        const drawerButton = document.querySelector('[data-drawer-target="drawer-11"]');

        // Giả lập click nút
        setTimeout(() => {
          drawerButton.click();
        }, 200);
      } else {
        const icons = getAllBubbleIcons(app.stage);
        icons.forEach((icon) => {
          gsap.to(icon, { duration: 0.5, alpha: 0 });
        });
        gsap.to(zoositeIcon, { duration: 0.5, alpha: 1 });
      }
    }
  });

  // Create park sprite
  const parkSprite = new PIXI.Sprite();
  parkSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  const parkWidth = mapSprite.width * 0.07;
  const parkHeight = mapSprite.height * 0.14;
  parkSprite.width = parkWidth;
  parkSprite.height = parkHeight;
  parkSprite.x = mapSprite.width * 0.49;
  parkSprite.y = mapSprite.height * 0.53;
  //Angle 120
  parkSprite.rotation = 120 * (Math.PI / 180);
  // Create park icon
  const parkIcon = PIXI.Sprite.from('./images/park-icon.png');
  parkIcon.name = 'parkIcon';
  parkIcon.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  const parkIconWidth = mapSprite.width * 0.075;
  const parkIconRatio = parkIcon.height / parkIcon.width;
  parkIcon.width = parkIconWidth;
  parkIcon.height = parkIconWidth * parkIconRatio;
  parkIcon.x = mapSprite.width * 0.38;
  parkIcon.y = mapSprite.height * 0.5;
  parkIcon.alpha = 0;
  // Click on park icon show Drawer (hover..)
  parkSprite.on('mouseover', () => {
    gsap.to(parkIcon, { duration: 0.3, alpha: 1 });
  });
  parkSprite.on('mouseout', () => {
    gsap.to(parkIcon, { duration: 0.5, alpha: 0 });
  });

  parkSprite.interactive = true;
  parkSprite.buttonMode = true;

  // Bắt đầu sự kiện: lưu tọa độ ban đầu
  parkSprite.on('pointerdown', (event) => {
    const { x, y } = event.data.global;
    startX = x;
    startY = y;
  });

  // Kết thúc sự kiện: xử lý logic nhấn
  parkSprite.on('pointerup', (event) => {
    const { x, y } = event.data.global;
    const distance = Math.sqrt((x - startX) ** 2 + (y - startY) ** 2);

    // Chỉ kích hoạt khi không phải vuốt (khoảng cách nhỏ)
    if (distance < 10) {
      if (parkIcon.alpha > 0) {
        const drawerButton = document.querySelector('[data-drawer-target="drawer-15"]');

        // Giả lập click nút
        setTimeout(() => {
          drawerButton.click();
        }, 200);
      } else {
        const icons = getAllBubbleIcons(app.stage);
        icons.forEach((icon) => {
          gsap.to(icon, { duration: 0.5, alpha: 0 });
        });
        gsap.to(parkIcon, { duration: 0.5, alpha: 1 });
      }
    }
  });

  // Create island sprite
  const islandSprite = new PIXI.Sprite();
  islandSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  const islandWidth = mapSprite.width * 0.125;
  const islandHeight = mapSprite.height * 0.23;
  islandSprite.width = islandWidth;
  islandSprite.height = islandHeight;
  islandSprite.x = mapSprite.width * 0.875;
  islandSprite.y = mapSprite.height * 0.72;
  // Create island icon
  const islandIcon = PIXI.Sprite.from('./images/island-icon.png');
  islandIcon.name = 'islandIcon';
  islandIcon.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  const islandIconWidth = mapSprite.width * 0.075;
  const islandIconRatio = islandIcon.height / islandIcon.width;
  islandIcon.width = islandIconWidth;
  islandIcon.height = islandIconWidth * islandIconRatio;
  islandIcon.x = islandSprite.x + islandSprite.width * 0.5;
  islandIcon.y = islandSprite.y;
  islandIcon.anchor.set(0.5, 0);
  islandIcon.alpha = 0;
  // Click on island icon show Drawer (hover..)
  islandSprite.on('mouseover', () => {
    gsap.to(islandIcon, { duration: 0.5, alpha: 1 });
  });
  islandSprite.on('mouseout', () => {
    gsap.to(islandIcon, { duration: 0.5, alpha: 0 });
  });

  islandSprite.interactive = true;
  islandSprite.buttonMode = true;

  // Bắt đầu sự kiện: lưu tọa độ ban đầu
  islandSprite.on('pointerdown', (event) => {
    const { x, y } = event.data.global;
    startX = x;
    startY = y;
  });

  // Kết thúc sự kiện: xử lý logic nhấn
  islandSprite.on('pointerup', (event) => {
    const { x, y } = event.data.global;
    const distance = Math.sqrt((x - startX) ** 2 + (y - startY) ** 2);

    // Chỉ kích hoạt khi không phải vuốt (khoảng cách nhỏ)
    if (distance < 10) {
      if (islandIcon.alpha > 0) {
        const drawerButton = document.querySelector('[data-drawer-target="drawer-17"]');

        // Giả lập click nút
        setTimeout(() => {
          drawerButton.click();
        }, 200);
      } else {
        const icons = getAllBubbleIcons(app.stage);
        icons.forEach((icon) => {
          gsap.to(icon, { duration: 0.5, alpha: 0 });
        });
        gsap.to(islandIcon, { duration: 0.5, alpha: 1 });
      }
    }
  });

  // create animation for turtle
  const turtleSwimRightTextures = [
    PIXI.Texture.from('turtle-01.png'),
    PIXI.Texture.from('turtle-02.png'),
    PIXI.Texture.from('turtle-03.png'),
  ];

  const turtleSwimLeftTextures = [
    PIXI.Texture.from('turtle-01.png'),
    PIXI.Texture.from('turtle-02.png'),
    PIXI.Texture.from('turtle-03.png'),
  ];

  const turtleBackRightTextures = [
    PIXI.Texture.from('turtle-01.png'),
    PIXI.Texture.from('turtle-02.png'),
    PIXI.Texture.from('turtle-03.png'),
  ];

  const turtleBackLeftTextures = [
    PIXI.Texture.from('turtle-01.png'),
    PIXI.Texture.from('turtle-02.png'),
    PIXI.Texture.from('turtle-03.png'),
  ];

  // Create AnimatedSprite with initial swimming animation
  const turtleSprite = new PIXI.AnimatedSprite(turtleSwimRightTextures);
  turtleSprite.zIndex = 5;
  turtleSprite.animationSpeed = 0.07;
  turtleSprite.play();

  // Tính toán scale để turtle width = 0.7% của map width
  const turtleDesiredWidth = mapSprite.width * 0.025; // 0.7%
  const turtleOriginalWidth = turtleSprite.textures[0].orig.width; // Lấy width gốc từ texture đầu tiên
  const turtleScale = turtleDesiredWidth / turtleOriginalWidth;
  // Áp dụng scale
  turtleSprite.scale.set(turtleScale);
  turtleSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  turtleSprite.x = mapSprite.width * 0.63;
  turtleSprite.y = mapSprite.height * 0.93;

  // Create textures for standing still positions
  const turtleStandRightTexture = PIXI.Texture.from('turtle-01.png');
  const turtleStandLeftTexture = PIXI.Texture.from('turtle-01.png');
  const turtleStandBackRightTexture = PIXI.Texture.from('turtle-01.png');
  const turtleStandBackLeftTexture = PIXI.Texture.from('turtle-01.png');

  // Create animation for turtle
  let turtleTimeline;
  let turtleIconStopped = false;
  function createTurtleAnimation() {
    // TODO: Implement turtle animation
    const path1 = [
      { x: turtleSprite.x, y: turtleSprite.y },
      { x: mapSprite.width * 0.63, y: mapSprite.height * 0.87 },
    ];

    const path2 = [
      { x: mapSprite.width * 0.63, y: mapSprite.height * 0.87 },
      { x: mapSprite.width * 0.68, y: mapSprite.height * 0.82 },
    ];

    const path3 = [
      { x: mapSprite.width * 0.68, y: mapSprite.height * 0.82 },
      { x: mapSprite.width * 0.74, y: mapSprite.height * 0.8 },
    ];

    const path4 = [
      { x: mapSprite.width * 0.74, y: mapSprite.height * 0.8 },
      { x: mapSprite.width * 0.83, y: mapSprite.height * 0.83 },
    ];

    const path5 = [
      { x: mapSprite.width * 0.83, y: mapSprite.height * 0.83 },
      { x: mapSprite.width * 0.83, y: mapSprite.height * 0.88 },
    ];

    const path6 = [
      { x: mapSprite.width * 0.83, y: mapSprite.height * 0.88 },
      { x: mapSprite.width * 0.75, y: mapSprite.height * 0.89 },
    ];

    const path7 = [
      { x: mapSprite.width * 0.75, y: mapSprite.height * 0.89 },
      { x: turtleSprite.x, y: turtleSprite.y },
    ];

    // Dừng mọi animation hiện tại
    gsap.killTweensOf(turtleSprite);
    turtleSprite.stop();

    // tạo animation mới
    turtleTimeline = gsap.timeline({
      onUpdate: () => {
        // Nếu bubble của rùa ko bị dừng thì cập nhật vị trí của bubble
        if (!turtleIconStopped) {
          let addY = turtleIcon.height + turtleSprite.height / 5;
          if (turtleSprite.rotation > 2.5) {
            addY = turtleIcon.height + turtleSprite.height;
          } else if (turtleSprite > 0) {
            addY = -turtleSprite.height / 5;
          } else {
            addY = turtleIcon.height + turtleSprite.height / 5;
          }
          turtleIcon.x = turtleSprite.x - turtleIcon.width * 0.5;
          turtleIcon.y = turtleSprite.y - addY;
        }
      },
    });

    // Phase 1: Bơi sang trái-trên
    turtleTimeline.to(turtleSprite, {
      duration: 8,
      rotation: -0.5, // Xoay nhẹ sang trái
      motionPath: {
        path: path1,
        curviness: 1,
      },
      ease: 'power1.inOut',
      onStart: () => {
        turtleSprite.textures = turtleSwimLeftTextures;
        turtleSprite.play();
      },
      onComplete: () => {
        turtleSprite.texture = turtleStandLeftTexture;
      },
    });

    // Phase 2: Bơi sang phải-trên
    turtleTimeline.to(turtleSprite, {
      duration: 6,
      rotation: 0.4, // Xoay nhẹ sang phải
      motionPath: {
        path: path2,
        curviness: 1,
      },
      ease: 'power1.inOut',
      onStart: () => {
        turtleSprite.textures = turtleSwimRightTextures;
        turtleSprite.play();
      },
      onComplete: () => {
        turtleSprite.stop();
        turtleSprite.texture = turtleStandRightTexture;
      },
    });

    // Phase 3: Bơi sang trái-dưới
    turtleTimeline.to(turtleSprite, {
      duration: 6,
      rotation: 0.7,
      motionPath: {
        path: path3,
        curviness: 1,
      },
      ease: 'power1.inOut',
      onStart: () => {
        turtleSprite.textures = turtleSwimLeftTextures;
        turtleSprite.play();
      },
      onComplete: () => {
        turtleSprite.stop();
        turtleSprite.texture = turtleStandLeftTexture;
      },
    });

    // Phase 4: Bơi sang phải
    turtleTimeline.to(turtleSprite, {
      duration: 8,
      rotation: 1.5,
      motionPath: {
        path: path4,
        curviness: 1,
      },
      ease: 'power1.inOut',
      onStart: () => {
        turtleSprite.textures = turtleSwimRightTextures;
        turtleSprite.play();
      },
      onComplete: () => {
        turtleSprite.stop();
        turtleSprite.texture = turtleStandRightTexture;
      },
    });

    // Phase 5: Bơi sang phải xuống
    turtleTimeline.to(turtleSprite, {
      duration: 8,
      rotation: 3.5,
      motionPath: {
        path: path5,
        curviness: 1,
      },
      ease: 'power1.inOut',
      onStart: () => {
        turtleSprite.textures = turtleSwimRightTextures;
        turtleSprite.play();
      },
      onComplete: () => {
        turtleSprite.stop();
        turtleSprite.texture = turtleStandBackRightTexture;
      },
    });

    // Phase 6: Bơi sang trái
    turtleTimeline.to(turtleSprite, {
      duration: 8,
      rotation: 4,
      motionPath: {
        path: path6,
        curviness: 1,
      },
      ease: 'power1.inOut',
      onStart: () => {
        turtleSprite.textures = turtleSwimLeftTextures;
        turtleSprite.play();
      },
      onComplete: () => {
        turtleSprite.stop();
        turtleSprite.texture = turtleStandLeftTexture;
      },
    });

    // Phase 7: Bơi về
    turtleTimeline.to(turtleSprite, {
      duration: 12,
      rotation: 3.5,
      motionPath: {
        path: path7,
        curviness: 1,
      },
      ease: 'power1.inOut',
      onStart: () => {
        turtleSprite.textures = turtleSwimRightTextures;
        turtleSprite.play();
      },
      onComplete: () => {
        turtleSprite.stop();
        turtleSprite.texture = turtleStandRightTexture;
        createTurtleAnimation();
      },
    });
  }

  createTurtleAnimation();

  // Turtle Icon
  const turtleIcon = PIXI.Sprite.from('./images/turtle-icon-02.png');
  turtleIcon.name = 'turtleIcon';
  turtleIcon.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  turtleIcon.zIndex = 6;
  const turtleIconWidth = mapSprite.width * 0.1354;
  const turtleIconRatio = turtleIcon.height / turtleIcon.width;
  turtleIcon.width = turtleIconWidth;
  turtleIcon.height = turtleIconWidth * turtleIconRatio;
  turtleIcon.x = mapSprite.width * 0.63;
  turtleIcon.y = mapSprite.height * 0.75;
  turtleIcon.alpha = 0;
  // Click turtleSprite show Drawer (hover..)
  turtleSprite.name = 'turtleSprite';
  turtleIcon.interactive = false;

  let turtleTimeout;
  turtleSprite.on('pointerdown', () => {
    turtleIcon.texture = PIXI.Texture.from('./images/turtle-icon-hover-02.png');
    const icons = getAllBubbleIcons(app.stage);
    icons.forEach((icon) => {
      gsap.to(icon, { duration: 0.5, alpha: 0 });
    });
    gsap.to(turtleIcon, { duration: 0.5, alpha: 1 });
    turtleIconStopped = true;
    turtleIcon.interactive = true;
    turtleIcon.cursor = 'pointer';
    // Clear any existing timeout
    if (turtleTimeout) {
      clearTimeout(turtleTimeout);
    }
    turtleTimeout = setTimeout(() => {
      turtleIconStopped = false;
      turtleIcon.alpha = 0;
      turtleIcon.interactive = false;
      turtleIcon.cursor = 'default';
      turtleIcon.texture = PIXI.Texture.from('./images/turtle-icon-02.png');
    }, 5000);
  });

  turtleSprite.on('mouseover', () => {
    gsap.to(turtleIcon, {
      duration: 0.5,
      alpha: 1,
    });
  });

  turtleSprite.on('mouseout', () => {
    if (!turtleIconStopped) {
      gsap.to(turtleIcon, {
        duration: 0.5,
        alpha: 0,
      });
    }
  });

  // turtleIcon.on('pointerdown', () => {
  //   const drawerButton = document.querySelector('#turtle-href');
  //   drawerButton.click();
  // });

  turtleIcon.on('pointerdown', () => {
    const url = 'https://www.stel.or.jp/';
    const newTab = window.open(url, '_blank'); // Cố gắng mở tab mới

    if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
      // Nếu trình duyệt chặn việc mở tab mới, chuyển hướng trong tab hiện tại
      window.location.href = url;
    }
  });

  // Human 01
  // Create textures arrays for different animations
  const walkRightTextures = [
    PIXI.Texture.from('human-01-walk-right-01.png'),
    PIXI.Texture.from('human-01-walk-right-02.png'),
    PIXI.Texture.from('human-01-walk-right-03.png'),
    PIXI.Texture.from('human-01-walk-right-04.png'),
    PIXI.Texture.from('human-01-walk-right-05.png'),
  ];

  const walkLeftTextures = [
    PIXI.Texture.from('human-01-walk-left-01.png'),
    PIXI.Texture.from('human-01-walk-left-02.png'),
    PIXI.Texture.from('human-01-walk-left-03.png'),
    PIXI.Texture.from('human-01-walk-left-04.png'),
    PIXI.Texture.from('human-01-walk-left-05.png'),
  ];

  const backRightTextures = [
    PIXI.Texture.from('human-01-back-right-01.png'),
    PIXI.Texture.from('human-01-back-right-02.png'),
    PIXI.Texture.from('human-01-back-right-03.png'),
    PIXI.Texture.from('human-01-back-right-04.png'),
    PIXI.Texture.from('human-01-back-right-05.png'),
  ];

  const backLeftTextures = [
    PIXI.Texture.from('human-01-back-left-01.png'),
    PIXI.Texture.from('human-01-back-left-02.png'),
    PIXI.Texture.from('human-01-back-left-03.png'),
    PIXI.Texture.from('human-01-back-left-04.png'),
    PIXI.Texture.from('human-01-back-left-05.png'),
  ];

  // Create textures for standing still positions
  const standRightTexture = PIXI.Texture.from('human-01-walk-right-00.png');
  const standLeftTexture = PIXI.Texture.from('human-01-walk-left-00.png');
  const standBackRightTexture = PIXI.Texture.from('human-01-back-right-00.png');
  const standBackLeftTexture = PIXI.Texture.from('human-01-back-left-00.png');

  // Create AnimatedSprite with initial walking animation
  const humanSprite = new PIXI.AnimatedSprite(walkRightTextures);
  humanSprite.zIndex = 5;

  // Configure animation settings
  humanSprite.animationSpeed = 0.07;
  humanSprite.play();

  // Tính toán scale để human width = 0.7% của map width
  const desiredWidth = mapSprite.width * 0.007; // 0.7%
  const originalWidth = humanSprite.textures[0].orig.width; // Lấy width gốc từ texture đầu tiên
  const scale = desiredWidth / originalWidth;
  // Áp dụng scale
  humanSprite.scale.set(scale);
  humanSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  humanSprite.x = mapSprite.width * 0.19;
  humanSprite.y = mapSprite.height * 0.83;

  // Tạo animation cho human 01
  function createHuman01Animation() {
    // định nghĩa đường đi
    const path1 = [
      { x: humanSprite.x, y: humanSprite.y },
      { x: mapSprite.width * 0.536, y: mapSprite.height * 0.575 },
    ];

    const path2 = [
      { x: mapSprite.width * 0.536, y: mapSprite.height * 0.575 },
      { x: mapSprite.width * 0.576, y: mapSprite.height * 0.605 },
    ];

    const path3 = [
      { x: mapSprite.width * 0.576, y: mapSprite.height * 0.605 },
      { x: mapSprite.width * 0.606, y: mapSprite.height * 0.585 },
    ];

    const path4 = [
      { x: mapSprite.width * 0.606, y: mapSprite.height * 0.585 },
      { x: mapSprite.width * 0.576, y: mapSprite.height * 0.605 },
    ];

    const path5 = [
      { x: mapSprite.width * 0.576, y: mapSprite.height * 0.605 },
      { x: mapSprite.width * 0.536, y: mapSprite.height * 0.575 },
    ];

    const path6 = [
      { x: mapSprite.width * 0.536, y: mapSprite.height * 0.575 },
      { x: humanSprite.x, y: humanSprite.y },
    ];

    // Dừng mọi animation hiện tại
    gsap.killTweensOf(humanSprite);
    humanSprite.stop();

    // tạo animation mới
    const tl = gsap.timeline();

    //Phase 1: Walking up-right
    tl.to(humanSprite, {
      duration: 35,
      motionPath: {
        path: path1,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        humanSprite.textures = backRightTextures;
        humanSprite.play();
      },
      onComplete: () => {
        humanSprite.stop();
        humanSprite.texture = standBackRightTexture;
      },
    });

    //Phase 2: Walking right
    tl.to(humanSprite, {
      duration: 5,
      motionPath: {
        path: path2,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        humanSprite.textures = walkRightTextures;
        humanSprite.play();
      },
      onComplete: () => {
        humanSprite.stop();
        humanSprite.texture = standRightTexture;
      },
    });

    //Phase 3: Walking up-right again
    tl.to(humanSprite, {
      duration: 3,
      motionPath: {
        path: path3,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        humanSprite.textures = backRightTextures;
        humanSprite.play();
      },
      onComplete: () => {
        humanSprite.stop();
        humanSprite.texture = standBackRightTexture;
      },
    });

    // Đi ngược lại hành trình đã đi
    // Phase 4: Walking up-right again
    tl.to(humanSprite, {
      duration: 3,
      motionPath: {
        path: path4,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        humanSprite.textures = walkLeftTextures;
        humanSprite.play();
      },
      onComplete: () => {
        humanSprite.stop();
        humanSprite.texture = backLeftTextures;
      },
    });

    // Phase 5: Walking left
    tl.to(humanSprite, {
      duration: 5,
      motionPath: {
        path: path5,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        humanSprite.textures = backLeftTextures;
        humanSprite.play();
      },
      onComplete: () => {
        humanSprite.stop();
        humanSprite.texture = standLeftTexture;
      },
    });

    // Phase 6: Walking left again
    tl.to(humanSprite, {
      duration: 35,
      motionPath: {
        path: path6,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        humanSprite.textures = walkLeftTextures;
        humanSprite.play();
      },
      onComplete: () => {
        humanSprite.stop();
        humanSprite.texture = standBackLeftTexture;
        setTimeout(() => {
          createHuman01Animation();
        }, 10000);
      },
    });
  }

  createHuman01Animation();

  // Human 02
  // Create textures arrays for different animations
  const walkRightTextures02 = [
    PIXI.Texture.from('human-02-walk-right-01.png'),
    PIXI.Texture.from('human-02-walk-right-02.png'),
    PIXI.Texture.from('human-02-walk-right-03.png'),
    PIXI.Texture.from('human-02-walk-right-04.png'),
    PIXI.Texture.from('human-02-walk-right-05.png'),
  ];

  const walkLeftTextures02 = [
    PIXI.Texture.from('human-02-walk-left-01.png'),
    PIXI.Texture.from('human-02-walk-left-02.png'),
    PIXI.Texture.from('human-02-walk-left-03.png'),
    PIXI.Texture.from('human-02-walk-left-04.png'),
    PIXI.Texture.from('human-02-walk-left-05.png'),
  ];

  const backRightTextures02 = [
    PIXI.Texture.from('human-02-back-right-01.png'),
    PIXI.Texture.from('human-02-back-right-02.png'),
    PIXI.Texture.from('human-02-back-right-03.png'),
    PIXI.Texture.from('human-02-back-right-04.png'),
    PIXI.Texture.from('human-02-back-right-05.png'),
  ];

  const backLeftTextures02 = [
    PIXI.Texture.from('human-02-back-left-01.png'),
    PIXI.Texture.from('human-02-back-left-02.png'),
    PIXI.Texture.from('human-02-back-left-03.png'),
    PIXI.Texture.from('human-02-back-left-04.png'),
    PIXI.Texture.from('human-02-back-left-05.png'),
  ];

  // Create textures for standing still positions
  const standRightTexture02 = PIXI.Texture.from('human-02-walk-right-00.png');
  const standLeftTexture02 = PIXI.Texture.from('human-02-walk-left-00.png');
  const standBackRightTexture02 = PIXI.Texture.from('human-02-back-right-00.png');
  const standBackLeftTexture02 = PIXI.Texture.from('human-02-back-left-00.png');

  // Create AnimatedSprite with initial walking animation
  const humanSprite02 = new PIXI.AnimatedSprite(backLeftTextures02);
  humanSprite02.zIndex = 5;

  // Configure animation settings
  humanSprite02.animationSpeed = 0.07;
  humanSprite02.play();

  // Tính toán scale để human width = 0.7% của map width
  const desiredWidth02 = mapSprite.width * 0.007; // 0.7%
  const originalWidth02 = humanSprite02.textures[0].orig.width; // Lấy width gốc từ texture đầu tiên
  const scale02 = desiredWidth02 / originalWidth02;
  // Áp dụng scale
  humanSprite02.scale.set(scale02);
  humanSprite02.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  humanSprite02.x = mapSprite.width * 0.9;
  humanSprite02.y = mapSprite.height * 0.3;

  // Tạo animation cho human 02
  function createHuman02Animation() {
    // định nghĩa đường đi
    const path1 = [
      { x: humanSprite02.x, y: humanSprite02.y },
      { x: mapSprite.width * 0.869, y: mapSprite.height * 0.266 },
    ];

    const path2 = [
      { x: mapSprite.width * 0.869, y: mapSprite.height * 0.266 },
      { x: mapSprite.width * 0.943, y: mapSprite.height * 0.2 },
    ];

    const path3 = [
      { x: mapSprite.width * 0.943, y: mapSprite.height * 0.2 },
      { x: mapSprite.width * 0.9, y: mapSprite.height * 0.165 },
    ];

    const path5 = [
      { x: mapSprite.width * 0.9, y: mapSprite.height * 0.165 },
      { x: mapSprite.width * 0.8818, y: mapSprite.height * 0.1515 },
    ];
    const path6 = [
      { x: mapSprite.width * 0.8818, y: mapSprite.height * 0.1515 },
      { x: mapSprite.width * 0.8576, y: mapSprite.height * 0.1693 },
    ];

    const path7 = [
      { x: mapSprite.width * 0.8576, y: mapSprite.height * 0.1693 },
      { x: mapSprite.width * 0.85, y: mapSprite.height * 0.165 },
    ];

    // Dừng mọi animation hiện tại
    gsap.killTweensOf(humanSprite02);
    humanSprite02.stop();

    // tạo animation mới
    const tl = gsap.timeline();

    // Phase 1: Back Walking left
    tl.to(humanSprite02, {
      duration: 6,
      motionPath: {
        path: path1,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        humanSprite02.alpha = 1;
        humanSprite02.visible = true;
        humanSprite02.textures = backLeftTextures02;
        humanSprite02.play();
      },
      onComplete: () => {
        humanSprite02.stop();
        humanSprite02.texture = standLeftTexture02;
      },
    });

    // Phase 2: Back Walking right
    tl.to(humanSprite02, {
      duration: 10,
      motionPath: {
        path: path2,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        humanSprite02.textures = backRightTextures02;
        humanSprite02.play();
      },
      onComplete: () => {
        humanSprite02.stop();
        humanSprite02.texture = standBackRightTexture02;
      },
    });

    // Phase 3: Back Walking left
    tl.to(humanSprite02, {
      duration: 5,
      motionPath: {
        path: path3,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        humanSprite02.textures = backLeftTextures02;
        humanSprite02.play();
      },
      onComplete: () => {
        humanSprite02.stop();
        humanSprite02.texture = standBackRightTexture02;
      },
    });

    // Phase 4: human stop buy coffe 3s
    tl.to(humanSprite02, {
      duration: 5,
      ease: 'none',
      onComplete: () => {
        humanSprite02.play();
      },
    });

    // Phase 5: Walking left Up
    tl.to(humanSprite02, {
      duration: 2.5,
      motionPath: {
        path: path5,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        humanSprite02.textures = backLeftTextures02;
        humanSprite02.play();
      },
      onComplete: () => {
        humanSprite02.stop();
        humanSprite02.textures = walkLeftTextures02;
      },
    });

    // Phase 6: Walking left Down
    tl.to(humanSprite02, {
      duration: 3.5,
      motionPath: {
        path: path6,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        humanSprite02.textures = walkLeftTextures02;
        humanSprite02.play();
      },
      onComplete: () => {
        humanSprite02.stop();
        humanSprite02.texture = standBackLeftTexture02;
      },
    });

    // Phase 7: Walking Up Left
    tl.to(humanSprite02, {
      duration: 1.5,
      motionPath: {
        path: path7,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        humanSprite02.textures = backLeftTextures02;
        humanSprite02.play();
      },
      onComplete: () => {
        humanSprite02.stop();
      },
    });

    // Phase 8: hidden and restart animation
    tl.to(humanSprite02, {
      duration: 1,
      alpha: 0,
      onComplete: () => {
        humanSprite02.visible = false;
        humanSprite02.x = mapSprite.width * 0.9;
        humanSprite02.y = mapSprite.height * 0.3;
        setTimeout(() => {
          createHuman02Animation();
        }, 10000);
      },
    });
  }

  createHuman02Animation();

  // Human 03
  // Create textures arrays for different animations
  const walkRightTextures03 = [
    PIXI.Texture.from('human-03-walk-right-01.png'),
    PIXI.Texture.from('human-03-walk-right-02.png'),
    PIXI.Texture.from('human-03-walk-right-03.png'),
    PIXI.Texture.from('human-03-walk-right-04.png'),
    PIXI.Texture.from('human-03-walk-right-05.png'),
  ];

  const walkLeftTextures03 = [
    PIXI.Texture.from('human-03-walk-left-01.png'),
    PIXI.Texture.from('human-03-walk-left-02.png'),
    PIXI.Texture.from('human-03-walk-left-03.png'),
    PIXI.Texture.from('human-03-walk-left-04.png'),
    PIXI.Texture.from('human-03-walk-left-05.png'),
  ];

  const backRightTextures03 = [
    PIXI.Texture.from('human-03-back-right-01.png'),
    PIXI.Texture.from('human-03-back-right-02.png'),
    PIXI.Texture.from('human-03-back-right-03.png'),
    PIXI.Texture.from('human-03-back-right-04.png'),
    PIXI.Texture.from('human-03-back-right-05.png'),
  ];

  const backLeftTextures03 = [
    PIXI.Texture.from('human-03-back-left-01.png'),
    PIXI.Texture.from('human-03-back-left-02.png'),
    PIXI.Texture.from('human-03-back-left-03.png'),
    PIXI.Texture.from('human-03-back-left-04.png'),
    PIXI.Texture.from('human-03-back-left-05.png'),
  ];

  // Create textures for standing still positions
  const standRightTexture03 = PIXI.Texture.from('human-03-walk-right-00.png');
  const standLeftTexture03 = PIXI.Texture.from('human-03-walk-left-00.png');
  const standBackRightTexture03 = PIXI.Texture.from('human-03-back-right-00.png');
  const standBackLeftTexture03 = PIXI.Texture.from('human-03-back-left-00.png');

  // Create AnimatedSprite with initial walking animation
  const humanSprite03 = new PIXI.AnimatedSprite(walkLeftTextures03);
  humanSprite03.zIndex = 5;

  // Configure animation settings
  humanSprite03.animationSpeed = 0.07;
  humanSprite03.play();

  // Tính toán scale để human width = 0.7% của map width
  const desiredWidth03 = mapSprite.width * 0.0055; // 0.4%
  const originalWidth03 = humanSprite03.textures[0].orig.width; // Lấy width gốc từ texture đầu tiên
  const scale03 = desiredWidth03 / originalWidth03;
  // Áp dụng scale
  humanSprite03.scale.set(scale03);
  humanSprite03.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  humanSprite03.x = mapSprite.width * 0.445;
  humanSprite03.y = mapSprite.height * 0.39;

  // Tạo animation cho human 03
  function createHuman03Animation() {
    // định nghĩa đường đi
    const path1 = [
      { x: humanSprite03.x, y: humanSprite03.y },
      { x: mapSprite.width * 0.44, y: mapSprite.height * 0.41 },
    ];

    const path2 = [
      { x: mapSprite.width * 0.44, y: mapSprite.height * 0.41 },
      { x: mapSprite.width * 0.422, y: mapSprite.height * 0.398 },
    ];

    const path3 = [
      { x: mapSprite.width * 0.422, y: mapSprite.height * 0.398 },
      { x: mapSprite.width * 0.391, y: mapSprite.height * 0.388 },
    ];

    const path4 = [
      { x: mapSprite.width * 0.391, y: mapSprite.height * 0.388 },
      { x: mapSprite.width * 0.351, y: mapSprite.height * 0.407 },
    ];

    // Dừng mọi animation hiện tại
    gsap.killTweensOf(humanSprite03);
    humanSprite03.stop();

    // tạo animation mới
    const tl = gsap.timeline();

    // Phase 1: Back Walking down
    tl.to(humanSprite03, {
      duration: 3,
      motionPath: {
        path: path1,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        humanSprite03.alpha = 1;
        humanSprite03.visible = true;
        humanSprite03.textures = walkLeftTextures03;
        humanSprite03.zIndex = 5;
        humanSprite03.play();
      },
      onComplete: () => {
        humanSprite03.stop();
        humanSprite03.texture = standBackLeftTexture03;
      },
    });

    // Phase 2: Back Walking left
    tl.to(humanSprite03, {
      duration: 3,
      motionPath: {
        path: path2,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        humanSprite03.textures = backLeftTextures03;
        humanSprite03.play();
      },
      onComplete: () => {
        humanSprite03.stop();
        humanSprite03.texture = standBackRightTexture03;
      },
    });

    // Phase 3: Back Walking left
    tl.to(humanSprite03, {
      duration: 3,
      motionPath: {
        path: path3,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        humanSprite03.textures = backLeftTextures03;
        humanSprite03.zIndex = 1;
        humanSprite03.play();
      },
      onComplete: () => {
        humanSprite03.stop();
        humanSprite03.texture = standBackRightTexture03;
      },
    });

    // Phase 4: walking to station and stop
    tl.to(humanSprite03, {
      duration: 5,
      motionPath: {
        path: path4,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        humanSprite03.textures = walkLeftTextures03;
        humanSprite03.play();
      },
      onComplete: () => {
        humanSprite03.stop();
        humanSprite03.texture = standLeftTexture03;
      },
    });

    // Phase 5: hidden and restart animation
    tl.to(humanSprite03, {
      duration: 1,
      alpha: 0,
      onComplete: () => {
        humanSprite03.visible = false;
        humanSprite03.x = mapSprite.width * 0.445;
        humanSprite03.y = mapSprite.height * 0.39;
        setTimeout(() => {
          createHuman03Animation();
        }, 10000);
      },
    });
  }

  createHuman03Animation();

  // Human 04
  // Create textures arrays for different animations
  const walkRightTextures04 = [
    PIXI.Texture.from('human-04-walk-right-01.png'),
    PIXI.Texture.from('human-04-walk-right-02.png'),
    PIXI.Texture.from('human-04-walk-right-03.png'),
    PIXI.Texture.from('human-04-walk-right-04.png'),
    PIXI.Texture.from('human-04-walk-right-05.png'),
  ];

  const walkLeftTextures04 = [
    PIXI.Texture.from('human-04-walk-left-01.png'),
    PIXI.Texture.from('human-04-walk-left-02.png'),
    PIXI.Texture.from('human-04-walk-left-03.png'),
    PIXI.Texture.from('human-04-walk-left-04.png'),
    PIXI.Texture.from('human-04-walk-left-05.png'),
  ];

  const backRightTextures04 = [
    PIXI.Texture.from('human-04-back-right-01.png'),
    PIXI.Texture.from('human-04-back-right-02.png'),
    PIXI.Texture.from('human-04-back-right-03.png'),
    PIXI.Texture.from('human-04-back-right-04.png'),
    PIXI.Texture.from('human-04-back-right-05.png'),
  ];

  const backLeftTextures04 = [
    PIXI.Texture.from('human-04-back-left-01.png'),
    PIXI.Texture.from('human-04-back-left-02.png'),
    PIXI.Texture.from('human-04-back-left-03.png'),
    PIXI.Texture.from('human-04-back-left-04.png'),
    PIXI.Texture.from('human-04-back-left-05.png'),
  ];

  // Create textures for standing still positions
  const standRightTexture04 = PIXI.Texture.from('human-04-walk-right-00.png');
  const standLeftTexture04 = PIXI.Texture.from('human-04-walk-left-00.png');
  const standBackRightTexture04 = PIXI.Texture.from('human-04-back-right-00.png');
  const standBackLeftTexture04 = PIXI.Texture.from('human-04-back-left-00.png');

  const sitDownTexture04 = PIXI.Texture.from('human-04-sit-down.png');

  // Create AnimatedSprite with initial walking animation
  const humanSprite04 = new PIXI.AnimatedSprite(walkRightTextures04);
  humanSprite04.zIndex = 4;

  // Configure animation settings
  humanSprite04.animationSpeed = 0.07;
  humanSprite04.play();

  // Tính toán scale để human width = 0.7% của map width
  const desiredWidth04 = mapSprite.width * 0.0058; // 0.4%
  const originalWidth04 = humanSprite04.textures[0].orig.width; // Lấy width gốc từ texture đầu tiên
  const scale04 = desiredWidth04 / originalWidth04;
  // Áp dụng scale
  humanSprite04.scale.set(scale04);
  humanSprite04.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  humanSprite04.x = mapSprite.width * 0.659;
  humanSprite04.y = mapSprite.height * 0.235;

  // Tạo animation cho human 04
  function createHuman04Animation() {
    // định nghĩa đường đi
    const path1 = [
      { x: humanSprite04.x, y: humanSprite04.y },
      { x: mapSprite.width * 0.67, y: mapSprite.height * 0.246 },
    ];

    const path2 = [
      { x: mapSprite.width * 0.67, y: mapSprite.height * 0.246 },
      { x: mapSprite.width * 0.573, y: mapSprite.height * 0.3175 },
    ];

    const path4 = [
      { x: mapSprite.width * 0.573, y: mapSprite.height * 0.3175 },
      { x: mapSprite.width * 0.527, y: mapSprite.height * 0.28 },
    ];

    const path7 = [
      { x: mapSprite.width * 0.527, y: mapSprite.height * 0.28 },
      { x: mapSprite.width * 0.573, y: mapSprite.height * 0.3175 },
    ];

    const path9 = [
      { x: mapSprite.width * 0.573, y: mapSprite.height * 0.3175 },
      { x: mapSprite.width * 0.67, y: mapSprite.height * 0.246 },
    ];

    const path10 = [
      { x: mapSprite.width * 0.67, y: mapSprite.height * 0.246 },
      { x: humanSprite04.x, y: humanSprite04.y },
    ];

    // Dừng mọi animation hiện tại
    gsap.killTweensOf(humanSprite04);
    humanSprite04.stop();

    // tạo animation mới
    const tl = gsap.timeline();

    // Phase 1: Walking right
    tl.to(humanSprite04, {
      duration: 2,
      alpha: 1,
      motionPath: {
        path: path1,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        humanSprite04.textures = walkRightTextures04;
        humanSprite04.play();
      },
      onComplete: () => {
        humanSprite04.stop();
        humanSprite04.texture = standRightTexture04;
      },
    });

    // Phase 2: Walking down
    tl.to(humanSprite04, {
      duration: 13,
      motionPath: {
        path: path2,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        humanSprite04.textures = walkLeftTextures04;
        humanSprite04.play();
      },
      onUpdate: () => {
        if (checkCollision(humanSprite04, buildingR)) {
          humanSprite04.zIndex = 2;
        } else {
          humanSprite04.zIndex = 4;
        }
      },
      onComplete: () => {
        humanSprite04.stop();
        humanSprite04.texture = standLeftTexture04;
      },
    });

    // Phase 4: Walking left
    tl.to(humanSprite04, {
      duration: 5,
      motionPath: {
        path: path4,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        humanSprite04.textures = backLeftTextures04;
        humanSprite04.play();
      },
      onUpdate: () => {
        if (checkCollision(humanSprite04, buildingR)) {
          if (tl.time() < 15.8) {
            humanSprite04.zIndex = 2;
          } else {
            humanSprite04.zIndex = 4;
          }
        } else {
          humanSprite04.zIndex = 4;
        }
      },
      onComplete: () => {
        humanSprite04.stop();
        humanSprite04.texture = standBackRightTexture04;
      },
    });

    // Phase 5: sit down
    tl.to(humanSprite04, {
      duration: 1,
      ease: 'none',
      onComplete: () => {
        humanSprite04.texture = sitDownTexture04;
      },
    });

    // Phase 5.5: sit down along 15s
    tl.to(humanSprite04, {
      duration: 15,
      ease: 'none',
    });

    // Phase 6: stand up
    tl.to(humanSprite04, {
      duration: 1,
      ease: 'none',
      onComplete: () => {
        humanSprite04.texture = standRightTexture04;
      },
    });

    // Phase 7: Walking right
    tl.to(humanSprite04, {
      duration: 5,
      motionPath: {
        path: path7,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        humanSprite04.textures = walkRightTextures04;
        humanSprite04.play();
      },
      onUpdate: () => {
        if (checkCollision(humanSprite04, buildingR)) {
          if (tl.time() > 41.2) {
            humanSprite04.zIndex = 2;
          }
        } else {
          humanSprite04.zIndex = 4;
        }
      },
      onComplete: () => {
        humanSprite04.stop();
        humanSprite04.texture = standRightTexture04;
      },
    });

    // Phase 9: Walking right
    tl.to(humanSprite04, {
      duration: 13,
      motionPath: {
        path: path9,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        humanSprite04.textures = backRightTextures04;
        humanSprite04.play();
      },
      onUpdate: () => {
        if (checkCollision(humanSprite04, buildingR)) {
          humanSprite04.zIndex = 2;
        } else {
          humanSprite04.zIndex = 4;
        }
      },
      onComplete: () => {
        humanSprite04.stop();
        humanSprite04.texture = standRightTexture04;
      },
    });

    // Phase 10: Walking right
    tl.to(humanSprite04, {
      duration: 2,
      alpha: 0,
      motionPath: {
        path: path10,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        humanSprite04.textures = backLeftTextures04;
        humanSprite04.play();
      },
      onComplete: () => {
        humanSprite04.stop();
        humanSprite04.texture = standBackLeftTexture04;
        setTimeout(() => {
          createHuman04Animation();
        }, 10000);
      },
    });
  }

  createHuman04Animation();

  // Create textures arrays for different animations for boy blue
  const boyBlueTextures = [
    PIXI.Texture.from('boy-blue-00.png'),
    PIXI.Texture.from('boy-blue-01.png'),
  ];

  const boyBlueKickBallTextures = [
    PIXI.Texture.from('boy-blue-02.png'),
    PIXI.Texture.from('boy-blue-00.png'),
  ];

  // Create AnimatedSprite with initial walking animation
  const boyBlueSprite = new PIXI.AnimatedSprite(boyBlueTextures);
  boyBlueSprite.zIndex = 1;
  // set animation speed
  boyBlueSprite.animationSpeed = 0.04;
  boyBlueSprite.play();

  // Tính toán scale để boy blue width = 0.7% của map width
  const desiredWidthBoyBlue = mapSprite.width * 0.007;
  const originalWidthBoyBlue = boyBlueSprite.textures[0].orig.width;
  const scaleBoyBlue = desiredWidthBoyBlue / originalWidthBoyBlue;
  boyBlueSprite.scale.set(scaleBoyBlue);
  boyBlueSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  boyBlueSprite.x = mapSprite.width * 0.247;
  boyBlueSprite.y = mapSprite.height * 0.644;

  // Create textures for standing still animation
  const boyBlueStandTexture = PIXI.Texture.from('boy-blue-00.png');

  // Tạo animation cho boy blue
  function createBoyBlueAnimation() {
    // định nghĩa đường đi
    const path1 = [
      { x: boyBlueSprite.x, y: boyBlueSprite.y },
      { x: mapSprite.width * 0.261, y: mapSprite.height * 0.636 },
    ];

    const path2 = [
      { x: mapSprite.width * 0.261, y: mapSprite.height * 0.636 },
      { x: mapSprite.width * 0.275, y: mapSprite.height * 0.626 },
    ];

    const path3 = [
      { x: mapSprite.width * 0.275, y: mapSprite.height * 0.626 },
      { x: mapSprite.width * 0.261, y: mapSprite.height * 0.636 },
    ];

    const path4 = [
      { x: mapSprite.width * 0.261, y: mapSprite.height * 0.636 },
      { x: boyBlueSprite.x, y: boyBlueSprite.y },
    ];

    // Dừng mọi animation hiện tại
    gsap.killTweensOf(boyBlueSprite);
    boyBlueSprite.stop();

    // tạo animation mới
    const tl = gsap.timeline();

    // Phase 0: sút bóng
    tl.to(boyBlueSprite, {
      duration: 1,
      ease: 'none',
      onStart: () => {
        boyBlueSprite.textures = boyBlueKickBallTextures;
      },
      onComplete: () => {
        boyBlueSprite.texture = boyBlueStandTexture;
      },
    });

    // Phase 1: Walking right
    tl.to(boyBlueSprite, {
      duration: 4,
      motionPath: {
        path: path1,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        boyBlueSprite.textures = boyBlueTextures;
        boyBlueSprite.play();
      },
      onComplete: () => {
        boyBlueSprite.stop();
        boyBlueSprite.texture = boyBlueStandTexture;
      },
    });

    // Phase 2: sút bóng sau 5s
    tl.to(boyBlueSprite, {
      duration: 1,
      ease: 'none',
      onStart: () => {
        boyBlueSprite.textures = boyBlueKickBallTextures;
      },
      onComplete: () => {
        boyBlueSprite.texture = boyBlueStandTexture;
      },
    });

    // Phase 3: Walking right
    tl.to(boyBlueSprite, {
      duration: 3,
      motionPath: {
        path: path2,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        boyBlueSprite.textures = boyBlueTextures;
        boyBlueSprite.play();
      },
      onComplete: () => {
        boyBlueSprite.stop();
        boyBlueSprite.texture = boyBlueStandTexture;
      },
    });

    // Phase 4: sút bóng sau 9s
    tl.to(boyBlueSprite, {
      duration: 1,
      ease: 'none',
      onStart: () => {
        boyBlueSprite.textures = boyBlueKickBallTextures;
      },
      onComplete: () => {
        boyBlueSprite.texture = boyBlueStandTexture;
      },
    });

    // Phase 5: Walking left
    tl.to(boyBlueSprite, {
      duration: 3,
      motionPath: {
        path: path3,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        boyBlueSprite.textures = boyBlueTextures;
        boyBlueSprite.play();
      },
      onComplete: () => {
        boyBlueSprite.stop();
        boyBlueSprite.texture = boyBlueStandTexture;
      },
    });

    // Phase 6: sút bóng sau 13s
    tl.to(boyBlueSprite, {
      duration: 1,
      ease: 'none',
      onStart: () => {
        boyBlueSprite.textures = boyBlueKickBallTextures;
      },
      onComplete: () => {
        boyBlueSprite.texture = boyBlueStandTexture;
      },
    });

    // Phase 7: Walking left
    tl.to(boyBlueSprite, {
      duration: 3,
      motionPath: {
        path: path4,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        boyBlueSprite.textures = boyBlueTextures;
        boyBlueSprite.play();
      },
      onComplete: () => {
        boyBlueSprite.stop();
        boyBlueSprite.texture = boyBlueStandTexture;
      },
    });

    // Phase 8: sút bóng sau 17s
    tl.to(boyBlueSprite, {
      duration: 1,
      ease: 'none',
      onStart: () => {
        boyBlueSprite.textures = boyBlueKickBallTextures;
      },
      onComplete: () => {
        boyBlueSprite.texture = boyBlueStandTexture;
        setTimeout(() => {
          createBoyBlueAnimation();
        }, 1000);
      },
    });
  }

  createBoyBlueAnimation();

  // Create textures arrays for different animations for boy pink
  const boyPinkTextures = [
    PIXI.Texture.from('boy-pink-00.png'),
    PIXI.Texture.from('boy-pink-01.png'),
  ];

  const boyPinkKickBallTextures = [
    PIXI.Texture.from('boy-pink-02.png'),
    PIXI.Texture.from('boy-pink-00.png'),
  ];

  // Create AnimatedSprite with initial walking animation
  const boyPinkSprite = new PIXI.AnimatedSprite(boyPinkTextures);
  boyPinkSprite.zIndex = 3;
  // set animation speed
  boyPinkSprite.animationSpeed = 0.04;
  boyPinkSprite.play();

  // Tính toán scale để boy pink width = 0.7% của map width
  const desiredWidthBoyPink = mapSprite.width * 0.0068;
  const originalWidthBoyPink = boyPinkSprite.textures[0].orig.width;
  const scaleBoyPink = desiredWidthBoyPink / originalWidthBoyPink;
  boyPinkSprite.scale.set(scaleBoyPink);
  boyPinkSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  boyPinkSprite.x = mapSprite.width * 0.31;
  boyPinkSprite.y = mapSprite.height * 0.65;

  // Create textures for standing still animation
  const boyPinkStandTexture = PIXI.Texture.from('boy-pink-00.png');

  // Tạo animation cho boy blue
  function createBoyPinkAnimation() {
    // định nghĩa đường đi
    const path1 = [
      { x: boyPinkSprite.x, y: boyPinkSprite.y },
      { x: mapSprite.width * 0.3, y: mapSprite.height * 0.661 },
    ];

    const path2 = [
      { x: mapSprite.width * 0.3, y: mapSprite.height * 0.661 },
      { x: mapSprite.width * 0.287, y: mapSprite.height * 0.67 },
    ];

    const path3 = [
      { x: mapSprite.width * 0.287, y: mapSprite.height * 0.67 },
      { x: mapSprite.width * 0.3, y: mapSprite.height * 0.661 },
    ];

    const path4 = [
      { x: mapSprite.width * 0.3, y: mapSprite.height * 0.661 },
      { x: boyPinkSprite.x, y: boyPinkSprite.y },
    ];

    // Dừng mọi animation hiện tại
    gsap.killTweensOf(boyPinkSprite);
    boyPinkSprite.stop();

    // tạo animation mới
    const tl = gsap.timeline();

    // Phase 0: đón bóng
    tl.to(boyPinkSprite, {
      duration: 3,
      ease: 'none',
    });

    // Phase 1: sút bóng sau 2s
    tl.to(boyPinkSprite, {
      duration: 1,
      ease: 'none',
      onStart: () => {
        boyPinkSprite.textures = boyPinkKickBallTextures;
      },
      onComplete: () => {
        boyPinkSprite.texture = boyPinkStandTexture;
      },
    });

    // Phase 2: Walking left sau 4s
    tl.to(boyPinkSprite, {
      duration: 3,
      motionPath: {
        path: path1,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        boyPinkSprite.textures = boyPinkTextures;
        boyPinkSprite.play();
      },
      onComplete: () => {
        boyPinkSprite.stop();
        boyPinkSprite.texture = boyPinkStandTexture;
      },
    });

    // Phase 3: sút bóng sau 7s
    tl.to(boyPinkSprite, {
      duration: 1,
      ease: 'none',
      onStart: () => {
        boyPinkSprite.textures = boyPinkKickBallTextures;
      },
      onComplete: () => {
        boyPinkSprite.texture = boyPinkStandTexture;
      },
    });

    // Phase 4: Walking right
    tl.to(boyPinkSprite, {
      duration: 3,
      motionPath: {
        path: path2,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        boyPinkSprite.textures = boyPinkTextures;
        boyPinkSprite.play();
      },
      onComplete: () => {
        boyPinkSprite.stop();
        boyPinkSprite.texture = boyPinkStandTexture;
      },
    });

    // Phase 5: sút bóng
    tl.to(boyPinkSprite, {
      duration: 1,
      ease: 'none',
      onStart: () => {
        boyPinkSprite.textures = boyPinkKickBallTextures;
      },
      onComplete: () => {
        boyPinkSprite.texture = boyPinkStandTexture;
      },
    });

    // Phase 6: Walking left
    tl.to(boyPinkSprite, {
      duration: 3,
      motionPath: {
        path: path3,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        boyPinkSprite.textures = boyPinkTextures;
        boyPinkSprite.play();
      },
      onComplete: () => {
        boyPinkSprite.stop();
        boyPinkSprite.texture = boyPinkStandTexture;
      },
    });

    // Phase 7: sút bóng
    tl.to(boyPinkSprite, {
      duration: 1,
      ease: 'none',
      onStart: () => {
        boyPinkSprite.textures = boyPinkKickBallTextures;
      },
      onComplete: () => {
        boyPinkSprite.texture = boyPinkStandTexture;
      },
    });

    // Phase 8: Walking left
    tl.to(boyPinkSprite, {
      duration: 3,
      motionPath: {
        path: path4,
        curviness: 1,
      },
      ease: 'none',
      onStart: () => {
        boyPinkSprite.textures = boyPinkTextures;
        boyPinkSprite.play();
      },
      onComplete: () => {
        boyPinkSprite.stop();
        boyPinkSprite.texture = boyPinkStandTexture;
        createBoyPinkAnimation();
      },
    });
  }

  createBoyPinkAnimation();

  // Tạo red ball sprite
  const redBall = PIXI.Sprite.from('./images/red-ball.png');
  redBall.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  redBall.zIndex = 2;
  redBall.width = mapSprite.width * 0.003;
  redBall.height = mapSprite.width * 0.003;
  // Đặt vị trí cho red ball
  redBall.x = mapSprite.width * 0.251;
  redBall.y = mapSprite.height * 0.655;

  // create red ball animation
  function createRedBallAnimation() {
    // định nghĩa đường đi
    const path1 = [
      { x: redBall.x, y: redBall.y },
      { x: mapSprite.width * 0.31, y: mapSprite.height * 0.662 },
    ];

    const path2 = [
      { x: mapSprite.width * 0.31, y: mapSprite.height * 0.662 },
      { x: mapSprite.width * 0.265, y: mapSprite.height * 0.648 },
    ];

    const path3 = [
      { x: mapSprite.width * 0.265, y: mapSprite.height * 0.648 },
      { x: mapSprite.width * 0.3, y: mapSprite.height * 0.672 },
    ];

    const path4 = [
      { x: mapSprite.width * 0.3, y: mapSprite.height * 0.672 },
      { x: mapSprite.width * 0.278, y: mapSprite.height * 0.638 },
    ];

    const path5 = [
      { x: mapSprite.width * 0.278, y: mapSprite.height * 0.638 },
      { x: mapSprite.width * 0.286, y: mapSprite.height * 0.68 },
    ];

    const path6 = [
      { x: mapSprite.width * 0.286, y: mapSprite.height * 0.68 },
      { x: mapSprite.width * 0.265, y: mapSprite.height * 0.648 },
    ];

    const path7 = [
      { x: mapSprite.width * 0.265, y: mapSprite.height * 0.648 },
      { x: mapSprite.width * 0.3, y: mapSprite.height * 0.672 },
    ];

    const path8 = [
      { x: mapSprite.width * 0.3, y: mapSprite.height * 0.672 },
      { x: redBall.x, y: redBall.y },
    ];

    // Dừng mọi animation hiện tại
    gsap.killTweensOf(redBall);

    // tạo animation mới
    const tl = gsap.timeline();

    // Phase 1: đến điêm 1
    tl.to(redBall, {
      duration: 3,
      motionPath: {
        path: path1,
        curviness: 1,
      },
      ease: 'none',
    });

    // Phase 2: đến điêm 2
    tl.to(redBall, {
      duration: 2,
      motionPath: {
        path: path2,
        curviness: 1,
      },
      ease: 'none',
    });

    // Phase 3: đến điêm 3
    tl.to(redBall, {
      duration: 2,
      motionPath: {
        path: path3,
        curviness: 1,
      },
      ease: 'none',
    });

    // Phase 4: đến điêm 4
    tl.to(redBall, {
      duration: 2,
      motionPath: {
        path: path4,
        curviness: 1,
      },
      ease: 'none',
    });

    // Phase 5: đến điêm 5
    tl.to(redBall, {
      duration: 2,
      motionPath: {
        path: path5,
        curviness: 1,
      },
      ease: 'none',
    });

    // Phase 6: đến điêm 6
    tl.to(redBall, {
      duration: 2,
      motionPath: {
        path: path6,
        curviness: 1,
      },
      ease: 'none',
    });

    // Phase 7: đến điêm 7
    tl.to(redBall, {
      duration: 2,
      motionPath: {
        path: path7,
        curviness: 1,
      },
      ease: 'none',
    });

    // Phase 8: đến điêm 8
    tl.to(redBall, {
      duration: 2,
      motionPath: {
        path: path8,
        curviness: 1,
      },
      ease: 'none',
    });

    tl.to(redBall, {
      duration: 2,
      ease: 'none',
      onComplete: () => {
        createRedBallAnimation();
      },
    });
  }

  createRedBallAnimation();

  // Tạo board D sprite
  const boardD = PIXI.Sprite.from('./images/board-d.png');
  boardD.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  boardD.zIndex = 2;
  const boardDWidth = mapSprite.width * 0.0054;
  const boardDRatio = boardD.height / boardD.width;
  boardD.width = boardDWidth;
  boardD.height = boardDWidth * boardDRatio;
  boardD.x = mapSprite.width * 0.3867;
  boardD.y = mapSprite.height * 0.39;

  // Create textures for fire
  const fireTextures = [
    PIXI.Texture.from('fire-01.png'),
    PIXI.Texture.from('fire-02.png'),
    PIXI.Texture.from('fire-03.png'),
    PIXI.Texture.from('fire-04.png'),
  ];

  // Create AnimatedSprite with initial walking animation
  const fireSprite = new PIXI.AnimatedSprite(fireTextures);
  fireSprite.zIndex = 1;
  fireSprite.animationSpeed = 0.03;
  fireSprite.play();

  // Tính toán scale để fire width = 0.7% của map width
  const desiredWidthFire = mapSprite.width * 0.023;
  const originalWidthFire = fireSprite.textures[0].orig.width;
  const scaleFire = desiredWidthFire / originalWidthFire;
  fireSprite.scale.set(scaleFire);
  fireSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  fireSprite.x = mapSprite.width * 0.454;
  fireSprite.y = mapSprite.height * 0.118;

  // Tạo bridge sprite
  const bridge = PIXI.Sprite.from('./images/bridge-01.svg');
  bridge.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  bridge.zIndex = 1;
  // Tính toán kích thước bridge
  const bridgeWidth = mapSprite.width * 0.13386;
  const bridgeRatio = bridge.height / bridge.width;
  bridge.width = bridgeWidth;
  bridge.height = bridgeWidth * bridgeRatio;
  // Đặt vị trí cho bridge
  bridge.x = mapSprite.width * 0.0503;
  bridge.y = mapSprite.height * 0.4229;

  // Tạo wall sprite
  const wall = PIXI.Sprite.from('./images/wall-01.svg');
  wall.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  wall.zIndex = 0;
  // Tính toán kích thước wall
  const wallWidth = mapSprite.width * 0.04987;
  const wallRatio = wall.height / wall.width;
  wall.width = wallWidth;
  wall.height = wallWidth * wallRatio;
  // Đặt vị trí cho wall
  wall.x = mapSprite.width * 0.424;
  wall.y = mapSprite.height * 0.256;

  // Tạo building C sprite
  const buildingC = PIXI.Sprite.from('./images/building-c-02.png');
  buildingC.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  buildingC.zIndex = 4;
  const buildingCWidth = mapSprite.width * 0.11979;
  const buildingCRatio = buildingC.height / buildingC.width;
  buildingC.width = buildingCWidth;
  buildingC.height = buildingCWidth * buildingCRatio;
  // Đặt vị trí cho building C
  buildingC.x = mapSprite.width * 0.387;
  buildingC.y = mapSprite.height * 0.22;
  // Building C Icon
  const iconC = PIXI.Sprite.from('./images/building-c-icon.png');
  iconC.name = 'iconC';
  iconC.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  iconC.zIndex = 4;
  const iconCWidth = mapSprite.width * 0.088;
  const iconCRatio = iconC.height / iconC.width;
  iconC.width = iconCWidth;
  iconC.height = iconCWidth * iconCRatio;
  iconC.x = buildingC.x + buildingCWidth * 0.5;
  iconC.y = buildingC.y;
  iconC.anchor.set(0.5, -0.5);
  iconC.alpha = 0;
  // Click building C show Drawer (hover building C show icon C)
  buildingC.on('mouseover', () => {
    gsap.to(iconC, {
      duration: 0.5,
      alpha: 1,
    });
  });
  buildingC.on('mouseout', () => {
    gsap.to(iconC, {
      duration: 0.5,
      alpha: 0,
    });
  });

  buildingC.interactive = true;
  buildingC.buttonMode = true;

  // Bắt đầu sự kiện: lưu tọa độ ban đầu
  buildingC.on('pointerdown', (event) => {
    const { x, y } = event.data.global;
    startX = x;
    startY = y;
  });

  // Kết thúc sự kiện: xử lý logic nhấn
  buildingC.on('pointerup', (event) => {
    const { x, y } = event.data.global;
    const distance = Math.sqrt((x - startX) ** 2 + (y - startY) ** 2);

    // Chỉ kích hoạt khi không phải vuốt (khoảng cách nhỏ)
    if (distance < 10) {
      if (iconC.alpha > 0) {
        const drawerButton = document.querySelector('[data-drawer-target="drawer-03"]');

        // Giả lập click nút
        setTimeout(() => {
          drawerButton.click();
        }, 200);
      } else {
        const icons = getAllBubbleIcons(app.stage);
        icons.forEach((icon) => {
          gsap.to(icon, { duration: 0.5, alpha: 0 });
        });
        gsap.to(iconC, { duration: 0.5, alpha: 1 });
      }
    }
  });

  // Tạo building D sprite
  const buildingD = PIXI.Sprite.from('./images/building-d.png');
  buildingD.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  buildingD.zIndex = 1;
  const buildingDWidth = mapSprite.width * 0.1903;
  const buildingDRatio = buildingD.height / buildingD.width;
  buildingD.width = buildingDWidth;
  buildingD.height = buildingDWidth * buildingDRatio;
  // Đặt vị trí cho building D
  buildingD.x = mapSprite.width * 0.202;
  buildingD.y = mapSprite.height * 0.3334;

  // BuildingDsite
  const buildingDsite = new PIXI.Sprite();
  buildingDsite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  buildingDsite.zIndex = 1;
  const buildingDsiteWidth = mapSprite.width * 0.15;
  const buildingDsiteHeight = mapSprite.height * 0.1;
  buildingDsite.width = buildingDsiteWidth;
  buildingDsite.height = buildingDsiteHeight;
  buildingDsite.x = mapSprite.width * 0.39;
  buildingDsite.y = mapSprite.height * 0.41;
  buildingDsite.rotation = Math.PI / 1.2;
  // Building D Icon
  const iconD = PIXI.Sprite.from('./images/building-d-icon.png');
  iconD.name = 'iconD';
  iconD.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  iconD.zIndex = 1;
  const iconDWidth = mapSprite.width * 0.075;
  const iconDRatio = iconD.height / iconD.width;
  iconD.width = iconDWidth;
  iconD.height = iconDWidth * iconDRatio;
  iconD.x = buildingD.x + buildingD.width * 0.5;
  iconD.y = buildingD.y;
  iconD.anchor.set(0.5, -1);
  iconD.alpha = 0;
  // Click building D show Drawer (hover building D show icon D)
  buildingDsite.on('mouseover', () => {
    gsap.to(iconD, {
      duration: 0.5,
      alpha: 1,
    });
  });
  buildingDsite.on('mouseout', () => {
    gsap.to(iconD, {
      duration: 0.5,
      alpha: 0,
    });
  });

  buildingDsite.interactive = true;
  buildingDsite.buttonMode = true;

  // Bắt đầu sự kiện: lưu tọa độ ban đầu
  buildingDsite.on('pointerdown', (event) => {
    const { x, y } = event.data.global;
    startX = x;
    startY = y;
  });

  // Kết thúc sự kiện: xử lý logic nhấn
  buildingDsite.on('pointerup', (event) => {
    const { x, y } = event.data.global;
    const distance = Math.sqrt((x - startX) ** 2 + (y - startY) ** 2);

    // Chỉ kích hoạt khi không phải vuốt (khoảng cách nhỏ)
    if (distance < 10) {
      if (iconD.alpha > 0) {
        const drawerButton = document.querySelector('[data-drawer-target="drawer-10"]');

        // Giả lập click nút
        setTimeout(() => {
          drawerButton.click();
        }, 200);
      } else {
        const icons = getAllBubbleIcons(app.stage);
        icons.forEach((icon) => {
          gsap.to(icon, { duration: 0.5, alpha: 0 });
        });
        gsap.to(iconD, { duration: 0.5, alpha: 1 });
      }
    }
  });

  // Tạo building F sprite
  const buildingF = PIXI.Sprite.from('./images/building-f-02.png');
  buildingF.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  buildingF.zIndex = 1;
  const buildingFWidth = mapSprite.width * 0.0651;
  const buildingFRatio = buildingF.height / buildingF.width;
  buildingF.width = buildingFWidth;
  buildingF.height = buildingFWidth * buildingFRatio;
  // Đặt vị trí cho building F
  buildingF.x = mapSprite.width * 0.21;
  buildingF.y = mapSprite.height * 0.474;
  // Building F Icon
  const iconF = PIXI.Sprite.from('./images/building-f-icon.png');
  iconF.name = 'iconF';
  iconF.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  iconF.zIndex = 1;
  const iconFWidth = mapSprite.width * 0.075;
  const iconFRatio = iconF.height / iconF.width;
  iconF.width = iconFWidth;
  iconF.height = iconFWidth * iconFRatio;
  iconF.x = buildingF.x + buildingF.width * 0.5;
  iconF.y = buildingF.y;
  iconF.anchor.set(0.5, 0);
  iconF.alpha = 0;
  // Click building F show Drawer (hover building F show icon F)
  buildingF.on('mouseover', () => {
    gsap.to(iconF, {
      duration: 0.5,
      alpha: 1,
    });
  });
  buildingF.on('mouseout', () => {
    gsap.to(iconF, {
      duration: 0.5,
      alpha: 0,
    });
  });

  buildingF.interactive = true;
  buildingF.buttonMode = true;

  // Bắt đầu sự kiện: lưu tọa độ ban đầu
  buildingF.on('pointerdown', (event) => {
    const { x, y } = event.data.global;
    startX = x;
    startY = y;
  });

  // Kết thúc sự kiện: xử lý logic nhấn
  buildingF.on('pointerup', (event) => {
    const { x, y } = event.data.global;
    const distance = Math.sqrt((x - startX) ** 2 + (y - startY) ** 2);

    // Chỉ kích hoạt khi không phải vuốt (khoảng cách nhỏ)
    if (distance < 10) {
      if (iconF.alpha > 0) {
        const drawerButton = document.querySelector('[data-drawer-target="drawer-09"]');

        // Giả lập click nút
        setTimeout(() => {
          drawerButton.click();
        }, 200);
      } else {
        const icons = getAllBubbleIcons(app.stage);
        icons.forEach((icon) => {
          gsap.to(icon, { duration: 0.5, alpha: 0 });
        });
        gsap.to(iconF, { duration: 0.5, alpha: 1 });
      }
    }
  });

  // Tạo building G sprite
  const buildingG = PIXI.Sprite.from('./images/building-g-02.png');
  buildingG.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  buildingG.zIndex = 1;
  const buildingGWidth = mapSprite.width * 0.134848;
  const buildingGRatio = buildingG.height / buildingG.width;
  buildingG.width = buildingGWidth;
  buildingG.height = buildingGWidth * buildingGRatio;
  // Đặt vị trí cho building G
  buildingG.x = mapSprite.width * 0.051;
  buildingG.y = mapSprite.height * 0.518;
  // Building G Icon
  const iconG = PIXI.Sprite.from('./images/building-g-icon.png');
  iconG.name = 'iconG';
  iconG.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  iconG.zIndex = 1;
  const iconGWidth = mapSprite.width * 0.075;
  const iconGRatio = iconG.height / iconG.width;
  iconG.width = iconGWidth;
  iconG.height = iconGWidth * iconGRatio;
  iconG.x = buildingG.x + buildingG.width * 0.5;
  iconG.y = buildingG.y;
  iconG.anchor.set(0.5, -0.5);
  iconG.alpha = 0;
  // Click building G show Drawer (hover building G show icon G)
  buildingG.on('mouseover', () => {
    gsap.to(iconG, {
      duration: 0.5,
      alpha: 1,
    });
  });
  buildingG.on('mouseout', () => {
    gsap.to(iconG, {
      duration: 0.5,
      alpha: 0,
    });
  });

  // buildingG.on('pointerdown', (event) => {
  //   if (event.button == 0) {
  //     if (iconG.alpha > 0) {
  //       const drawerButton = document.querySelector('[data-drawer-target="drawer-08"]');

  //       setTimeout(() => {
  //         drawerButton.click();
  //       }, 200);
  //     } else {
  //       const icons = getAllBubbleIcons(app.stage);
  //       icons.forEach((icon) => {
  //         gsap.to(icon, { duration: 0.5, alpha: 0 });
  //       });
  //       gsap.to(iconG, { duration: 0.5, alpha: 1 });
  //     }
  //   }
  // });

  buildingG.interactive = true;
  buildingG.buttonMode = true;

  // Bắt đầu sự kiện: lưu tọa độ ban đầu
  buildingG.on('pointerdown', (event) => {
    const { x, y } = event.data.global;
    startX = x;
    startY = y;
  });

  // Kết thúc sự kiện: xử lý logic nhấn
  buildingG.on('pointerup', (event) => {
    const { x, y } = event.data.global;
    const distance = Math.sqrt((x - startX) ** 2 + (y - startY) ** 2);

    // Chỉ kích hoạt khi không phải vuốt (khoảng cách nhỏ)
    if (distance < 10) {
      if (iconG.alpha > 0) {
        const drawerButton = document.querySelector('[data-drawer-target="drawer-08"]');

        // Giả lập click nút
        setTimeout(() => {
          drawerButton.click();
        }, 200);
      } else {
        const icons = getAllBubbleIcons(app.stage);
        icons.forEach((icon) => {
          gsap.to(icon, { duration: 0.5, alpha: 0 });
        });
        gsap.to(iconG, { duration: 0.5, alpha: 1 });
      }
    }
  });

  // Tạo building H sprite
  const buildingH = PIXI.Sprite.from('./images/building_h_update02.webp');
  buildingH.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  buildingH.zIndex = 3;
  const buildingHWidth = mapSprite.width * 0.1167;
  const buildingHRatio = buildingH.height / buildingH.width;
  buildingH.width = buildingHWidth;
  buildingH.height = buildingHWidth * buildingHRatio;
  // Đặt vị trí cho building H
  buildingH.x = mapSprite.width * 0.1;
  buildingH.y = mapSprite.height * 0.64;
  // Building H Icon
  const iconH = PIXI.Sprite.from('./images/building-h-icon-02.png');
  iconH.name = 'iconH';
  iconH.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  iconH.zIndex = 3;
  const iconHWidth = mapSprite.width * 0.0828;
  const iconHRatio = iconH.height / iconH.width;
  iconH.width = iconHWidth;
  iconH.height = iconHWidth * iconHRatio;
  iconH.x = buildingH.x + buildingH.width * 0.5;
  iconH.y = buildingH.y;
  iconH.anchor.set(0.5, -0.5);
  iconH.alpha = 0;
  // Click building H show Drawer (hover building H show icon H)
  buildingH.on('mouseover', () => {
    gsap.to(iconH, {
      duration: 0.5,
      alpha: 1,
    });
  });
  buildingH.on('mouseout', () => {
    gsap.to(iconH, {
      duration: 0.5,
      alpha: 0,
    });
  });

  buildingH.interactive = true;
  buildingH.buttonMode = true;

  // Bắt đầu sự kiện: lưu tọa độ ban đầu
  buildingH.on('pointerdown', (event) => {
    const { x, y } = event.data.global;
    startX = x;
    startY = y;
  });

  // Kết thúc sự kiện: xử lý logic nhấn
  buildingH.on('pointerup', (event) => {
    const { x, y } = event.data.global;
    const distance = Math.sqrt((x - startX) ** 2 + (y - startY) ** 2);

    // Chỉ kích hoạt khi không phải vuốt (khoảng cách nhỏ)
    if (distance < 10) {
      if (iconH.alpha > 0) {
        const drawerButton = document.querySelector('[data-drawer-target="drawer-14"]');

        // Giả lập click nút
        setTimeout(() => {
          drawerButton.click();
        }, 200);
      } else {
        const icons = getAllBubbleIcons(app.stage);
        icons.forEach((icon) => {
          gsap.to(icon, { duration: 0.5, alpha: 0 });
        });
        gsap.to(iconH, { duration: 0.5, alpha: 1 });
      }
    }
  });

  // Tạo car A sprite
  let carASprite = PIXI.Sprite.from('./images/car-a.svg');
  carASprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  carASprite.zIndex = 2;
  const carAWidth = mapSprite.width * 0.032;
  const carARatio = carASprite.height / carASprite.width;
  carASprite.width = carAWidth;
  carASprite.height = carAWidth * carARatio;
  // Đặt vị trí bắt đầu cho Car A
  carASprite.x = mapSprite.width * 0.6;
  carASprite.y = mapSprite.height * 0.488;
  // Tạo car C sprite
  let carCSprite = PIXI.Sprite.from('./images/car-c.svg');
  carCSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  carCSprite.zIndex = 2;
  const carCWidth = mapSprite.width * 0.032;
  const carCRatio = carCSprite.height / carCSprite.width;
  carCSprite.width = carCWidth;
  carCSprite.height = carCWidth * carCRatio;
  // Đặt vị trí bắt đầu cho Car C
  carCSprite.x = mapSprite.width * 0.382;
  carCSprite.y = mapSprite.height * 0.428;

  // Tạo car D sprite
  let carDSprite = PIXI.Sprite.from('./images/car-d.svg');
  carDSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  carDSprite.zIndex = 2;
  const carDWidth = mapSprite.width * 0.032;
  const carDRatio = carDSprite.height / carDSprite.width;
  carDSprite.width = carDWidth;
  carDSprite.height = carDWidth * carDRatio;
  // Đặt vị trí bắt đầu cho Car D
  carDSprite.x = mapSprite.width * -0.025;
  carDSprite.y = mapSprite.height * 0.94;

  // Tạo car E sprite
  let carESprite = PIXI.Sprite.from('./images/car-e.svg');
  carESprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  carESprite.zIndex = 2;
  const carEWidth = mapSprite.width * 0.032;
  const carERatio = carESprite.height / carESprite.width;
  carESprite.width = carEWidth;
  carESprite.height = carEWidth * carERatio;
  // Đặt vị trí bắt đầu cho Car E
  carESprite.x = mapSprite.width * 0.883;
  carESprite.y = mapSprite.height * -0.023;

  // Tạo wall3 sprite
  const wall3 = PIXI.Sprite.from('./images/wall-03.svg');
  wall3.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  wall3.zIndex = 3;
  const wall3Width = mapSprite.width * 0.048125;
  const wall3Ratio = wall3.height / wall3.width;
  wall3.width = wall3Width;
  wall3.height = wall3Width * wall3Ratio;
  wall3.x = mapSprite.width * 0.223;
  wall3.y = mapSprite.height * 0.609;

  // Tạo construction sprite
  const construction = PIXI.Sprite.from('./images/construction.png');
  construction.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  construction.zIndex = 3;
  const constructionWidth = mapSprite.width * 0.18928;
  const constructionRatio = construction.height / construction.width;
  construction.width = constructionWidth;
  construction.height = constructionWidth * constructionRatio;
  construction.x = mapSprite.width * 0.642;
  construction.y = mapSprite.height * 0.257;

  // Tạo car B sprite
  let carBSprite = PIXI.Sprite.from('./images/car-b.svg');
  carBSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  carBSprite.zIndex = 2;
  const carBWidth = mapSprite.width * 0.032;
  const carBRatio = carBSprite.height / carBSprite.width;
  carBSprite.width = carBWidth;
  carBSprite.height = carBWidth * carBRatio;
  // Đặt vị trí bắt đầu cho Car B
  carBSprite.x = mapSprite.width * 0.16;
  carBSprite.y = mapSprite.height * 0.635;

  // Tạo building J sprite
  const buildingJ = PIXI.Sprite.from('./images/building-j.png');
  buildingJ.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  buildingJ.zIndex = 4;
  const buildingJWidth = mapSprite.width * 0.0459;
  const buildingJRatio = buildingJ.height / buildingJ.width;
  buildingJ.width = buildingJWidth;
  buildingJ.height = buildingJWidth * buildingJRatio;
  // Đặt vị trí cho building J
  buildingJ.x = mapSprite.width * 0.62;
  buildingJ.y = mapSprite.height * 0.3;
  // Building J Icon
  const iconJ = PIXI.Sprite.from('./images/building-j-icon.png');
  iconJ.name = 'iconJ';
  iconJ.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  iconJ.zIndex = 4;
  const iconJWidth = mapSprite.width * 0.0604;
  const iconJRatio = iconJ.height / iconJ.width;
  iconJ.width = iconJWidth;
  iconJ.height = iconJWidth * iconJRatio;
  iconJ.x = buildingJ.x + buildingJ.width * 0.5;
  iconJ.y = buildingJ.y;
  iconJ.anchor.set(0.5, 0.4);
  iconJ.alpha = 0;
  // Click building J show Drawer (hover building J show icon J)
  buildingJ.on('mouseover', () => {
    gsap.to(iconJ, {
      duration: 0.5,
      alpha: 1,
    });
  });
  buildingJ.on('mouseout', () => {
    gsap.to(iconJ, {
      duration: 0.5,
      alpha: 0,
    });
  });

  buildingJ.interactive = true;
  buildingJ.buttonMode = true;

  // Bắt đầu sự kiện: lưu tọa độ ban đầu
  buildingJ.on('pointerdown', (event) => {
    const { x, y } = event.data.global;
    startX = x;
    startY = y;
  });

  // Kết thúc sự kiện: xử lý logic nhấn
  buildingJ.on('pointerup', (event) => {
    const { x, y } = event.data.global;
    const distance = Math.sqrt((x - startX) ** 2 + (y - startY) ** 2);

    // Chỉ kích hoạt khi không phải vuốt (khoảng cách nhỏ)
    if (distance < 10) {
      if (iconJ.alpha > 0) {
        window.location.href = './buildings.html';
        // Giả lập click nút
        setTimeout(() => {
          drawerButton.click();
        }, 200);
      } else {
        const icons = getAllBubbleIcons(app.stage);
        icons.forEach((icon) => {
          gsap.to(icon, { duration: 0.5, alpha: 0 });
        });
        gsap.to(iconJ, { duration: 0.5, alpha: 1 });
      }
    }
  });

  // Tạo building R sprite
  const buildingR = PIXI.Sprite.from('./images/building-r-02.png');
  buildingR.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  buildingR.zIndex = 4;
  const buildingRWidth = mapSprite.width * 0.105729;
  const buildingRRatio = buildingR.height / buildingR.width;
  buildingR.width = buildingRWidth;
  buildingR.height = buildingRWidth * buildingRRatio;
  // Đặt vị trí cho building R
  buildingR.x = mapSprite.width * 0.528;
  buildingR.y = mapSprite.height * 0.325;
  // Building R Icon
  const iconR = PIXI.Sprite.from('./images/building-r-icon.png');
  iconR.name = 'iconR';
  iconR.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  iconR.zIndex = 4;
  const iconRWidth = mapSprite.width * 0.05;
  const iconRRatio = iconR.height / iconR.width;
  iconR.width = iconRWidth;
  iconR.height = iconRWidth * iconRRatio;
  iconR.x = buildingR.x + buildingR.width * 0.55;
  iconR.y = buildingR.y;
  iconR.anchor.set(0.5, 0.3);
  iconR.alpha = 0;
  // Click building R show Drawer (hover building R show icon R)
  buildingR.on('mouseover', () => {
    gsap.to(iconR, {
      duration: 0.5,
      alpha: 1,
    });
  });
  buildingR.on('mouseout', () => {
    gsap.to(iconR, {
      duration: 0.5,
      alpha: 0,
    });
  });

  buildingR.interactive = true;
  buildingR.buttonMode = true;

  // Bắt đầu sự kiện: lưu tọa độ ban đầu
  buildingR.on('pointerdown', (event) => {
    const { x, y } = event.data.global;
    startX = x;
    startY = y;
  });

  // Kết thúc sự kiện: xử lý logic nhấn
  buildingR.on('pointerup', (event) => {
    const { x, y } = event.data.global;
    const distance = Math.sqrt((x - startX) ** 2 + (y - startY) ** 2);

    // Chỉ kích hoạt khi không phải vuốt (khoảng cách nhỏ)
    if (distance < 10) {
      if (iconR.alpha > 0) {
        window.location.href = './head-office.html';
        // Giả lập click nút
        setTimeout(() => {
          drawerButton.click();
        }, 200);
      } else {
        const icons = getAllBubbleIcons(app.stage);
        icons.forEach((icon) => {
          gsap.to(icon, { duration: 0.5, alpha: 0 });
        });
        gsap.to(iconR, { duration: 0.5, alpha: 1 });
      }
    }
  });

  // Tạo tree R sprite
  const treeR = PIXI.Sprite.from('./images/tree-q.png');
  treeR.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  treeR.zIndex = 3;
  const treeRWidth = mapSprite.width * 0.01768;
  const treeRRatio = treeR.height / treeR.width;
  treeR.width = treeRWidth;
  treeR.height = treeRWidth * treeRRatio;
  // Đặt vị trí cho tree Q
  treeR.x = mapSprite.width * 0.492;
  treeR.y = mapSprite.height * 0.425;

  // Tạo tree 01 sprite
  const tree01 = PIXI.Sprite.from('./images/tree-01.png');
  tree01.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  tree01.zIndex = 5;
  const tree01Width = mapSprite.width * 0.03063;
  const tree01Ratio = tree01.height / tree01.width;
  tree01.width = tree01Width;
  tree01.height = tree01Width * tree01Ratio;
  tree01.x = mapSprite.width * 0.42;
  tree01.y = mapSprite.height * 0.666;

  // Tạo building A sprite
  const buildingA = PIXI.Sprite.from('./images/building-a.png');
  buildingA.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  buildingA.zIndex = 3;
  const buildingAWidth = mapSprite.width * 0.17814;
  const buildingARatio = buildingA.height / buildingA.width;
  buildingA.width = buildingAWidth;
  buildingA.height = buildingAWidth * buildingARatio;
  // Đặt vị trí cho building A
  buildingA.x = mapSprite.width * 0.706;
  buildingA.y = mapSprite.height * 0.045;
  // Building A Icon
  const iconA = PIXI.Sprite.from('./images/building-a-icon.png');
  iconA.name = 'iconA';
  iconA.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  iconA.zIndex = 3;
  const iconAWidth = mapSprite.width * 0.08;
  const iconARatio = iconA.height / iconA.width;
  iconA.width = iconAWidth;
  iconA.height = iconAWidth * iconARatio;
  iconA.x = buildingA.x + buildingAWidth * 0.5;
  iconA.y = buildingA.y * 0.045;
  iconA.anchor.set(0.5, -1.5);
  iconA.alpha = 0;
  // Click building A show Drawer (hover building A show icon A)
  buildingA.on('mouseover', () => {
    gsap.to(iconA, {
      duration: 0.5,
      alpha: 1,
    });
  });
  buildingA.on('mouseout', () => {
    gsap.to(iconA, {
      duration: 0.5,
      alpha: 0,
    });
  });

  buildingA.interactive = true;
  buildingA.buttonMode = true;

  // Bắt đầu sự kiện: lưu tọa độ ban đầu
  buildingA.on('pointerdown', (event) => {
    const { x, y } = event.data.global;
    startX = x;
    startY = y;
  });

  // Kết thúc sự kiện: xử lý logic nhấn
  buildingA.on('pointerup', (event) => {
    const { x, y } = event.data.global;
    const distance = Math.sqrt((x - startX) ** 2 + (y - startY) ** 2);

    // Chỉ kích hoạt khi không phải vuốt (khoảng cách nhỏ)
    if (distance < 10) {
      if (iconA.alpha > 0) {
        const drawerButton = document.querySelector('[data-drawer-target="drawer-06"]');

        // Giả lập click nút
        setTimeout(() => {
          drawerButton.click();
        }, 200);
      } else {
        const icons = getAllBubbleIcons(app.stage);
        icons.forEach((icon) => {
          gsap.to(icon, { duration: 0.5, alpha: 0 });
        });
        gsap.to(iconA, { duration: 0.5, alpha: 1 });
      }
    }
  });

  // Tạo building B sprite
  const buildingB = PIXI.Sprite.from('./images/building-b-02.png');
  buildingB.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  buildingB.zIndex = 3;
  const buildingBWidth = mapSprite.width * 0.2167;
  const buildingBRatio = buildingB.height / buildingB.width;
  buildingB.width = buildingBWidth;
  buildingB.height = buildingBWidth * buildingBRatio;
  // Đặt vị trí cho building B
  buildingB.x = mapSprite.width * 0.485;
  buildingB.y = mapSprite.height * 0.087;
  // Building B Icon
  const iconB = PIXI.Sprite.from('./images/building-b-icon.png');
  iconB.name = 'iconB';
  iconB.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  iconB.zIndex = 3;
  const iconBWidth = mapSprite.width * 0.075;
  const iconBRatio = iconB.height / iconB.width;
  iconB.width = iconBWidth;
  iconB.height = iconBWidth * iconBRatio;
  iconB.x = buildingB.x + buildingBWidth * 0.5;
  iconB.y = buildingB.y;
  iconB.anchor.set(0.5, -1.2);
  iconB.alpha = 0;
  // Click building B show Drawer (hover building B show icon B)
  buildingB.on('mouseover', () => {
    gsap.to(iconB, {
      duration: 0.5,
      alpha: 1,
    });
  });
  buildingB.on('mouseout', () => {
    gsap.to(iconB, {
      duration: 0.5,
      alpha: 0,
    });
  });

  buildingB.interactive = true;
  buildingB.buttonMode = true;

  // Bắt đầu sự kiện: lưu tọa độ ban đầu
  buildingB.on('pointerdown', (event) => {
    const { x, y } = event.data.global;
    startX = x;
    startY = y;
  });

  // Kết thúc sự kiện: xử lý logic nhấn
  buildingB.on('pointerup', (event) => {
    const { x, y } = event.data.global;
    const distance = Math.sqrt((x - startX) ** 2 + (y - startY) ** 2);

    // Chỉ kích hoạt khi không phải vuốt (khoảng cách nhỏ)
    if (distance < 10) {
      if (iconB.alpha > 0) {
        const drawerButton = document.querySelector('[data-drawer-target="drawer-02"]');

        // Giả lập click nút
        setTimeout(() => {
          drawerButton.click();
        }, 200);
      } else {
        const icons = getAllBubbleIcons(app.stage);
        icons.forEach((icon) => {
          gsap.to(icon, { duration: 0.5, alpha: 0 });
        });
        gsap.to(iconB, { duration: 0.5, alpha: 1 });
      }
    }
  });

  // Tạo building W sprite
  const buildingW = PIXI.Sprite.from('./images/building-w.png');
  buildingW.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  buildingW.zIndex = 5;
  const buildingWWidth = mapSprite.width * 0.0921;
  const buildingWRatio = buildingW.height / buildingW.width;
  buildingW.width = buildingWWidth;
  buildingW.height = buildingWWidth * buildingWRatio;
  // Đặt vị trí cho building W
  buildingW.x = mapSprite.width * 0.837;
  buildingW.y = mapSprite.height * 0.292;
  // Building W Icon
  const iconW = PIXI.Sprite.from('./images/building-w-icon.png');
  iconW.name = 'iconW';
  iconW.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  iconW.zIndex = 5;
  const iconWWidth = mapSprite.width * 0.075;
  const iconWRatio = iconW.height / iconW.width;
  iconW.width = iconWWidth;
  iconW.height = iconWWidth * iconWRatio;
  iconW.x = buildingW.x + buildingWWidth * 0.5;
  iconW.y = buildingW.y;
  iconW.anchor.set(0.5, -0.5);
  iconW.alpha = 0;
  //buildingWHitArea
  const buildingWHitArea = new PIXI.Sprite(PIXI.Texture.EMPTY);
  buildingWHitArea.zIndex = buildingW.zIndex;
  buildingWHitArea.width = buildingWWidth * 1.4;
  buildingWHitArea.height = buildingW.height * 1.1;
  buildingWHitArea.x = mapSprite.width * 0.905;
  buildingWHitArea.y = mapSprite.height * 0.275;
  buildingWHitArea.rotation = 58 * (Math.PI / 180);
  buildingWHitArea.on('mouseover', () => {
    gsap.to(iconW, {
      duration: 0.5,
      alpha: 1,
    });
  });
  buildingWHitArea.on('mouseout', () => {
    gsap.to(iconW, {
      duration: 0.5,
      alpha: 0,
    });
  });

  // Vô hiệu hóa tương tác trực tiếp trên buildingW
  buildingW.interactive = false;
  // Đừng quên thêm buildingWHitArea vào stage
  app.stage.addChild(buildingWHitArea);

  buildingWHitArea.interactive = true;
  buildingWHitArea.buttonMode = true;

  // Bắt đầu sự kiện: lưu tọa độ ban đầu
  buildingWHitArea.on('pointerdown', (event) => {
    const { x, y } = event.data.global;
    startX = x;
    startY = y;
  });

  // Kết thúc sự kiện: xử lý logic nhấn
  buildingWHitArea.on('pointerup', (event) => {
    const { x, y } = event.data.global;
    const distance = Math.sqrt((x - startX) ** 2 + (y - startY) ** 2);

    // Chỉ kích hoạt khi không phải vuốt (khoảng cách nhỏ)
    if (distance < 10) {
      if (iconW.alpha > 0) {
        const drawerButton = document.querySelector('[data-drawer-target="drawer-04"]');

        // Giả lập click nút
        setTimeout(() => {
          drawerButton.click();
        }, 200);
      } else {
        const icons = getAllBubbleIcons(app.stage);
        icons.forEach((icon) => {
          gsap.to(icon, { duration: 0.5, alpha: 0 });
        });
        gsap.to(iconW, { duration: 0.5, alpha: 1 });
      }
    }
  });

  // Tạo truck W sprite
  const truckW = PIXI.Sprite.from('./images/truck-w.png');
  truckW.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  truckW.zIndex = 5;
  const truckWWidth = mapSprite.width * 0.04732;
  const truckWRatio = truckW.height / truckW.width;
  truckW.width = truckWWidth;
  truckW.height = truckWWidth * truckWRatio;
  // Đặt vị trí cho truck W
  truckW.x = mapSprite.width * 0.828;
  truckW.y = mapSprite.height * 0.375;

  // Tạo pulley W sprite
  const pulleyW = PIXI.Sprite.from('./images/pulley-w.png');
  pulleyW.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  pulleyW.zIndex = 5;
  const pulleyWWidth = mapSprite.width * 0.04977;
  const pulleyWRatio = pulleyW.height / pulleyW.width;
  pulleyW.width = pulleyWWidth;
  pulleyW.height = pulleyWWidth * pulleyWRatio;
  // Đặt vị trí cho pulley W
  pulleyW.x = mapSprite.width * 0.918;
  pulleyW.y = mapSprite.height * 0.3595;

  // Tạo building K sprite
  const buildingK = PIXI.Sprite.from('./images/building-k-02.png');
  buildingK.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  buildingK.zIndex = 5;
  const buildingKWidth = mapSprite.width * 0.11458;
  const buildingKRatio = buildingK.height / buildingK.width;
  buildingK.width = buildingKWidth;
  buildingK.height = buildingKWidth * buildingKRatio;
  // Đặt vị trí cho building K
  buildingK.x = mapSprite.width * 0.73;
  buildingK.y = mapSprite.height * 0.325;
  // Building K Icon
  const iconK = PIXI.Sprite.from('./images/building-k-icon.png');
  iconK.name = 'iconK';
  iconK.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  iconK.zIndex = 5;
  const iconKWidth = mapSprite.width * 0.075;
  const iconKRatio = iconK.height / iconK.width;
  iconK.width = iconKWidth;
  iconK.height = iconKWidth * iconKRatio;
  iconK.x = buildingK.x + buildingK.width * 0.5;
  iconK.y = buildingK.y;
  iconK.anchor.set(0.5, -1);
  iconK.alpha = 0;
  //buildingKHitArea
  const buildingKHitArea = new PIXI.Sprite(PIXI.Texture.EMPTY);
  buildingKHitArea.zIndex = 10;
  buildingKHitArea.width = buildingKWidth * 1.5;
  buildingKHitArea.height = buildingK.height * 0.8;
  buildingKHitArea.x = mapSprite.width * 0.8;
  buildingKHitArea.y = mapSprite.height * 0.33;
  buildingKHitArea.rotation = 55 * (Math.PI / 180);

  buildingKHitArea.on('mouseover', () => {
    gsap.to(iconK, {
      duration: 0.5,
      alpha: 1,
    });
  });
  buildingKHitArea.on('mouseout', () => {
    gsap.to(iconK, {
      duration: 0.5,
      alpha: 0,
    });
  });

  // Vô hiệu hóa tương tác trực tiếp trên buildingK
  buildingK.interactive = false;
  // Đừng quên thêm buildingKHitArea vào stage
  app.stage.addChild(buildingKHitArea);

  buildingKHitArea.interactive = true;
  buildingKHitArea.buttonMode = true;

  // Bắt đầu sự kiện: lưu tọa độ ban đầu
  buildingKHitArea.on('pointerdown', (event) => {
    const { x, y } = event.data.global;
    startX = x;
    startY = y;
  });

  // Kết thúc sự kiện: xử lý logic nhấn
  buildingKHitArea.on('pointerup', (event) => {
    const { x, y } = event.data.global;
    const distance = Math.sqrt((x - startX) ** 2 + (y - startY) ** 2);

    // Chỉ kích hoạt khi không phải vuốt (khoảng cách nhỏ)
    if (distance < 10) {
      if (iconK.alpha > 0) {
        const drawerButton = document.querySelector('[data-drawer-target="drawer-05"]');

        // Giả lập click nút
        setTimeout(() => {
          drawerButton.click();
        }, 200);
      } else {
        const icons = getAllBubbleIcons(app.stage);
        icons.forEach((icon) => {
          gsap.to(icon, { duration: 0.5, alpha: 0 });
        });
        gsap.to(iconK, { duration: 0.5, alpha: 1 });
      }
    }
  });

  // Tạo building L sprite
  const buildingL = PIXI.Sprite.from('./images/building-l.png');
  buildingL.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  buildingL.zIndex = 5;
  const buildingLWidth = mapSprite.width * 0.11177;
  const buildingLRatio = buildingL.height / buildingL.width;
  buildingL.width = buildingLWidth;
  buildingL.height = buildingLWidth * buildingLRatio;
  // Đặt vị trí cho building L
  buildingL.x = mapSprite.width * 0.47;
  buildingL.y = mapSprite.height * 0.568;
  // Building L Icon
  const iconL = PIXI.Sprite.from('./images/building-l-icon.png');
  iconL.name = 'iconL';
  iconL.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  iconL.zIndex = 5;
  const iconLWidth = mapSprite.width * 0.075;
  const iconLRatio = iconL.height / iconL.width;
  iconL.width = iconLWidth;
  iconL.height = iconLWidth * iconLRatio;
  iconL.x = buildingL.x + buildingL.width * 0.5;
  iconL.y = buildingL.y;
  iconL.anchor.set(0.5, -0.5);
  iconL.alpha = 0;
  // Tạo vùng tương tác mở rộng cho building L
  const buildingLHitArea = new PIXI.Sprite(PIXI.Texture.EMPTY);
  buildingLHitArea.zIndex = buildingL.zIndex;
  // Đặt kích thước lớn hơn buildingL (ví dụ: 1.5 lần)
  buildingLHitArea.width = buildingLWidth * 1.65;
  buildingLHitArea.height = buildingL.height * 1;
  // Căn chỉnh vị trí để hitArea ở giữa buildingL
  buildingLHitArea.x = mapSprite.width * 0.38;
  buildingLHitArea.y = mapSprite.height * 0.72;
  buildingLHitArea.rotation = 315 * (Math.PI / 180);
  // Chuyển các sự kiện tương tác sang hitArea
  buildingLHitArea.on('mouseover', () => {
    gsap.to(iconL, {
      duration: 0.5,
      alpha: 1,
    });
  });
  buildingLHitArea.on('mouseout', () => {
    gsap.to(iconL, {
      duration: 0.5,
      alpha: 0,
    });
  });
  // Vô hiệu hóa tương tác trực tiếp trên buildingL
  buildingL.interactive = false;

  // Đừng quên thêm buildingLHitArea vào stage
  app.stage.addChild(buildingLHitArea);

  buildingLHitArea.interactive = true;
  buildingLHitArea.buttonMode = true;

  // Bắt đầu sự kiện: lưu tọa độ ban đầu
  buildingLHitArea.on('pointerdown', (event) => {
    const { x, y } = event.data.global;
    startX = x;
    startY = y;
  });

  // Kết thúc sự kiện: xử lý logic nhấn
  buildingLHitArea.on('pointerup', (event) => {
    const { x, y } = event.data.global;
    const distance = Math.sqrt((x - startX) ** 2 + (y - startY) ** 2);

    // Chỉ kích hoạt khi không phải vuốt (khoảng cách nhỏ)
    if (distance < 10) {
      if (iconL.alpha > 0) {
        const drawerButton = document.querySelector('[data-drawer-target="drawer-13"]');

        // Giả lập click nút
        setTimeout(() => {
          drawerButton.click();
        }, 200);
      } else {
        const icons = getAllBubbleIcons(app.stage);
        icons.forEach((icon) => {
          gsap.to(icon, { duration: 0.5, alpha: 0 });
        });
        gsap.to(iconL, { duration: 0.5, alpha: 1 });
      }
    }
  });

  // Tạo building Q sprite
  const buildingQ = PIXI.Sprite.from('./images/building-q.png');
  buildingQ.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  buildingQ.zIndex = 3;
  const buildingQWidth = mapSprite.width * 0.1068;
  const buildingQRatio = buildingQ.height / buildingQ.width;
  buildingQ.width = buildingQWidth;
  buildingQ.height = buildingQWidth * buildingQRatio;
  // Đặt vị trí cho building Q
  buildingQ.x = mapSprite.width * 0.286;
  buildingQ.y = mapSprite.height * 0.536;
  // Building Q Icon
  const iconQ = PIXI.Sprite.from('./images/building-q-icon.png');
  iconQ.name = 'iconQ';
  iconQ.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  iconQ.zIndex = 3;
  const iconQWidth = mapSprite.width * 0.088;
  const iconQRatio = iconQ.height / iconQ.width;
  iconQ.width = iconQWidth;
  iconQ.height = iconQWidth * iconQRatio;
  iconQ.x = buildingQ.x + buildingQ.width * 0.5;
  iconQ.y = buildingQ.y;
  iconQ.anchor.set(0.5, -0.5);
  iconQ.alpha = 0;
  // Click building Q show Drawer (hover building Q show icon Q)
  buildingQ.on('mouseover', () => {
    gsap.to(iconQ, {
      duration: 0.5,
      alpha: 1,
    });
  });
  buildingQ.on('mouseout', () => {
    gsap.to(iconQ, {
      duration: 0.5,
      alpha: 0,
    });
  });

  buildingQ.interactive = true;
  buildingQ.buttonMode = true;

  // Bắt đầu sự kiện: lưu tọa độ ban đầu
  buildingQ.on('pointerdown', (event) => {
    const { x, y } = event.data.global;
    startX = x;
    startY = y;
  });

  // Kết thúc sự kiện: xử lý logic nhấn
  buildingQ.on('pointerup', (event) => {
    const { x, y } = event.data.global;
    const distance = Math.sqrt((x - startX) ** 2 + (y - startY) ** 2);

    // Chỉ kích hoạt khi không phải vuốt (khoảng cách nhỏ)
    if (distance < 10) {
      if (iconQ.alpha > 0) {
        const drawerButton = document.querySelector('[data-drawer-target="drawer-07"]');

        // Giả lập click nút
        setTimeout(() => {
          drawerButton.click();
        }, 200);
      } else {
        const icons = getAllBubbleIcons(app.stage);
        icons.forEach((icon) => {
          gsap.to(icon, { duration: 0.5, alpha: 0 });
        });
        gsap.to(iconQ, { duration: 0.5, alpha: 1 });
      }
    }
  });

  // Tạo tree Q sprite
  const treeQ = PIXI.Sprite.from('./images/tree-q.png');
  treeQ.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  treeQ.zIndex = 3;
  const treeQWidth = mapSprite.width * 0.01768;
  const treeQRatio = treeQ.height / treeQ.width;
  treeQ.width = treeQWidth;
  treeQ.height = treeQWidth * treeQRatio;
  // Đặt vị trí cho tree Q
  treeQ.x = mapSprite.width * 0.346;
  treeQ.y = mapSprite.height * 0.639;

  // Tạo tree Q2 sprite
  const treeQ2 = PIXI.Sprite.from('./images/tree-q.png');
  treeQ2.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  treeQ2.zIndex = 3;
  const treeQ2Width = mapSprite.width * 0.01768;
  const treeQ2Ratio = treeQ2.height / treeQ2.width;
  treeQ2.width = treeQ2Width;
  treeQ2.height = treeQ2Width * treeQ2Ratio;
  // Đặt vị trí cho tree Q2
  treeQ2.x = mapSprite.width * 0.269;
  treeQ2.y = mapSprite.height * 0.583;

  // Tạo tree H sprite
  const treeH = PIXI.Sprite.from('./images/tree-q.png');
  treeH.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  treeH.zIndex = 3;
  const treeHWidth = mapSprite.width * 0.01768;
  const treeHRatio = treeH.height / treeH.width;
  treeH.width = treeHWidth;
  treeH.height = treeHWidth * treeHRatio;
  treeH.x = mapSprite.width * 0.207;
  treeH.y = mapSprite.height * 0.628;

  // Tạo board Q sprite
  const boardQ = PIXI.Sprite.from('./images/board-q.png');
  boardQ.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  boardQ.zIndex = 3;
  const boardQWidth = mapSprite.width * 0.0131;
  const boardQRatio = boardQ.height / boardQ.width;
  boardQ.width = boardQWidth;
  boardQ.height = boardQWidth * boardQRatio;
  // Đặt vị trí cho board Q
  boardQ.x = mapSprite.width * 0.372;
  boardQ.y = mapSprite.height * 0.635;

  // Tạo wall2 sprite
  const wall2 = PIXI.Sprite.from('./images/wall-02.svg');
  wall2.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  wall2.zIndex = 5;
  // Tính toán kích thước wall2
  const wall2Width = mapSprite.width * 0.05917;
  const wall2Ratio = wall2.height / wall2.width;
  wall2.width = wall2Width;
  wall2.height = wall2Width * wallRatio;
  // Đặt vị trí cho wall2
  wall2.x = mapSprite.width * 0.668;
  wall2.y = mapSprite.height * 0.432;

  // Tạo building E sprite
  const buildingE = PIXI.Sprite.from('./images/building-e-02.png');
  buildingE.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  buildingE.zIndex = 5;
  const buildingEWidth = mapSprite.width * 0.153125;
  const buildingERatio = buildingE.height / buildingE.width;
  buildingE.width = buildingEWidth;
  buildingE.height = buildingEWidth * buildingERatio;
  // Đặt vị trí cho building E
  buildingE.x = mapSprite.width * 0.582;
  buildingE.y = mapSprite.height * 0.439;
  // Building E Icon
  const iconE = PIXI.Sprite.from('./images/building-e-icon.png');
  iconE.name = 'iconE';
  iconE.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  iconE.zIndex = 5;
  const iconEWidth = mapSprite.width * 0.075;
  const iconERatio = iconE.height / iconE.width;
  iconE.width = iconEWidth;
  iconE.height = iconEWidth * iconERatio;
  iconE.x = buildingE.x + buildingE.width * 0.5;
  iconE.y = buildingE.y;
  iconE.anchor.set(0.5, -0.5);
  iconE.alpha = 0;
  // Click building E show Drawer (hover building E show icon E)
  buildingE.on('mouseover', () => {
    gsap.to(iconE, {
      duration: 0.5,
      alpha: 1,
    });
  });
  buildingE.on('mouseout', () => {
    gsap.to(iconE, {
      duration: 0.5,
      alpha: 0,
    });
  });

  buildingE.interactive = true;
  buildingE.buttonMode = true;

  // Bắt đầu sự kiện: lưu tọa độ ban đầu
  buildingE.on('pointerdown', (event) => {
    const { x, y } = event.data.global;
    startX = x;
    startY = y;
  });

  // Kết thúc sự kiện: xử lý logic nhấn
  buildingE.on('pointerup', (event) => {
    const { x, y } = event.data.global;
    const distance = Math.sqrt((x - startX) ** 2 + (y - startY) ** 2);

    // Chỉ kích hoạt khi không phải vuốt (khoảng cách nhỏ)
    if (distance < 10) {
      if (iconE.alpha > 0) {
        const drawerButton = document.querySelector('[data-drawer-target="drawer-01"]');

        // Giả lập click nút
        setTimeout(() => {
          drawerButton.click();
        }, 200);
      } else {
        const icons = getAllBubbleIcons(app.stage);
        icons.forEach((icon) => {
          gsap.to(icon, { duration: 0.5, alpha: 0 });
        });
        gsap.to(iconE, { duration: 0.5, alpha: 1 });
      }
    }
  });

  // Create an array of train textures
  const trainTextures = [
    './images/train-01.svg',
    './images/train-02.svg',
    './images/train-03.svg',
    './images/train-04.svg',
  ];

  // Create train sprite
  let train = PIXI.Sprite.from(trainTextures[0]);
  train.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
  train.zIndex = 1;
  // Calculate train dimensions
  const trainWidth = mapSprite.width * 0.18;
  const trainRatio = train.height / train.width;
  train.width = trainWidth;
  train.height = trainWidth * trainRatio;
  // Set anchor and initial position for train
  train.anchor.set(1, 0);
  train.x = mapSprite.width * 0.96;
  train.y = mapSprite.height * -0.139;

  // Add all sprites to the stage
  app.stage.addChild(
    train,
    mapSprite,
    campsiteSprite,
    campsiteIcon,
    parkSprite,
    zoositeSprite,
    zoositeIcon,
    parkIcon,
    islandSprite,
    islandIcon,
    turtleSprite,
    turtleIcon,
    humanSprite,
    humanSprite02,
    humanSprite03,
    humanSprite04,
    boyBlueSprite,
    boyPinkSprite,
    redBall,
    boardD,
    fireSprite,
    bridge,
    wall,
    buildingC,
    iconC,
    buildingD,
    buildingDsite,
    iconD,
    buildingF,
    iconF,
    buildingG,
    iconG,
    buildingH,
    iconH,
    carASprite,
    carCSprite,
    carDSprite,
    carESprite,
    wall3,
    construction,
    carBSprite,
    buildingJ,
    iconJ,
    buildingR,
    iconR,
    treeR,
    tree01,
    buildingA,
    iconA,
    buildingB,
    iconB,
    buildingW,
    iconW,
    truckW,
    pulleyW,
    buildingK,
    iconK,
    buildingL,
    iconL,
    buildingQ,
    iconQ,
    treeQ,
    treeQ2,
    treeH,
    boardQ,
    wall2,
    buildingE,
    iconE,
    scrollingSprite
  );

  // Function to reset train position
  function resetTrain() {
    train.x = mapSprite.width * 0.96;
    train.y = mapSprite.height * -0.139;
  }

  // Function to create train animation
  function createTrainAnimation() {
    // Reset train position and assign a random texture
    resetTrain();
    const randomTexture = trainTextures[Math.floor(Math.random() * trainTextures.length)];
    train.texture = PIXI.Texture.from(randomTexture);

    // Define train path
    const startPoint = { x: train.x, y: train.y };
    const endPoint = { x: 0, y: mapSprite.height * 0.57 };

    const stopPoint = {
      x: startPoint.x - (startPoint.x - endPoint.x) * (1.9 / 3),
      y: startPoint.y + (endPoint.y - startPoint.y) * (1.9 / 3),
    };

    // Kill any existing train animations
    gsap.killTweensOf(train);

    // Create animation timeline
    const tl = gsap.timeline();

    // Phase 1: Move to stop point
    tl.to(train, {
      duration: 6.7,
      motionPath: {
        path: [startPoint, stopPoint],
        autoRotate: false,
        useRadians: false,
        alignOrigin: [1, 0],
        curviness: 0,
      },
      ease: 'power1.out',
    });

    // Phase 2: Pause for 2 seconds
    tl.to({}, { duration: 2 });

    // Phase 3: Move to end point
    tl.to(train, {
      duration: 3.3,
      motionPath: {
        path: [stopPoint, endPoint],
        autoRotate: false,
        useRadians: false,
        alignOrigin: [1, 0],
        curviness: 0,
      },
      ease: 'none',
      onComplete: () => {
        // Delay and restart animation after 15 seconds
        gsap.delayedCall(15, createTrainAnimation);
      },
    });
  }

  // Initialize the first animation
  createTrainAnimation();

  // Thêm hàm tạo animation cho Car A
  function createCarAAnimation() {
    // Định nghĩa các đường đi của xe
    const path1 = [
      { x: carASprite.x, y: carASprite.y }, // Điểm bắt đầu
      { x: mapSprite.width * 0.549, y: mapSprite.height * 0.528 }, // Điểm 1
    ];

    const path2 = [
      { x: mapSprite.width * 0.549, y: mapSprite.height * 0.528 }, // Điểm 1
      { x: mapSprite.width * 0.391, y: mapSprite.height * 0.413 }, // Điểm 2 (di chuyển lên trên)
    ];

    const path3 = [
      { x: mapSprite.width * 0.391, y: mapSprite.height * 0.413 }, // Điểm 2
      { x: mapSprite.width * 0.291, y: mapSprite.height * 0.488 }, // Điểm 3 (di chuyển sang trái)
    ];

    const path4 = [
      { x: mapSprite.width * 0.291, y: mapSprite.height * 0.488 }, // Điểm 3
      { x: mapSprite.width * 0.4455, y: mapSprite.height * 0.6021 }, // Điểm 4 (di chuyển xuống dưới)
    ];

    const path5 = [
      { x: mapSprite.width * 0.4455, y: mapSprite.height * 0.6021 }, // Điểm 4
      { x: mapSprite.width * -0.025, y: mapSprite.height * 0.953 }, // Điểm 5 (di chuyển sang trái)
    ];

    const path6 = [
      { x: mapSprite.width * 0.88, y: mapSprite.height * -0.03 }, // Điểm 5
      { x: mapSprite.width * 0.6507, y: mapSprite.height * 0.1394 }, // Điểm 6 (di chuyển sang trái)
    ];

    const path7 = [
      { x: mapSprite.width * 0.6507, y: mapSprite.height * 0.1394 }, // Điểm 6
      { x: mapSprite.width * 0.8629, y: mapSprite.height * 0.2962 }, // Điểm 7 (di chuyển xuóng dưới)
    ];

    const path8 = [
      { x: mapSprite.width * 0.8629, y: mapSprite.height * 0.2962 }, // Điểm 7
      { x: carASprite.x, y: carASprite.y }, // Điểm 8 (di chuyển sang trái);
    ];

    // Dừng animation hiện tại nếu có
    gsap.killTweensOf(carASprite);

    // Tạo animation mới
    const tl = gsap.timeline({ repeat: -1 });

    // // Phase 1: Di chuyển đến điểm 1
    tl.to(carASprite, {
      // duration: 2,
      duration: 2,
      motionPath: {
        path: path1,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onComplete: () => {
        carASprite.texture = PIXI.Texture.from('./images/car-a-01.svg');
        carASprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      },
    });

    // Phase 2: Di chuyển lên điểm 2
    tl.to(carASprite, {
      // duration: 5,
      duration: 5,
      motionPath: {
        path: path2,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onComplete: () => {
        // Thay đổi texture khi đến điểm 2
        carASprite.texture = PIXI.Texture.from('./images/car-a.svg');
        carASprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      },
    });

    // // Phase 3: Di chuyển sang điểm 3
    tl.to(carASprite, {
      // duration: 4,
      duration: 4,
      motionPath: {
        path: path3,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onStart: () => {
        carASprite.zIndex = 3;
      },
      onComplete: () => {
        carASprite.zIndex = 2;
        carASprite.texture = PIXI.Texture.from('./images/car-a-02.svg');
        carASprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      },
    });

    // // Phase 4: Di chuyển sang điểm 4
    tl.to(carASprite, {
      // duration: 4,
      duration: 4,
      motionPath: {
        path: path4,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onStart: () => {
        carASprite.zIndex = 1;
      },
      onComplete: () => {
        carASprite.zIndex = 2;
        carASprite.texture = PIXI.Texture.from('./images/car-a.svg');
        carASprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      },
    });

    // // Phase 5: Di chuyển sang điểm 5 và thoát khỏi hành trình
    tl.to(carASprite, {
      // duration: 12,
      duration: 12,
      motionPath: {
        path: path5,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },

      ease: 'none',
      onStart: () => {
        carASprite.zIndex = 2;
      },
      onComplete: () => {
        // Ẩn sprite
        carASprite.visible = false;
        carASprite.zIndex = 1;
      },
    });

    // // Thêm delay 15 giây
    tl.to({}, { duration: 15 });

    // // Phase 6: Đặt xe tại điểm bắt đầu mới và hiển thị lại
    tl.set(carASprite, {
      x: mapSprite.width * 0.88,
      y: mapSprite.height * -0.03,
      visible: true,
    });

    // // Tiếp tục animation phase 6
    tl.to(carASprite, {
      // duration: 6,
      duration: 6,
      motionPath: {
        path: path6,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onComplete: () => {
        carASprite.texture = PIXI.Texture.from('./images/car-a-02.svg');
        carASprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      },
    });

    // // Phase 7: Di chuyển sang điểm 7
    tl.to(carASprite, {
      // duration: 8,
      duration: 8,
      motionPath: {
        path: path7,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onComplete: () => {
        carASprite.texture = PIXI.Texture.from('./images/car-a.svg');
        carASprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      },
    });

    // // Phase 8: Di chuyển sang điểm 8 và khởi tạo lại animation từ phase 1
    tl.to(carASprite, {
      // duration: 8,
      duration: 8,
      motionPath: {
        path: path8,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onStart: () => {
        carASprite.zIndex = 5;
      },
      onComplete: () => {
        carASprite.zIndex = 2;
        // Khởi tạo lại animation từ phase 1
        createCarAAnimation();
      },
    });
  }

  // Thêm hàm tạo animation cho Car B
  function createCarBAnimation() {
    // định nghĩa đường đi của xe B
    const path1 = [
      { x: carBSprite.x, y: carBSprite.y }, // Điểm bắt đầu
      { x: mapSprite.width * 0.315, y: mapSprite.height * 0.52 }, // Điểm 1
    ];

    const path2 = [
      { x: mapSprite.width * 0.315, y: mapSprite.height * 0.52 }, // Điểm 1
      { x: mapSprite.width * 0.43, y: mapSprite.height * 0.605 }, // Điểm 2 (di chuyển qua phải)
    ];

    const path3 = [
      { x: mapSprite.width * 0.44, y: mapSprite.height * 0.597 }, // Điểm 2
      { x: mapSprite.width * 0.833, y: mapSprite.height * 0.308 }, // Điểm 3 (di chuyển xuống dưới)
    ];

    const path4 = [
      { x: mapSprite.width * 0.833, y: mapSprite.height * 0.308 }, // Điểm 3
      { x: mapSprite.width * 0.635, y: mapSprite.height * 0.16 }, // Điểm 4 (di chuyển sang trái)
    ];

    const path5 = [
      { x: mapSprite.width * 0.635, y: mapSprite.height * 0.145 }, // Điểm 4
      { x: mapSprite.width * 0.845, y: mapSprite.height * -0.013 }, // Điểm 5 (di chuyển sang trái)
    ];

    const path6 = [
      { x: mapSprite.width * -0.02, y: mapSprite.height * 0.768 }, // Điểm 6
      { x: carBSprite.x, y: carBSprite.y },
    ];

    // Dừng animation hiện tại nếu có
    gsap.killTweensOf(carBSprite);

    // Tạo animation mới
    const tl = gsap.timeline({ repeat: -1 });

    // Phase 1: Di chuyển đến điểm 1
    tl.to(carBSprite, {
      duration: 4,
      motionPath: {
        path: path1,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onComplete: () => {
        carBSprite.texture = PIXI.Texture.from('./images/car-b-01.svg');
        carBSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      },
    });

    // Phase 2: Di chuyển sang điểm 2
    tl.to(carBSprite, {
      duration: 4,
      motionPath: {
        path: path2,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onComplete: () => {
        carBSprite.texture = PIXI.Texture.from('./images/car-b.svg');
        carBSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      },
    });

    // Phase 3: Di chuyển sang điểm 3
    tl.to(carBSprite, {
      duration: 10,
      motionPath: {
        path: path3,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onStart: () => {
        carBSprite.zIndex = 4;
      },
      onComplete: () => {
        carBSprite.zIndex = 2;
        carBSprite.texture = PIXI.Texture.from('./images/car-b-02.svg');
        carBSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      },
    });

    // Phase 4: Di chuyển sang điểm 4
    tl.to(carBSprite, {
      duration: 6,
      motionPath: {
        path: path4,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onComplete: () => {
        carBSprite.texture = PIXI.Texture.from('./images/car-b.svg');
        carBSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      },
    });

    // Phase 5: Di chuyển sang điểm 5 và thoát khỏi hành trình
    tl.to(carBSprite, {
      duration: 6,
      motionPath: {
        path: path5,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onStart: () => {
        carBSprite.zIndex = 1;
      },
      onComplete: () => {
        carBSprite.visible = false;
        carBSprite.zIndex = 2;
      },
    });

    // Thêm delay 10 giây
    tl.to({}, { duration: 10 });

    // Phase 6: Đặt xe tại điểm bắt đầu mới và hiển thị lại
    tl.set(carBSprite, {
      x: mapSprite.width * -0.02,
      y: mapSprite.height * 0.768,
      visible: true,
    });

    // Tiếp tục animation phase 6
    tl.to(carBSprite, {
      duration: 6,
      motionPath: {
        path: path6,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onComplete: () => {
        createCarBAnimation();
      },
    });
  }

  // Thêm hàm tạo animation cho Car C
  function createCarCAnimation() {
    // định nghĩa đường đi của xe C
    const path1 = [
      { x: carCSprite.x, y: carCSprite.y }, // Điểm bắt đầu (di chuyển sang trái)
      { x: mapSprite.width * 0.2886, y: mapSprite.height * 0.497 }, // Đi���m 1
    ];

    const path2 = [
      { x: mapSprite.width * 0.2886, y: mapSprite.height * 0.497 }, // Điểm 1 (di chuyển xuống dưới)
      { x: mapSprite.width * 0.32, y: mapSprite.height * 0.525 }, // Điểm 2
    ];

    const path3 = [
      { x: mapSprite.width * 0.315, y: mapSprite.height * 0.538 }, // Điểm 2 (di chuyển sang trái)
      { x: mapSprite.width * -0.025, y: mapSprite.height * 0.79 }, // Đi��m 3
    ];

    const path4 = [
      { x: mapSprite.width * 0.883, y: mapSprite.height * -0.023 }, // Điểm 4 (di chuy��n sang trái)
      { x: mapSprite.width * 0.6495, y: mapSprite.height * 0.1495 }, // Điểm 5
    ];

    const path5 = [
      { x: mapSprite.width * 0.6495, y: mapSprite.height * 0.1495 }, // Điểm 5 (di chuyển xuống dưới)
      { x: mapSprite.width * 0.7428, y: mapSprite.height * 0.2185 }, // Điểm 6
    ];

    const path6 = [
      { x: mapSprite.width * 0.7428, y: mapSprite.height * 0.2185 }, // Điểm 6 (di chuyển sang trái)
      { x: mapSprite.width * 0.4286, y: mapSprite.height * 0.4506 }, // Điểm 7
    ];

    const path7 = [
      { x: mapSprite.width * 0.4286, y: mapSprite.height * 0.4506 }, // Điểm 7 (di chuyển lên)
      { x: mapSprite.width * 0.391, y: mapSprite.height * 0.422 }, // Điểm bắt đầu
    ];

    // Dừng animation hiện tại nếu có
    gsap.killTweensOf(carCSprite);

    // Tạo animation mới
    const tl = gsap.timeline({ repeat: -1 });

    // Phase 1: Di chuyển đến điểm 1 (di chuyển sang trái)
    tl.to(carCSprite, {
      // duration: 4,
      delay: 0.5,
      duration: 4,
      motionPath: {
        path: path1,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onComplete: () => {
        carCSprite.texture = PIXI.Texture.from('./images/car-c-01.svg');
        carCSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      },
    });

    // Phase 2: Di chuyển sang điểm 2 (di chuy���n xuống dưới)
    tl.to(carCSprite, {
      // duration: 2,
      duration: 2,
      motionPath: {
        path: path2,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onComplete: () => {
        carCSprite.texture = PIXI.Texture.from('./images/car-c.svg');
        carCSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      },
    });

    // Phase 3: Di chuyển sang điểm 3 (di chuyển sang trái)
    tl.to(carCSprite, {
      // duration: 8,
      duration: 8,
      motionPath: {
        path: path3,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onComplete: () => {
        carCSprite.visible = false;
      },
    });

    // Thêm delay 15 giây
    tl.to({}, { duration: 15 });

    // Phase 4: Đặt xe tại điểm bắt đầu mới
    tl.set(carCSprite, {
      x: mapSprite.width * 0.883,
      y: mapSprite.height * -0.023,
      visible: true,
    });

    // Tiếp t���c animation phase 4 (di chuyển sang trái)
    tl.to(carCSprite, {
      // duration: 6,
      duration: 6,
      motionPath: {
        path: path4,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onComplete: () => {
        carCSprite.texture = PIXI.Texture.from('./images/car-c-01.svg');
        carCSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      },
    });

    // Phase 5: Di chuyển sang điểm 5 (di chuyển xuống dưới)
    tl.to(carCSprite, {
      // duration: 3,
      duration: 3,
      motionPath: {
        path: path5,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onComplete: () => {
        carCSprite.texture = PIXI.Texture.from('./images/car-c.svg');
        carCSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      },
    });

    // Phase 6: Di chuyển sang điểm 6 (di chuyển sang trái)
    tl.to(carCSprite, {
      // duration: 6,
      duration: 12,
      motionPath: {
        path: path6,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onStart: () => {
        carCSprite.zIndex = 3;
      },
      onComplete: () => {
        carCSprite.zIndex = 2;
        carCSprite.texture = PIXI.Texture.from('./images/car-c-02.svg');
        carCSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      },
    });

    // Phase 7: Di chuyển sang điểm 7 (di chuyển lên trên)
    tl.to(carCSprite, {
      duration: 3,
      motionPath: {
        path: path7,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onComplete: () => {
        carCSprite.texture = PIXI.Texture.from('./images/car-c.svg');
        carCSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
        createCarCAnimation();
      },
    });
  }

  // Thêm hàm tạo animation cho Car D
  function createCarDAnimation() {
    // Định nghĩa đường đi của xe D
    const path1 = [
      { x: carDSprite.x, y: carDSprite.y }, // Điểm bắt đầu (di chuyển sang phải)
      { x: mapSprite.width * 0.4207, y: mapSprite.height * 0.6105 }, // Điểm 1
    ];

    const path2 = [
      { x: mapSprite.width * 0.4207, y: mapSprite.height * 0.6105 }, // Điểm 1 (di chuyển xuống dưới)
      { x: mapSprite.width * 0.2593, y: mapSprite.height * 0.4912 }, // Điểm 2
    ];

    const path3 = [
      { x: mapSprite.width * 0.2593, y: mapSprite.height * 0.4912 }, // Điểm 2 (di chuyển sang trái)
      { x: mapSprite.width * 0.3857, y: mapSprite.height * 0.3985 }, // Điểm 3
    ];

    const path4 = [
      { x: mapSprite.width * 0.3857, y: mapSprite.height * 0.3985 }, // Điểm 3 (di chuyển lên)
      { x: mapSprite.width * 0.4281, y: mapSprite.height * 0.4298 }, // Điểm 4
    ];

    const path5 = [
      { x: mapSprite.width * 0.4281, y: mapSprite.height * 0.4298 }, // Điểm 4 (di chuyển sang phải)
      { x: mapSprite.width * 0.7167, y: mapSprite.height * 0.2164 }, // Điểm 5
    ];

    const path6 = [
      { x: mapSprite.width * 0.7167, y: mapSprite.height * 0.2164 }, // Điểm 5 (di chuyển sang trái)
      { x: mapSprite.width * 0.63, y: mapSprite.height * 0.15 }, // Điểm 6
    ];

    const path7 = [
      { x: mapSprite.width * 0.633, y: mapSprite.height * 0.143 }, // Điểm 6 (di chuyển sang phải)
      { x: mapSprite.width * 0.853, y: mapSprite.height * -0.022 }, // Điểm bắt đầu
    ];

    // Dừng animation hiện tại nếu có
    gsap.killTweensOf(carDSprite);

    // Tạo animation mới
    const tl = gsap.timeline({ repeat: -1 });

    // Phase 1: Di chuyển đến điểm 1 (di chuyển sang phải)
    tl.to(carDSprite, {
      duration: 12,
      motionPath: {
        path: path1,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onStart: () => {
        carDSprite.zIndex = 4;
      },
      onComplete: () => {
        carDSprite.zIndex = 2;
        carDSprite.texture = PIXI.Texture.from('./images/car-d-01.svg');
        carDSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      },
    });

    // Phase 2: Di chuyển sang ��iểm 2 (di chuyển lên trên)
    tl.to(carDSprite, {
      duration: 4,
      motionPath: {
        path: path2,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onUpdate: () => {
        if (checkCollision(carDSprite, buildingF)) {
          carDSprite.zIndex = 0;
        }
      },
      onComplete: () => {
        carDSprite.texture = PIXI.Texture.from('./images/car-d.svg');
        carDSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      },
    });

    // Phase 3: Di chuyển sang điểm 3 (di chuyển sang phải)
    tl.to(carDSprite, {
      duration: 4,
      motionPath: {
        path: path3,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onUpdate: () => {
        if (checkCollision(carDSprite, buildingF)) {
          carDSprite.zIndex = 0;
        } else {
          carDSprite.zIndex = 3;
        }
      },
      onComplete: () => {
        carDSprite.texture = PIXI.Texture.from('./images/car-d-02.svg');
        carDSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      },
    });

    // Phase 4: Di chuyển sang điểm 4 (di chuyển xuống dưới)
    tl.to(carDSprite, {
      duration: 2,
      motionPath: {
        path: path4,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onStart: () => {
        carDSprite.zIndex = 2;
      },
      onComplete: () => {
        carDSprite.texture = PIXI.Texture.from('./images/car-d.svg');
        carDSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      },
    });

    // Phase 5: Di chuyển sang điểm 5 (di chuyển sang phải)
    tl.to(carDSprite, {
      duration: 8,
      motionPath: {
        path: path5,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onComplete: () => {
        carDSprite.texture = PIXI.Texture.from('./images/car-d-01.svg');
        carDSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      },
    });

    // Phase 6: Di chuyển sang điểm 6 (di chuyển lên trên)
    tl.to(carDSprite, {
      duration: 4,
      motionPath: {
        path: path6,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onComplete: () => {
        carDSprite.texture = PIXI.Texture.from('./images/car-d.svg');
        carDSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      },
    });

    // Phase 7: Di chuyển sang điểm 7 (di chuyển sang phải)
    tl.to(carDSprite, {
      duration: 6,
      motionPath: {
        path: path7,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onStart: () => {
        carDSprite.zIndex = 1;
      },
      onComplete: () => {
        carDSprite.zIndex = 2;
        carDSprite.visible = false;
      },
    });

    // Thêm delay 20 giây
    tl.to({}, { duration: 20 });

    // Đặt lại vị trí ban đầu và hiển thị sprite
    tl.set(carDSprite, {
      x: mapSprite.width * -0.025,
      y: mapSprite.height * 0.94,
      visible: true,
      onComplete: () => {
        createCarDAnimation();
      },
    });
  }

  // Tạo animation cho Car E
  function createCarEAnimation() {
    // Định nghĩa đường đi của xe E
    const path1 = [
      { x: carESprite.x, y: carESprite.y }, // Điểm bắt đầu (di chuyển sang trái)
      { x: mapSprite.width * 0.653, y: mapSprite.height * 0.146 }, // Điểm 1
    ];

    const path2 = [
      { x: mapSprite.width * 0.65, y: mapSprite.height * 0.15 }, // Điểm 1 (di chuy���n sang phải)
      { x: mapSprite.width * 0.849, y: mapSprite.height * 0.3 }, // Điểm bắt ��ầu
    ];

    const path3 = [
      { x: mapSprite.width * 0.85, y: mapSprite.height * 0.313 }, // Điểm bắt đầu (di chuyển sang trái)
      { x: mapSprite.width * -0.025, y: mapSprite.height * 0.962 }, // Điểm bắt đầu
    ];

    // Dừng animation hiện tại nếu có
    gsap.killTweensOf(carESprite);

    // Tạo animation mới
    const tl = gsap.timeline({ repeat: -1 });

    // Phase 1: Di chuyển sang điểm 1 (di chuy��n sang trái)
    tl.to(carESprite, {
      duration: 6,
      motionPath: {
        path: path1,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onComplete: () => {
        carESprite.texture = PIXI.Texture.from('./images/car-e-01.svg');
        carESprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      },
    });

    // Phase 2: Di chuyển sang điểm 2 (di chuyển xuống dưới)
    tl.to(carESprite, {
      duration: 8,
      motionPath: {
        path: path2,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onComplete: () => {
        carESprite.texture = PIXI.Texture.from('./images/car-e.svg');
        carESprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      },
    });

    // Phase 3: Di chuyển sang điểm 3 (di chuyển sang trái)
    tl.to(carESprite, {
      duration: 20,
      motionPath: {
        path: path3,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
        curviness: 0,
      },
      ease: 'none',
      onStart: () => {
        carESprite.zIndex = 5;
      },
      onComplete: () => {
        carESprite.zIndex = 2;
        carESprite.visible = false;
      },
    });

    // Thêm delay 30 giây
    tl.to({}, { duration: 25 });

    // Đặt lại vị trí ban đầu và hiển thị sprite
    tl.set(carESprite, {
      x: mapSprite.width * 0.883,
      y: mapSprite.height * -0.023,
      visible: true,
      onComplete: () => {
        createCarEAnimation();
      },
    });
  }

  function initInteractiveElements(elements) {
    elements.forEach((el) => {
      // Add null check at the beginning
      if (!el.bubble) {
        console.warn('Bubble is null or undefined');
        return;
      }

      // set icon 10% bigger
      el.bubble.width = el.bubble.width * 1.1;
      el.bubble.height = el.bubble.height * 1.1;

      const tl = gsap.timeline();

      // Fade in the icon over 0.5 seconds
      tl.to(el.bubble, {
        duration: 0.5,
        alpha: 1,
        ease: 'power2.inOut',
      });

      // Keep the icon visible for 4 seconds
      tl.to(
        {},
        {
          duration: 4,
        }
      );

      // Hide scrollingSprite before others bubbles
      tl.to(scrollingSprite, {
        duration: 0.5,
        alpha: 0,
      });

      // Fade out the icon over 0.5 seconds
      tl.to(el.bubble, {
        duration: 0.5,
        alpha: 0,
        ease: 'power2.inOut',
        onComplete: () => {
          if (!el.sprite) {
            console.log('Sprite is null or undefined');
            return;
          }
          el.sprite.interactive = true;
          el.sprite.cursor = 'pointer';
        },
      });
    });
  }

  function getAllBubbleIcons(stage) {
    return stage.children.filter(
      (child) => child.name && (child.name.includes('icon') || child.name.includes('Icon'))
    );
  }
  // // Khởi tạo animation cho Cars
  function initializeCarAnimations() {
    // Log for debugging
    // console.log('Reinitializing car animations...');

    // Car A
    const newCarAWidth = mapSprite.width * 0.032;
    carASprite.width = newCarAWidth;
    carASprite.height = newCarAWidth * carARatio;
    carASprite.x = mapSprite.width * 0.6;
    carASprite.y = mapSprite.height * 0.488;
    carASprite.zIndex = 2;
    carASprite.visible = true;
    carASprite.texture = PIXI.Texture.from('./images/car-a.svg');
    carASprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;

    // Car B
    const newCarBWidth = mapSprite.width * 0.032;
    carBSprite.width = newCarBWidth;
    carBSprite.height = newCarBWidth * carBRatio;
    carBSprite.x = mapSprite.width * 0.16;
    carBSprite.y = mapSprite.height * 0.635;
    carBSprite.zIndex = 2;
    carBSprite.visible = true;
    carBSprite.texture = PIXI.Texture.from('./images/car-b.svg');
    carBSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;

    // Car C
    const newCarCWidth = mapSprite.width * 0.032;
    carCSprite.width = newCarCWidth;
    carCSprite.height = newCarCWidth * carCRatio;
    carCSprite.x = mapSprite.width * 0.382;
    carCSprite.y = mapSprite.height * 0.428;
    carCSprite.zIndex = 2;
    carCSprite.visible = true;
    carCSprite.texture = PIXI.Texture.from('./images/car-c.svg');
    carCSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;

    // Car D
    const newCarDWidth = mapSprite.width * 0.032;
    carDSprite.width = newCarDWidth;
    carDSprite.height = newCarDWidth * carDRatio;
    carDSprite.x = mapSprite.width * -0.025;
    carDSprite.y = mapSprite.height * 0.94;
    carDSprite.zIndex = 2;
    carDSprite.visible = true;
    carDSprite.texture = PIXI.Texture.from('./images/car-d.svg');
    carDSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;

    // Car E
    const newCarEWidth = mapSprite.width * 0.032;
    carESprite.width = newCarEWidth;
    carESprite.height = newCarEWidth * carERatio;
    carESprite.x = mapSprite.width * 0.883;
    carESprite.y = mapSprite.height * -0.023;
    carESprite.zIndex = 2;
    carESprite.visible = true;
    carESprite.texture = PIXI.Texture.from('./images/car-e.svg');
    carESprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;

    // Start new animations
    createCarAAnimation();
    createCarBAnimation();
    createCarCAnimation();
    createCarDAnimation();
    createCarEAnimation();
  }

  // Initial call
  initializeCarAnimations();

  let hasShowScrollingSprite = localStorage.getItem('hasShowScrollingSprite') === 'true';

  const interactiveElements = [
    {
      sprite: buildingA,
      bubble: iconA,
      popup: document.querySelector('[data-drawer-target="drawer-06"]'),
    },
    {
      sprite: buildingB,
      bubble: iconB,
      popup: document.querySelector('[data-drawer-target="drawer-02"]'),
    },
    {
      sprite: buildingC,
      bubble: iconC,
      popup: document.querySelector('[data-drawer-target="drawer-03"]'),
    },
    {
      sprite: buildingDsite,
      bubble: iconD,
      popup: document.querySelector('[data-drawer-target="drawer-10"]'),
    },
    {
      sprite: buildingE,
      bubble: iconE,
      popup: document.querySelector('[data-drawer-target="drawer-01"]'),
    },
    {
      sprite: buildingF,
      bubble: iconF,
      popup: document.querySelector('[data-drawer-target="drawer-09"]'),
    },
    {
      sprite: buildingG,
      bubble: iconG,
      popup: document.querySelector('[data-drawer-target="drawer-08"]'),
    },
    {
      sprite: buildingH,
      bubble: iconH,
      popup: document.querySelector('[data-drawer-target="drawer-14"]'),
    },
    {
      sprite: buildingJ,
      bubble: iconJ,
      link: './buildings.html',
    },
    {
      sprite: buildingR,
      bubble: iconR,
      link: './head-office.html',
    },
    {
      sprite: buildingKHitArea,
      bubble: iconK,
      popup: document.querySelector('[data-drawer-target="drawer-05"]'),
    },
    {
      sprite: buildingLHitArea,
      bubble: iconL,
      popup: document.querySelector('[data-drawer-target="drawer-13"]'),
    },
    {
      sprite: buildingQ,
      bubble: iconQ,
      popup: document.querySelector('[data-drawer-target="drawer-07"]'),
    },
    {
      sprite: buildingWHitArea,
      bubble: iconW,
      popup: document.querySelector('[data-drawer-target="drawer-04"]'),
    },
    {
      sprite: campsiteSprite,
      bubble: campsiteIcon,
      popup: document.querySelector('[data-drawer-target="drawer-12"]'),
    },
    {
      sprite: zoositeSprite,
      bubble: zoositeIcon,
      popup: document.querySelector('[data-drawer-target="drawer-11"]'),
    },
    {
      sprite: islandSprite,
      bubble: islandIcon,
      popup: document.querySelector('[data-drawer-target="drawer-17"]'),
    },
    {
      sprite: turtleSprite,
      bubble: turtleIcon,
      popup: document.querySelector('[data-drawer-target="drawer-18"]'),
    },
    {
      sprite: parkSprite,
      bubble: parkIcon,
      popup: document.querySelector('[data-drawer-target="drawer-15"]'),
    },
    {
      bubble: scrollingSprite,
    },
  ];

  // remove scrollingSprite conditionally
  if (hasShowScrollingSprite) {
    interactiveElements.splice(interactiveElements.indexOf(scrollingSprite), 1);
  } else {
    interactiveElements.push({
      bubble: scrollingSprite,
    });
  }

  initInteractiveElements(interactiveElements);

  // toggleAllBubbleIcons(bubbleIcons);

  // Refresh animations every 2mins 48 seconds
  const intervalDuration = 169000;
  setInterval(initializeCarAnimations, intervalDuration);

  // Xử lý resize với debounce

  let resizeTimeout;
  window.addEventListener('resize', () => {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }

    resizeTimeout = setTimeout(() => {
      // Sử dụng screen.width và screen.height để kiểm tra
      const isMobile = window.screen.width < window.screen.height;

      if (isMobile) {
        // Sử dụng screen.height thay vì innerHeight
        mapSprite.height = window.screen.height;
        const ratio = mapSprite.height / mapSprite.texture.height;
        mapSprite.width = mapSprite.texture.width * ratio;
      } else {
        // Desktop: sử dụng screen.width
        const ratio = mapSprite.texture.height / mapSprite.texture.width;
        mapSprite.width = window.screen.width;
        mapSprite.height = mapSprite.width * ratio;
        const viewCenter = document.querySelector('#view-center');
        // set width for view-center is screen width
        viewCenter.style.width = window.screen.width + 'px';
        // only desktop set height for view-center is screen height
        viewCenter.style.height = window.screen.height + 'px';
        // check if browser is zooming add class for body
        const bodyStage = document.querySelector('#body');
        if (window.innerWidth !== window.screen.width) {
          bodyStage.classList.add('zooming');
          bodyStage.classList.remove('hidden-scroll');
        } else {
          bodyStage.classList.remove('zooming');
          bodyStage.classList.add('hidden-scroll');
        }

        // Get all elements with tabindex="-1" and style them
        // const elements = document.querySelectorAll('[tabindex="-1"]');
        // elements.forEach((element) => {
        //   element.style.width = window.screen.width + 'px';
        //   element.style.height = window.screen.height + 'px';
        //   element.style.margin = '0 auto';
        // });

        // Ngăn pinch zoom (dùng hai ngón trên trackpad) và zoom bằng phím Ctrl/Command + scroll
        // document.addEventListener(
        //   'wheel',
        //   function (e) {
        //     // Kiểm tra xem người dùng có đang nhấn Ctrl (Windows/Linux) hoặc Command (macOS) khi dùng trackpad hay không
        //     if (e.ctrlKey || e.metaKey) {
        //       e.preventDefault();
        //     }
        //   },
        //   { passive: false }
        // );

        // Ngăn pinch zoom qua gesture trên mobile hoặc trackpad macOS
        // document.addEventListener('gesturestart', function (e) {
        //   e.preventDefault();
        // });
      }

      // Resize the renderer to match new map dimensions
      app.renderer.resize(mapSprite.width, mapSprite.height);

      // Campsite
      const campsiteWidth = mapSprite.width * 0.28;
      const campsiteHeight = mapSprite.height * 0.15;
      campsiteSprite.width = campsiteWidth;
      campsiteSprite.height = campsiteHeight;
      // Đặt vị trí
      campsiteSprite.x = mapSprite.width * 0.34;
      campsiteSprite.y = mapSprite.height * 0.13;
      // Create campsite icon
      const campsiteIconWidth = mapSprite.width * 0.075;
      const campsiteIconRatio = campsiteIcon.height / campsiteIcon.width;
      campsiteIcon.width = campsiteIconWidth;
      campsiteIcon.height = campsiteIconWidth * campsiteIconRatio;
      campsiteIcon.x = campsiteSprite.x + campsiteSprite.width * 0.55;
      campsiteIcon.y = campsiteSprite.y;
      campsiteIcon.anchor.set(0.5, 1);

      // Zoosite
      const zoositeWidth = mapSprite.width * 0.22;
      const zoositeHeight = mapSprite.height * 0.15;
      zoositeSprite.width = zoositeWidth;
      zoositeSprite.height = zoositeHeight;
      zoositeSprite.x = mapSprite.width * 0.34;
      zoositeSprite.y = mapSprite.height * 0.28;
      zoositeSprite.rotation = Math.PI / 1.2;
      // Create zoosite icon
      const zoositeIconWidth = mapSprite.width * 0.075;
      const zoositeIconRatio = zoositeIcon.height / zoositeIcon.width;
      zoositeIcon.width = zoositeIconWidth;
      zoositeIcon.height = zoositeIconWidth * zoositeIconRatio;
      zoositeIcon.x = mapSprite.width * 0.2;
      zoositeIcon.y = mapSprite.height * 0.2;
      zoositeIcon.anchor.set(0.5, -0.5);

      // Create park sprite
      const parkWidth = mapSprite.width * 0.07;
      const parkHeight = mapSprite.height * 0.14;
      parkSprite.width = parkWidth;
      parkSprite.height = parkHeight;
      parkSprite.x = mapSprite.width * 0.49;
      parkSprite.y = mapSprite.height * 0.53;
      // Create park icon
      const parkIconWidth = mapSprite.width * 0.075;
      const parkIconRatio = parkIcon.height / parkIcon.width;
      parkIcon.width = parkIconWidth;
      parkIcon.height = parkIconWidth * parkIconRatio;
      parkIcon.x = mapSprite.width * 0.38;
      parkIcon.y = mapSprite.height * 0.5;

      // Island
      const islandWidth = mapSprite.width * 0.125;
      const islandHeight = mapSprite.height * 0.23;
      islandSprite.width = islandWidth;
      islandSprite.height = islandHeight;
      islandSprite.x = mapSprite.width * 0.875;
      islandSprite.y = mapSprite.height * 0.72;
      // Create island icon
      const islandIconWidth = mapSprite.width * 0.075;
      const islandIconRatio = islandIcon.height / islandIcon.width;
      islandIcon.width = islandIconWidth;
      islandIcon.height = islandIconWidth * islandIconRatio;
      islandIcon.x = islandSprite.x + islandSprite.width * 0.5;
      islandIcon.y = islandSprite.y;
      islandIcon.anchor.set(0.5, 0);

      // Turtle Icon
      const turtleIconWidth = mapSprite.width * 0.1354;
      const turtleIconRatio = turtleIcon.height / turtleIcon.width;
      turtleIcon.width = turtleIconWidth;
      turtleIcon.height = turtleIconWidth * turtleIconRatio;
      turtleIcon.x = mapSprite.width * 0.63;
      turtleIcon.y = mapSprite.height * 0.75;

      // Train
      const newTrainWidth = mapSprite.width * 0.18;
      train.width = newTrainWidth;
      train.height = newTrainWidth * trainRatio;
      train.x = mapSprite.width * 0.96;
      train.y = mapSprite.height * -0.139;

      // Bridge
      const newBridgeWidth = mapSprite.width * 0.13386;
      bridge.width = newBridgeWidth;
      bridge.height = newBridgeWidth * bridgeRatio;
      bridge.x = mapSprite.width * 0.0503;
      bridge.y = mapSprite.height * 0.4229;

      //wall
      const newWallWidth = mapSprite.width * 0.04987;
      wall.width = newWallWidth;
      wall.height = newWallWidth * wallRatio;
      wall.x = mapSprite.width * 0.424;
      wall.y = mapSprite.height * 0.256;

      // wall2
      const newWall2Width = mapSprite.width * 0.05917;
      wall2.width = newWall2Width;
      wall2.height = newWall2Width * wallRatio;
      wall2.x = mapSprite.width * 0.668;
      wall2.y = mapSprite.height * 0.432;

      // wall3
      const newWall3Width = mapSprite.width * 0.048125;
      wall3.width = newWall3Width;
      wall3.height = newWall3Width * wallRatio;
      wall3.x = mapSprite.width * 0.223;
      wall3.y = mapSprite.height * 0.609;

      // Building A
      const buildingAWidth = mapSprite.width * 0.17814;
      buildingA.width = buildingAWidth;
      buildingA.height = buildingAWidth * buildingARatio;
      buildingA.x = mapSprite.width * 0.706;
      buildingA.y = mapSprite.height * 0.045;
      const iconAWidth = mapSprite.width * 0.08;
      const iconARatio = iconA.height / iconA.width;
      iconA.width = iconAWidth;
      iconA.height = iconAWidth * iconARatio;
      iconA.x = buildingA.x + buildingAWidth * 0.5;
      iconA.y = buildingA.y * 0.045;
      iconA.anchor.set(0.5, -1.5);

      // Building B
      const buildingBWidth = mapSprite.width * 0.2167;
      buildingB.width = buildingBWidth;
      buildingB.height = buildingBWidth * buildingBRatio;
      buildingB.x = mapSprite.width * 0.485;
      buildingB.y = mapSprite.height * 0.087;
      const iconBWidth = mapSprite.width * 0.075;
      const iconBRatio = iconB.height / iconB.width;
      iconB.width = iconBWidth;
      iconB.height = iconBWidth * iconBRatio;
      iconB.x = buildingB.x + buildingBWidth * 0.5;
      iconB.y = buildingB.y;
      iconB.anchor.set(0.5, -1.2);

      // Building C
      const buildingCWidth = mapSprite.width * 0.11979;
      buildingC.width = buildingCWidth;
      buildingC.height = buildingCWidth * buildingCRatio;
      buildingC.x = mapSprite.width * 0.387;
      buildingC.y = mapSprite.height * 0.22;
      const iconCWidth = mapSprite.width * 0.088;
      const iconCRatio = iconC.height / iconC.width;
      iconC.width = iconCWidth;
      iconC.height = iconCWidth * iconCRatio;
      iconC.x = buildingC.x + buildingCWidth * 0.5;
      iconC.y = buildingC.y;
      iconC.anchor.set(0.5, -0.5);

      // Building D
      const buildingDWidth = mapSprite.width * 0.1903;
      buildingD.width = buildingDWidth;
      buildingD.height = buildingDWidth * buildingDRatio;
      buildingD.x = mapSprite.width * 0.202;
      buildingD.y = mapSprite.height * 0.3334;
      // BuildingDsite
      const buildingDsiteWidth = mapSprite.width * 0.15;
      const buildingDsiteHeight = mapSprite.height * 0.1;
      buildingDsite.width = buildingDsiteWidth;
      buildingDsite.height = buildingDsiteHeight;
      buildingDsite.x = mapSprite.width * 0.39;
      buildingDsite.y = mapSprite.height * 0.41;
      const iconDWidth = mapSprite.width * 0.075;
      const iconDRatio = iconD.height / iconD.width;
      iconD.width = iconDWidth;
      iconD.height = iconDWidth * iconDRatio;
      iconD.x = buildingD.x + buildingD.width * 0.5;
      iconD.y = buildingD.y;
      iconD.anchor.set(0.5, -1);

      // Building E
      const buildingEWidth = mapSprite.width * 0.153125;
      buildingE.width = buildingEWidth;
      buildingE.height = buildingEWidth * buildingERatio;
      buildingE.x = mapSprite.width * 0.582;
      buildingE.y = mapSprite.height * 0.439;
      const iconEWidth = mapSprite.width * 0.075;
      const iconERatio = iconE.height / iconE.width;
      iconE.width = iconEWidth;
      iconE.height = iconEWidth * iconERatio;
      iconE.x = buildingE.x + buildingE.width * 0.5;
      iconE.y = buildingE.y;
      iconE.anchor.set(0.5, -0.5);

      // Building F
      const buildingFWidth = mapSprite.width * 0.0651;
      buildingF.width = buildingFWidth;
      buildingF.height = buildingFWidth * buildingFRatio;
      buildingF.x = mapSprite.width * 0.21;
      buildingF.y = mapSprite.height * 0.474;
      const iconFWidth = mapSprite.width * 0.075;
      const iconFRatio = iconF.height / iconF.width;
      iconF.width = iconFWidth;
      iconF.height = iconFWidth * iconFRatio;
      iconF.x = buildingF.x + buildingF.width * 0.5;
      iconF.y = buildingF.y;
      iconF.anchor.set(0.5, 0);

      // Building G
      const buildingGWidth = mapSprite.width * 0.134848;
      buildingG.width = buildingGWidth;
      buildingG.height = buildingGWidth * buildingGRatio;
      // Đặt vị trí cho building G
      buildingG.x = mapSprite.width * 0.051;
      buildingG.y = mapSprite.height * 0.518;
      const iconGWidth = mapSprite.width * 0.075;
      const iconGRatio = iconG.height / iconG.width;
      iconG.width = iconGWidth;
      iconG.height = iconGWidth * iconGRatio;
      iconG.x = buildingG.x + buildingG.width * 0.5;
      iconG.y = buildingG.y;
      iconG.anchor.set(0.5, -0.5);

      // Building H
      const buildingHWidth = mapSprite.width * 0.1167;
      buildingH.width = buildingHWidth;
      buildingH.height = buildingHWidth * buildingHRatio;
      buildingH.x = mapSprite.width * 0.095;
      buildingH.y = mapSprite.height * 0.644;
      const iconHWidth = mapSprite.width * 0.0828;
      const iconHRatio = iconH.height / iconH.width;
      iconH.width = iconHWidth;
      iconH.height = iconHWidth * iconHRatio;
      iconH.x = buildingH.x + buildingH.width * 0.5;
      iconH.y = buildingH.y;
      iconH.anchor.set(0.5, -0.5);

      // Construction
      const newConstructionWidth = mapSprite.width * 0.18928;
      construction.width = newConstructionWidth;
      construction.height = newConstructionWidth * constructionRatio;
      construction.x = mapSprite.width * 0.642;
      construction.y = mapSprite.height * 0.257;

      // Building J
      const buildingJWidth = mapSprite.width * 0.0459;
      buildingJ.width = buildingJWidth;
      buildingJ.height = buildingJWidth * buildingJRatio;
      buildingJ.x = mapSprite.width * 0.62;
      buildingJ.y = mapSprite.height * 0.3;
      const iconJWidth = mapSprite.width * 0.0604;
      const iconJRatio = iconJ.height / iconJ.width;
      iconJ.width = iconJWidth;
      iconJ.height = iconJWidth * iconJRatio;
      iconJ.x = buildingJ.x + buildingJ.width * 0.5;
      iconJ.y = buildingJ.y;
      iconJ.anchor.set(0.5, 0.4);

      // Building K
      const buildingKWidth = mapSprite.width * 0.11458;
      buildingK.width = buildingKWidth;
      buildingK.height = buildingKWidth * buildingKRatio;
      buildingK.x = mapSprite.width * 0.73;
      buildingK.y = mapSprite.height * 0.325;
      const iconKWidth = mapSprite.width * 0.075;
      const iconKRatio = iconK.height / iconK.width;
      iconK.width = iconKWidth;
      iconK.height = iconKWidth * iconKRatio;
      iconK.x = buildingK.x + buildingK.width * 0.5;
      iconK.y = buildingK.y;
      iconK.anchor.set(0.5, -1);
      //buildingKHitArea
      buildingKHitArea.width = buildingKWidth * 1.5;
      buildingKHitArea.height = buildingK.height * 0.8;
      buildingKHitArea.x = mapSprite.width * 0.8;
      buildingKHitArea.y = mapSprite.height * 0.33;

      // Building L
      const buildingLWidth = mapSprite.width * 0.11177;
      buildingL.width = buildingLWidth;
      buildingL.height = buildingLWidth * buildingLRatio;
      buildingL.x = mapSprite.width * 0.47;
      buildingL.y = mapSprite.height * 0.568;
      const iconLWidth = mapSprite.width * 0.075;
      const iconLRatio = iconL.height / iconL.width;
      iconL.width = iconLWidth;
      iconL.height = iconLWidth * iconLRatio;
      iconL.x = buildingL.x + buildingL.width * 0.5;
      iconL.y = buildingL.y;
      iconL.anchor.set(0.5, -0.5);
      //buildingLHitArea
      buildingLHitArea.width = buildingLWidth * 1.65;
      buildingLHitArea.height = buildingL.height * 1;
      buildingLHitArea.x = mapSprite.width * 0.38;
      buildingLHitArea.y = mapSprite.height * 0.72;

      // Building Q
      const buildingQWidth = mapSprite.width * 0.1068;
      buildingQ.width = buildingQWidth;
      buildingQ.height = buildingQWidth * buildingQRatio;
      buildingQ.x = mapSprite.width * 0.286;
      buildingQ.y = mapSprite.height * 0.536;
      const iconQWidth = mapSprite.width * 0.088;
      const iconQRatio = iconQ.height / iconQ.width;
      iconQ.width = iconQWidth;
      iconQ.height = iconQWidth * iconQRatio;
      iconQ.x = buildingQ.x + buildingQ.width * 0.5;
      iconQ.y = buildingQ.y;
      iconQ.anchor.set(0.5, -0.5);

      // Building R
      const buildingRWidth = mapSprite.width * 0.105729;
      buildingR.width = buildingRWidth;
      buildingR.height = buildingRWidth * buildingRRatio;
      buildingR.x = mapSprite.width * 0.528;
      buildingR.y = mapSprite.height * 0.325;
      const iconRWidth = mapSprite.width * 0.05;
      const iconRRatio = iconR.height / iconR.width;
      iconR.width = iconRWidth;
      iconR.height = iconRWidth * iconRRatio;
      iconR.x = buildingR.x + buildingR.width * 0.55;
      iconR.y = buildingR.y;
      iconR.anchor.set(0.5, 0.3);

      // Scrolling
      const scrollingSpriteWidth = mapSprite.width * 0.23475;
      const scrollingSpriteRatio = scrollingSprite.height / scrollingSprite.width;
      scrollingSprite.width = scrollingSpriteWidth;
      scrollingSprite.height = scrollingSpriteWidth * scrollingSpriteRatio;
      scrollingSprite.x = mapSprite.width * 0.5;
      scrollingSprite.y = mapSprite.height * 0.35;

      // Tree 01
      const newTree01Width = mapSprite.width * 0.03063;
      tree01.width = newTree01Width;
      tree01.height = newTree01Width * tree01Ratio;
      tree01.x = mapSprite.width * 0.42;
      tree01.y = mapSprite.height * 0.666;

      // Tree R
      const newTreeRWidth = mapSprite.width * 0.01768;
      treeR.width = newTreeRWidth;
      treeR.height = newTreeRWidth * treeRRatio;
      treeR.x = mapSprite.width * 0.492;
      treeR.y = mapSprite.height * 0.425;

      // Tree Q
      const newTreeQWidth = mapSprite.width * 0.01768;
      treeQ.width = newTreeQWidth;
      treeQ.height = newTreeQWidth * treeQRatio;
      treeQ.x = mapSprite.width * 0.346;
      treeQ.y = mapSprite.height * 0.639;

      // Tree Q2
      const newTreeQ2Width = mapSprite.width * 0.01768;
      treeQ2.width = newTreeQ2Width;
      treeQ2.height = newTreeQ2Width * treeQRatio;
      treeQ2.x = mapSprite.width * 0.269;
      treeQ2.y = mapSprite.height * 0.583;

      // Tree H
      const newTreeHWidth = mapSprite.width * 0.01768;
      treeH.width = newTreeHWidth;
      treeH.height = newTreeHWidth * treeHRatio;
      treeH.x = mapSprite.width * 0.207;
      treeH.y = mapSprite.height * 0.628;

      // Board Q
      const newBoardQWidth = mapSprite.width * 0.0131;
      boardQ.width = newBoardQWidth;
      boardQ.height = newBoardQWidth * boardQRatio;
      boardQ.x = mapSprite.width * 0.372;
      boardQ.y = mapSprite.height * 0.635;

      // Board D
      const newBoardDWidth = mapSprite.width * 0.0054;
      boardD.width = newBoardDWidth;
      boardD.height = newBoardDWidth * boardDRatio;
      boardD.x = mapSprite.width * 0.3867;
      boardD.y = mapSprite.height * 0.39;

      // Building W
      const buildingWWidth = mapSprite.width * 0.0921;
      buildingW.width = buildingWWidth;
      buildingW.height = buildingWWidth * buildingWRatio;
      buildingW.x = mapSprite.width * 0.837;
      buildingW.y = mapSprite.height * 0.292;
      const iconWWidth = mapSprite.width * 0.075;
      const iconWRatio = iconW.height / iconW.width;
      iconW.width = iconWWidth;
      iconW.height = iconWWidth * iconWRatio;
      iconW.x = buildingW.x + buildingWWidth * 0.5;
      iconW.y = buildingW.y;
      iconW.anchor.set(0.5, -0.5);
      //buildingWHitArea
      buildingWHitArea.width = buildingWWidth * 1.4;
      buildingWHitArea.height = buildingW.height * 1.1;
      buildingWHitArea.x = mapSprite.width * 0.905;
      buildingWHitArea.y = mapSprite.height * 0.275;

      // Truck W
      const newTruckWWidth = mapSprite.width * 0.04732;
      truckW.width = newTruckWWidth;
      truckW.height = newTruckWWidth * truckWRatio;
      truckW.x = mapSprite.width * 0.828;
      truckW.y = mapSprite.height * 0.375;

      // Pulley W
      const newPulleyWWidth = mapSprite.width * 0.04977;
      pulleyW.width = newPulleyWWidth;
      pulleyW.height = newPulleyWWidth * pulleyWRatio;
      pulleyW.x = mapSprite.width * 0.918;
      pulleyW.y = mapSprite.height * 0.3595;

      // Car A
      const newCarAWidth = mapSprite.width * 0.032;
      carASprite.width = newCarAWidth;
      carASprite.height = newCarAWidth * carARatio;
      carASprite.x = mapSprite.width * 0.6;
      carASprite.y = mapSprite.height * 0.488;
      carASprite.texture = PIXI.Texture.from('./images/car-a.svg');
      carASprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;

      // Car B
      const newCarBWidth = mapSprite.width * 0.032;
      carBSprite.width = newCarBWidth;
      carBSprite.height = newCarBWidth * carBRatio;
      carBSprite.x = mapSprite.width * 0.16;
      carBSprite.y = mapSprite.height * 0.635;
      carBSprite.texture = PIXI.Texture.from('./images/car-b.svg');
      carBSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;

      // Car C
      const newCarCWidth = mapSprite.width * 0.032;
      carCSprite.width = newCarCWidth;
      carCSprite.height = newCarCWidth * carCRatio;
      carCSprite.x = mapSprite.width * 0.382;
      carCSprite.y = mapSprite.height * 0.428;
      carCSprite.texture = PIXI.Texture.from('./images/car-c.svg');
      carCSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;

      // Car D
      const newCarDWidth = mapSprite.width * 0.032;
      carDSprite.width = newCarDWidth;
      carDSprite.height = newCarDWidth * carDRatio;
      carDSprite.x = mapSprite.width * -0.025;
      carDSprite.y = mapSprite.height * 0.94;
      carDSprite.texture = PIXI.Texture.from('./images/car-d.svg');
      carDSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;

      // Car E
      const newCarEWidth = mapSprite.width * 0.032;
      carESprite.width = newCarEWidth;
      carESprite.height = newCarEWidth * carERatio;
      carESprite.x = mapSprite.width * 0.883;
      carESprite.y = mapSprite.height * -0.023;
      carESprite.texture = PIXI.Texture.from('./images/car-e.svg');
      carESprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;

      // Fire
      const newFireDesiredWidth = mapSprite.width * 0.023;
      const originalWidthFire = fireSprite.textures[0].orig.width;
      const scaleFire = newFireDesiredWidth / originalWidthFire;
      fireSprite.scale.set(scaleFire);
      fireSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      fireSprite.x = mapSprite.width * 0.454;
      fireSprite.y = mapSprite.height * 0.118;

      // Turtle
      const newTurtleDesiredWidth = mapSprite.width * 0.025;
      const turtleOriginalWidth = turtleSprite.textures[0].orig.width;
      const turtleScale = newTurtleDesiredWidth / turtleOriginalWidth;
      turtleSprite.scale.set(turtleScale);
      turtleSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      turtleSprite.x = mapSprite.width * 0.63;
      turtleSprite.y = mapSprite.height * 0.93;

      // Human 01
      const desiredWidth = mapSprite.width * 0.007; // 0.7%
      const originalWidth = humanSprite.textures[0].orig.width; // Lấy width gốc từ texture đầu tiên
      const scale = desiredWidth / originalWidth;
      // Áp dụng scale
      humanSprite.scale.set(scale);
      humanSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      humanSprite.x = mapSprite.width * 0.19;
      humanSprite.y = mapSprite.height * 0.83;
      // Human 02
      const desiredWidth02 = mapSprite.width * 0.007; // 0.7%
      const originalWidth02 = humanSprite02.textures[0].orig.width; // Lấy width gốc từ texture đầu tiên
      const scale02 = desiredWidth02 / originalWidth02;
      // Áp dụng scale
      humanSprite02.scale.set(scale02);
      humanSprite02.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      humanSprite02.x = mapSprite.width * 0.9;
      humanSprite02.y = mapSprite.height * 0.3;
      // Human 03
      const desiredWidth03 = mapSprite.width * 0.0055; // 0.7%
      const originalWidth03 = humanSprite03.textures[0].orig.width; // Lấy width gốc từ texture đầu tiên
      const scale03 = desiredWidth03 / originalWidth03;
      // Áp dụng scale
      humanSprite03.scale.set(scale03);
      humanSprite03.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      humanSprite03.x = mapSprite.width * 0.445;
      humanSprite03.y = mapSprite.height * 0.39;
      // Human 04
      const desiredWidth04 = mapSprite.width * 0.0058; // 0.7%
      const originalWidth04 = humanSprite04.textures[0].orig.width; // Lấy width gốc từ texture đầu tiên
      const scale04 = desiredWidth04 / originalWidth04;
      // Áp dụng scale
      humanSprite04.scale.set(scale04);
      humanSprite04.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      humanSprite04.x = mapSprite.width * 0.659;
      humanSprite04.y = mapSprite.height * 0.235;

      // Boy blue
      const desiredWidthBoyBlue = mapSprite.width * 0.007;
      const originalWidthBoyBlue = boyBlueSprite.textures[0].orig.width;
      const scaleBoyBlue = desiredWidthBoyBlue / originalWidthBoyBlue;
      boyBlueSprite.scale.set(scaleBoyBlue);
      boyBlueSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      boyBlueSprite.x = mapSprite.width * 0.247;
      boyBlueSprite.y = mapSprite.height * 0.644;

      // Boy pink
      const desiredWidthBoyPink = mapSprite.width * 0.0068;
      const originalWidthBoyPink = boyPinkSprite.textures[0].orig.width;
      const scaleBoyPink = desiredWidthBoyPink / originalWidthBoyPink;
      boyPinkSprite.scale.set(scaleBoyPink);
      boyPinkSprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      boyPinkSprite.x = mapSprite.width * 0.31;
      boyPinkSprite.y = mapSprite.height * 0.65;

      // Red ball
      redBall.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
      redBall.zIndex = 2;
      redBall.width = mapSprite.width * 0.003;
      redBall.height = mapSprite.width * 0.003;
      // Position red ball
      redBall.x = mapSprite.width * 0.251;
      redBall.y = mapSprite.height * 0.655;

      // Tạo lại animation với kích thước mới
      createTrainAnimation();
      createCarAAnimation();
      createCarBAnimation();
      createCarCAnimation();
      createCarDAnimation();
      createCarEAnimation();
      createHuman01Animation();
      createHuman02Animation();
      createHuman03Animation();
      createHuman04Animation();
      createTurtleAnimation();
      createBoyBlueAnimation();
      createBoyPinkAnimation();
      createRedBallAnimation();
    }, 200);
  });
}

document.addEventListener('DOMContentLoaded', initPixiApp);

/*
 * Các hàm Utils
 */
// Kiểm tra 2 sprite có va chạm nhau không
function checkCollision(sprite1, sprite2) {
  const bounds1 = sprite1.getBounds();
  const bounds2 = sprite2.getBounds();

  return (
    bounds1.x < bounds2.x + bounds2.width &&
    bounds1.x + bounds1.width > bounds2.x &&
    bounds1.y < bounds2.y + bounds2.height &&
    bounds1.y + bounds1.height > bounds2.y
  );
}

// Tính toán điểm cuối dựa trên điểm bắt đầu, hướng (độ) và khoảng cách
// calculateEndPoint(0, 0, 90, 200) => { x: 0, y: 200 }
// calculateEndPoint(0, 0, 45, 200) => { x: 141, y: 141 }
function calculateEndPoint(startX, startY, directionDegrees, distance) {
  const directionRadians = directionDegrees * (Math.PI / 180); // Chuyển đổi độ sang radian
  const deltaX = distance * Math.cos(directionRadians);
  const deltaY = distance * Math.sin(directionRadians);
  return {
    x: Math.round((startX + deltaX) * 1e10) / 1e10, // làm tròn để tránh vấn đề với số thập phân
    y: Math.round((startY + deltaY) * 1e10) / 1e10, // làm tròn để tránh vấn đề với số thập phân
  };
}
