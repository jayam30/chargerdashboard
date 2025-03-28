// "use client";
// import React, { useState, useEffect } from "react";
// import { Inter } from "next/font/google";


// const interThin = Inter({
//   subsets: ["latin"],
//   weight: ["200"],
//   variable: "--font-inter",
// });



// const WaveCharging = ({ isChargeInit = true, percentage = 0 }) => {
//   const [phase, setPhase] = useState(0);
//   const [hoverState, setHoverState] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPhase((prev) => (prev + 1) % 360);
//     }, 20);
//     return () => clearInterval(interval);
//   }, []);

//   // Enhanced color function with more vibrant colors and transitions
//   const getCurrentColor = (percent: number) => {
//     if (percent <= 33) {
//       // Red to Blue (0-33%)
//       const ratio = percent / 33;
//       return {
//         main: `rgb(255, ${Math.round(20 + ratio * 20)}, ${Math.round(
//           20 + ratio * 200
//         )})`,
//         glow: `rgb(255, ${Math.round(ratio * 50)}, ${Math.round(ratio * 255)})`,
//         accent: `rgb(255, ${Math.round(50 + ratio * 50)}, ${Math.round(
//           100 + ratio * 155
//         )})`,
//         opacity: 1,
//       };
//     } else if (percent <= 66) {
//       // Blue to Green (33-66%)
//       const ratio = (percent - 33) / 33;
//       return {
//         main: `rgb(${Math.round(255 - ratio * 200)}, ${Math.round(
//           40 + ratio * 215
//         )}, ${Math.round(220 - ratio * 100)})`,
//         glow: `rgb(${Math.round(50 - ratio * 50)}, ${Math.round(
//           50 + ratio * 205
//         )}, 255)`,
//         accent: `rgb(${Math.round(100 - ratio * 100)}, ${Math.round(
//           150 + ratio * 105
//         )}, 255)`,
//         opacity: 1,
//       };
//     } else {
//       // Green (66-100%)
//       const ratio = (percent - 66) / 34;
//       return {
//         main: `rgb(${Math.round(55 - ratio * 20)}, 255, ${Math.round(
//           120 + ratio * 20
//         )})`,
//         glow: `rgb(0, 255, ${Math.round((1 - ratio) * 255)})`,
//         accent: `rgb(${Math.round(50 - ratio * 50)}, 255, ${Math.round(
//           150 + ratio * 105
//         )})`,
//         opacity: 1,
//       };
//     }
//   };

//   const colors = getCurrentColor(percentage);

//   return (
//     <div className="flex items-center justify-center ">
//       <div
//         className="relative w-44 h-44 transition-transform duration-300"
//         style={{ transform: hoverState ? "scale(1.05)" : "scale(1)" }}
//         onMouseEnter={() => setHoverState(true)}
//         onMouseLeave={() => setHoverState(false)}
//       >
//         {/* Ultra Glow Effects */}
//         <div
//           className="absolute -inset-6 rounded-full opacity-20 blur-2xl transition-all duration-300"
//           style={{
//             background: `
//               radial-gradient(circle at center,
//                 ${colors.glow} 0%,
//                 ${colors.accent}50 30%,
//                 transparent 70%
//               )
//             `,
//             transform: hoverState ? "scale(1.1)" : "scale(1)",
//           }}
//         />
//         <div
//           className="absolute -inset-4 rounded-full opacity-30 blur-xl"
//           style={{
//             background: `radial-gradient(circle at center, ${colors.glow}, transparent 70%)`,
//           }}
//         />
         
//         {/* Main container with premium border effect */}
//         <div className="absolute inset-0 rounded-full backdrop-blur-sm">
//           {/* Animated border */}
//           <div
//             className="absolute -inset-0.5 rounded-full opacity-50"
//             style={{
//               background: `
//                 linear-gradient(${phase}deg,
//                   transparent,
//                   ${colors.glow}50,
//                   ${colors.accent}50,
//                   transparent
//                 )
//               `,
//             }}
//           />

