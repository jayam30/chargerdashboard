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
// "use client";
// import { motion } from "framer-motion";
// import { useChargingStatus } from "../../../hooks/useChargingStatus";
// import { useBMSData } from "../../../hooks/useBMSData";
// import { useTimerStatus } from "../../../hooks/useTimerStatus";
// import WaveCharging from "../../../components/WaveCharging";
// import { useEffect, useMemo, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Poppins } from "next/font/google";
// import FODDialog from "../../../components/FODDialog"
// import MissDialog from "../../../components/MissDialog";

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

// //   const [isFODDetected, setIsFODDetected] = useState(false);

// // useEffect(() => {
// //   if (bmsData.isFOD) {
// //     console.log("🚨 FOD Detected! Stopping charge...");
// //     updateChargingStatus(false);
// //     setIsFODDetected(true);  // Open modal instead of alert
// //   }

// //   else {
// //     updateChargingStatus(true);
// //     setIsFODDetected(false);

// //   }
// // }, [bmsData.isFOD, updateChargingStatus, router]);

// // const [isMissDetected, setIsMissDetected] = useState(false);

// // useEffect(() => {
// //   if (bmsData?.isMiss) {
// //     console.log("🚨 Misalignment Detected! Stopping charge...");
// //     updateChargingStatus(false); // Stop charging
// //     setIsMissDetected(true); // Show Misalignment Dialog
// //   } else {
// //     updateChargingStatus(true); // Resume charging
// //     setIsMissDetected(false); // Hide Misalignment Dialog
// //   }
//   // }, [bmsData?.isMiss, updateChargingStatus]);

//   const [isIssueDetected, setIsIssueDetected] = useState({ isFOD: false, isMiss: false });

// useEffect(() => {
//   if (bmsData?.isFOD || bmsData?.isMiss) {
//     console.log("🚨 Issue Detected! Stopping charge...");
//     updateChargingStatus(false);
//     setIsIssueDetected({ isFOD: bmsData?.isFOD, isMiss: bmsData?.isMiss });
//   } else {
//     updateChargingStatus(true);
//     setIsIssueDetected({ isFOD: false, isMiss: false });
//   }
// }, [bmsData?.isFOD, bmsData?.isMiss, updateChargingStatus]);

// useEffect(() => {
//   console.log("WaveCharging mounted with percentage:", bmsData?.SOC);
// }, [bmsData?.SOC]);

// // const waveColor = useMemo(() => {
// //   if () return "rgba(255, 59, 48, 0.7)"; // Red for error
// //   if (chargingStatus.isComplete) return "rgba(52, 199, 89, 0.7)"; // Green for complete
// //   return "rgba(0, 122, 255, 0.7)"; // Blue for charging
// // }, [chargingStatus]);

// //   return (
// //     <div
// //       className="w-full h-screen overflow-hidden bg-[#2A2D32] font-sans pt-7 flex flex-col items-center"
// //       style={{
// //         backgroundImage: "url(/main-bg.png)",
// //         backgroundSize: "cover",
// //         backgroundPosition: "center",
// //       }}
// //     >
// //       <div className="flex justify-center items-center p-1 pt-20 w-full px-8">
// //         <motion.div
// //           className="text-left flex-col gap-2 mb-12 relative"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ duration: 0.3 }}
// //         >
// //           <motion.div
// //             className="text-white/90 text-5xl font-medium tracking-wider relative group"
// //             initial={{ opacity: 0, x: -20 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.5, delay: 0.6 }}
// //           >
// //             <span className={`${poppins.className} relative`}>
// //               Charging {bmsData.SOC}%
// //             </span>

// //           </motion.div>
// //         </motion.div>
// //       </div>

// //       {bmsData?.isFOD && <FODDialog />}
// //       {bmsData?.isMiss && <MissDialog />}

// //       <div className="flex flex-col items-center gap-6 mb-12">

// //         <motion.div
// //           className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/5 shadow-lg shadow-cyan-500/10"
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5, delay: 0.8 }}
// //         >
// //           <button
// //             onClick={() => {
// //               updateChargingStatus(false);

// //               router.push("/");
// //             }}
// //             className="text-white/90 text-sm font-medium flex items-center"
// //           >
// //            {bmsData.SOC + "% "}Charged
// //           </button>
// //           <svg
// //             width="14"
// //             height="14"
// //             viewBox="0 0 24 24"
// //             fill="none"
// //             xmlns="http://www.w3.org/2000/svg"
// //             className="text-cyan-400"
// //           >
// //             <path
// //               d="M13 2L4.09347 12.6879C3.74466 13.1064 3.57026 13.3157 3.56759 13.4925C3.56526 13.6461 3.63373 13.7923 3.75326 13.8889C3.89075 14 4.16318 14 4.70803 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z"
// //               stroke="currentColor"
// //               strokeWidth="2"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //             />
// //           </svg>
// //         </motion.div>
// //       </div>

// //       <div className="w-full flex justify-center relative z-10">
// //       <WaveCharging isChargeInit={true} percentage={bmsData?.SOC || 0} />

// // </div>

// //       <div className="w-full px-12 mt-7">
// //         <div className="grid grid-cols-2 gap-6">
// //           <motion.div
// //             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 1.0 }}
// //           >
// //             <span className="text-nowrap">Energy: </span>
// //             <span className="group-hover:text-cyan-400/90 transition-colors duration-300 text-nowrap">
// //               {energyConsumed.toFixed(5)} kWh
// //             </span>
// //           </motion.div>

// //           <motion.div
// //             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 1.2 }}
// //           >
// //             Time Remaining:{" "}
// //             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
// //             {`${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
// //             </span>
// //           </motion.div>

// //           <motion.div
// //             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 1.4 }}
// //           >
// //             Charging Current:{" "}
// //             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
// //             {bmsData.current?.toFixed(2) ?? "0.00"} A
// //             </span>
// //           </motion.div>

// //           <motion.div
// //             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 1.6 }}
// //           >
// //             Power:{" "}
// //             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
// //             {(chargingPower / 1000).toFixed(5)} kW W
// //             </span>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </div>
// //   );

//   // };

//   const waveColor = useMemo(() => {
//     const soc = bmsData?.SOC; // Get SOC from bmsData

//     if (soc >= 100) return "rgba(52, 199, 89, 0.7)"; // Green for full charge
//     if (soc >= 75) return "rgba(0, 122, 255, 0.7)"; // Blue for high charge
//     if (soc >= 50) return "rgba(255, 204, 0, 0.7)"; // Yellow for medium charge
//     if (soc >= 25) return "rgba(255, 59, 48, 0.7)"; // Red for low charge
//     return "rgba(255, 59, 48, 0.7)"; // Red for very low charge
//   }, [bmsData?.SOC]);

//   // SVG path rendering based on wave color

// return (
//   <div className="w-full h-screen overflow-hidden bg-[#2A2D32] font-sans pt-7 flex flex-col items-center" style={{
//     backgroundImage: "url(/main-bg.png)",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   }}>
//     {/* Title */}
//     <motion.div className="text-white/90 text-5xl font-medium tracking-wider mt-20"
//       initial={{ opacity: 0, x: -20 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.5, delay: 0.6 }}>
//       Charging {bmsData.SOC}%
//     </motion.div>

//     {/* Dialogs */}
//     {bmsData?.isFOD && <FODDialog />}
//     {bmsData?.isMiss && <MissDialog />}

//     {/* Wave Charging Section */}
//     {/* <div className="flex justify-center items-center w-full h-80 relative mt-10">
//       <WaveCharging isChargeInit={true} percentage={bmsData?.SOC || 0} />
//     </div> */}

// <div className="flex justify-center items-center w-full h-80 relative mt-10">
//         <WaveCharging
//           percentage={bmsData?.SOC || 0}
//           waveColor={waveColor}
//           backgroundColor="rgba(255, 255, 255, 0.1)"
//           size={200}
//         />
//       </div>

