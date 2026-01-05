import { useEffect, useRef } from 'react';

export function MeshGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    // Modern gradient colors (lighter blues, teals, oranges, minimal purple)
    const blobs = [
      { 
        color: { r: 147, g: 197, b: 253 }, // Light blue
        x: 0.2,
        y: 0.3,
        speed: 0.8,
        size: 0.5
      },
      { 
        color: { r: 125, g: 211, b: 252 }, // Sky blue
        x: 0.7,
        y: 0.2,
        speed: 1.0,
        size: 0.45
      },
      { 
        color: { r: 96, g: 165, b: 250 }, // Soft blue
        x: 0.5,
        y: 0.5,
        speed: 0.9,
        size: 0.4
      },
      { 
        color: { r: 34, g: 211, b: 238 }, // Cyan/teal
        x: 0.8,
        y: 0.7,
        speed: 0.85,
        size: 0.45
      },
      { 
        color: { r: 251, g: 191, b: 36 }, // Warm yellow-orange
        x: 0.3,
        y: 0.8,
        speed: 0.75,
        size: 0.35
      }
    ];

    const animate = () => {
      time += 0.0012; // Faster color transitions

      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      // Clear canvas
      ctx.clearRect(0, 0, w, h);

      // Draw each blob
      blobs.forEach((blob, index) => {
        const offsetX = Math.sin(time * blob.speed + index) * 0.15;
        const offsetY = Math.cos(time * blob.speed * 0.8 + index) * 0.15;
        
        const x = w * (blob.x + offsetX);
        const y = h * (blob.y + offsetY);
        const radius = Math.max(w, h) * blob.size;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        
        gradient.addColorStop(0, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0.8)`);
        gradient.addColorStop(0.5, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0.4)`);
        gradient.addColorStop(1, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ filter: 'blur(60px)' }}
    />
  );
}