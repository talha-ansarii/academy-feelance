"use client";

import { useCallback, useRef } from "react";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { cn } from "@/lib/utils";

function calculateCardRotation({
  currentX,
  currentY,
  centerX,
  centerY,
  maxRotationX,
  maxRotationY,
}: {
  currentX: number;
  currentY: number;
  centerX: number;
  centerY: number;
  maxRotationX: number;
  maxRotationY: number;
}) {
  const deltaX = currentX - centerX;
  const deltaY = currentY - centerY;
  const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
  const rotationFactor = distance / maxDistance;
  const rotationY = ((-deltaX / centerX) * maxRotationY * rotationFactor).toFixed(2);
  const rotationX = ((deltaY / centerY) * maxRotationX * rotationFactor).toFixed(2);
  return { rotationX, rotationY };
}

export function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const resetRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const update = useCallback(({ x, y }: { x: number; y: number }) => {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    const { rotationX, rotationY } = calculateCardRotation({
      centerX: width / 2,
      centerY: height / 2,
      currentX: x,
      currentY: y,
      maxRotationX: 4,
      maxRotationY: 6,
    });
    containerRef.current.style.setProperty("--x", `${rotationX}deg`);
    containerRef.current.style.setProperty("--y", `${rotationY}deg`);
  }, []);

  useMousePosition(containerRef, update);

  return (
    <div
      ref={containerRef}
      className={cn(
        "clean-card p-8 rounded-2xl bg-white shadow-sm border border-transparent",
        "hover:shadow-xl hover:border-primary/10 transition-all ease-linear will-change-transform relative z-0 overflow-hidden"
      )}
      style={{
        transform: "perspective(400px) rotateX(var(--x, 0deg)) rotateY(var(--y, 0deg))",
        transitionDuration: "50ms",
      }}
      onMouseEnter={() => {
        resetRef.current = setTimeout(() => {
          if (!containerRef.current) return;
          containerRef.current.style.transitionDuration = "0ms";
        }, 300);
      }}
      onMouseLeave={() => {
        if (resetRef.current) clearTimeout(resetRef.current);
        if (!containerRef.current) return;
        containerRef.current.style.transitionDuration = "400ms";
        containerRef.current.style.setProperty("--x", "0deg");
        containerRef.current.style.setProperty("--y", "0deg");
      }}
    >
      <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-6 pointer-events-none">
        <span className="material-symbols-outlined text-primary text-2xl">
          {icon}
        </span>
      </div>
      <h4 className="font-bold text-xl text-on-background mb-3 pointer-events-none">
        {title}
      </h4>
      <p className="text-on-surface-variant text-sm leading-relaxed pointer-events-none">
        {description}
      </p>
    </div>
  );
}