//     {/* Charging Status Button */}
//     <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/5 shadow-lg shadow-cyan-500/10 mt-6"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: 0.8 }}>
//       <button onClick={() => { updateChargingStatus(false); router.push("/"); }} className="text-white/90 text-sm font-medium flex items-center">
//         {bmsData.SOC}% Charged
//       </button>
//     </motion.div>

//     {/* Information Grid */}
//     <div className="w-full px-12 mt-7 grid grid-cols-2 gap-6">
//       {[
//         { label: "Energy", value: `${energyConsumed.toFixed(5)} kWh` },
//         { label: "Time Remaining", value: `${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s` },
//         { label: "Charging Current", value: `${bmsData.current?.toFixed(2) ?? "0.00"} A` },
//         { label: "Power", value: `${(chargingPower / 1000).toFixed(5)} kW` }
//       ].map((item, index) => (
//         <motion.div key={index} className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] hover:bg-black/30"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 1.0 + index * 0.2 }}>
//           {item.label}: <span className="group-hover:text-cyan-400/90 transition-colors duration-300">{item.value}</span>
//         </motion.div>
//       ))}
//     </div>
//   </div>
// );
// };
//wave
// "use client";
// import { motion } from "framer-motion";
// import { useChargingStatus } from "../../../hooks/useChargingStatus";
// import { useBMSData } from "../../../hooks/useBMSData";
// import { useTimerStatus } from "../../../hooks/useTimerStatus";
// import WaveCharging from "../../../components/WaveCharging";
// import { useEffect, useMemo, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Poppins } from "next/font/google";
// import FODDialog from "../../../components/FODDialog";
// import MissDialog from "../../../components/MissDialog";
// import { Pause } from "lucide-react";

// const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

// export default function ChargePage() {
//   const router = useRouter();
//   const { updateChargingStatus } = useChargingStatus();

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
//         clearInterval(interval);
//         updateChargingStatus(false).then(() => {
//           router.push("/");
//         });
//       }
//     };

//     const interval = setInterval(updateCountdown, 1000);
//     updateCountdown();

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

//   const [isIssueDetected, setIsIssueDetected] = useState({ isFOD: false, isMiss: false });

//   useEffect(() => {
//     if (bmsData?.isFOD || bmsData?.isMiss) {
//       updateChargingStatus(false);
//       setIsIssueDetected({ isFOD: bmsData?.isFOD, isMiss: bmsData?.isMiss });

//     } else {
//       updateChargingStatus(true);
//       setIsIssueDetected({ isFOD: false, isMiss: false });

//     }
//   }, [bmsData?.isFOD, bmsData?.isMiss, updateChargingStatus]);

//   const waveColor = useMemo(() => {
//     const soc = bmsData?.SOC;

//     if (soc >= 100) return "rgba(52, 199, 89, 0.7)";
//     if (soc >= 75) return "rgba(0, 122, 255, 0.7)";
//     if (soc >= 50) return "rgba(255, 204, 0, 0.7)";
//     if (soc >= 25) return "rgba(255, 59, 48, 0.7)";
//     return "rgba(255, 59, 48, 0.7)";
//   }, [bmsData?.SOC]);

//   return (
//     <div
//       className="w-full h-screen overflow-hidden bg-[#2A2D32] font-sans pt-7 flex flex-col items-center"
//       style={{
//         backgroundImage: "url(/main-bg.png)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <motion.div
//         className="text-white/90 text-5xl font-medium tracking-wider mt-20"
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.5, delay: 0.6 }}
//       >
//         Charging {bmsData.SOC}%
//       </motion.div>

//       {bmsData?.isFOD && <FODDialog />}
//       {bmsData?.isMiss && <MissDialog />}

//       <div className="flex justify-center items-center w-full h-80 relative mt-10">
//         <WaveCharging
//           percentage={bmsData?.SOC || 0}
//           waveColor={waveColor}
//           backgroundColor="rgba(255, 255, 255, 0.1)"
//           size={200}
//         />
//       </div>

//       <motion.div
//         className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/5 shadow-lg shadow-cyan-500/10 mt-6"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.8 }}
//       >
//         <button
//           onClick={() => {
//             updateChargingStatus(false);
//             router.push("/");
//           }}
//           className="text-white/90 text-sm font-medium flex items-center"
//         >
//           {bmsData.SOC}% Charged
//         </button>
//       </motion.div>

//       <div className="w-full px-12 mt-7 grid grid-cols-2 gap-6">
//         {[
//           { label: "Energy", value: `${energyConsumed.toFixed(5)} kWh` },
//           { label: "Time Remaining", value: `${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s` },
//           { label: "Charging Current", value: `${bmsData.current?.toFixed(2) ?? "0.00"} A` },
//           { label: "Power", value: `${(chargingPower / 1000).toFixed(5)} kW` },
//         ].map((item, index) => (
//           <motion.div
//             key={index}
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.0 + index * 0.2 }}
//           >
//             {item.label}: <span className="group-hover:text-cyan-400/90 transition-colors duration-300">{item.value}</span>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }
// //bike
// "use client";
// import { motion } from "framer-motion";
// import { useChargingStatus } from "../../../hooks/useChargingStatus";
// import { useBMSData } from "../../../hooks/useBMSData";
// import { useTimerStatus } from "../../../hooks/useTimerStatus";
// import WaveCharging from "../../../components/WaveCharging";
// import { useEffect, useMemo, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Poppins } from "next/font/google";
// import FODDialog from "../../../components/FODDialog";
// import MissDialog from "../../../components/MissDialog";
// import { Pause } from "lucide-react";
// import Image from "next/image";

// const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

// export default function ChargePage() {
//   const router = useRouter();
//   const { updateChargingStatus } = useChargingStatus();

//   const { bmsData, chargingPower } = useBMSData();
//   const { endTime } = useTimerStatus();

//   const [timeLeft, setTimeLeft] = useState({
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });
//   const [energyConsumed, setEnergyConsumed] = useState(0);

//   useEffect(() => {
//     if (!endTime || !bmsData?.isReceiverCoilDetected) return;

//     const updateCountdown = () => {
//       const now = Date.now();
//       const remainingTime = Math.max(0, endTime - now);

//       setTimeLeft({
//         hours: Math.floor(remainingTime / (1000 * 60 * 60)),
//         minutes: Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((remainingTime % (1000 * 60)) / 1000),
//       });

//       if (remainingTime <= 0) {
//         clearInterval(interval);
//         updateChargingStatus(false).then(() => {
//           router.push("/");
//         });
//       }
//     };

//     const interval = setInterval(updateCountdown, 1000);
//     updateCountdown();

//     return () => clearInterval(interval);
//   }, [endTime, updateChargingStatus, router, !bmsData?.isReceiverCoilDetected]);

//   useEffect(() => {
//     if (bmsData.isReceiverCoilDetected && bmsData.current > 0) {
//       const interval = setInterval(() => {
//         setEnergyConsumed((prev) => prev + chargingPower / 1000 / 3600);
//       }, 1000);

//       return () => clearInterval(interval);
//     }
//   }, [bmsData, chargingPower]);

//   const [isIssueDetected, setIsIssueDetected] = useState({
//     isFOD: false,
//     isMiss: false,
//   });

//   useEffect(() => {
//     if ((bmsData?.isFOD || bmsData?.isMiss, !bmsData?.isReceiverCoilDetected)) {
//       updateChargingStatus(false);
//       setIsIssueDetected({ isFOD: bmsData?.isFOD, isMiss: bmsData?.isMiss });
//     } else {
//       updateChargingStatus(true);
//       setIsIssueDetected({ isFOD: false, isMiss: false });
//     }
//   }, [
//     bmsData?.isFOD,
//     bmsData?.isMiss,
//     updateChargingStatus,
//     !bmsData?.isReceiverCoilDetected,
//   ]);

//   const waveColor = useMemo(() => {
//     const soc = bmsData?.SOC;

//     if (soc >= 100) return "rgba(52, 199, 89, 0.7)";
//     if (soc >= 75) return "rgba(0, 122, 255, 0.7)";
//     if (soc >= 50) return "rgba(255, 204, 0, 0.7)";
//     if (soc >= 25) return "rgba(255, 59, 48, 0.7)";
//     return "rgba(255, 59, 48, 0.7)";
//   }, [bmsData?.SOC]);

