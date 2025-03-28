



















// return (
  //     <div
  //       className="w-[768px] h-[1024px] overflow-hidden bg-[#2A2D32] font-sans pt-7"
  //       style={{
  //         backgroundImage: "url(/main-bg.png)",
  //         backgroundSize: "cover",
  //         backgroundPosition: "center",
  //       }}
  //     >
  //       <div className="flex justify-center items-center p-1 pt-20 w-full px-8">
  //         <motion.div
  //           className="text-left flex-col gap-2 mb-12 relative"
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           transition={{ duration: 0.3 }}
  //         >
  //           <motion.div
  //             className="text-white/90 text-5xl font-medium tracking-wider relative group"
  //             initial={{ opacity: 0, x: -20 }}
  //             animate={{ opacity: 1, x: 0 }}
  //             transition={{ duration: 0.5, delay: 0.6 }}
  //           >
  //             <span className={`${poppins.className} relative`}>
  //               Charging {bmsData.SOC}%
  //             </span>
  //           </motion.div>
  //         </motion.div>
  //       </div>
  
  //       {/* Charging Animation */}
  //       <WaveCharging isChargeInit={isChargingInitialized} percentage={bmsData?.SOC} />
  
  //       <div className="flex flex-col items-center gap-6 mb-12 scale-150">
  //         <motion.div
  //           className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/5 shadow-lg shadow-cyan-500/10"
  //           initial={{ opacity: 0, y: 20 }}
  //           animate={{ opacity: 1, y: 0 }}
  //           transition={{ duration: 0.5, delay: 0.8 }}
  //         >
  //           <button className="text-white/90 text-sm font-medium flex items-center">
  //             {bmsData.SOC + "% "} Charged
  //           </button>
  //         </motion.div>
  //       </div>
  
  //       {/* Charging Information Display */}
  //       <div className="w-full px-12 mt-7">
  //         <div className="grid grid-cols-2 gap-6">
  //           <motion.div className="info-box" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
  //             Energy: <span>{energyConsumed.toFixed(5)} kWh</span>
  //           </motion.div>
  
  //           <motion.div className="info-box" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
  //             Time Left:
  //             <span>
  //               {`${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
  //             </span>
  //           </motion.div>
  
  //           <motion.div className="info-box" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
  //             Current: <span>{bmsData.current?.toFixed(2) ?? "0.00"} A</span>
  //           </motion.div>
  
  //           <motion.div className="info-box" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
  //             Power: <span>{(chargingPower / 1000).toFixed(5)} kW</span>
  //           </motion.div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
























// "use client";
// import { motion } from "framer-motion";
// import { Poppins } from "next/font/google";
// import { useChargingStatus } from "../../../hooks/useChargingStatus";
// import { useBMSData } from "../../../hooks/useBMSData";
// import WaveCharging from "../../../components/WaveCharging";
// import { useEffect, useState } from "react";

// const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

// export default function ChargePage() {
//   const { isChargingInitialized } = useChargingStatus();
//   const { bmsData, chargingPower } = useBMSData();
//   const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
//   const [energyConsumed, setEnergyConsumed] = useState(0);

//   // Calculate Energy Consumption in kWh
//   useEffect(() => {
//     if (bmsData.isReceiverCoilDetected && bmsData.current > 0) {
//       setEnergyConsumed((prev) => prev + (chargingPower / 1000 / 3600)); // kW * time(s)
//     }
//   }, [bmsData]);

//   // Calculate Time Left
//   useEffect(() => {
//     const updateTimeLeft = () => {
//       const now = Date.now();
//       const endTime = now + 3600000; // Simulated 1 hour charging duration
//       const difference = endTime - now;

//       setTimeLeft({
//         hours: Math.floor(difference / (1000 * 60 * 60)),
//         minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((difference % (1000 * 60)) / 1000),
//       });
//     };

//     updateTimeLeft();
//     const interval = setInterval(updateTimeLeft, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       className="w-[768px] h-[1024px] overflow-hidden bg-[#2A2D32] font-sans pt-7"
//       style={{
//         backgroundImage: "url(/main-bg.png)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="flex justify-center items-center p-1 pt-20 w-full px-8">
//         <motion.div
//           className="text-left flex-col gap-2 mb-12 relative"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           <motion.div
//             className="text-white/90 text-5xl font-medium tracking-wider relative group"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             <span className={`${poppins.className} relative`}>
//               Charging {bmsData.SOC}%
//             </span>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Charging Animation */}
//       <WaveCharging isChargeInit={isChargingInitialized} percentage={bmsData?.SOC} />

//       <div className="flex flex-col items-center gap-6 mb-12 scale-150">
//         <motion.div
//           className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/5 shadow-lg shadow-cyan-500/10"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.8 }}
//         >
//           <button className="text-white/90 text-sm font-medium flex items-center">
//             {bmsData.SOC + "% "} Charged
//           </button>
//         </motion.div>
//       </div>

//       {/* Charging Information Display */}
//       <div className="w-full px-12 mt-7">
//         <div className="grid grid-cols-2 gap-6">
//           <motion.div className="info-box" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//             Energy: <span>{energyConsumed.toFixed(5)} kWh</span>
//           </motion.div>

//           <motion.div className="info-box" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//             Time Left:
//             <span>
//               {`${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
//             </span>
//           </motion.div>

//           <motion.div className="info-box" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//             Current: <span>{bmsData.current?.toFixed(2) ?? "0.00"} A</span>
//           </motion.div>

//           <motion.div className="info-box" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//             Power: <span>{(chargingPower / 1000).toFixed(5)} kW</span>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client";
// import { motion } from "framer-motion";
// import { Poppins } from "next/font/google";
// import { useChargingStatus } from "../../../hooks/useChargingStatus";
// import { useBMSData } from "../../../hooks/useBMSData";
// import WaveCharging from "../../../components/WaveCharging";
// import { useEffect, useState } from "react";


// const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

// export default function ChargePage() {
//   const { isChargingInitialized } = useChargingStatus();
//   const { bmsData, chargingPower } = useBMSData();
//   const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
//   const [energyConsumed, setEnergyConsumed] = useState(0);

//   // ✅ Dynamically accumulate energy every second
//   useEffect(() => {
//     if (bmsData.isReceiverCoilDetected && bmsData.current > 0) {
//       const interval = setInterval(() => {
//         setEnergyConsumed((prev) => prev + chargingPower / 1000 / 3600); // kW * time(s)
//       }, 1000);

//       return () => clearInterval(interval);
//     }
//   }, [bmsData, chargingPower]);

//   // ✅ Dynamically calculate Time Left
//   useEffect(() => {
//     const updateTimeLeft = () => {
//       if (bmsData.SOC >= 100) return setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });

//       const chargingRate = chargingPower > 0 ? bmsData.current * bmsData.voltage : 1; // Avoid division by 0
//       const remainingEnergy = (100 - bmsData.SOC) * (chargingPower / 100); // Estimate required energy

//       const estimatedSeconds = remainingEnergy / (chargingRate / 3600); // Energy / Power
//       setTimeLeft({
//         hours: Math.floor(estimatedSeconds / 3600),
//         minutes: Math.floor((estimatedSeconds % 3600) / 60),
//         seconds: Math.floor(estimatedSeconds % 60),
//       });
//     };

