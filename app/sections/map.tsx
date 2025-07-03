"use client";

import { useEffect, useRef, useState } from "react";
import * as PIXI from "pixi.js";

export default function Map() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const appRef = useRef<PIXI.Application | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    let app: PIXI.Application;
    (async () => {
      if (!containerRef.current) return;
      app = new PIXI.Application();
      await app.init({
        backgroundAlpha: 0,
        antialias: true,
      });
      appRef.current = app;
      containerRef.current.appendChild(app.canvas);

      // Load texture using Assets.load
      const texture = await PIXI.Assets.load("/assets/map.webp");
      const mapSprite = new PIXI.Sprite(texture);

      // Set fixed size for mapSprite and renderer (no resize after mount)
      const isMobileDefault = window.screen.width < window.screen.height;
      let defaultWidth, defaultHeight;
      if (isMobileDefault) {
        defaultHeight = window.innerHeight;
        const ratio = defaultHeight / texture.height;
        defaultWidth = texture.width * ratio;
      } else {
        defaultWidth = window.innerWidth;
        const ratio = defaultWidth / texture.width;
        defaultHeight = texture.height * ratio;
      }
      mapSprite.width = defaultWidth;
      mapSprite.height = defaultHeight;
      mapSprite.x = 0;
      mapSprite.y = 0;
      app.renderer.resize(defaultWidth, defaultHeight);

      app.stage.addChild(mapSprite);
      mapSprite.zIndex = 0;
    })();

    return () => {
      if (app) app.destroy(true, { children: true });
      appRef.current = null;
    };
  }, [mounted]);

  return <div ref={containerRef} className='canvas-container' />;
}
