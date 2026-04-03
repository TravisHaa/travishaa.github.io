import { MeshGradient as ShaderMeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

export function MeshGradient() {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 w-full h-full">
      <ShaderMeshGradient
        width={dimensions.width}
        height={dimensions.height}
        colors={["#93c5fd", "#7dd3fc", "#60a5fa", "#22d3ee", "#fbbf24", "#b5d9d9"]}
        distortion={0.8}
        swirl={0.6}
        grainMixer={0}
        grainOverlay={0}
        speed={0.42}
        offsetX={0.08}
      />
    </div>
  );
}