//     updateTimeLeft();
//     const interval = setInterval(updateTimeLeft, 1000);

//     return () => clearInterval(interval);
//   }, [bmsData, chargingPower]);

//   return (
//     <div
//       className="w-[768px] h-[1024px] overflow-hidden bg-[#2A2D32] font-sans pt-7"
//       style={{
//         backgroundImage: "url(/main-bg.png)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="flex justify-center items-center p-1 pt-20 w-full px-8">
//         <motion.div
//           className="text-left flex-col gap-2 mb-12 relative"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           <motion.div
//             className="text-white/90 text-5xl font-medium tracking-wider relative group"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             <span className={`${poppins.className} relative`}>
//               Charging {bmsData.SOC}%
//             </span>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Charging Animation */}
//       <WaveCharging isChargeInit={isChargingInitialized} percentage={bmsData?.SOC} />

//       <div className="flex flex-col items-center gap-6 mb-12 scale-150">
//         <motion.div
//           className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/5 shadow-lg shadow-cyan-500/10"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.8 }}
//         >
//           <button className="text-white/90 text-sm font-medium flex items-center">
//             {bmsData.SOC + "% "} Charged
//           </button>
//         </motion.div>
//       </div>

//       {/* Charging Information Display */}
//       <div className="w-full px-12 mt-7">
//         <div className="grid grid-cols-2 gap-6">
//           <motion.div className="info-box" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//             Energy: <span>{energyConsumed.toFixed(5)} kWh</span>
//           </motion.div>

//           <motion.div className="info-box" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//             Time Left:
//             <span>
//               {`${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
//             </span>
//           </motion.div>

//           <motion.div className="info-box" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//             Current: <span>{bmsData.current?.toFixed(2) ?? "0.00"} A</span>
//           </motion.div>

//           <motion.div className="info-box" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//             Power: <span>{(chargingPower / 1000).toFixed(5)} kW</span>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }
///timer impilmentiaion|

// "use client";
// import { motion } from "framer-motion";
// import { Poppins } from "next/font/google";
// import { useChargingStatus } from "../../../hooks/useChargingStatus";
// import { useBMSData } from "../../../hooks/useBMSData";
// import { useTimerStatus } from "../../../hooks/useTimerStatus"; // ✅ Import timer hook
// import WaveCharging from "../../../components/WaveCharging";
// import { useEffect, useState } from "react";

// const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

// export default function ChargePage() {
//   const { isChargingInitialized } = useChargingStatus();
//   const { bmsData, chargingPower } = useBMSData();
//   const { endTime } = useTimerStatus(); // ✅ Fetch the endTime

//   const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
//   const [energyConsumed, setEnergyConsumed] = useState(0);

//   // ✅ Countdown Timer Logic
//   useEffect(() => {
//     if (!endTime) return;

//     const updateCountdown = () => {
//       const now = Date.now();
//       const remainingTime = Math.max(0, endTime - now); // Avoid negative values

//       setTimeLeft({
//         hours: Math.floor(remainingTime / (1000 * 60 * 60)),
//         minutes: Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((remainingTime % (1000 * 60)) / 1000),
//       });

//       if (remainingTime <= 0) {
//         clearInterval(interval);
//       }
//     };

//     updateCountdown(); // Run immediately
//     const interval = setInterval(updateCountdown, 1000);

//     return () => clearInterval(interval);
//   }, [endTime]);

//   // ✅ Dynamically accumulate energy every second
//   useEffect(() => {
//     if (bmsData.isReceiverCoilDetected && bmsData.current > 0) {
//       const interval = setInterval(() => {
//         setEnergyConsumed((prev) => prev + chargingPower / 1000 / 3600);
//       }, 1000);

//       return () => clearInterval(interval);
//     }
//   }, [bmsData, chargingPower]);

//   return (
//     <div className="w-[768px] h-[1024px] overflow-hidden bg-[#2A2D32] font-sans pt-7"
//       style={{ backgroundImage: "url(/main-bg.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
      
//       <div className="flex justify-center items-center p-1 pt-20 w-full px-8">
//         <motion.div className="text-left flex-col gap-2 mb-12 relative"
//           initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
//           <motion.div className="text-white/90 text-5xl font-medium tracking-wider relative group"
//             initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}>
//             <span className={`${poppins.className} relative`}>Charging {bmsData.SOC}%</span>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Charging Animation */}
//       <WaveCharging isChargeInit={isChargingInitialized} percentage={bmsData?.SOC} />

//       <div className="flex flex-col items-center gap-6 mb-12 scale-150">
//         <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/5 shadow-lg shadow-cyan-500/10"
//           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
//           <button className="text-white/90 text-sm font-medium flex items-center">
//             {bmsData.SOC + "% "} Charged
//           </button>
//         </motion.div>
//       </div>

//       {/* Charging Information Display */}
//       <div className="w-full px-12 mt-7">
//         <div className="grid grid-cols-2 gap-6">
//           <motion.div className="info-box" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//             Energy: <span>{energyConsumed.toFixed(5)} kWh</span>
//           </motion.div>

//           {/* ✅ Countdown Timer Display */}
//           <motion.div className="info-box" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//             Time Left:
//             <span>
//               {`${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
//             </span>
//           </motion.div>

//           <motion.div className="info-box" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//             Current: <span>{bmsData.current?.toFixed(2) ?? "0.00"} A</span>
//           </motion.div>

//           <motion.div className="info-box" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//             Power: <span>{(chargingPower / 1000).toFixed(5)} kW</span>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }


////stop charging when timer is zero

// "use client";
// import { motion } from "framer-motion";
// import { Poppins } from "next/font/google";
// import { useChargingStatus } from "../../../hooks/useChargingStatus";
// import { useBMSData } from "../../../hooks/useBMSData";
// import { useTimerStatus } from "../../../hooks/useTimerStatus";
// import WaveCharging from "../../../components/WaveCharging";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

// export default function ChargePage() {
//   const router = useRouter();
//   const { isChargingInitialized, updateChargingStatus } = useChargingStatus(); // ✅ Use correct setter
//   const { bmsData, chargingPower } = useBMSData();
//   const { endTime } = useTimerStatus();

//   const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
//   const [energyConsumed, setEnergyConsumed] = useState(0);

//   // ✅ Countdown Timer & Auto Stop Charging
//   useEffect(() => {
//     if (!endTime) return;
  
//     const updateCountdown = () => {
//       const now = Date.now();
//       const remainingTime = Math.max(0, endTime - now); // Prevent negative values
  
//       setTimeLeft({
//         hours: Math.floor(remainingTime / (1000 * 60 * 60)),
//         minutes: Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((remainingTime % (1000 * 60)) / 1000),
//       });
  
//       if (remainingTime <= 0) {
//         console.log("🔴 Timer reached zero. Stopping charge...");
//         clearInterval(interval);
  
//         // ✅ Ensure charging stops before redirecting
//         updateChargingStatus(false).then(() => {
//           console.log("✅ Charging stopped. Redirecting...");
//           // router.push("/done"); // ✅ Now correctly redirects
//         });
//       }
//     };
  