//           <div
//             className="absolute inset-px rounded-full overflow-hidden"
//             style={{ background: "rgba(0, 0, 0, 0.2)" }}
//           >
//             {/* SVG Wave Animation */}
//             <svg
//               className="absolute inset-0 w-full h-full"
//               viewBox="0 0 100 100"
//               preserveAspectRatio="none"
//             >
//               <defs>
//                 <linearGradient id="waveGradient" x1="0" x2="0" y1="0" y2="1">
//                   <stop
//                     offset="0%"
//                     stopColor={colors.accent}
//                     stopOpacity="0.8"
//                   />
//                   <stop
//                     offset="100%"
//                     stopColor={colors.main}
//                     stopOpacity="0.9"
//                   />
//                 </linearGradient>
//                 <filter id="glow">
//                   <feGaussianBlur stdDeviation="2" result="coloredBlur" />
//                   <feMerge>
//                     <feMergeNode in="coloredBlur" />
//                     <feMergeNode in="SourceGraphic" />
//                   </feMerge>
//                 </filter>
//                 <filter id="turbulence">
//                   <feTurbulence
//                     baseFrequency="0.02"
//                     numOctaves="3"
//                     seed={phase}
//                   />
//                   <feDisplacementMap in="SourceGraphic" scale="5" />
//                 </filter>
//               </defs>

//               {/* Background wave layer */}
//               <path
//                 fill={colors.main}
//                 opacity="0.2"
//                 filter="url(#glow)"
//                 d={`
//                   M 0 ${100 - percentage - 2}
//                   Q 15 ${100 - percentage + Math.sin(phase * 0.08) * 12}
//                     35 ${100 - percentage - 2}
//                     T 65 ${100 - percentage - 2}
//                     T 100 ${100 - percentage - 2}
//                   V 100
//                   H 0
//                   Z
//                 `}
//               />

//               {/* Multiple wave layers with different phases and amplitudes */}
//               {[...Array(5)].map((_, i) => (
//                 <path
//                   key={i}
//                   fill={colors.main}
//                   opacity={0.15 + i * 0.05}
//                   filter="url(#glow)"
//                   d={`
//                     M 0 ${100 - percentage + i}
//                     Q 20 ${
//                       100 -
//                       percentage +
//                       Math.sin((phase + i * 30) * 0.1) * (8 + i * 2)
//                     }
//                       40 ${100 - percentage + i}
//                       T 70 ${100 - percentage + i}
//                       T 100 ${100 - percentage + i}
//                     V 100
//                     H 0
//                     Z
//                   `}
//                 />
//               ))}

//               {/* Main wave layers with enhanced complexity */}
//               <path
//                 fill={colors.main}
//                 opacity="0.4"
//                 filter="url(#glow)"
//                 d={`
//                   M 0 ${100 - percentage + 2}
//                   Q 25 ${100 - percentage + Math.cos((phase + 45) * 0.1) * 12}
//                     50 ${100 - percentage + 2}
//                     T 100 ${100 - percentage + 2}
//                   V 100
//                   H 0
//                   Z
//                 `}
//               />

//               <path
//                 fill="url(#waveGradient)"
//                 opacity="0.6"
//                 filter="url(#glow)"
//                 d={`
//                   M 0 ${100 - percentage + 1}
//                   Q 20 ${100 - percentage + Math.sin((phase + 90) * 0.1) * 15}
//                     50 ${100 - percentage + 1}
//                     T 100 ${100 - percentage + 1}
//                   V 100
//                   H 0
//                   Z
//                 `}
//               />

//               {/* Ripple effect waves */}
//               {[...Array(3)].map((_, i) => (
//                 <path
//                   key={`ripple-${i}`}
//                   fill={colors.accent}
//                   opacity={0.1}
//                   filter="url(#glow)"
//                   d={`
//                     M 0 ${100 - percentage + 3 + i}
//                     Q 30 ${
//                       100 -
//                       percentage +
//                       Math.sin((phase + i * 120) * 0.1) * (10 - i * 2)
//                     }
//                       60 ${100 - percentage + 3 + i}
//                       T 100 ${100 - percentage + 3 + i}
//                     V 100
//                     H 0
//                     Z
//                   `}
//                 />
//               ))}
//             </svg>

//             {/* Dynamic inner glow */}
//             <div
//               className="absolute inset-0 pointer-events-none transition-opacity duration-300"
//               style={{
//                 background: `
//                   radial-gradient(circle at center,
//                     ${colors.glow}30 0%,
//                     ${colors.accent}10 40%,
//                     transparent 70%
//                   )
//                 `,
//                 opacity: hoverState ? 0.8 : 0.5,
//               }}
//             />

//             {/* Percentage Display with enhanced effects */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               {/* <Zap
//                 width={40}
//                 height={40}
//                 className="text-green-500 absolute  top-5"
//               /> */}
//               <div className="flex-col  justify-center items-center gap-2">
//                 <span
//                   className={`${interThin.className} text-4xl ml-3    ${
//                     percentage >= 60 ? "text-black " : "text-white"
//                   } transition-all duration-300`}
//                   style={{
//                     textShadow: `
//                     0 0 10px ${colors.glow}80,
//                     0 0 20px ${colors.accent}50,
//                     0 0 30px ${colors.main}30
//                   `,
//                     transform: hoverState ? "scale(1.1)" : "scale(1)",
//                   }}
//                 >
//                   {percentage}%
//                 </span>
//               </div>
//             </div>