//   // const [parkCountdown, setParkCountdown] = useState<number>(60);
//   // const [unparkStartTime, setUnparkStartTime] = useState<number | null>(null);

//   // useEffect(() => {
//   //   let countdownInterval: NodeJS.Timeout;

//   //   if (!bmsData?.isReceiverCoilDetected) {
//   //     if (!unparkStartTime) {
//   //       setUnparkStartTime(Date.now());
//   //     }

//   //     countdownInterval = setInterval(() => {
//   //       setParkCountdown((prev) => {
//   //         if (prev <= 1) {
//   //           updateChargingStatus(false);
//   //           setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
//   //           setEnergyConsumed(0);
//   //           setUnparkStartTime(null);
//   //           router.push("/");
//   //           return 0;
//   //         }
//   //         return prev - 1;
//   //       });
//   //     }, 1000);
//   //   } else {
//   //     setUnparkStartTime(null);
//   //     setParkCountdown(60);
//   //   }

//   //   return () => clearInterval(countdownInterval);
//   // }, [bmsData?.isReceiverCoilDetected, updateChargingStatus, router]);

//   // const [parkCountdown, setParkCountdown] = useState(60);
//   // useEffect(() => {
//   //   if (!bmsData?.isReceiverCoilDetected) {

//   //     const interval = setInterval(() => setParkCountdown((prev) => Math.max(prev - 1, 0)), 1000);
//   //     return () => clearInterval(interval);
//   //   }

//   //   setParkCountdown(60);
//   //   if (parkCountdown < 1) router.push("/");
//   // }, [bmsData?.isReceiverCoilDetected, parkCountdown]);

//   const [parkCountdown, setParkCountdown] = useState(60);

//   useEffect(() => {
//     let interval: NodeJS.Timeout;

//     if (!bmsData?.isReceiverCoilDetected) {
//       if (parkCountdown === 0) {
//         // Countdown is over, redirect to home
//         router.push("/");
//         return;
//       }

//       // Start countdown
//       interval = setInterval(() => {
//         setParkCountdown((prev) => {
//           if (prev <= 1) {
//             clearInterval(interval);
//             router.push("/");
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//     } else {
//       // Reset countdown if receiver coil is detected
//       setParkCountdown(60);
//     }

//     return () => clearInterval(interval);
//   }, [bmsData?.isReceiverCoilDetected, parkCountdown, router]);

//   const formatTime = (value: number): string => {
//     return value.toString().padStart(2, "0");
//   };

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
//           className="text-white/90 text-5xl font-medium tracking-wider mt-20"
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//         >
//           <span
//             className={`${poppins.className} relative ${
//               bmsData?.isReceiverCoilDetected ? "" : "text-white"
//             }`}
//           >
//             {bmsData?.isReceiverCoilDetected ? (
//               bmsData?.current <= 0 ? (
//                 "Charging Paused"
//               ) : (
//                 "Charging"
//               )
//             ) : (
//               <div className="flex items-center gap-3">
//                 <span>Park your vehicle</span>
//                 <span className="text-red-400 font-mono bg-red-500/10 px-3 py-0.5 rounded-md border border-red-500/20">
//                   {Math.floor(parkCountdown / 60)}:
//                   {(parkCountdown % 60).toString().padStart(2, "0")}
//                 </span>
//               </div>
//             )}
//           </span>
//         </motion.div>
//       </div>

//       {bmsData?.isFOD && <FODDialog />}
//       {bmsData?.isMiss && <MissDialog />}

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
//             {bmsData?.SOC || 0 + "% "}Charged
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












//       <div className="flex justify-center items-center w-full h-80 relative mt-10">
//         <WaveCharging
//           percentage={bmsData?.SOC || 0}
//           waveColor={waveColor}
//           backgroundColor="rgba(255, 255, 255, 0.1)"
//           size={200}
//         />
//       </div>

//       <div className="flex w-full justify-center items-center mb-4">
//         <div className="flex-col justify-center items-center gap-36">
//           <motion.div
//             initial={{ x: 768 }}
//             animate={{ x: 0 }}
//             key={bmsData?.isReceiverCoilDetected ? "parked" : "not-parked"}
//             transition={{
//               duration: 5,
//               type: "spring",
//               stiffness: 100,
//               damping: 100,
//               repeat: bmsData?.isReceiverCoilDetected ? 0 : Infinity,
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
//       </div>

//       {/* <motion.div
//         className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/5 shadow-lg shadow-cyan-500/10 mt-6"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.8 }}
//       >
//         <button
//           onClick={() => {
//             updateChargingStatus(false);
//             router.push("/");
//           }}
//           className="text-white/90 text-sm font-medium flex items-center"
//         >
//           {bmsData.SOC}% Charged
//         </button>
//       </motion.div> */}

  


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
//               {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:
//               {formatTime(timeLeft.seconds)}
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
//               {bmsData.current?.toFixed(2)} A
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
//               {(chargingPower / 1000).toFixed(5)} W
//             </span>
//           </motion.div>
//         </div>
//       </div>
    
//   );
// }

//countdown
//bike
// "use client";
// import { motion } from "framer-motion";
// import { useChargingStatus } from "../../../hooks/useChargingStatus";
// import { useBMSData } from "../../../hooks/useBMSData";
// import { useTimerStatus } from "../../../hooks/useTimerStatus";
// import WaveCharging from "../../../components/WaveCharging";
// import { useEffect, useMemo, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Poppins } from "next/font/google";
// import FODDialog from "../../../components/FODDialog";
// import MissDialog from "../../../components/MissDialog";
// import { Pause } from "lucide-react";
// import Image from "next/image";

// const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

// export default function ChargePage() {
//   const router = useRouter();
//   const { updateChargingStatus } = useChargingStatus();

//   const { bmsData, chargingPower } = useBMSData();
//   const { endTime } = useTimerStatus();

//   const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
//   const [energyConsumed, setEnergyConsumed] = useState(0);

//   useEffect(() => {
//     if (!endTime || !bmsData?.isReceiverCoilDetected ) return;

//     const updateCountdown = () => {
//       const now = Date.now();
//       const remainingTime = Math.max(0, endTime - now);

//       setTimeLeft({
//         hours: Math.floor(remainingTime / (1000 * 60 * 60)),
//         minutes: Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((remainingTime % (1000 * 60)) / 1000),
//       });

//       if (remainingTime <= 0) {
//         clearInterval(interval);
//         updateChargingStatus(false).then(() => {
//           router.push("/");
//         });
//       }
//     };

//     const interval = setInterval(updateCountdown, 1000);
//     updateCountdown();

//     return () => clearInterval(interval);
//   }, [endTime, updateChargingStatus, router, !bmsData?.isReceiverCoilDetected]);

//   useEffect(() => {
//     if (bmsData.isReceiverCoilDetected && bmsData.current > 0) {
//       const interval = setInterval(() => {
//         setEnergyConsumed((prev) => prev + chargingPower / 1000 / 3600);
//       }, 1000);

//       return () => clearInterval(interval);
//     }
//   }, [bmsData, chargingPower]);

//   const [isIssueDetected, setIsIssueDetected] = useState({ isFOD: false, isMiss: false,  });

//   useEffect(() => {
//     if (bmsData?.isFOD || bmsData?.isMiss, !bmsData?.isReceiverCoilDetected) {
//       updateChargingStatus(false);
//       setIsIssueDetected({ isFOD: bmsData?.isFOD, isMiss: bmsData?.isMiss });

//     } else {
//       updateChargingStatus(true);
//       setIsIssueDetected({ isFOD: false, isMiss: false });

//     }
//   }, [bmsData?.isFOD, bmsData?.isMiss, updateChargingStatus, !bmsData?.isReceiverCoilDetected]);

//   const waveColor = useMemo(() => {
//     const soc = bmsData?.SOC;

