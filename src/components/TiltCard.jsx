import { useRef, useState } from "react";

export default function TiltCard({ children, className = "", maxTilt = 12 }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;   // cursor position inside card (X)
    const y = e.clientY - rect.top;    // cursor position inside card (Y)

    // Convert to -0.5 → 0.5 range (center = 0)
    const xPercent = x / rect.width - 0.5;
    const yPercent = y / rect.height - 0.5;

    // Tilt: rotateY controlled by X, rotateX controlled by Y (inverted)
    const rotateY = xPercent * maxTilt * 2;
    const rotateX = -yPercent * maxTilt * 2;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`
    );
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: "transform 0.15s ease-out",
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </div>
  );
}