//             {/* Enhanced shine effects */}
//             <div
//               className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent pointer-events-none"
//               style={{
//                 opacity: hoverState ? 0.4 : 0.2,
//               }}
//             />
//           </div>
//         </div>

//         {/* Animated pulse rings */}
//         {[...Array(3)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute -inset-2 rounded-full animate-pulse"
//             style={{
//               animation: `pulse ${2 + i * 0.5}s infinite`,
//               background: `radial-gradient(circle at center, ${colors.glow}${
//                 20 - i * 5
//               }, transparent 70%)`,
//               animationDelay: `${i * 0.5}s`,
//             }}
//           />
//         ))}
//       </div>
//     </div>
  
  
//    );
// };

// export default WaveCharging;
//fix render
"use client";
import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";

const interThin = Inter({
  subsets: ["latin"],
  weight: ["200"],
  variable: "--font-inter",
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const WaveCharging = ({ isChargeInit = true, percentage = 0 }) => {
  const [phase, setPhase] = useState(0);
  const [hoverState, setHoverState] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => (prev + 1) % 360);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  // Function to determine colors dynamically
  const getCurrentColor = (percent: number) => {
  if (percent <= 33) {
    // Red to Blue (0-33%)
    const ratio = percent / 33;
    return {
      main: `rgb(255, ${Math.round(20 + ratio * 20)}, ${Math.round(
        20 + ratio * 200
      )})`,
      glow: `rgb(255, ${Math.round(ratio * 50)}, ${Math.round(ratio * 255)})`,
      accent: `rgb(255, ${Math.round(50 + ratio * 50)}, ${Math.round(
        100 + ratio * 155
      )})`,
      opacity: 1,
    };
  } else if (percent <= 66) {
    // Blue to Green (33-66%)
    const ratio = (percent - 33) / 33;
    return {
      main: `rgb(${Math.round(255 - ratio * 200)}, ${Math.round(
        40 + ratio * 215
      )}, ${Math.round(220 - ratio * 100)})`,
      glow: `rgb(${Math.round(50 - ratio * 50)}, ${Math.round(
        50 + ratio * 205
      )}, 255)`,
      accent: `rgb(${Math.round(100 - ratio * 100)}, ${Math.round(
        150 + ratio * 105
      )}, 255)`,
      opacity: 1,
    };
  } else {
    // Green (66-100%)
    const ratio = (percent - 66) / 34;
    return {
      main: `rgb(${Math.round(55 - ratio * 20)}, 255, ${Math.round(
        120 + ratio * 20
      )})`,
      glow: `rgb(0, 255, ${Math.round((1 - ratio) * 255)})`,
      accent: `rgb(${Math.round(50 - ratio * 50)}, 255, ${Math.round(
        150 + ratio * 105
      )})`,
      opacity: 1,
    };
  }
};

  const colors = getCurrentColor(percentage);

  return (
    <div className="flex items-center justify-center">
      <div
        className="relative w-44 h-44 transition-transform duration-300"
        style={{ transform: hoverState ? "scale(1.05)" : "scale(1)" }}
        onMouseEnter={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}
      >
        {/* Outer Glow Effect */}
        <div
          className="absolute -inset-6 rounded-full opacity-20 blur-2xl transition-all duration-300"
          style={{
            background: `
              radial-gradient(circle at center,
                ${colors.glow} 0%,
                ${colors.accent}50 30%,
                transparent 70%
              )
            `,
            transform: hoverState ? "scale(1.1)" : "scale(1)",
          }}
        />
           <div
          className="absolute -inset-4 rounded-full opacity-30 blur-xl"
          style={{
            background: `radial-gradient(circle at center, ${colors.glow}, transparent 70%)`,
          }}
        />


<div className="absolute inset-0 rounded-full backdrop-blur-sm">
          {/* Animated border */}
          <div
            className="absolute -inset-0.5 rounded-full opacity-50"
            style={{
              background: `
                linear-gradient(${phase}deg,
                  transparent,
                  ${colors.glow}50,
                  ${colors.accent}50,
                  transparent
                )
              `,
            }}
          />

          <div
            className="absolute inset-px rounded-full overflow-hidden"
            style={{ background: "rgba(0, 0, 0, 0.2)" }}
          >
            {/* SVG Wave Animation */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="waveGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor={colors.accent}
                    stopOpacity="0.8"
                  />
                  <stop
                    offset="100%"
                    stopColor={colors.main}
                    stopOpacity="0.9"
                  />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="turbulence">
                  <feTurbulence
                    baseFrequency="0.02"
                    numOctaves="3"
                    seed={phase}
                  />
                  <feDisplacementMap in="SourceGraphic" scale="5" />
                </filter>
              </defs>

              {/* Background wave layer */}
              <path
                fill={colors.main}
                opacity="0.2"
                filter="url(#glow)"
                d={`
                  M 0 ${100 - percentage - 2}
                  Q 15 ${100 - percentage + Math.sin(phase * 0.08) * 12}
                    35 ${100 - percentage - 2}
                    T 65 ${100 - percentage - 2}
                    T 100 ${100 - percentage - 2}
                  V 100
                  H 0
                  Z
                `}
              />

              {/* Multiple wave layers with different phases and amplitudes */}
              {[...Array(5)].map((_, i) => (
                <path
                  key={i}
                  fill={colors.main}
                  opacity={0.15 + i * 0.05}
                  filter="url(#glow)"
                  d={`
                    M 0 ${100 - percentage + i}
                    Q 20 ${
                      100 -
                      percentage +
                      Math.sin((phase + i * 30) * 0.1) * (8 + i * 2)
                    }
                      40 ${100 - percentage + i}
                      T 70 ${100 - percentage + i}
                      T 100 ${100 - percentage + i}
                    V 100
                    H 0
                    Z
                  `}
                />
              ))}

              {/* Main wave layers with enhanced complexity */}
              <path
                fill={colors.main}
                opacity="0.4"
                filter="url(#glow)"
                d={`
                  M 0 ${100 - percentage + 2}
                  Q 25 ${100 - percentage + Math.cos((phase + 45) * 0.1) * 12}
                    50 ${100 - percentage + 2}
                    T 100 ${100 - percentage + 2}
                  V 100
                  H 0
                  Z
                `}
              />

              <path
                fill="url(#waveGradient)"
                opacity="0.6"
                filter="url(#glow)"
                d={`
                  M 0 ${100 - percentage + 1}
                  Q 20 ${100 - percentage + Math.sin((phase + 90) * 0.1) * 15}
                    50 ${100 - percentage + 1}
                    T 100 ${100 - percentage + 1}
                  V 100
                  H 0
                  Z
                `}
              />

              {/* Ripple effect waves */}
              {[...Array(3)].map((_, i) => (
                <path
                  key={`ripple-${i}`}
                  fill={colors.accent}
                  opacity={0.1}
                  filter="url(#glow)"
                  d={`
                    M 0 ${100 - percentage + 3 + i}
                    Q 30 ${
                      100 -
                      percentage +
                      Math.sin((phase + i * 120) * 0.1) * (10 - i * 2)
                    }
                      60 ${100 - percentage + 3 + i}
                      T 100 ${100 - percentage + 3 + i}
                    V 100
                    H 0
                    Z
                  `}
                />
              ))}
            </svg>

            {/* Dynamic inner glow */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                background: `
                  radial-gradient(circle at center,
                    ${colors.glow}30 0%,
                    ${colors.accent}10 40%,
                    transparent 70%
                  )
                `,
                opacity: hoverState ? 0.8 : 0.5,
              }}
            />

            {/* Percentage Display with enhanced effects */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* <Zap
                width={40}
                height={40}
                className="text-green-500 absolute  top-5"
              /> */}
              <div className="flex-col  justify-center items-center gap-2">
                <span
                  className={`${interThin.className} text-4xl ml-3    ${
                    percentage >= 60 ? "text-black " : "text-white"
                  } transition-all duration-300`}
                  style={{
                    textShadow: `
                    0 0 10px ${colors.glow}80,
                    0 0 20px ${colors.accent}50,
                    0 0 30px ${colors.main}30
                  `,
                    transform: hoverState ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  {percentage}%
                </span>
              </div>
            </div>

            {/* Enhanced shine effects */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent pointer-events-none"
              style={{
                opacity: hoverState ? 0.4 : 0.2,
              }}
            />
          </div>
        </div>

        {/* Animated pulse rings */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute -inset-2 rounded-full animate-pulse"
            style={{
              animation: `pulse ${2 + i * 0.5}s infinite`,
              background: `radial-gradient(circle at center, ${colors.glow}${
                20 - i * 5
              }, transparent 70%)`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
        </div>
    
    
  );
};

export default WaveCharging;