//     const interval = setInterval(updateCountdown, 1000);
//     updateCountdown(); // Run immediately
  
//     return () => clearInterval(interval);
//   }, [endTime, updateChargingStatus, router]);
  
//   // ✅ Dynamically accumulate energy every second
//   useEffect(() => {
//     if (bmsData.isReceiverCoilDetected && bmsData.current > 0) {
//       const interval = setInterval(() => {
//         setEnergyConsumed((prev) => prev + chargingPower / 1000 / 3600);
//       }, 1000);

//       return () => clearInterval(interval);
//     }
//   }, [bmsData, chargingPower]);

//   return (
//     <div className="w-[768px] h-[1024px] overflow-hidden bg-[#2A2D32] font-sans pt-7"
//       style={{ backgroundImage: "url(/main-bg.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
      
//       <div className="flex justify-center items-center p-1 pt-20 w-full px-8">
//         <motion.div className="text-left flex-col gap-2 mb-12 relative"
//           initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
//           <motion.div className="text-white/90 text-5xl font-medium tracking-wider relative group"
//             initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}>
//             <span className={`${poppins.className} relative`}>Charging {bmsData.SOC}%</span>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Charging Animation */}
//       <WaveCharging isChargeInit={isChargingInitialized} percentage={bmsData?.SOC} />

//       <div className="flex flex-col items-center gap-6 mb-12 scale-150">
//         <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/5 shadow-lg shadow-cyan-500/10"
//           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
//           <button className="text-white/90 text-sm font-medium flex items-center">
//             {bmsData.SOC + "% "} Charged
//           </button>
//         </motion.div>
//       </div>

//       {/* Charging Information Display */}
//       <div className="w-full px-12 mt-7">
//         <div className="grid grid-cols-2 gap-6">
//           <motion.div className="info-box" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//             Energy: <span>{energyConsumed.toFixed(5)} kWh</span>
//           </motion.div>

//           {/* ✅ Countdown Timer Display */}
//           <motion.div className="info-box" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//             Time Left:
//             <span>
//               {`${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
//             </span>
//           </motion.div>

//           <motion.div className="info-box" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//             Current: <span>{bmsData.current?.toFixed(2) ?? "0.00"} A</span>
//           </motion.div>

//           <motion.div className="info-box" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//             Power: <span>{(chargingPower / 1000).toFixed(5)} kW</span>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }
////new ui
// "use client";
// import { motion } from "framer-motion";
// import { Poppins } from "next/font/google";
// import { useChargingStatus } from "../../../hooks/useChargingStatus";
// import { useBMSData } from "../../../hooks/useBMSData";
// import { useTimerStatus } from "../../../hooks/useTimerStatus";
// import WaveCharging from "../../../components/WaveCharging";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });


// export default function ChargePage() {
//   const router = useRouter();
//   const { isChargingInitialized, updateChargingStatus } = useChargingStatus(); // ✅ Use correct setter
//   const { bmsData, chargingPower } = useBMSData();
//   const { endTime } = useTimerStatus();

//   const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
//   const [energyConsumed, setEnergyConsumed] = useState(0);

//   // ✅ Countdown Timer & Auto Stop Charging
//   useEffect(() => {
//     if (!endTime) return;
  
//     const updateCountdown = () => {
//       const now = Date.now();
//       const remainingTime = Math.max(0, endTime - now); // Prevent negative values
  
//       setTimeLeft({
//         hours: Math.floor(remainingTime / (1000 * 60 * 60)),
//         minutes: Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((remainingTime % (1000 * 60)) / 1000),
//       });
  
//       if (remainingTime <= 0) {
//         console.log("🔴 Timer reached zero. Stopping charge...");
//         clearInterval(interval);
  
//         // ✅ Ensure charging stops before redirecting
//         updateChargingStatus(false).then(() => {
//           console.log("✅ Charging stopped. Redirecting...");
//           // router.push("/done"); // ✅ Now correctly redirects
//         });
//       }
//     };
  
//     const interval = setInterval(updateCountdown, 1000);
//     updateCountdown(); // Run immediately
  
//     return () => clearInterval(interval);
//   }, [endTime, updateChargingStatus, router]);
  
//   // ✅ Dynamically accumulate energy every second
//   useEffect(() => {
//     if (bmsData.isReceiverCoilDetected && bmsData.current > 0) {
//       const interval = setInterval(() => {
//         setEnergyConsumed((prev) => prev + chargingPower / 1000 / 3600);
//       }, 1000);

//       return () => clearInterval(interval);
//     }
//   }, [bmsData, chargingPower]);



//   return (
//     <div
//       className="w-[768px] h-[1024px] overflow-hidden bg-[#2A2D32] font-sans pt-7"
//       style={{
//         backgroundImage: "url(/main-bg.png)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="flex justify-center items-center p-1 pt-20 w-full px-8">
//         <motion.div
//           className="text-left flex-col gap-2 mb-12 relative"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           <motion.div
//             className="text-white/90 text-5xl font-medium tracking-wider relative group"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             {/* <span
//               className={`${poppins.className} relative ${
//                 isScootyParked ? "" : "text-white"
//               }`}
//             >
//               {isScootyParked ? (
//                 isChargingInitialized ? (
//                   current <= 0 ? (
//                     "Charging Paused"
//                   ) : (
//                     "Charging"
//                   )
//                 ) : (
//                   "Initializing Charging"
//                 )
//               ) : (
//                 <div className="flex items-center gap-3">
//                   <span>Park your vehicle</span>
//                   <span className="text-red-400 font-mono bg-red-500/10 px-3 py-0.5 rounded-md border border-red-500/20">
//                     {Math.floor(parkCountdown / 60)}:
//                     {(parkCountdown % 60).toString().padStart(2, "0")}
//                   </span>
//                 </div>
//               )}
//             </span> */}
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* <ChargingPadWarning isFodThere={fodTriggered} />
//       <MisalignmentDialog isMisaligned={misalignmentTriggered} /> */}

//       <div className="flex flex-col items-center gap-6 mb-12 scale-150">
//         <motion.div
//           className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/5 shadow-lg shadow-cyan-500/10"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.8 }}
//         >
//           <button
//             onClick={() => {
//               updateChargingStatus(false);
              
//               router.push("/");
//             }}
//             className="text-white/90 text-sm font-medium flex items-center"
//           >
//            {bmsData.SOC + "% "}Charged
//           </button>
//           <svg
//             width="14"
//             height="14"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="text-cyan-400"
//           >
//             <path
//               d="M13 2L4.09347 12.6879C3.74466 13.1064 3.57026 13.3157 3.56759 13.4925C3.56526 13.6461 3.63373 13.7923 3.75326 13.8889C3.89075 14 4.16318 14 4.70803 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </motion.div>
//       </div>

      

    

//       <WaveCharging isChargeInit={isChargingInitialized} percentage={bmsData?.SOC} />
     
      



