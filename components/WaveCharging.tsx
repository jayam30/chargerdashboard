
// "use client";
// import React, { useState, useEffect, useMemo } from "react";
// import { Inter } from "next/font/google";
// import { Zap } from "lucide-react";
// const interThin = Inter({
//   subsets: ["latin"],
//   weight: ["200"],
//   variable: "--font-inter",
// });


// interface WaveChargingProps {
//   percentage?: number;
//   waveColor?: string;
//   backgroundColor?: string;
//   size?: number;
// }

// const WaveCharging = ({
//   percentage = 0,
//   waveColor = "rgba(0, 123, 255, 0.7)",
//   backgroundColor = "rgba(220, 220, 220, 0.2)",
//   size = 160
// }: WaveChargingProps) => {
//   const [phase, setPhase] = useState(0);
//   const clampedPercentage = Math.min(100, Math.max(0, percentage));


//   // Smoother animation using requestAnimationFrame
//   useEffect(() => {
//     let animationFrameId: number;
//     let lastTime = 0;
//     const fps = 30; // Target 30fps for smoother animation
//     const interval = 1000 / fps;
   
   


//     const animate = (time: number) => {
//       if (time - lastTime > interval) {
//         setPhase((prev) => (prev + 2) % 360); // Slightly faster phase change
//         lastTime = time;
//       }
//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animationFrameId = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationFrameId);
//   }, []);

//   // Dynamic wave amplitude based on charging percentage
//   const waveAmplitude = useMemo(() => {
//     return clampedPercentage > 90 ? 1 : clampedPercentage > 50 ? 2 : 3;
//   }, [clampedPercentage]);

//   // Memoized wave path for better performance
//   const wavePath = useMemo(() => {
//     const yPos = 100 - clampedPercentage;
//     return `M0 ${yPos}
//             Q20 ${yPos + Math.sin((phase * Math.PI) / 180) * waveAmplitude}
//             40 ${yPos}
//             T100 ${yPos}
//             V100 H0 Z`;
//   }, [phase, clampedPercentage, waveAmplitude]);

//   return (
//     <div
//       className="relative flex items-center justify-center rounded-full overflow-hidden"
//       style={{
//         width: `${size}px`,
//         height: `${size}px`,
//         backgroundColor,
//         boxShadow: `0px 0px 15px ${waveColor}`,
//       }}
//       role="progressbar"
//       aria-valuenow={clampedPercentage}
//       aria-valuemin={0}
//       aria-valuemax={100}
//     >
//       <svg
//         className="absolute inset-0 w-full h-full"
//         viewBox="0 0 100 100"
//         preserveAspectRatio="none"
//         aria-hidden="true"
//       >
//         <path
//           fill={waveColor}
//           d={wavePath}
//         />
//       </svg>

//       <span
//         className="text-white text-4xl font-bold relative z-10"
//         style={{
//           textShadow: "0 0 8px rgba(0, 0, 0, 0.5)",
//         }}
//         aria-hidden="true"
//       >
//         {clampedPercentage}%
//       </span>
//     </div>
//   );
// };

// export default WaveCharging;
// 'use client';

// import { useEffect, useRef } from 'react';

// interface WaveChargingProps {
//   safePercentag: number;
// }

// function getWaveGradient(ctx: CanvasRenderingContext2D, width: number, height: number, percent: number): CanvasGradient {
//   const gradient = ctx.createLinearGradient(0, height, 0, 0);

//   if (percent < 25) {
//     gradient.addColorStop(0, '#ff3b30'); // red
//     gradient.addColorStop(1, '#ff9500'); // orange
//   } else if (percent < 50) {
//     gradient.addColorStop(0, '#ffcc00'); // yellow
//     gradient.addColorStop(1, '#34c759'); // green
//   } else if (percent < 75) {
//     gradient.addColorStop(0, '#34c759'); // green
//     gradient.addColorStop(1, '#0a84ff'); // blue
//   } else {
//     gradient.addColorStop(0, '#0a84ff'); // blue
//     gradient.addColorStop(1, '#5e5ce6'); // violet
//   }

//   return gradient;
// }

// export default function WaveCharging({ safePercentag }: WaveChargingProps) {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     const width = canvas.width;
//     const height = canvas.height;

//     const waveHeight = 12;
//     const waveLength = 80;
//     const waveSpeed = 0.08;
//     const secondaryWaveOffset = 15;

//     let offset = 0;
//     let animationFrameId: number;

//     const drawWave = () => {
//       ctx.clearRect(0, 0, width, height);

//       // Glassy background
//       ctx.beginPath();
//       ctx.arc(width / 2, height / 2, width / 2, 0, Math.PI * 2);
//       ctx.closePath();
//       ctx.fillStyle = 'rgba(15, 23, 42, 0.6)'; // Slate with alpha
//       ctx.fill();

//       // Clip the circle
//       ctx.save();
//       ctx.beginPath();
//       ctx.arc(width / 2, height / 2, width / 2, 0, Math.PI * 2);
//       ctx.clip();