//     if (soc >= 100) return "rgba(52, 199, 89, 0.7)";
//     if (soc >= 75) return "rgba(0, 122, 255, 0.7)";
//     if (soc >= 50) return "rgba(255, 204, 0, 0.7)";
//     if (soc >= 25) return "rgba(255, 59, 48, 0.7)";
//     return "rgba(255, 59, 48, 0.7)";
//   }, [bmsData?.SOC]);

//   // const [parkCountdown, setParkCountdown] = useState<number>(60);
//   // const [unparkStartTime, setUnparkStartTime] = useState<number | null>(null);

//   // useEffect(() => {
//   //   let countdownInterval: NodeJS.Timeout;

//   //   if (!bmsData?.isReceiverCoilDetected) {
//   //     if (!unparkStartTime) {
//   //       setUnparkStartTime(Date.now());
//   //     }

//   //     countdownInterval = setInterval(() => {
//   //       setParkCountdown((prev) => {
//   //         if (prev <= 1) {
//   //           updateChargingStatus(false);
//   //           setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
//   //           setEnergyConsumed(0);
//   //           setUnparkStartTime(null);
//   //           router.push("/");
//   //           return 0;
//   //         }
//   //         return prev - 1;
//   //       });
//   //     }, 1000);
//   //   } else {
//   //     setUnparkStartTime(null);
//   //     setParkCountdown(60);
//   //   }

//   //   return () => clearInterval(countdownInterval);
//   // }, [bmsData?.isReceiverCoilDetected, updateChargingStatus, router]);

//   // const [parkCountdown, setParkCountdown] = useState(60);
//   // useEffect(() => {
//   //   if (!bmsData?.isReceiverCoilDetected) {

//   //     const interval = setInterval(() => setParkCountdown((prev) => Math.max(prev - 1, 0)), 1000);
//   //     return () => clearInterval(interval);
//   //   }

//   //   setParkCountdown(60);
//   //   if (parkCountdown < 1) router.push("/");
//   // }, [bmsData?.isReceiverCoilDetected, parkCountdown]);

//   const [parkCountdown, setParkCountdown] = useState(60);

// useEffect(() => {
//   let interval: NodeJS.Timeout;

//   if (!bmsData?.isReceiverCoilDetected) {
//     if (parkCountdown === 0) {
//       // Countdown is over, redirect to home
//       router.push("/");
//       return;
//     }

//     // Start countdown
//     interval = setInterval(() => {
//       setParkCountdown((prev) => {
//         if (prev <= 1) {
//           clearInterval(interval);
//           router.push("/");
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);
//   } else {
//     // Reset countdown if receiver coil is detected
//     setParkCountdown(60);
//   }

//   return () => clearInterval(interval);
// }, [bmsData?.isReceiverCoilDetected, parkCountdown, router]);

// //   return (
// //     <div
// //     className="w-[768px] h-[1024px] overflow-hidden bg-[#2A2D32] font-sans pt-7"
// //     style={{
// //       backgroundImage: "url(/main-bg.png)",
// //       backgroundSize: "cover",
// //       backgroundPosition: "center",
// //     }}
// //     >

// //     <div className="flex justify-center items-center p-1 pt-20 w-full px-8">
// //     <motion.div
// //             className="text-white/90 text-5xl font-medium tracking-wider relative group"
// //             initial={{ opacity: 0, x: -20 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.5, delay: 0.6 }}
// //           >

// //         <span
// //   className={`${poppins.className} relative ${
// //     bmsData?.isReceiverCoilDetected ? "" : "text-white"
// //   }`}
// // >
// //   {bmsData?.isReceiverCoilDetected ? (
// //     bmsData?.current <= 0 ? (
// //       "Charging Paused"
// //     ) : (
// //       "Charging"
// //     )
// //   ) : (
// //     <div className="flex items-center gap-3">
// //       <span>Park your vehicle</span>
// //       <span className="text-red-400 font-mono bg-red-500/10 px-3 py-0.5 rounded-md border border-red-500/20">
// //                     {Math.floor(parkCountdown / 60)}:
// //           {(parkCountdown % 60).toString().padStart(2, "0")}
// //        </span>
// //     </div>
// //   )}
// // </span>

// //         </motion.div>
// //   </div>

// //       {bmsData?.isFOD && <FODDialog />}
// //       {bmsData?.isMiss && <MissDialog />}

// //       <div className="flex justify-center items-center w-full h-80 relative mt-10">
// //         <WaveCharging
// //           percentage={bmsData?.SOC || 0}
// //           waveColor={waveColor}
// //           backgroundColor="rgba(255, 255, 255, 0.1)"
// //           size={200}
// //         />
// //       </div>

// //       <div className="flex w-full justify-center items-center mb-4">
// //         <div className="flex-col justify-center items-center gap-36">
// //           <motion.div
// //             initial={{ x: 768 }}
// //             animate={{ x: 0 }}
// //             key={bmsData?.isReceiverCoilDetected ? "parked" : "not-parked"}
// //             transition={{
// //               duration: 5,
// //               type: "spring",
// //               stiffness: 100,
// //               damping: 100,
// //               repeat: bmsData?.isReceiverCoilDetected ? 0 : Infinity,
// //             }}
// //           >
// //             <Image
// //               src="/charge-bike.png"
// //               alt="Charger pad"
// //               width={500}
// //               height={300}
// //               className="drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]"
// //             />
// //           </motion.div>

// //           <div className="flex w-full items-center justify-center">
// //             <Image
// //               src="/charge-pad.png"
// //               alt="Charger pad"
// //               width={200}
// //               height={100}
// //               className="drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]"
// //             />
// //           </div>
// //         </div>
// //       </div>

// //       <motion.div
// //         className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/5 shadow-lg shadow-cyan-500/10 mt-6"
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5, delay: 0.8 }}
// //       >
// //         <button
// //           onClick={() => {
// //             updateChargingStatus(false);
// //             router.push("/");
// //           }}
// //           className="text-white/90 text-sm font-medium flex items-center"
// //         >
// //           {bmsData.SOC}% Charged
// //         </button>
// //       </motion.div>

// //       {/* <div className="w-full px-12 mt-7 grid grid-cols-2 gap-6">
// //         {[
// //           { label: "Energy", value: `${energyConsumed.toFixed(5)} kWh` },
// //           { label: "Time Remaining", value: `${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s` },
// //           { label: "Charging Current", value: `${bmsData.current?.toFixed(2) ?? "0.00"} A` },
// //           { label: "Power", value: `${(chargingPower / 1000).toFixed(5)} kW` },
// //         ].map((item, index) => (
// //           <motion.div
// //             key={index}
// //             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] hover:bg-black/30"
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 1.0 + index * 0.2 }}
// //           >
// //             {item.label}: <span className="group-hover:text-cyan-400/90 transition-colors duration-300">{item.value}</span>
// //           </motion.div>
// //         ))}
// //       </div> */}

// // <div className="w-full px-12 mt-7">
// //   <div className="grid grid-cols-2 gap-6">

// //     {/* Energy */}
// //     <motion.div
// //       className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.5, delay: 1.0 }}
// //     >
// //       <span className="text-nowrap">Energy: </span>
// //       <span className="group-hover:text-cyan-400/90 transition-colors duration-300 text-nowrap">
// //         {energyConsumed.toFixed(5)} kWh
// //       </span>
// //     </motion.div>

// //     {/* Time Remaining */}
// //     <motion.div
// //       className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.5, delay: 1.2 }}
// //     >
// //       Time Remaining:{" "}
// //       <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
// //         {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
// //       </span>
// //     </motion.div>

// //     {/* Charging Current */}
// //     <motion.div
// //       className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.5, delay: 1.4 }}
// //     >
// //       Charging Current:{" "}
// //       <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
// //         {bmsData?.current?.toFixed(2) ?? "0.00"} A
// //       </span>
// //     </motion.div>

// //     {/* Power */}
// //     <motion.div
// //       className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.5, delay: 1.6 }}
// //     >
// //       Power:{" "}
// //       <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
// //         {(chargingPower / 1000).toFixed(5)} kW
// //       </span>
// //     </motion.div>

// //   </div>
// // </div>

// //     </div>
//   //   );

