// "use client";
// import { motion } from "framer-motion";
// import { useChargingStatus } from "../../../hooks/useChargingStatus";
// import { useBMSData } from "../../../hooks/useBMSData";
// import WaveCharging from "../../../components/WaveCharging";
// import { useEffect, useMemo, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Poppins } from "next/font/google";
// import FODDialog from "../../../components/FODDialog";
// import MissDialog from "../../../components/MissDialog";
// import Image from "next/image";

// const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

// export default function SOCChargePage() {
//   const router = useRouter();
//   const { updateChargingStatus } = useChargingStatus();
//   const { bmsData, chargingPower } = useBMSData();
//   const [energyConsumed, setEnergyConsumed] = useState(0);
//   const [counter, setCounter] = useState(0);
//   const [targetSOC, setTargetSOC] = useState(80); // Example target value

//   const [isIssueDetected, setIsIssueDetected] = useState({
//     isFOD: false,
//     isMiss: false,
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounter((prev) => prev + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (bmsData.isReceiverCoilDetected && bmsData.current > 0) {
//       const interval = setInterval(() => {
//         setEnergyConsumed((prev) => prev + chargingPower / 1000 / 3600);
//       }, 1000);
//       return () => clearInterval(interval);
//     }
//   }, [bmsData, chargingPower]);

//   useEffect(() => {
//     const isFOD = bmsData?.isFOD;
//     const isMiss = bmsData?.isMiss;
//     const isReceiverDetected = bmsData?.isReceiverCoilDetected;

//     if (isFOD || isMiss) {
//       updateChargingStatus(false);
//       setIsIssueDetected({ isFOD, isMiss });
//     } else if (isReceiverDetected && !isFOD && !isMiss) {
//       updateChargingStatus(true);
//       setIsIssueDetected({ isFOD: false, isMiss: false });
//     }
//   }, [bmsData?.isFOD, bmsData?.isMiss, bmsData?.isReceiverCoilDetected, updateChargingStatus]);

//   useEffect(() => {
//     if (bmsData?.SOC >= targetSOC) {
//       updateChargingStatus(false).then(() => {
//         router.push("/done");
//       });
//     }
//   }, [bmsData?.SOC, targetSOC, updateChargingStatus, router]);

//   const waveColor = useMemo(() => {
//     const soc = bmsData?.SOC;
//     if (soc >= 100) return "rgba(52, 199, 89, 0.7)";
//     if (soc >= 75) return "rgba(0, 122, 255, 0.7)";
//     if (soc >= 50) return "rgba(255, 204, 0, 0.7)";
//     if (soc >= 25) return "rgba(255, 59, 48, 0.7)";
//     return "rgba(255, 59, 48, 0.7)";
//   }, [bmsData?.SOC]);

//   const formatTime = (value: number): string => {
//     return value.toString().padStart(2, "0");
//   };

//   return (
//     <div className="w-full h-screen overflow-hidden bg-black font-sans" style={{ backgroundImage: "url(/main-bg.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
//       <div className="flex flex-col items-center justify-between h-full pb-6 pt-12">
//         <div className="flex flex-col items-center w-full">
//           <motion.div className="text-white/90 text-5xl font-medium tracking-wider mb-6" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
//             <span className={`relative ${bmsData?.isReceiverCoilDetected ? "" : "text-white"}`}>
//               {bmsData?.isReceiverCoilDetected ? (bmsData?.current <= 0 ? "Charging Paused" : "Charging...") : "Waiting for Vehicle"}
//             </span>
//           </motion.div>
//           <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/5 shadow-lg shadow-cyan-500/10 mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
//             <button onClick={() => { updateChargingStatus(false); router.push("/"); }} className="text-white/90 text-sm font-medium flex items-center">
//               {bmsData?.SOC || 0}% Charged
//             </button>
//           </motion.div>
//         </div>

//         <div>
//           {bmsData?.isFOD && <FODDialog />}
//           {bmsData?.isMiss && <MissDialog />}
//         </div>

//         <div className="flex flex-col items-center justify-center flex-grow">
//           <div className="relative mb-8">
//             <WaveCharging percentage={bmsData?.SOC || 0} waveColor={waveColor} backgroundColor="rgba(255, 255, 255, 0.1)" size={200} />
//             <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-medium">
//               {bmsData?.SOC || 0}%
//             </div>
//           </div>

//           <div className="relative flex flex-col items-center">
//             <Image src="/charge-bike.png" alt="Electric scooter" width={300} height={180} className="drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]" />
//             <div className="relative">
//               <Image src="/charge-pad.png" alt="Charger pad" width={150} height={20} className="drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]" />
//               <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-ping"></div>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-4 w-full max-w-xl px-4 mt-8">
//           <motion.div className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-4 py-3 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-lg font-medium w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.0 }}>
//             <span className="block">Energy:</span>
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//               {energyConsumed?.toFixed(5) || "0.00000"} kWh
//             </span>
//           </motion.div>

//           <motion.div className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-4 py-3 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-lg font-medium w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.2 }}>
//             <span className="block">Charging Duration:</span>
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//               {Math.floor(counter / 60)}:{formatTime(counter % 60)}
//             </span>
//           </motion.div>

//           <motion.div className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-4 py-3 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-lg font-medium w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.4 }}>
//             <span className="block">Charging Current:</span>
//             <span className="group-hover:text-cyan-400/90 transition-colors duration-300">
//               {(bmsData?.current || 0).toFixed(2)} A
//             </span>
//           </motion.div>

//           <motion.div className="group shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] px-4 py-3 bg-black/20 backdrop-blur-sm rounded-lg text-gray-400 text-lg font-medium w-full text-center hover:shadow-[0_0_0_1px_rgba(6,182,212,0.2)_inset] transition-all duration-300 hover:bg-black/30" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.6 }}>
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