//       const waveY = height * (1 - safePercentag / 100);

//       // Dynamic neon gradient
//       const gradient = getWaveGradient(ctx, width, height, safePercentag);
//       ctx.fillStyle = gradient;
//       ctx.shadowColor = gradient as any;
//       ctx.shadowBlur = 25;

//       // Main wave
//       ctx.beginPath();
//       for (let x = 0; x <= width; x++) {
//         const y = waveY + Math.sin((x + offset) / waveLength) * waveHeight;
//         ctx.lineTo(x, y);
//       }
//       ctx.lineTo(width, height);
//       ctx.lineTo(0, height);
//       ctx.closePath();
//       ctx.fill();

//       // Second wave layer (lighter & transparent)
//       ctx.globalAlpha = 0.4;
//       ctx.beginPath();
//       for (let x = 0; x <= width; x++) {
//         const y = waveY + Math.sin((x + offset + secondaryWaveOffset) / waveLength) * (waveHeight - 4);
//         ctx.lineTo(x, y);
//       }
//       ctx.lineTo(width, height);
//       ctx.lineTo(0, height);
//       ctx.closePath();
//       ctx.fill();
//       ctx.globalAlpha = 1;

//       ctx.restore();

//       offset += waveSpeed * waveLength;
//       animationFrameId = requestAnimationFrame(drawWave);
//     };

//     drawWave();
//     return () => cancelAnimationFrame(animationFrameId);
//   }, [safePercentag]);

//   return (
//     <canvas
//       ref={canvasRef}
//       width={200}
//       height={200}
//       className="rounded-full backdrop-blur-md bg-transparent border-2 border-white/10 shadow-2xl"
//     />
//   );
// }
// 'use client';

// import { useEffect, useRef } from 'react';

// interface WaveChargingProps {
//   safePercentag: number;
// }

// function getWaveColor(percent: number): string {
//   // Clamp between 0 and 100
//   const p = Math.max(0, Math.min(percent, 100));

//   // Custom blend: Red → Yellow → Blue → Green
//   let r = 0, g = 0, b = 0;

//   if (p < 25) {
//     // Red to Yellow
//     r = 255;
//     g = Math.round((p / 25) * 255);
//     b = 0;
//   } else if (p < 50) {
//     // Yellow to Blue
//     r = Math.round(255 - ((p - 25) / 25) * 255);
//     g = 255;
//     b = Math.round(((p - 25) / 25) * 255);
//   } else if (p < 75) {
//     // Blue to Cyan
//     r = 0;
//     g = Math.round(255 - ((p - 50) / 25) * 155);
//     b = 255;
//   } else {
//     // Cyan to Green
//     r = 0;
//     g = 255;
//     b = Math.round(255 - ((p - 75) / 25) * 255);
//   }

//   return `rgb(${r}, ${g}, ${b})`;
// }

// export default function WaveCharging({ safePercentag }: WaveChargingProps) {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     const width = canvas.width;
//     const height = canvas.height;
//     const waveHeight = 10;
//     const waveLength = 60;
//     const waveSpeed = 0.05;

//     let offset = 0;
//     let animationFrameId: number;

//     const drawWave = () => {
//       ctx.clearRect(0, 0, width, height);

//       // Clip in a circle
//       ctx.beginPath();
//       ctx.arc(width / 2, height / 2, width / 2, 0, Math.PI * 2);
//       ctx.clip();

//       // Background
//       ctx.fillStyle = '#0f172a'; // dark slate
//       ctx.fillRect(0, 0, width, height);

//       const waveY = height * (1 - safePercentag / 100);

//       // Dynamic wave color
//       ctx.beginPath();
//       for (let x = 0; x <= width; x++) {
//         const y = waveY + Math.sin((x + offset) / waveLength) * waveHeight;
//         ctx.lineTo(x, y);
//       }
//       ctx.lineTo(width, height);
//       ctx.lineTo(0, height);
//       ctx.closePath();

//       ctx.fillStyle = getWaveColor(safePercentag);
//       ctx.shadowColor = ctx.fillStyle;
//       ctx.shadowBlur = 20;
//       ctx.fill();

//       offset += waveSpeed * waveLength;
//       animationFrameId = requestAnimationFrame(drawWave);
//     };

//     drawWave();

//     return () => cancelAnimationFrame(animationFrameId);
//   }, [safePercentag]);

//   return (
//     <canvas
//       ref={canvasRef}
//       width={200}
//       height={200}
//       className="rounded-full bg-transparent"
//     />
//   );
// }
'use client';

import { useEffect, useRef, useState } from 'react';

interface WaveChargingProps {
  safePercentag: number;
  charging: boolean;
}