//   const formatTime = (value: number): string => {
//     return value.toString().padStart(2, '0');
//   };

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
//           className="text-white/90 text-5xl font-medium tracking-wider relative group"
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//         >
//           <div
//             className={`${poppins.className} relative ${
//               bmsData?.isReceiverCoilDetected ? "" : "text-white"
//             }`}
//           >
//             {bmsData?.isReceiverCoilDetected ? (
//               bmsData?.current <= 0 ? (
//                 "Charging Paused"
//               ) : (
//                 "Charging"
//               )
//             ) : (
//               <div className="flex items-center gap-3">
//                 <span>Park your vehicle</span>
//                 <span className="text-red-400 font-mono bg-red-500/10 px-3 py-0.5 rounded-md border border-red-500/20">
//                   {Math.floor(parkCountdown / 60)}:
//                   {(parkCountdown % 60).toString().padStart(2, "0")}
//                 </span>
//               </div>
//             )}
//           </div>
//         </motion.div>
//       </div>

//       {bmsData?.isFOD && <FODDialog />}
//       {bmsData?.isMiss && <MissDialog />}

//       <div className="flex justify-center items-center w-full h-80 relative mt-10">
//         <WaveCharging
//           percentage={bmsData?.SOC || 0}
//           waveColor={waveColor}
//           backgroundColor="rgba(255, 255, 255, 0.1)"
//           size={200}
//         />
//       </div>

//       <div className="flex w-full justify-center items-center mb-4">
//         <div className="flex-col justify-center items-center gap-36">
//           <motion.div
//             initial={{ x: 768 }}
//             animate={{ x: 0 }}
//             key={bmsData?.isReceiverCoilDetected ? "parked" : "not-parked"}
//             transition={{
//               duration: 5,
//               type: "spring",
//               stiffness: 100,
//               damping: 100,
//               repeat: bmsData?.isReceiverCoilDetected ? 0 : Infinity,
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
//       </div>

//       <motion.div
//         className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/5 shadow-lg shadow-cyan-500/10 mt-6"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.8 }}
//       >
//         <button
//           onClick={() => {
//             updateChargingStatus(false);
//             router.push("/");
//           }}
//           className="text-white/90 text-sm font-medium flex items-center"
//         >
//           {bmsData.SOC}% Charged
//         </button>
//       </motion.div>

//       <div className="w-full px-12 mt-7">
//         <div className="grid grid-cols-2 gap-6">
//           {/* Energy */}
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

//           {/* Time Remaining */}
//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.2 }}
//           >
//             Time Remaining:{" "}
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//               {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
//             </span>
//           </motion.div>

//           {/* Charging Current */}
//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.4 }}
//           >
//             Charging Current:{" "}
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//               {bmsData?.current?.toFixed(2) ?? "0.00"} A
//             </span>
//           </motion.div>

//           {/* Power */}
//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-xl font-bold w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.6 }}
//           >
//             Power:{" "}
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//               {(chargingPower / 1000).toFixed(5)} kW
//             </span>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );

// }
///last comment k upar wala comment shai hai

// "use client";
// import { motion } from "framer-motion";
// import { useChargingStatus, isChargingInitialized } from "../../../hooks/useChargingStatus";
// import { useBMSData } from "../../../hooks/useBMSData";
// import { useTimerStatus } from "../../../hooks/useTimerStatus";
// import WaveCharging from "../../../components/WaveCharging";
// import { useEffect, useMemo, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Poppins } from "next/font/google";
// import FODDialog from "../../../components/FODDialog";
// import MissDialog from "../../../components/MissDialog";

// import Image from "next/image";

// const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

// export default function ChargePage() {
//   const router = useRouter();
//   const { updateChargingStatus } = useChargingStatus();
//   const [timerOver, setTimerOver] = useState(false);


//   const { bmsData, chargingPower } = useBMSData();
//   const { endTime } = useTimerStatus();

//   const [timeLeft, setTimeLeft] = useState({
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });
//   const [energyConsumed, setEnergyConsumed] = useState(0);

//   useEffect(() => {
//     if (!endTime || !bmsData?.isReceiverCoilDetected) return;
  
//     const interval = setInterval(() => {
//       const now = Date.now();
//       const remaining = Math.max(0, endTime - now);
  
//       setTimeLeft({
//         hours: Math.floor(remaining / (1000 * 60 * 60)),
//         minutes: Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((remaining % (1000 * 60)) / 1000),
//       });
  
//       if (remaining <= 0) {
//         clearInterval(interval);
//         updateChargingStatus(false).then(() => {
//           router.push("/");
//         });
//       }
//     }, 1000);
  
//     return () => clearInterval(interval);
//   }, [endTime, updateChargingStatus, router, bmsData?.isReceiverCoilDetected]);
  

//   useEffect(() => {
//     if (bmsData.isReceiverCoilDetected && bmsData.current > 0) {
//       const interval = setInterval(() => {
//         setEnergyConsumed((prev) => prev + chargingPower / 1000 / 3600);
//       }, 1000);

//       return () => clearInterval(interval);
//     }
//   }, [bmsData, chargingPower]);

 
  
  



//   const [isIssueDetected, setIsIssueDetected] = useState({
//     isFOD: false,
//     isMiss: false,
//   });

//   useEffect(() => {
//     if (timerOver) return; // ⬅️ Skip logic if timer is done
  
//     const isFOD = bmsData?.isFOD;
//     const isMiss = bmsData?.isMiss;
//     const isReceiverDetected = bmsData?.isReceiverCoilDetected;
  
//     if (isFOD || isMiss) {
//       updateChargingStatus(false);
//       // setIsIssueDetected({ isFOD, isMiss });
//       setIsIssueDetected({ isFOD: isFOD ?? false, isMiss: isMiss ?? false });

//     } else if (isReceiverDetected && !isFOD && !isMiss) {
//       updateChargingStatus(true);
//       setIsIssueDetected({ isFOD: false, isMiss: false });
//     }
//   }, [
//     bmsData?.isFOD,
//     bmsData?.isMiss,
//     bmsData?.isReceiverCoilDetected,
//     updateChargingStatus,
//     timerOver, // ⬅️ Include this in deps
//   ]);
  
  

//   const waveColor = useMemo(() => {
//     const soc = bmsData?.SOC;

//     if (soc >= 100) return "rgba(52, 199, 89, 0.7)";
//     if (soc >= 75) return "rgba(0, 122, 255, 0.7)";
//     if (soc >= 50) return "rgba(255, 204, 0, 0.7)";
//     if (soc >= 25) return "rgba(255, 59, 48, 0.7)";
//     return "rgba(255, 59, 48, 0.7)";
//   }, [bmsData?.SOC]);

  

//   const [parkCountdown, setParkCountdown] = useState(60);

//   useEffect(() => {
//     let interval: NodeJS.Timeout;

//     if (!bmsData?.isReceiverCoilDetected) {
//       if (parkCountdown === 0) {
//         // Countdown is over, redirect to home
//         router.push("/");
//         return;
//       }

//       // Start countdown
//       interval = setInterval(() => {
//         setParkCountdown((prev) => {
//           if (prev <= 1) {
//             clearInterval(interval);
//             router.push("/");
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//     } else {
//       // Reset countdown if receiver coil is detected
//       setParkCountdown(60);
//     }

//     return () => clearInterval(interval);
//   }, [bmsData?.isReceiverCoilDetected, parkCountdown, router]);

//   const formatTime = (value: number): string => {
//     return value.toString().padStart(2, "0");
//   };

//   return (
//     <div
//       className="w-full h-screen overflow-hidden bg-black font-sans"
//       style={{
//         backgroundImage: "url(/main-bg.png)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="flex flex-col items-center justify-between h-full pb-6 pt-12">
//         {/* Header section */}
//         <div className="flex flex-col items-center w-full">
//           <motion.div
//             className="text-white/90 text-5xl font-medium tracking-wider mb-6"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             {/* <span className={`relative ${bmsData?.isReceiverCoilDetected ? "" : "text-white"}`}>
//               {bmsData?.isReceiverCoilDetected ? (
//                 bmsData?.current <= 0 ? "Charging Paused" : "Initializing Charging"
//               ) : (
//                 <div className="flex items-center gap-3">
//                   <span>Park your vehicle</span>
//                   <span className="text-red-400 font-mono bg-red-500/10 px-3 py-0.5 rounded-md border border-red-500/20">
//                     {Math.floor(parkCountdown / 60)}:{(parkCountdown % 60).toString().padStart(2, "0")}
//                   </span>
//                 </div>
//               )}
//             </span> */}