//       {/* <div className="flex w-full justify-center items-center mb-4">
//         <div className="flex-col justify-center items-center gap-36">
//           <motion.div
//             initial={{ x: 768 }}
//             animate={{ x: 0 }}
//             key={isScootyParked ? "parked" : "not-parked"}
//             transition={{
//               duration: 5,
//               type: "spring",
//               stiffness: 100,
//               damping: 100,
//               repeat: isScootyParked ? 0 : Infinity,
//             }}
//           >
//             <Image
//               src="/charge-bike.png"
//               alt="Charger pad"
//               width={500}
//               height={300}
//               className="drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]"
//             />
//           </motion.div>
           
//           <div className="flex w-full items-center justify-center">
//             <Image
//               src="/charge-pad.png"
//               alt="Charger pad"
//               width={200}
//               height={100}
//               className="drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]"
//             />
//           </div>
//         </div>
//       </div> */}

//       <div className="w-full px-12 mt-7">
//         <div className="grid grid-cols-2 gap-6">
//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.0 }}
//           >
//             <span className="text-nowrap">Energy: </span>
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300 text-nowrap">
//               {energyConsumed.toFixed(5)} kWh
//             </span>
//           </motion.div>

//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.2 }}
//           >
            
            
//             Time Remaining:{" "}
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//             {`${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
//             </span>
//           </motion.div>

//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.4 }}
//           >
//             Charging Current:{" "}
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//             {bmsData.current?.toFixed(2) ?? "0.00"} A
//             </span>
//           </motion.div>

//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.6 }}
//           >
//             Power:{" "}
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//             {(chargingPower / 1000).toFixed(5)} kW W
//             </span>
//           </motion.div>
//         </div>
//       </div>
//       {/* {emergencyStop && <EmergencyStop isEmergencyStop={emergencyStop} />} */}
//     </div>
//   );
  
// };

// "use client";
// import { motion } from "framer-motion";
// import { useChargingStatus } from "../../../hooks/useChargingStatus";
// import { useBMSData } from "../../../hooks/useBMSData";
// import { useTimerStatus } from "../../../hooks/useTimerStatus";
// import WaveCharging from "../../../components/WaveCharging";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

// export default function ChargePage() {
//   const router = useRouter();
//   const { isChargingInitialized, updateChargingStatus } = useChargingStatus(); // ✅ Use correct setter
//   const { bmsData, chargingPower } = useBMSData();
//   const { endTime } = useTimerStatus();

//   const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
//   const [energyConsumed, setEnergyConsumed] = useState(0);
//   useEffect(() => {
//     if (!endTime) return;
  
//     const updateCountdown = () => {
//       const now = Date.now();
//       const remainingTime = Math.max(0, endTime - now);
  
//       setTimeLeft({
//         hours: Math.floor(remainingTime / (1000 * 60 * 60)),
//         minutes: Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((remainingTime % (1000 * 60)) / 1000),
//       });
  
//       if (remainingTime <= 0) {
//         console.log("🔴 Timer reached zero. Stopping charge...");
//         clearInterval(interval);
//         updateChargingStatus(false).then(() => {
//           console.log("✅ Charging stopped. Redirecting...");

//         });
//       }
//     };
  
//     const interval = setInterval(updateCountdown, 1000);
//     updateCountdown(); // Run immediately
  
//     return () => clearInterval(interval);
//   }, [endTime, updateChargingStatus, router]);
  

//   useEffect(() => {
//     if (bmsData.isReceiverCoilDetected && bmsData.current > 0) {
//       const interval = setInterval(() => {
//         setEnergyConsumed((prev) => prev + chargingPower / 1000 / 3600);
//       }, 1000);

//       return () => clearInterval(interval);
//     }
//   }, [bmsData, chargingPower]);
//   return (
//     <div
//       className="w-[768px] h-[1024px] overflow-hidden bg-[#2A2D32] font-sans pt-7"
//       style={{
//         backgroundImage: "url(/main-bg.png)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="flex justify-center items-center p-1 pt-20 w-full px-8">
//         <motion.div
//           className="text-left flex-col gap-2 mb-12 relative"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           <motion.div
//             className="text-white/90 text-5xl font-medium tracking-wider relative group"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             <span className={`${poppins.className} relative`}>
//               Charging {bmsData.SOC}%
//             </span>
//              <WaveCharging isChargeInit={isChargingInitialized} percentage={bmsData?.SOC} />
           
            
//           </motion.div>
//         </motion.div>
//       </div>
//       <div className="flex flex-col items-center gap-6 mb-12 scale-150">
//         <motion.div
//           className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/5 shadow-lg shadow-cyan-500/10"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.8 }}
//         >
//           <button
//             onClick={() => {
//               updateChargingStatus(false);
              
//               router.push("/");
//             }}
//             className="text-white/90 text-sm font-medium flex items-center"
//           >
//            {bmsData.SOC + "% "}Charged
//           </button>
//           <svg
//             width="14"
//             height="14"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="text-cyan-400"
//           >
//             <path
//               d="M13 2L4.09347 12.6879C3.74466 13.1064 3.57026 13.3157 3.56759 13.4925C3.56526 13.6461 3.63373 13.7923 3.75326 13.8889C3.89075 14 4.16318 14 4.70803 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </motion.div>
//       </div>
     
//       <WaveCharging isChargeInit={true} percentage={bmsData?.SOC} />
      
//       <div className="w-full px-12 mt-7">
//         <div className="grid grid-cols-2 gap-6">
//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.0 }}
//           >
//             <span className="text-nowrap">Energy: </span>
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300 text-nowrap">
//               {energyConsumed.toFixed(5)} kWh
//             </span>
//           </motion.div>

//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.2 }}
//           >
//             Time Remaining:{" "}
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//             {`${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
//             </span>
//           </motion.div>

//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.4 }}
//           >
//             Charging Current:{" "}
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//             {bmsData.current?.toFixed(2) ?? "0.00"} A
//             </span>
//           </motion.div>

//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.6 }}
//           >
//             Power:{" "}
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//             {(chargingPower / 1000).toFixed(5)} kW W
//             </span>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
  
// };


///fod


// "use client";
// import { motion } from "framer-motion";
// import { useChargingStatus } from "../../../hooks/useChargingStatus";
// import { useBMSData } from "../../../hooks/useBMSData";
// import { useTimerStatus } from "../../../hooks/useTimerStatus";
// import WaveCharging from "../../../components/WaveCharging";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

// export default function ChargePage() {
//   const router = useRouter();
//   const { isChargingInitialized, updateChargingStatus } = useChargingStatus(); // ✅ Use correct setter
//   const { bmsData, chargingPower } = useBMSData();
//   const { endTime } = useTimerStatus();

//   const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
//   const [energyConsumed, setEnergyConsumed] = useState(0);
//   useEffect(() => {
//     if (!endTime) return;
  
//     const updateCountdown = () => {
//       const now = Date.now();
//       const remainingTime = Math.max(0, endTime - now);
  
//       setTimeLeft({
//         hours: Math.floor(remainingTime / (1000 * 60 * 60)),
//         minutes: Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((remainingTime % (1000 * 60)) / 1000),
//       });
  
//       if (remainingTime <= 0) {
//         console.log("🔴 Timer reached zero. Stopping charge...");
//         clearInterval(interval);
//         updateChargingStatus(false).then(() => {
//           console.log("✅ Charging stopped. Redirecting...");