function getWaveGradient(ctx: CanvasRenderingContext2D, width: number, height: number, percent: number): CanvasGradient {
  const gradient = ctx.createLinearGradient(0, height, 0, 0);

  if (percent < 25) {
    gradient.addColorStop(0, '#ff3b30'); // red
    gradient.addColorStop(1, '#ff9500'); // orange
  } else if (percent < 50) {
    gradient.addColorStop(0, '#ffcc00'); // yellow
    gradient.addColorStop(1, '#34c759'); // green
  } else if (percent < 75) {
    gradient.addColorStop(0, '#34c759'); // green
    gradient.addColorStop(1, '#0a84ff'); // blue
  } else {
    gradient.addColorStop(0, '#0a84ff'); // blue
    gradient.addColorStop(1, '#5e5ce6'); // violet
  }

  return gradient;
}

export default function WaveCharging({ safePercentag, charging }: WaveChargingProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);
  const [prevPercent, setPrevPercent] = useState(safePercentag);

  useEffect(() => {
    if (safePercentag !== prevPercent && charging) {
      // Trigger ripple effect
      if (rippleRef.current) {
        rippleRef.current.classList.remove('ripple-animate');
        void rippleRef.current.offsetWidth; // Trigger reflow
        rippleRef.current.classList.add('ripple-animate');
      }
      setPrevPercent(safePercentag);
    }
  }, [safePercentag, charging, prevPercent]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const waveHeight = 12;
    const waveLength = 80;
    const waveSpeed = 0.08;
    const secondaryWaveOffset = 15;

    let offset = 0;
    let animationFrameId: number;

    // Sparkle effect params
    const sparkles: { x: number; y: number; radius: number; alpha: number; delta: number }[] = [];
    const maxSparkles = 8;

    // Initialize sparkles randomly around the wave area
    for (let i = 0; i < maxSparkles; i++) {
      sparkles.push({
        x: Math.random() * width,
        y: height * 0.5 + Math.random() * height * 0.5,
        radius: 1 + Math.random() * 2,
        alpha: Math.random(),
        delta: 0.02 + Math.random() * 0.03,
      });
    }

    const drawSparkles = () => {
      sparkles.forEach((s) => {
        s.alpha += s.delta;
        if (s.alpha > 1 || s.alpha < 0) s.delta = -s.delta;
        ctx.beginPath();
        ctx.shadowColor = 'white';
        ctx.shadowBlur = 6;
        ctx.fillStyle = `rgba(255,255,255,${s.alpha.toFixed(2)})`;
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    };

    const drawWave = () => {
      ctx.clearRect(0, 0, width, height);

      // Glassy background circle
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, width / 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = 'rgba(15, 23, 42, 0.7)'; // Slightly darker glass
      ctx.fill();

      ctx.save();
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, width / 2, 0, Math.PI * 2);
      ctx.clip();

      const waveY = height * (1 - safePercentag / 100);

      // Dynamic neon gradient
      const gradient = getWaveGradient(ctx, width, height, safePercentag);
      ctx.fillStyle = gradient;
      ctx.shadowColor = gradient as any;
      ctx.shadowBlur = 25;

      // Main wave
      ctx.beginPath();
      for (let x = 0; x <= width; x++) {
        const y = waveY + Math.sin((x + offset) / waveLength) * waveHeight;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fill();

      // Secondary wave layer (lighter)
      ctx.globalAlpha = 0.3;
      ctx.beginPath();
      for (let x = 0; x <= width; x++) {
        const y = waveY + Math.sin((x + offset + secondaryWaveOffset) / waveLength) * (waveHeight - 6);
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fill();
      ctx.globalAlpha = 1;

      // Draw sparkles
      drawSparkles();

      ctx.restore();

      // Pulse effect if 100%
      if (safePercentag >= 100) {
        const pulseRadius = 100 + Math.sin(offset * 0.3) * 10;
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, pulseRadius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.2)';
        ctx.lineWidth = 6;
        ctx.shadowColor = 'cyan';
        ctx.shadowBlur = 30;
        ctx.stroke();
      }

      offset += waveSpeed * waveLength;
      animationFrameId = requestAnimationFrame(drawWave);
    };

    drawWave();

    return () => cancelAnimationFrame(animationFrameId);
  }, [safePercentag]);

  return (
    <div className="relative w-[220px] h-[220px] rounded-full bg-gradient-to-br from-[#111827] via-[#1e293b] to-[#0f172a] shadow-2xl shadow-cyan-900/40 flex items-center justify-center select-none">
      <canvas
        ref={canvasRef}
        width={220}
        height={220}
        className="rounded-full"
      />

      {/* Ripple effect */}
      <div
        ref={rippleRef}
        className="pointer-events-none absolute rounded-full border-2 border-cyan-400 opacity-0"
        style={{
          width: 220,
          height: 220,
          top: 0,
          left: 0,
          boxShadow: '0 0 15px 3px cyan',
          transition: 'opacity 0.3s ease-in-out, transform 0.5s ease-out',
        }}
      />

      {/* Center SOC Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-cyan-400 font-extrabold select-none pointer-events-none">
        <span className="text-6xl drop-shadow-lg">{safePercentag}%</span>
        <span className="uppercase text-xs tracking-widest drop-shadow-md text-cyan-300">
          Charge Level
        </span>
      </div>

      <style jsx>{`
        .ripple-animate {
          opacity: 0.6 !important;
          transform: scale(1.3);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
