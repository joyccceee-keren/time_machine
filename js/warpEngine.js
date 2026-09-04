/**
 * CHRONOS-X QUANTUM TIME MACHINE
 * Dynamic Canvas Warp Tunnel & Temporal Vortex Engine
 */

(function() {
  let canvas, ctx;
  let width, height, centerX, centerY;
  let stars = [];
  const STAR_COUNT = 350;
  
  let currentSpeed = 1.2;
  let targetSpeed = 1.2;
  let isWarping = false;
  let warpFactor = 0; // 0 (idle) to 1 (full warp)
  let hueRotation = 190; // Default cyan/blue

  // Star / Tachyon particle class
  class Star {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = (Math.random() - 0.5) * width * 2;
      this.y = (Math.random() - 0.5) * height * 2;
      this.z = initial ? Math.random() * 1000 : 1000;
      this.prevZ = this.z;
      this.size = Math.random() * 1.5 + 0.8;
      this.color = this.getRandomColor();
    }

    getRandomColor() {
      const colors = [
        "rgba(0, 240, 255, 0.9)",
        "rgba(189, 0, 255, 0.85)",
        "rgba(255, 170, 0, 0.8)",
        "rgba(255, 255, 255, 0.95)",
        "rgba(57, 255, 20, 0.75)"
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    update(speed) {
      this.prevZ = this.z;
      this.z -= speed;

      if (this.z <= 1) {
        this.reset();
      }
    }

    draw() {
      const k = 250; // Focal length
      const px = centerX + (this.x / this.z) * k;
      const py = centerY + (this.y / this.z) * k;

      if (px < 0 || px > width || py < 0 || py > height) {
        return;
      }

      const prevPx = centerX + (this.x / this.prevZ) * k;
      const prevPy = centerY + (this.y / this.prevZ) * k;

      const alpha = Math.min(1, (1000 - this.z) / 400);
      const rad = Math.max(0.5, (1 - this.z / 1000) * this.size * (isWarping ? 2.2 : 1.2));

      ctx.save();
      if (isWarping && warpFactor > 0.2) {
        // Hyperspace streak lines
        ctx.strokeStyle = this.color;
        ctx.lineWidth = rad * 1.5;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.moveTo(prevPx, prevPy);
        ctx.lineTo(px, py);
        ctx.stroke();
      } else {
        // Point particles
        ctx.fillStyle = this.color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(px, py, rad, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
  }

  function resizeCanvas() {
    if (!canvas) return;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    centerX = width / 2;
    centerY = height / 2;
  }

  function initWarpCanvas() {
    canvas = document.getElementById("warp-canvas");
    if (!canvas) return;
    ctx = canvas.getContext("2d");

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push(new Star());
    }

    requestAnimationFrame(renderLoop);
  }

  function renderLoop() {
    // Smooth speed interpolation
    currentSpeed += (targetSpeed - currentSpeed) * 0.08;
    warpFactor += ((isWarping ? 1 : 0) - warpFactor) * 0.05;

    // Semi-transparent clear to create motion trails in hyperspace
    ctx.fillStyle = isWarping 
      ? `rgba(5, 7, 19, ${0.35 - warpFactor * 0.15})`
      : "rgba(5, 7, 19, 0.45)";
    ctx.fillRect(0, 0, width, height);

    // Draw ambient cosmic nebula glow in center
    const gradient = ctx.createRadialGradient(
      centerX, centerY, 5, 
      centerX, centerY, isWarping ? width * 0.7 : width * 0.35
    );

    if (isWarping) {
      gradient.addColorStop(0, "rgba(0, 240, 255, 0.3)");
      gradient.addColorStop(0.4, "rgba(189, 0, 255, 0.2)");
      gradient.addColorStop(0.8, "rgba(255, 42, 42, 0.1)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    } else {
      gradient.addColorStop(0, "rgba(20, 35, 70, 0.25)");
      gradient.addColorStop(0.6, "rgba(10, 15, 30, 0.1)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    }

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Update and draw star streaks
    for (let i = 0; i < stars.length; i++) {
      stars[i].update(currentSpeed);
      stars[i].draw();
    }

    // Dynamic rotation and vortex distortion if warping
    if (isWarping) {
      hueRotation = (hueRotation + 2) % 360;
    }

    requestAnimationFrame(renderLoop);
  }

  function setWarpCanvasSpeed(warpActive) {
    isWarping = warpActive;
    if (warpActive) {
      targetSpeed = 48.0; // High speed streak
    } else {
      targetSpeed = 1.2;  // Idle drift
    }
  }

  // Export to global window
  window.initWarpCanvas = initWarpCanvas;
  window.setWarpCanvasSpeed = setWarpCanvasSpeed;
})();