//         });
//       }
//     };
  
//     const interval = setInterval(updateCountdown, 1000);
//     updateCountdown(); // Run immediately
  
//     return () => clearInterval(interval);
//   }, [endTime, updateChargingStatus, router]);
  

//   useEffect(() => {
//     if (bmsData.isReceiverCoilDetected && bmsData.current > 0) {
//       const interval = setInterval(() => {
//         setEnergyConsumed((prev) => prev + chargingPower / 1000 / 3600);
//       }, 1000);

//       return () => clearInterval(interval);
//     }
//   }, [bmsData, chargingPower]);


//   useEffect(() => {
//     if (bmsData.isFOD) {
//       console.log("🚨 FOD Detected! Stopping charge...");
  
//       // Stop charging
//       updateChargingStatus(false);
  
//       // Show alert
//       alert("⚠️ Foreign Object Detected! Charging has been stopped for safety.");
  
//     }
//   }, [bmsData.isFOD, updateChargingStatus, router]);
  

//   useEffect(() => {
//     if (bmsData.isMiss) {
//       console.log("🚨 miss Detected! Stopping charge...");
  
//       // Stop charging
//       updateChargingStatus(false);
  
//       // Show alert
//       alert("⚠️ miss Object Detected! Charging has been stopped for safety.");
//     }
//   }, [bmsData.isMiss, updateChargingStatus, router]);
  
//   return (
//     <div
//       className="w-[768px] h-[1024px] overflow-hidden bg-[#2A2D32] font-sans pt-7"
//       style={{
//         backgroundImage: "url(/main-bg.png)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="flex justify-center items-center p-1 pt-20 w-full px-8">
//         <motion.div
//           className="text-left flex-col gap-2 mb-12 relative"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           <motion.div
//             className="text-white/90 text-5xl font-medium tracking-wider relative group"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             <span className={`${poppins.className} relative`}>
//               Charging {bmsData.SOC}%
//             </span>
//              <WaveCharging isChargeInit={isChargingInitialized} percentage={bmsData?.SOC} />
           
            
//           </motion.div>
//         </motion.div>
//       </div>
//       <div className="flex flex-col items-center gap-6 mb-12 scale-150">
//         <motion.div
//           className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/5 shadow-lg shadow-cyan-500/10"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.8 }}
//         >
//           <button
//             onClick={() => {
//               updateChargingStatus(false);
              
//               router.push("/");
//             }}
//             className="text-white/90 text-sm font-medium flex items-center"
//           >
//            {bmsData.SOC + "% "}Charged
//           </button>
//           <svg
//             width="14"
//             height="14"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="text-cyan-400"
//           >
//             <path
//               d="M13 2L4.09347 12.6879C3.74466 13.1064 3.57026 13.3157 3.56759 13.4925C3.56526 13.6461 3.63373 13.7923 3.75326 13.8889C3.89075 14 4.16318 14 4.70803 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </motion.div>
//       </div>
     
//       <WaveCharging isChargeInit={true} percentage={bmsData?.SOC} />

//       {bmsData.isFOD && (
//   <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-md shadow-lg z-50">
//     ⚠️ Foreign Object Detected! Charging Stopped.
//   </div>
// )}
      
//       {bmsData.isMiss && (
//   <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-md shadow-lg z-50">
//     ⚠️ miss alignemnt! Charging Stopped.
//   </div>
// )}

      
//       <div className="w-full px-12 mt-7">
//         <div className="grid grid-cols-2 gap-6">
//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.0 }}
//           >
//             <span className="text-nowrap">Energy: </span>
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300 text-nowrap">
//               {energyConsumed.toFixed(5)} kWh
//             </span>
//           </motion.div>

//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.2 }}
//           >
//             Time Remaining:{" "}
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//             {`${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
//             </span>
//           </motion.div>

//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.4 }}
//           >
//             Charging Current:{" "}
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//             {bmsData.current?.toFixed(2) ?? "0.00"} A
//             </span>
//           </motion.div>

//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.6 }}
//           >
//             Power:{" "}
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//             {(chargingPower / 1000).toFixed(5)} kW W
//             </span>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
  
// };
///miss alignment

// "use client";
// import { motion } from "framer-motion";
// import { useChargingStatus } from "../../../hooks/useChargingStatus";
// import { useBMSData } from "../../../hooks/useBMSData";
// import { useTimerStatus } from "../../../hooks/useTimerStatus";
// import WaveCharging from "../../../components/WaveCharging";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

// export default function ChargePage() {
//   const router = useRouter();
//   const { isChargingInitialized, updateChargingStatus } = useChargingStatus(); // ✅ Use correct setter
//   const { bmsData, chargingPower } = useBMSData();
//   const { endTime } = useTimerStatus();

//   const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
//   const [energyConsumed, setEnergyConsumed] = useState(0);
//   useEffect(() => {
//     if (!endTime) return;
  
//     const updateCountdown = () => {
//       const now = Date.now();
//       const remainingTime = Math.max(0, endTime - now);
  
//       setTimeLeft({
//         hours: Math.floor(remainingTime / (1000 * 60 * 60)),
//         minutes: Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((remainingTime % (1000 * 60)) / 1000),
//       });
  
//       if (remainingTime <= 0) {
//         console.log("🔴 Timer reached zero. Stopping charge...");
//         clearInterval(interval);
//         updateChargingStatus(false).then(() => {
//           console.log("✅ Charging stopped. Redirecting...");

//         });
//       }
//     };
  
//     const interval = setInterval(updateCountdown, 1000);
//     updateCountdown(); // Run immediately
  
//     return () => clearInterval(interval);
//   }, [endTime, updateChargingStatus, router]);
  

//   useEffect(() => {
//     if (bmsData.isReceiverCoilDetected && bmsData.current > 0) {
//       const interval = setInterval(() => {
//         setEnergyConsumed((prev) => prev + chargingPower / 1000 / 3600);
//       }, 1000);

//       return () => clearInterval(interval);
//     }
//   }, [bmsData, chargingPower]);


//   useEffect(() => {
//     if (bmsData.isFOD) {
//       console.log("🚨 FOD Detected! Stopping charge...");
  
//       // Stop charging
//       updateChargingStatus(false);
  
//       // Show alert
//       alert("⚠️ Foreign Object Detected! Charging has been stopped for safety.");
  
//     }
//   }, [bmsData.isFOD, updateChargingStatus, router]);
  

//   useEffect(() => {
//     if (bmsData.isMiss) {
//       console.log("🚨 Misalignment Detected! Stopping charge...");
      
//       // Stop charging
//       updateChargingStatus(false);
  