//           <span className={`relative ${bmsData?.isReceiverCoilDetected ? "" : "text-white"}`}>
//             {bmsData?.isReceiverCoilDetected ? (
//               isChargingInitialized ? (
//                 bmsData?.current <= 0 ? (
//                   "Charging Paused"
//                 ) : (
//                   "Charging"
//                 )
//               ) : (
//                 "Initializing Charging"
//               )
//             ) : (
//               <div className="flex items-center gap-3">
//                 <span>Park your vehicle</span>
//                 <span className="text-red-400 font-mono bg-red-500/10 px-3 py-0.5 rounded-md border border-red-500/20">
//                   {Math.floor(parkCountdown / 60)}:{(parkCountdown % 60).toString().padStart(2, "0")}
//                 </span>
//               </div>
//             )}
//           </span>



              






            
//           </motion.div>
  
//           {/* Charge percentage pill */}
//           <motion.div
//             className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/5 shadow-lg shadow-cyan-500/10 mb-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.8 }}
//           >
//             <button
//               onClick={() => {
//                 updateChargingStatus(false);
//                 router.push("/");
//               }}
//               className="text-white/90 text-sm font-medium flex items-center"
//             >
//               {bmsData?.SOC || 48}% Charged
//             </button>
//             <svg
//               width="14"
//               height="14"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className="text-cyan-400"
//             >
//               <path
//                 d="M13 2L4.09347 12.6879C3.74466 13.1064 3.57026 13.3157 3.56759 13.4925C3.56526 13.6461 3.63373 13.7923 3.75326 13.8889C3.89075 14 4.16318 14 4.70803 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </motion.div>
//         </div>
  
//         {/* Alerts and Dialogs */}
//         <div>
//         {bmsData?.isFOD && <FODDialog />}
//         {bmsData?.isMiss && <MissDialog />}
//         </div>
       
  
//         {/* Charging indicator and vehicle section */}
//         <div className="flex flex-col items-center justify-center flex-grow">
//           {/* Charging wave animation */}
//           <div className="relative mb-8">
//             <WaveCharging
//               percentage={bmsData?.SOC || 48}
//               waveColor={waveColor}
//               backgroundColor="rgba(255, 255, 255, 0.1)"
//               size={200}
//             />
//             <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-medium">
//               {bmsData?.SOC || 48}%
//             </div>
//           </div>
  
//           {/* Vehicle and charging pad */}
//           <div className="relative flex flex-col items-center">
//             <motion.div
//               initial={{ x: 200 }}
//               animate={{ x: 0 }}
//               key={bmsData?.isReceiverCoilDetected ? "parked" : "not-parked"}
//               transition={{
//                 duration: 2,
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 20,
//                 repeat: bmsData?.isReceiverCoilDetected ? 0 : Infinity,
//                 repeatType: "reverse"
//               }}
//               className="mb-4"
//             >
//               <Image
//                 src="/charge-bike.png"
//                 alt="Electric scooter"
//                 width={300}
//                 height={180}
//                 className="drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]"
//               />
//             </motion.div>
  
//             <div className="relative">
//               <Image
//                 src="/charge-pad.png"
//                 alt="Charger pad"
//                 width={150}
//                 height={20}
//                 className="drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]"
//               />
//               <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-ping"></div>
//             </div>
//           </div>
//         </div>
  
//         {/* Stats grid */}
//         <div className="grid grid-cols-2 gap-4 w-full max-w-xl px-4 mt-8">
//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-4 py-3 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-lg font-medium w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.0 }}
//           >
//             <span className="block">Energy:</span>
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//               {energyConsumed?.toFixed(5) || "0.00000"} kWh
//             </span>
//           </motion.div>
  
//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-4 py-3 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-lg font-medium w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.2 }}
//           >
//             <span className="block">Time Remaining:</span>
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//               {formatTime(timeLeft?.hours || 0)}:{formatTime(timeLeft?.minutes || 59)}:
//               {formatTime(timeLeft?.seconds || 45)}
//             </span>
//           </motion.div>
  
//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-4 py-3 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-lg font-medium w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.4 }}
//           >
//             <span className="block">Charging Current:</span>
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//               {(bmsData?.current || 0).toFixed(2)} A
//             </span>
//           </motion.div>
  
//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-4 py-3 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-lg font-medium w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.6 }}
//           >
//             <span className="block">Power:</span>
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//               {((chargingPower || 0) / 1000).toFixed(1)} W
//             </span>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }


//after app

// "use client";
// import { motion } from "framer-motion";
// import { useChargingStatus, isChargingInitialized } from "../../../hooks/useChargingStatus";
// import { useBMSData } from "../../../hooks/useBMSData";
// import { useTimerStatus } from "../../../hooks/useTimerStatus";
// import WaveCharging from "../../../components/WaveCharging";
// import { useEffect, useMemo, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Poppins } from "next/font/google";
// import FODDialog from "../../../components/FODDialog";
// import MissDialog from "../../../components/MissDialog";

// import Image from "next/image";

// const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

// export default function ChargePage() {
//   const router = useRouter();
//   const { updateChargingStatus, isChargingInitialized } = useChargingStatus();


//   const [timerOver, setTimerOver] = useState(false);


//   const { bmsData, chargingPower } = useBMSData();
//   const { endTime } = useTimerStatus();

//   const [timeLeft, setTimeLeft] = useState({
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });
//   const [energyConsumed, setEnergyConsumed] = useState(0);

//   useEffect(() => {
//     if (!endTime || !bmsData?.isReceiverCoilDetected) return;
  
//     const interval = setInterval(() => {
//       const now = Date.now();
//       const remaining = Math.max(0, endTime - now);
  
//       setTimeLeft({
//         hours: Math.floor(remaining / (1000 * 60 * 60)),
//         minutes: Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((remaining % (1000 * 60)) / 1000),
//       });
  
//       if (remaining <= 0) {
//         clearInterval(interval);
//         updateChargingStatus(false).then(() => {
//           router.push("/");
//         });
//       }
//     }, 1000);
  
//     return () => clearInterval(interval);
//   }, [endTime, updateChargingStatus, router, bmsData?.isReceiverCoilDetected]);
  

//   useEffect(() => {
//     if (bmsData.isReceiverCoilDetected && bmsData.current > 0) {
//       const interval = setInterval(() => {
//         setEnergyConsumed((prev) => prev + chargingPower / 1000 / 3600);
//       }, 1000);

//       return () => clearInterval(interval);
//     }
//   }, [bmsData, chargingPower]);

 
  
  



//   const [isIssueDetected, setIsIssueDetected] = useState({
//     isFOD: false,
//     isMiss: false,
//   });

//   useEffect(() => {
//     if (timerOver) return; // ⬅️ Skip logic if timer is done
  
//     const isFOD = bmsData?.isFOD;
//     const isMiss = bmsData?.isMiss;
//     const isReceiverDetected = bmsData?.isReceiverCoilDetected;
  
//     if (isFOD || isMiss) {
//       updateChargingStatus(false);
//       // setIsIssueDetected({ isFOD, isMiss });
//       setIsIssueDetected({ isFOD: isFOD ?? false, isMiss: isMiss ?? false });

//     } else if (isReceiverDetected && !isFOD && !isMiss) {
//       updateChargingStatus(true);
//       setIsIssueDetected({ isFOD: false, isMiss: false });
//     }
//   }, [
//     bmsData?.isFOD,
//     bmsData?.isMiss,
//     bmsData?.isReceiverCoilDetected,
//     updateChargingStatus,
//     timerOver, // ⬅️ Include this in deps
//   ]);
  
  

