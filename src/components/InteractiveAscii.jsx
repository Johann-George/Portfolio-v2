import { useRef, useEffect, useState } from 'react';

function InteractiveAscii({ imageSrc, show }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 400, height: 400 });
  const showRef = useRef(show);

  useEffect(() => {
    showRef.current = show;
  }, [show]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let cellWidthVal = 5;
    let displayWidth = 400;  // Lifted to useEffect scope for mouse scaling
    let displayHeight = 400; // Lifted to useEffect scope for mouse scaling
    
    const CHAR_RAMP = '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,"^`\'. ';
    const GLITCH_CHARS = '01#%?*+=-@$X&';

    const mouse = {
      x: null,
      y: null,
      radius: 50, // Interaction radius (50px around cursor)
      active: false
    };

    let lastTime = performance.now();
    let revealProgress = 0;

    // Load the image
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      initParticles();
      animate(performance.now());
    };

    function initParticles() {
      const imgWidth = img.width;
      const imgHeight = img.height;
      
      // Responsive display dimensions
      const containerWidth = containerRef.current?.clientWidth || 400;
      displayWidth = Math.min(containerWidth, 480);
      displayHeight = (imgHeight / imgWidth) * displayWidth;
      
      setDimensions({ width: displayWidth, height: displayHeight });
      
      const dpr = window.devicePixelRatio || 1;
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      ctx.scale(dpr, dpr);

      // Define grid columns (ASCII resolution)
      const cols = 115; 
      const rows = Math.round((imgHeight / imgWidth) * cols);
      
      const offscreenCanvas = document.createElement('canvas');
      offscreenCanvas.width = cols;
      offscreenCanvas.height = rows;
      const offCtx = offscreenCanvas.getContext('2d');
      offCtx.drawImage(img, 0, 0, cols, rows);
      
      const imgData = offCtx.getImageData(0, 0, cols, rows);
      const pixels = imgData.data;

      particles = [];
      const cellWidth = displayWidth / cols;
      const cellHeight = displayHeight / rows;
      cellWidthVal = cellWidth;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const index = (y * cols + x) * 4;
          const r = pixels[index];
          const g = pixels[index + 1];
          const b = pixels[index + 2];
          const a = pixels[index + 3];

          if (a > 50) {
            const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
            
            const contrastFactor = 1.9;
            let adjustedBrightness = 128 + contrastFactor * (brightness - 128);
            adjustedBrightness = Math.max(0, Math.min(255, adjustedBrightness));

            const originX = x * cellWidth + cellWidth / 2;
            const originY = y * cellHeight + cellHeight / 2;

            const charIndex = Math.min(
              Math.floor((adjustedBrightness / 255) * CHAR_RAMP.length),
              CHAR_RAMP.length - 1
            );
            const char = CHAR_RAMP[charIndex];

            if (char !== ' ' && adjustedBrightness < 240) {
              particles.push({
                x: originX,
                y: originY,
                char: char,
                brightness: adjustedBrightness,
                glitchTimer: 0
              });
            }
          }
        }
      }
    }

    function animate(timestamp) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const dt = (timestamp - lastTime) / 1000;
      lastTime = timestamp;

      if (showRef.current) {
        if (revealProgress < 1) {
          revealProgress = Math.min(1, revealProgress + dt * 0.85); // Takes ~1.2s to reveal fully
        }
      } else {
        revealProgress = 0;
      }

      const isDark = document.documentElement.classList.contains('dark');
      
      const fontSize = cellWidthVal * 1.35;
      ctx.font = `bold ${fontSize}px "Space Mono", monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const revealY = revealProgress * displayHeight;

      particles.forEach(p => {
        // If not revealed yet, skip drawing
        if (p.y > revealY) {
          return;
        }

        // Determine if it's in the leading reveal edge (e.g. top 45px of revealed area)
        const isRevealEdge = revealProgress < 1 && (p.y > revealY - 45);

        if (mouse.active && mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            p.glitchTimer = 20; // Glitch trail duration
          }
        }

        // Decay glitch timer
        if (p.glitchTimer > 0) {
          p.glitchTimer--;
        }

        // Determine drawing character
        let drawChar = p.char;
        const isGlitching = (p.glitchTimer > 0) || isRevealEdge;

        if (isGlitching) {
          if (isRevealEdge && Math.random() < 0.35) {
            drawChar = GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          } else if (p.glitchTimer > 0) {
            drawChar = GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          }
        }

        // Colors based on glitch state
        if (isGlitching) {
          ctx.fillStyle = isDark ? 'rgba(74, 222, 128, 0.95)' : 'rgba(21, 128, 61, 0.95)'; // green-400 / green-700
        } else {
          ctx.fillStyle = isDark ? 'rgba(228, 228, 231, 0.85)' : 'rgba(39, 39, 42, 0.85)'; // zinc-200 / zinc-800
        }

        ctx.fillText(drawChar, p.x, p.y);
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      // Calculate scaling factor between display dimensions and visible bounding box dimensions
      const scaleX = displayWidth / rect.width;
      const scaleY = displayHeight / rect.height;
      
      mouse.x = (e.clientX - rect.left) * scaleX;
      mouse.y = (e.clientY - rect.top) * scaleY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('mouseenter', () => { mouse.active = true; });

    const handleResize = () => {
      initParticles();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [imageSrc]);

  return (
    <div ref={containerRef} className="w-full flex justify-center items-center">
      <canvas 
        ref={canvasRef} 
        style={{ width: `${dimensions.width}px`, height: `${dimensions.height}px` }}
        className="max-w-full select-none cursor-pointer"
      />
    </div>
  );
}

export default InteractiveAscii;