//       // Show alert
//       alert("⚠️ Misalignment Detected! Please align your vehicle properly. Charging has been stopped for safety.");
//     }
//   }, [bmsData.isMiss, updateChargingStatus, router]);
  
  
//   return (
//     <div
//       className="w-[768px] h-[1024px] overflow-hidden bg-[#2A2D32] font-sans pt-7"
//       style={{
//         backgroundImage: "url(/main-bg.png)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="flex justify-center items-center p-1 pt-20 w-full px-8">
//         <motion.div
//           className="text-left flex-col gap-2 mb-12 relative"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           <motion.div
//             className="text-white/90 text-5xl font-medium tracking-wider relative group"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             <span className={`${poppins.className} relative`}>
//               Charging {bmsData.SOC}%
//             </span>
//              <WaveCharging isChargeInit={isChargingInitialized} percentage={bmsData?.SOC} />
           
            
//           </motion.div>
//         </motion.div>
//       </div>
//       <div className="flex flex-col items-center gap-6 mb-12 scale-150">
//         <motion.div
//           className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/5 shadow-lg shadow-cyan-500/10"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.8 }}
//         >
//           <button
//             onClick={() => {
//               updateChargingStatus(false);
              
//               router.push("/");
//             }}
//             className="text-white/90 text-sm font-medium flex items-center"
//           >
//            {bmsData.SOC + "% "}Charged
//           </button>
//           <svg
//             width="14"
//             height="14"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="text-cyan-400"
//           >
//             <path
//               d="M13 2L4.09347 12.6879C3.74466 13.1064 3.57026 13.3157 3.56759 13.4925C3.56526 13.6461 3.63373 13.7923 3.75326 13.8889C3.89075 14 4.16318 14 4.70803 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </motion.div>
//       </div>
     
//       <WaveCharging isChargeInit={true} percentage={bmsData?.SOC} />

//       {bmsData.isFOD && (
//   <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-md shadow-lg z-50">
//     ⚠️ Foreign Object Detected! Charging Stopped.
//   </div>
// )}
      
//       {bmsData.isMiss && (
//   <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-md shadow-lg z-50">
//     ⚠️ Misalignment detected! Please adjust the vehicle.
//   </div>
// )}


      
//       <div className="w-full px-12 mt-7">
//         <div className="grid grid-cols-2 gap-6">
//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.0 }}
//           >
//             <span className="text-nowrap">Energy: </span>
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300 text-nowrap">
//               {energyConsumed.toFixed(5)} kWh
//             </span>
//           </motion.div>

//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.2 }}
//           >
//             Time Remaining:{" "}
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//             {`${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
//             </span>
//           </motion.div>

//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.4 }}
//           >
//             Charging Current:{" "}
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//             {bmsData.current?.toFixed(2) ?? "0.00"} A
//             </span>
//           </motion.div>

//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.6 }}
//           >
//             Power:{" "}
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//             {(chargingPower / 1000).toFixed(5)} kW W
//             </span>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
  
// };

//ui
// "use client";
// import { motion } from "framer-motion";
// import { useChargingStatus } from "../../../hooks/useChargingStatus";
// import { useBMSData } from "../../../hooks/useBMSData";
// import { useTimerStatus } from "../../../hooks/useTimerStatus";
// import WaveCharging from "../../../components/WaveCharging";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

// export default function ChargePage() {
//   const router = useRouter();
//   const { isChargingInitialized, updateChargingStatus } = useChargingStatus(); // ✅ Use correct setter
//   const { bmsData, chargingPower } = useBMSData();
//   const { endTime } = useTimerStatus();

//   const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
//   const [energyConsumed, setEnergyConsumed] = useState(0);
//   useEffect(() => {
//     if (!endTime) return;
  
//     const updateCountdown = () => {
//       const now = Date.now();
//       const remainingTime = Math.max(0, endTime - now);
  
//       setTimeLeft({
//         hours: Math.floor(remainingTime / (1000 * 60 * 60)),
//         minutes: Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((remainingTime % (1000 * 60)) / 1000),
//       });
  
//       if (remainingTime <= 0) {
//         console.log("🔴 Timer reached zero. Stopping charge...");
//         clearInterval(interval);
//         updateChargingStatus(false).then(() => {
//           console.log("✅ Charging stopped. Redirecting...");

//         });
//       }
//     };
  
//     const interval = setInterval(updateCountdown, 1000);
//     updateCountdown(); // Run immediately
  
//     return () => clearInterval(interval);
//   }, [endTime, updateChargingStatus, router]);
  

//   useEffect(() => {
//     if (bmsData.isReceiverCoilDetected && bmsData.current > 0) {
//       const interval = setInterval(() => {
//         setEnergyConsumed((prev) => prev + chargingPower / 1000 / 3600);
//       }, 1000);

//       return () => clearInterval(interval);
//     }
//   }, [bmsData, chargingPower]);


//   useEffect(() => {
//     if (bmsData.isFOD) {
//       console.log("🚨 FOD Detected! Stopping charge...");
  
//       // Stop charging
//       updateChargingStatus(false);
  
//       // Show alert
//       alert("⚠️ Foreign Object Detected! Charging has been stopped for safety.");
  
//     }
//   }, [bmsData.isFOD, updateChargingStatus, router]);
  

//   useEffect(() => {
//     if (bmsData.isMiss) {
//       console.log("🚨 Misalignment Detected! Stopping charge...");
      
//       // Stop charging
//       updateChargingStatus(false);
  
//       // Show alert
//       alert("⚠️ Misalignment Detected! Please align your vehicle properly. Charging has been stopped for safety.");
//     }
//   }, [bmsData.isMiss, updateChargingStatus, router]);
  
  
//   return (
//     <div
//       className="w-full h-screen overflow-hidden bg-[#2A2D32] font-sans pt-7 flex flex-col items-center"
//       style={{
//         backgroundImage: "url(/main-bg.png)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="flex justify-center items-center p-1 pt-20 w-full px-8">
//         <motion.div
//           className="text-left flex-col gap-2 mb-12 relative"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           <motion.div
//             className="text-white/90 text-5xl font-medium tracking-wider relative group"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             <span className={`${poppins.className} relative`}>
//               Charging {bmsData.SOC}%
//             </span>
//              <WaveCharging isChargeInit={isChargingInitialized} percentage={bmsData?.SOC} />
           
            
//           </motion.div>
//         </motion.div>
//       </div>
//       <div className="flex flex-col items-center gap-6 mb-12 scale-150">
//         <motion.div
//           className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/5 shadow-lg shadow-cyan-500/10"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.8 }}
//         >
//           <button
//             onClick={() => {
//               updateChargingStatus(false);
              
//               router.push("/");
//             }}
//             className="text-white/90 text-sm font-medium flex items-center"
//           >
//            {bmsData.SOC + "% "}Charged
//           </button>
//           <svg
//             width="14"
//             height="14"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="text-cyan-400"
//           >
//             <path
//               d="M13 2L4.09347 12.6879C3.74466 13.1064 3.57026 13.3157 3.56759 13.4925C3.56526 13.6461 3.63373 13.7923 3.75326 13.8889C3.89075 14 4.16318 14 4.70803 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </motion.div>
//       </div>
     
//       <WaveCharging isChargeInit={true} percentage={bmsData?.SOC} />

//       {bmsData.isFOD && (
//   <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-md shadow-lg z-50">
//     ⚠️ Foreign Object Detected! Charging Stopped.
//   </div>
// )}
      