//   const waveColor = useMemo(() => {
//     const soc = bmsData?.SOC;

//     if (soc >= 100) return "rgba(52, 199, 89, 0.7)";
//     if (soc >= 75) return "rgba(0, 122, 255, 0.7)";
//     if (soc >= 50) return "rgba(255, 204, 0, 0.7)";
//     if (soc >= 25) return "rgba(255, 59, 48, 0.7)";
//     return "rgba(255, 59, 48, 0.7)";
//   }, [bmsData?.SOC]);

  

//   const [parkCountdown, setParkCountdown] = useState(60);

//   useEffect(() => {
//     let interval: NodeJS.Timeout;

//     if (!bmsData?.isReceiverCoilDetected) {
//       if (parkCountdown === 0) {
//         // Countdown is over, redirect to home
//         router.push("/");
//         return;
//       }

//       // Start countdown
//       interval = setInterval(() => {
//         setParkCountdown((prev) => {
//           if (prev <= 1) {
//             clearInterval(interval);
//             router.push("/");
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//     } else {
//       // Reset countdown if receiver coil is detected
//       setParkCountdown(60);
//     }

//     return () => clearInterval(interval);
//   }, [bmsData?.isReceiverCoilDetected, parkCountdown, router]);

//   const formatTime = (value: number): string => {
//     return value.toString().padStart(2, "0");
//   };

//   const chargingStatusText = useMemo(() => {
//     if (!bmsData?.isReceiverCoilDetected) {
//       return (
//         <div className="flex items-center gap-3">
//           <span>Park your vehicle</span>
//           <span className="text-red-400 font-mono bg-red-500/10 px-3 py-0.5 rounded-md border border-red-500/20">
//             {Math.floor(parkCountdown / 60)}:{(parkCountdown % 60).toString().padStart(2, "0")}
//           </span>
//         </div>
//       );
//     }
  
//     if (!isChargingInitialized) return "Initializing Charging";
//     if (bmsData.current <= 0) return "Charging Paused";
//     return "Charging";
//   }, [bmsData, parkCountdown, isChargingInitialized]);
  

//   return (
//     <div
//       className="w-full h-screen overflow-hidden bg-black font-sans"
//       style={{
//         backgroundImage: "url(/main-bg.png)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="flex flex-col items-center justify-between h-full pb-6 pt-12">
//         {/* Header section */}
//         <div className="flex flex-col items-center w-full">
//           <motion.div
//             className="text-white/90 text-5xl font-medium tracking-wider mb-6"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             <span className={`relative ${bmsData?.isReceiverCoilDetected ? "" : "text-white"}`}>
//               {bmsData?.isReceiverCoilDetected ? (
//                 bmsData?.current <= 0 ? "Charging Paused" : "Initializing Charging"
//               ) : (
//                 <div className="flex items-center gap-3">
//                   <span>Park your vehicle</span>
//                   <span className="text-red-400 font-mono bg-red-500/10 px-3 py-0.5 rounded-md border border-red-500/20">
//                     {Math.floor(parkCountdown / 60)}:{(parkCountdown % 60).toString().padStart(2, "0")}
//                   </span>
//                 </div>
//               )}
//             </span>


//           <span className={`relative ${bmsData?.isReceiverCoilDetected ? "" : "text-white"}`}>
//             {bmsData?.isReceiverCoilDetected ? (
//               isChargingInitialized ? (
//                 bmsData?.current <= 0 ? (
//                   "Charging Paused"
//                 ) : (
//                   "Charging"
//                 )
//               ) : (
//                 "Initializing Charging"
//               )
//             ) : (
//               <div className="flex items-center gap-3">
//                 <span>Park your vehicle</span>
//                 <span className="text-red-400 font-mono bg-red-500/10 px-3 py-0.5 rounded-md border border-red-500/20">
//                   {Math.floor(parkCountdown / 60)}:{(parkCountdown % 60).toString().padStart(2, "0")}
//                 </span>
//               </div>
//             )}
//           </span>
//           <span className="relative">{chargingStatusText}</span>




            
//           </motion.div>
  
//           {/* Charge percentage pill */}
//           <motion.div
//             className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/5 shadow-lg shadow-cyan-500/10 mb-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.8 }}
//           >
//             <button
//               onClick={() => {
//                 updateChargingStatus(false);
//                 router.push("/");
//               }}
//               className="text-white/90 text-sm font-medium flex items-center"
//             >
//               {bmsData?.SOC || 48}% Charged
//             </button>
//             <svg
//               width="14"
//               height="14"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className="text-cyan-400"
//             >
//               <path
//                 d="M13 2L4.09347 12.6879C3.74466 13.1064 3.57026 13.3157 3.56759 13.4925C3.56526 13.6461 3.63373 13.7923 3.75326 13.8889C3.89075 14 4.16318 14 4.70803 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </motion.div>
//         </div>
  
//         {/* Alerts and Dialogs */}
//         <div>
//         {bmsData?.isFOD && <FODDialog />}
//         {bmsData?.isMiss && <MissDialog />}
//         </div>
       
  
//         {/* Charging indicator and vehicle section */}
//         <div className="flex flex-col items-center justify-center flex-grow">
//           {/* Charging wave animation */}
//           <div className="relative mb-8">
//             <WaveCharging
//               percentage={bmsData?.SOC || 48}
//               waveColor={waveColor}
//               backgroundColor="rgba(255, 255, 255, 0.1)"
//               size={200}
//             />
//             <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-medium">
//               {bmsData?.SOC || 48}%
//             </div>
//           </div>
  
//           {/* Vehicle and charging pad */}
//           <div className="relative flex flex-col items-center">
//             <motion.div
//               initial={{ x: 200 }}
//               animate={{ x: 0 }}
//               key={bmsData?.isReceiverCoilDetected ? "parked" : "not-parked"}
//               transition={{
//                 duration: 2,
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 20,
//                 repeat: bmsData?.isReceiverCoilDetected ? 0 : Infinity,
//                 repeatType: "reverse"
//               }}
//               className="mb-4"
//             >
//               <Image
//                 src="/charge-bike.png"
//                 alt="Electric scooter"
//                 width={300}
//                 height={180}
//                 className="drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]"
//               />
//             </motion.div>
  
//             <div className="relative">
//               <Image
//                 src="/charge-pad.png"
//                 alt="Charger pad"
//                 width={150}
//                 height={20}
//                 className="drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]"
//               />
//               <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-ping"></div>
//             </div>
//           </div>
//         </div>
  
//         {/* Stats grid */}
//         <div className="grid grid-cols-2 gap-4 w-full max-w-xl px-4 mt-8">
//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-4 py-3 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-lg font-medium w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.0 }}
//           >
//             <span className="block">Energy:</span>
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//               {energyConsumed?.toFixed(5) || "0.00000"} kWh
//             </span>
//           </motion.div>
  
//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-4 py-3 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-lg font-medium w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.2 }}
//           >
//             <span className="block">Time Remaining:</span>
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//               {formatTime(timeLeft?.hours || 0)}:{formatTime(timeLeft?.minutes || 0)}:
//               {formatTime(timeLeft?.seconds || 0)}
//             </span>
//           </motion.div>
  
//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-4 py-3 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-lg font-medium w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.4 }}
//           >
//             <span className="block">Charging Current:</span>
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//               {(bmsData?.current || 0).toFixed(2)} A
//             </span>
//           </motion.div>
  
//           <motion.div
//             className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-4 py-3 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-lg font-medium w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 1.6 }}
//           >
//             <span className="block">Power:</span>
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//               {((chargingPower || 0) / 1000).toFixed(1)} W
//             </span>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

//after final fix
"use client";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useChargingStatus } from "../../../hooks/useChargingStatus";
import { useBMSData } from "../../../hooks/useBMSData";
import { useTimerStatus } from "../../../hooks/useTimerStatus";
import WaveCharging from "../../../components/WaveCharging";
import FODDialog from "../../../components/FODDialog";
import MissDialog from "../../../components/MissDialog";
import Image from "next/image";
// const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