//       {bmsData.isMiss && (
//   <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-md shadow-lg z-50">
//     ⚠️ Misalignment detected! Please adjust the vehicle.
//   </div>
// )}


      
//       <div className="w-full px-12 mt-7">
//         <div className="grid grid-cols-2 gap-6">
//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.0 }}
//           >
//             <span className="text-nowrap">Energy: </span>
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300 text-nowrap">
//               {energyConsumed.toFixed(5)} kWh
//             </span>
//           </motion.div>

//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.2 }}
//           >
//             Time Remaining:{" "}
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//             {`${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
//             </span>
//           </motion.div>

//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.4 }}
//           >
//             Charging Current:{" "}
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//             {bmsData.current?.toFixed(2) ?? "0.00"} A
//             </span>
//           </motion.div>

//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.6 }}
//           >
//             Power:{" "}
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//             {(chargingPower / 1000).toFixed(5)} kW W
//             </span>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
  
// };
//FOD UI
// "use client";
// import { motion } from "framer-motion";
// import { useChargingStatus } from "../../../hooks/useChargingStatus";
// import { useBMSData } from "../../../hooks/useBMSData";
// import { useTimerStatus } from "../../../hooks/useTimerStatus";
// import WaveCharging from "../../../components/WaveCharging";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Poppins } from "next/font/google";
// import FODDialog from "../../../components/FODDialog"

// const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

// export default function ChargePage() {
//   const router = useRouter();
//   const { isChargingInitialized, updateChargingStatus } = useChargingStatus(); // ✅ Use correct setter
//   const { bmsData, chargingPower } = useBMSData();
//   const { endTime } = useTimerStatus();

//   const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
//   const [energyConsumed, setEnergyConsumed] = useState(0);
//   useEffect(() => {
//     if (!endTime) return;
  
//     const updateCountdown = () => {
//       const now = Date.now();
//       const remainingTime = Math.max(0, endTime - now);
  
//       setTimeLeft({
//         hours: Math.floor(remainingTime / (1000 * 60 * 60)),
//         minutes: Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((remainingTime % (1000 * 60)) / 1000),
//       });
  
//       if (remainingTime <= 0) {
//         console.log("🔴 Timer reached zero. Stopping charge...");
//         clearInterval(interval);
//         updateChargingStatus(false).then(() => {
//           console.log("✅ Charging stopped. Redirecting...");

//         });
//       }
//     };
  
//     const interval = setInterval(updateCountdown, 1000);
//     updateCountdown(); // Run immediately
  
//     return () => clearInterval(interval);
//   }, [endTime, updateChargingStatus, router]);
  

//   useEffect(() => {
//     if (bmsData.isReceiverCoilDetected && bmsData.current > 0) {
//       const interval = setInterval(() => {
//         setEnergyConsumed((prev) => prev + chargingPower / 1000 / 3600);
//       }, 1000);

//       return () => clearInterval(interval);
//     }
//   }, [bmsData, chargingPower]);


//   const [isFODDetected, setIsFODDetected] = useState(false);

// useEffect(() => {
//   if (bmsData.isFOD) {
//     console.log("🚨 FOD Detected! Stopping charge...");
//     updateChargingStatus(false);
//     setIsFODDetected(true);  // Open modal instead of alert
//   }

//   else {
//     updateChargingStatus(true);
//     setIsFODDetected(false);
    
//   }
// }, [bmsData.isFOD, updateChargingStatus, router]);

  

//   useEffect(() => {
//     if (bmsData.isMiss) {
//       console.log("🚨 Misalignment Detected! Stopping charge...");
      
//       // Stop charging
//       updateChargingStatus(false);
  
//       // Show alert
//       alert("⚠️ Misalignment Detected! Please align your vehicle properly. Charging has been stopped for safety.");
//     }
//   }, [bmsData.isMiss, updateChargingStatus, router]);
  
  
//   return (
//     <div
//       className="w-full h-screen overflow-hidden bg-[#2A2D32] font-sans pt-7 flex flex-col items-center"
//       style={{
//         backgroundImage: "url(/main-bg.png)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="flex justify-center items-center p-1 pt-20 w-full px-8">
//         <motion.div
//           className="text-left flex-col gap-2 mb-12 relative"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           <motion.div
//             className="text-white/90 text-5xl font-medium tracking-wider relative group"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             <span className={`${poppins.className} relative`}>
//               Charging {bmsData.SOC}%
//             </span>
//              <WaveCharging isChargeInit={isChargingInitialized} percentage={bmsData?.SOC} />
           
            
//           </motion.div>
//         </motion.div>
//       </div>
//       <div className="flex flex-col items-center gap-6 mb-12 scale-150">
//         <motion.div
//           className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/5 shadow-lg shadow-cyan-500/10"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.8 }}
//         >
//           <button
//             onClick={() => {
//               updateChargingStatus(false);
              
//               router.push("/");
//             }}
//             className="text-white/90 text-sm font-medium flex items-center"
//           >
//            {bmsData.SOC + "% "}Charged
//           </button>
//           <svg
//             width="14"
//             height="14"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="text-cyan-400"
//           >
//             <path
//               d="M13 2L4.09347 12.6879C3.74466 13.1064 3.57026 13.3157 3.56759 13.4925C3.56526 13.6461 3.63373 13.7923 3.75326 13.8889C3.89075 14 4.16318 14 4.70803 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </motion.div>
//       </div>
     
//       <WaveCharging isChargeInit={true} percentage={bmsData?.SOC} />

//       {/* {bmsData.isFOD && (
//   <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-md shadow-lg z-50">
//     ⚠️ Foreign Object Detected! Charging Stopped.
//   </div>
// )} */}
      
//       {bmsData.isFOD && <FODDialog />}


    
      
//       {bmsData.isMiss && (
//   <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-md shadow-lg z-50">
//     ⚠️ Misalignment detected! Please adjust the vehicle.
//   </div>
// )}


      
//       <div className="w-full px-12 mt-7">
//         <div className="grid grid-cols-2 gap-6">
//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.0 }}
//           >
//             <span className="text-nowrap">Energy: </span>
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300 text-nowrap">
//               {energyConsumed.toFixed(5)} kWh
//             </span>
//           </motion.div>

//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.2 }}
//           >
//             Time Remaining:{" "}
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//             {`${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
//             </span>
//           </motion.div>

//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.4 }}
//           >
//             Charging Current:{" "}
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//             {bmsData.current?.toFixed(2) ?? "0.00"} A
//             </span>
//           </motion.div>

//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.6 }}
//           >
//             Power:{" "}
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//             {(chargingPower / 1000).toFixed(5)} kW W
//             </span>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
  
// };

//ui miss
"use client";
import { motion } from "framer-motion";
import { useChargingStatus } from "../../../hooks/useChargingStatus";
import { useBMSData } from "../../../hooks/useBMSData";
import { useTimerStatus } from "../../../hooks/useTimerStatus";
import WaveCharging from "../../../components/WaveCharging";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";
import FODDialog from "../../../components/FODDialog"
import MissDialog from "../../../components/MissDialog";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

export default function ChargePage() {
  const router = useRouter();
  const { isChargingInitialized, updateChargingStatus } = useChargingStatus(); // ✅ Use correct setter
  const { bmsData, chargingPower } = useBMSData();
  const { endTime } = useTimerStatus();

  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [energyConsumed, setEnergyConsumed] = useState(0);
  useEffect(() => {
    if (!endTime) return;
  
    const updateCountdown = () => {
      const now = Date.now();
      const remainingTime = Math.max(0, endTime - now);
  
      setTimeLeft({
        hours: Math.floor(remainingTime / (1000 * 60 * 60)),
        minutes: Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((remainingTime % (1000 * 60)) / 1000),
      });
  
      if (remainingTime <= 0) {
        console.log("🔴 Timer reached zero. Stopping charge...");
        clearInterval(interval);
        updateChargingStatus(false).then(() => {
          console.log("✅ Charging stopped. Redirecting...");

        });
      }
    };
  
    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Run immediately
  
    return () => clearInterval(interval);
  }, [endTime, updateChargingStatus, router]);
  

  useEffect(() => {
    if (bmsData.isReceiverCoilDetected && bmsData.current > 0) {
      const interval = setInterval(() => {
        setEnergyConsumed((prev) => prev + chargingPower / 1000 / 3600);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [bmsData, chargingPower]);


//   const [isFODDetected, setIsFODDetected] = useState(false);

// useEffect(() => {
//   if (bmsData.isFOD) {
//     console.log("🚨 FOD Detected! Stopping charge...");
//     updateChargingStatus(false);
//     setIsFODDetected(true);  // Open modal instead of alert
//   }

//   else {
//     updateChargingStatus(true);
//     setIsFODDetected(false);
    
//   }
// }, [bmsData.isFOD, updateChargingStatus, router]);

  

// const [isMissDetected, setIsMissDetected] = useState(false);

// useEffect(() => {
//   if (bmsData?.isMiss) {
//     console.log("🚨 Misalignment Detected! Stopping charge...");
//     updateChargingStatus(false); // Stop charging
//     setIsMissDetected(true); // Show Misalignment Dialog
//   } else {
//     updateChargingStatus(true); // Resume charging
//     setIsMissDetected(false); // Hide Misalignment Dialog
//   }
  // }, [bmsData?.isMiss, updateChargingStatus]);
  

  const [isIssueDetected, setIsIssueDetected] = useState({ isFOD: false, isMiss: false });

useEffect(() => {
  if (bmsData?.isFOD || bmsData?.isMiss) {
    console.log("🚨 Issue Detected! Stopping charge...");
    updateChargingStatus(false);
    setIsIssueDetected({ isFOD: bmsData?.isFOD, isMiss: bmsData?.isMiss });
  } else {
    updateChargingStatus(true);
    setIsIssueDetected({ isFOD: false, isMiss: false });
  }
}, [bmsData?.isFOD, bmsData?.isMiss, updateChargingStatus]);
  
useEffect(() => {
  console.log("WaveCharging mounted with percentage:", bmsData?.SOC);
}, [bmsData?.SOC]);



  
  
//   return (
//     <div
//       className="w-full h-screen overflow-hidden bg-[#2A2D32] font-sans pt-7 flex flex-col items-center"
//       style={{
//         backgroundImage: "url(/main-bg.png)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="flex justify-center items-center p-1 pt-20 w-full px-8">
//         <motion.div
//           className="text-left flex-col gap-2 mb-12 relative"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           <motion.div
//             className="text-white/90 text-5xl font-medium tracking-wider relative group"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             <span className={`${poppins.className} relative`}>
//               Charging {bmsData.SOC}%
//             </span>
            
//           </motion.div>
//         </motion.div>
//       </div>

      
//       {bmsData?.isFOD && <FODDialog />}
//       {bmsData?.isMiss && <MissDialog />}


//       <div className="flex flex-col items-center gap-6 mb-12">

//         <motion.div
//           className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/5 shadow-lg shadow-cyan-500/10"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.8 }}
//         >
//           <button
//             onClick={() => {
//               updateChargingStatus(false);
              
//               router.push("/");
//             }}
//             className="text-white/90 text-sm font-medium flex items-center"
//           >
//            {bmsData.SOC + "% "}Charged
//           </button>
//           <svg
//             width="14"
//             height="14"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="text-cyan-400"
//           >
//             <path
//               d="M13 2L4.09347 12.6879C3.74466 13.1064 3.57026 13.3157 3.56759 13.4925C3.56526 13.6461 3.63373 13.7923 3.75326 13.8889C3.89075 14 4.16318 14 4.70803 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </motion.div>
//       </div>
     
//       <div className="w-full flex justify-center relative z-10">
//       <WaveCharging isChargeInit={true} percentage={bmsData?.SOC || 0} />

// </div>



//       <div className="w-full px-12 mt-7">
//         <div className="grid grid-cols-2 gap-6">
//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.0 }}
//           >
//             <span className="text-nowrap">Energy: </span>
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300 text-nowrap">
//               {energyConsumed.toFixed(5)} kWh
//             </span>
//           </motion.div>

//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.2 }}
//           >
//             Time Remaining:{" "}
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//             {`${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
//             </span>
//           </motion.div>

//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.4 }}
//           >
//             Charging Current:{" "}
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//             {bmsData.current?.toFixed(2) ?? "0.00"} A
//             </span>
//           </motion.div>

//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.6 }}
//           >
//             Power:{" "}
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//             {(chargingPower / 1000).toFixed(5)} kW W
//             </span>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
  
// };

return (
  <div className="w-full h-screen overflow-hidden bg-[#2A2D32] font-sans pt-7 flex flex-col items-center" style={{
    backgroundImage: "url(/main-bg.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
    {/* Title */}
    <motion.div className="text-white/90 text-5xl font-medium tracking-wider mt-20"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}>
      Charging {bmsData.SOC}%
    </motion.div>

    {/* Dialogs */}
    {bmsData?.isFOD && <FODDialog />}
    {bmsData?.isMiss && <MissDialog />}

    {/* Wave Charging Section */}
    <div className="flex justify-center items-center w-full h-80 relative mt-10">
      <WaveCharging isChargeInit={true} percentage={bmsData?.SOC || 0} />
    </div>

    {/* Charging Status Button */}
    <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/5 shadow-lg shadow-cyan-500/10 mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}>
      <button onClick={() => { updateChargingStatus(false); router.push("/"); }} className="text-white/90 text-sm font-medium flex items-center">
        {bmsData.SOC}% Charged
      </button>
    </motion.div>

    {/* Information Grid */}
    <div className="w-full px-12 mt-7 grid grid-cols-2 gap-6">
      {[
        { label: "Energy", value: `${energyConsumed.toFixed(5)} kWh` },
        { label: "Time Remaining", value: `${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s` },
        { label: "Charging Current", value: `${bmsData.current?.toFixed(2) ?? "0.00"} A` },
        { label: "Power", value: `${(chargingPower / 1000).toFixed(5)} kW` }
      ].map((item, index) => (
        <motion.div key={index} className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] hover:bg-black/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 + index * 0.2 }}>
          {item.label}: <span className="group-hover:text-cyan-400/90 transition-colors duration-300">{item.value}</span>
        </motion.div>
      ))}
    </div>
  </div>
);
};