export default function ChargePage() {
  const router = useRouter();
  const { updateChargingStatus, isChargingInitialized } = useChargingStatus();
  const { bmsData, chargingPower } = useBMSData();
  const { endTime } = useTimerStatus();


  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [energyConsumed, setEnergyConsumed] = useState(0);
  const [parkCountdown, setParkCountdown] = useState(60);
  const parkCountdownRef = useRef(60);
  const [timerOver, setTimerOver] = useState(false);
  const [isIssueDetected, setIsIssueDetected] = useState({ isFOD: false, isMiss: false });

  // Timer for session
  useEffect(() => {
    console.log("🔥 useEffect triggered");
    console.log("🧪 endTime:", endTime);
    console.log("🧪 bmsData?.isReceiverCoilDetected:", bmsData?.isReceiverCoilDetected);
  
    if (!endTime || !bmsData?.isReceiverCoilDetected) {
      console.log("🚫 Skipping timer setup due to missing conditions");
      return;
    }
  
    const interval = setInterval(() => {
      const now = Date.now();
      const remaining = Math.max(0, endTime - now);
  
      console.log("⏱️ Timer tick:", new Date().toLocaleTimeString(), "Remaining:", remaining);
  
      setTimeLeft({
        hours: Math.floor(remaining / 3600000),
        minutes: Math.floor((remaining % 3600000) / 60000),
        seconds: Math.floor((remaining % 60000) / 1000),
      });
  
      if (remaining <= 0) {
        clearInterval(interval);
        setTimerOver(true); //change
  
        updateChargingStatus(false)
          .catch((err) => console.error("❌ Failed to update charging status:", err))
          .finally(() => {
            console.log("✅ Timer ended. Redirecting to /done");
            router.replace("/done");
          });
      }
    }, 1000);
  
    return () => {
      console.log("🧹 Cleaning up timer interval");
      clearInterval(interval);
    };
  }, [endTime, updateChargingStatus, router, bmsData?.isReceiverCoilDetected]);
  
  
 
  
  // Energy calculation
  useEffect(() => {
    if (bmsData?.isReceiverCoilDetected && bmsData?.current > 0) {
      const interval = setInterval(() => {
        setEnergyConsumed((prev) => prev + chargingPower / 1000 / 3600);
      }, 1000);
      return () => clearInterval(interval);
    }
    // }, [bmsData?.isReceiverCoilDetected, bmsData?.current, chargingPower]);
  }, [bmsData, chargingPower]);

  // Issue Detection

  
  useEffect(() => {
    if (timerOver) return;
  
    const isFOD = !!bmsData?.isFOD;
    const isMiss = !!bmsData?.isMiss;
    const isReceiverDetected = !!bmsData?.isReceiverCoilDetected;
  
    if (isFOD || isMiss) {
      updateChargingStatus(false);
      setIsIssueDetected({ isFOD, isMiss });
    } else if (isReceiverDetected && !isFOD && !isMiss) {
      updateChargingStatus(true);
      setIsIssueDetected({ isFOD: false, isMiss: false });
    }
  }, [
    bmsData?.isFOD,
    bmsData?.isMiss,
    bmsData?.isReceiverCoilDetected,
    updateChargingStatus,
    timerOver,
  ]);
  

  // Park countdown handler
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
  
    if (!bmsData?.isReceiverCoilDetected) {
      interval = setInterval(() => {
        parkCountdownRef.current -= 1;
        setParkCountdown(parkCountdownRef.current);
  
        if (parkCountdownRef.current <= 0) {
          clearInterval(interval!);
          router.push("/");
        }
      }, 1000);
    } else {
      parkCountdownRef.current = 60;
      setParkCountdown(60);
    }
  
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [bmsData?.isReceiverCoilDetected, router]);
  // useEffect(() => {
  //   let interval: NodeJS.Timeout;

  //   if (!bmsData?.isReceiverCoilDetected) {
  //     if (parkCountdown === 0) {
  //       // Countdown is over, redirect to home
  //       router.push("/");
  //       return;
  //     }

  //     // Start countdown
  //     interval = setInterval(() => {
  //       setParkCountdown((prev) => {
  //         if (prev <= 1) {
  //           clearInterval(interval);
  //           router.push("/");
  //           return 0;
  //         }
  //         return prev - 1;
  //       });
  //     }, 1000);
  //   } else {
  //     // Reset countdown if receiver coil is detected
  //     setParkCountdown(60);
  //   }

  //   return () => clearInterval(interval);
  // }, [bmsData?.isReceiverCoilDetected, parkCountdown, router]);

  const formatTime = (val: number) => val.toString().padStart(2, "0");

  const waveColor = useMemo(() => {
    const soc = bmsData?.SOC ?? 0;
    if (soc >= 100) return "rgba(52, 199, 89, 0.7)";
    if (soc >= 75) return "rgba(0, 122, 255, 0.7)";
    if (soc >= 50) return "rgba(255, 204, 0, 0.7)";
    return "rgba(255, 59, 48, 0.7)";
  }, [bmsData?.SOC]);

  const chargingStatusText = useMemo(() => {
    if (!bmsData?.isReceiverCoilDetected) {
      return (
        <div className="flex items-center gap-3">
          <span>Park your vehicle</span>
          <span className="text-red-400 font-mono bg-red-500/10 px-3 py-0.5 rounded-md border border-red-500/20">
            {Math.floor(parkCountdown / 60)}:{formatTime(parkCountdown % 60)}
          </span>
        </div>
      );
    }
    if (!isChargingInitialized) return "Initializing Charging";
    if (bmsData?.current <= 0) return "Charging Paused";
    return "Charging";
  }, [bmsData, isChargingInitialized, parkCountdown]);

  return (
    <div className="w-full h-screen overflow-hidden bg-black font-sans" style={{ backgroundImage: "url(/main-bg.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="flex flex-col items-center justify-between h-full pb-6 pt-12">
        {/* Header */}
        <motion.div className="text-white/90 text-5xl font-medium tracking-wider mb-6" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
          {chargingStatusText}
        </motion.div>

        {/* SOC pill */}
        <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/5 shadow-lg mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
          <button
            onClick={() => {
              updateChargingStatus(false);
              router.push("/");
            }}
            className="text-white/90 text-sm font-medium flex items-center"
          >
            {bmsData?.SOC ?? 48}% Charged
          </button>
        </motion.div>

        {/* Alerts */}
        <div>
        {bmsData?.isFOD && <FODDialog />}
        {bmsData?.isMiss && <MissDialog />}
        </div>

        {/* Charging animation */}
        <div className="flex flex-col items-center justify-center flex-grow">
          <div className="relative mb-8">
            <WaveCharging percentage={bmsData?.SOC || 48} waveColor={waveColor} backgroundColor="rgba(255, 255, 255, 0.1)" size={200} />
            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-medium">
              {bmsData?.SOC ?? 48}%
            </div>
          </div>

          {/* Vehicle + Pad */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              key={bmsData?.isReceiverCoilDetected ? "detected" : "not-detected"}
              transition={{ duration: 2, type: "spring", stiffness: 100, damping: 20, repeat: bmsData?.isReceiverCoilDetected ? 0 : Infinity, repeatType: "reverse" }}
              className="mb-4"
            >
              <Image src="/charge-bike.png" alt="Electric scooter" width={300} height={180} className="drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]" />
            </motion.div>
            <div className="relative">
              <Image src="/charge-pad.png" alt="Charger pad" width={150} height={20} className="drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]" />
              <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-ping" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-xl px-4 mt-8">
          {[
            { label: "Energy", value: `${energyConsumed.toFixed(5)} kWh` },
            { label: "Time Remaining", value: `${formatTime(timeLeft.hours)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}` },
            { label: "Charging Current", value: `${(bmsData?.current ?? 0).toFixed(2)} A` },
            { label: "Power", value: `${((chargingPower ?? 0) / 1000).toFixed(1)} W` },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="group px-4 py-3 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-lg font-medium text-center hover:bg-black/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + idx * 0.2 }}
            >
              <span className="block">{stat.label}:</span>
              <span className="group-hover:text-cyan-400/90 transition-colors duration-300">{stat.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
