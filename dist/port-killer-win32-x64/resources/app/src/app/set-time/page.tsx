// app/page.tsx
// "use client";

// import {  useState } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Timer,
//   Zap,
//   Info,
//   Home,
// } from "lucide-react";
// import { Button } from "../../components/ui/button";
// import { Card, CardContent } from "../../components/ui/card";
// import { useChargingStatus } from "../../hooks/useChargingStatus";
// import { useBMSData } from "../../hooks/useBMSData";
// import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "../../components/ui/tooltip"; // Fix path
// import { useWebSocket } from "../../contexts/WebSocketContext";

// export default function HomePage() {
//   const router = useRouter();
//   const { updateChargingStatus } = useChargingStatus();
//   const [step, setStep] = useState<"hours" | "minutes">("hours");
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
  
  
//   const { sendMessage } = useWebSocket();

//   const formatNumber = (num: number) => num.toString().padStart(2, "0");

//   const incrementValue = (type: "hours" | "minutes") => {
//     if (type === "hours") {
//       setHours((prev) => (prev < 23 ? prev + 1 : 0));
//     } else {
//       setMinutes((prev) => (prev < 59 ? prev + 1 : 0));
//     }
//   };

//   const decrementValue = (type: "hours" | "minutes") => {
//     if (type === "hours") {
//       setHours((prev) => (prev > 0 ? prev - 1 : 23));
//     } else {
//       setMinutes((prev) => (prev > 0 ? prev - 1 : 59));
//     }
//   };

//   const handleSelect = async () => {
//     if (hours === 0 && minutes === 0) {
//       toast.error("Please select a valid charging duration");
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const success = await updateChargingStatus(true);
//       // if (success) {
//       //   sendMessage({ type: "SET_TIMER", data: { hours, minutes } });
//       //   sendMessage({ type: "request_charging_status" });
// // Correct way to send WebSocket message
      
//         toast.success(`Charging scheduled for ${hours}h ${minutes}m`);
//         router.push("/charge");
//       // } else {
//       //   toast.error("Failed to initialize charging");
      
//     } catch (error) {
//       console.error("Error initializing charging:", error);
//       toast.error("Failed to initialize charging");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleQuickSelect = (mins: number) => {
//     setHours(Math.floor(mins / 60));
//     setMinutes(mins % 60);
//   };

//   const getTotalMinutes = () => hours * 60 + minutes;

//   return (
//     <div
//   className="w-full min-h-screen bg-transparent font-sans pt-7 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center"
//   style={{
//     backgroundImage: "url('/lib/main-bg.png')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   }}
// >

//       {/* Home Button */}
//       <Button className="mb-6 text-lg sm:text-xl bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-200 flex items-center">
//         <Home className="w-5 h-5 mr-2" />
//         Home
//       </Button>

//       {/* Main Card */}
//       <div className="flex justify-center items-center w-full max-w-3xl px-4 sm:px-8 md:px-12">
//         <Card className="w-full bg-transparent border-none">
//           <CardContent className="border-none p-6 sm:p-8">
//             <div className="flex flex-col items-center space-y-6 sm:space-y-8">
//               {/* Header */}
//               <div className="flex items-center space-x-3">
//                 <Timer className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
//                 <span className="text-lg sm:text-xl font-semibold text-white">
//                   Set Charging Duration
//                 </span>
//                 <TooltipProvider>
//                   <Tooltip>
//                     <TooltipTrigger>
//                       <Info className="w-5 h-5 text-neutral-400" />
//                     </TooltipTrigger>
//                     <TooltipContent>
//                       <p>Select how long you want to charge your vehicle</p>
//                     </TooltipContent>
//                   </Tooltip>
//                 </TooltipProvider>
//               </div>

//               {/* Quick Select Buttons */}
//               <div className="flex gap-2 w-full justify-center flex-wrap">
//                 {[1, 5, 20, 60].map((mins) => (
//                   <Button
//                     key={mins}
//                     variant="outline"
//                     size="sm"
//                     onClick={() => handleQuickSelect(mins)}
//                     className={`px-3 py-1 text-sm sm:text-base ${
//                       getTotalMinutes() === mins
//                         ? "bg-red-500 text-white border-red-500"
//                         : "text-neutral-400 hover:text-white"
//                     }`}
//                   >
//                     {mins >= 60 ? `${Math.floor(mins / 60)}h` : `${mins}m`}
//                   </Button>
//                 ))}
//               </div>

//               {/* Time Selection */}
//               <div className="flex items-center justify-center w-full space-x-6 sm:space-x-8">
//                 <Button
//                   variant="outline"
//                   className="text-black hover:text-white hover:bg-neutral-950 transition-all duration-200 transform hover:scale-110 p-2 sm:p-4"
//                   onClick={() => decrementValue(step)}
//                 >
//                   <ChevronLeft className="w-12 h-12 sm:w-16 sm:h-16 stroke-2" />
//                 </Button>

//                 <div className="flex items-baseline space-x-3">
//                   <div
//                     className={`text-5xl sm:text-7xl font-bold transition-all duration-300 cursor-pointer ${
//                       step === "hours"
//                         ? "text-red-500 scale-110"
//                         : "text-white scale-100 hover:text-red-400"
//                     }`}
//                     onClick={() => setStep("hours")}
//                   >
//                     {formatNumber(hours)}
//                   </div>
//                   <div className="text-5xl sm:text-7xl font-bold text-white">:</div>
//                   <div
//                     className={`text-5xl sm:text-7xl font-bold transition-all duration-300 cursor-pointer ${
//                       step === "minutes"
//                         ? "text-red-500 scale-110"
//                         : "text-white scale-100 hover:text-red-400"
//                     }`}
//                     onClick={() => setStep("minutes")}
//                   >
//                     {formatNumber(minutes)}
//                   </div>
//                 </div>

//                 <Button
//                   variant="outline"
//                   className="text-black hover:text-white hover:bg-neutral-950 transition-all duration-200 transform hover:scale-110 p-2 sm:p-4"
//                   onClick={() => incrementValue(step)}
//                 >
//                   <ChevronRight className="w-12 h-12 sm:w-16 sm:h-16 stroke-2" />
//                 </Button>
//               </div>

//               {/* Initialize Button */}
//               <Button
//                 className="w-36 sm:w-40 h-10 sm:h-12 text-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition-all duration-200 hover:scale-105 disabled:opacity-50"
//                 onClick={handleSelect}
//                 disabled={isLoading || (hours === 0 && minutes === 0)}
//               >
//                 {isLoading ? "Loading..." : <><Zap className="w-5 h-5 mr-2" /> Initialize</>}
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };


// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Timer,
//   Zap,
//   Info,
//   Home,
// } from "lucide-react";
// import { Button } from "../../components/ui/button";
// import { Card, CardContent } from "../../components/ui/card";
// import { useChargingStatus } from "../../hooks/useChargingStatus";
// import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "../../components/ui/tooltip";


// export default function HomePage() {
//   const router = useRouter();
//   const { updateChargingStatus } = useChargingStatus();
 
//   const [step, setStep] = useState<"hours" | "minutes">("hours");
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);

//   const formatNumber = (num: number) => num.toString().padStart(2, "0");

//   const incrementValue = (type: "hours" | "minutes") => {
//     if (type === "hours") {
//       setHours((prev) => (prev < 23 ? prev + 1 : 0));
//     } else {
//       setMinutes((prev) => (prev < 59 ? prev + 1 : 0));
//     }
//   };

//   const decrementValue = (type: "hours" | "minutes") => {
//     if (type === "hours") {
//       setHours((prev) => (prev > 0 ? prev - 1 : 23));
//     } else {
//       setMinutes((prev) => (prev > 0 ? prev - 1 : 59));
//     }
//   };

//   const handleSelect = async () => {
//     if (hours === 0 && minutes === 0) {
//       toast.error("Please select a valid charging duration");
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const success = await updateChargingStatus(true);
//       if (success) {
//         toast.success(`Charging scheduled for ${hours}h ${minutes}m`);
//         router.push("/charge");
//       } else {
//         toast.error("Failed to initialize charging");
//       }
//     } catch (error) {
//       console.error("Error initializing charging:", error);
//       toast.error("Failed to initialize charging");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleQuickSelect = (mins: number) => {
//     setHours(Math.floor(mins / 60));
//     setMinutes(mins % 60);
//   };

//   const getTotalMinutes = () => hours * 60 + minutes;

//   return (
//     <div className="w-full min-h-screen bg-transparent font-sans pt-7 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center"
//       style={{ backgroundImage: "url('/lib/main-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
//       <Button className="mb-6 text-lg sm:text-xl bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-200 flex items-center">
//         <Home className="w-5 h-5 mr-2" />
//         Home
//       </Button>
//       <div className="flex justify-center items-center w-full max-w-3xl px-4 sm:px-8 md:px-12">
//         <Card className="w-full bg-transparent border-none">
//           <CardContent className="border-none p-6 sm:p-8">
//             <div className="flex flex-col items-center space-y-6 sm:space-y-8">
//               <div className="flex items-center space-x-3">
//                 <Timer className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
//                 <span className="text-lg sm:text-xl font-semibold text-white">Set Charging Duration</span>
//                 <TooltipProvider>
//                   <Tooltip>
//                     <TooltipTrigger>
//                       <Info className="w-5 h-5 text-neutral-400" />
//                     </TooltipTrigger>
//                     <TooltipContent>
//                       <p>Select how long you want to charge your vehicle</p>
//                     </TooltipContent>
//                   </Tooltip>
//                 </TooltipProvider>
//               </div>
//               <div className="flex gap-2 w-full justify-center flex-wrap">
//                 {[1, 5, 20, 60].map((mins) => (
//                   <Button key={mins} variant="outline" size="sm" onClick={() => handleQuickSelect(mins)}
//                     className={`px-3 py-1 text-sm sm:text-base ${getTotalMinutes() === mins ? "bg-red-500 text-white border-red-500" : "text-neutral-400 hover:text-white"}`}>
//                     {mins >= 60 ? `${Math.floor(mins / 60)}h` : `${mins}m`}
//                   </Button>
//                 ))}
//               </div>
//               <div className="flex items-center justify-center w-full space-x-6 sm:space-x-8">
//                 <Button variant="outline" onClick={() => decrementValue(step)}>
//                   <ChevronLeft className="w-12 h-12 sm:w-16 sm:h-16 stroke-2" />
//                 </Button>
//                 <div className="flex items-baseline space-x-3">
//                   <div onClick={() => setStep("hours")} className={`text-5xl sm:text-7xl font-bold ${step === "hours" ? "text-red-500 scale-110" : "text-white hover:text-red-400"}`}>{formatNumber(hours)}</div>
//                   <div className="text-5xl sm:text-7xl font-bold text-white">:</div>
//                   <div onClick={() => setStep("minutes")} className={`text-5xl sm:text-7xl font-bold ${step === "minutes" ? "text-red-500 scale-110" : "text-white hover:text-red-400"}`}>{formatNumber(minutes)}</div>
//                 </div>
//                 <Button variant="outline" onClick={() => incrementValue(step)}>
//                   <ChevronRight className="w-12 h-12 sm:w-16 sm:h-16 stroke-2" />
//                 </Button>
//               </div>
//               <Button onClick={handleSelect} disabled={isLoading || (hours === 0 && minutes === 0)} className="w-36 sm:w-40 h-10 sm:h-12 text-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition-all duration-200 hover:scale-105 disabled:opacity-50">
//                 {isLoading ? "Loading..." : <><Zap className="w-5 h-5 mr-2" /> Initialize</>}
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Timer,
//   Zap,
//   Home,
// } from "lucide-react";
// import { Button } from "../../../components/ui/button";
// import { Card, CardContent } from "../../../components/ui/card";
// import { useChargingStatus } from "../../../hooks/useChargingStatus";
// import { useTimerStatus } from "../../../hooks/useTimerStatus";  // Import timer hook
// // import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "../../components/ui/tooltip";

// export default function HomePage() {
//   const router = useRouter();
//   const { updateChargingStatus } = useChargingStatus();
//   const { setTimer } = useTimerStatus();  // Use the timer hook

//   const [step, setStep] = useState<"hours" | "minutes">("hours");
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);

//   const formatNumber = (num: number) => num.toString().padStart(2, "0");

//   const incrementValue = (type: "hours" | "minutes") => {
//     if (type === "hours") {
//       setHours((prev) => (prev < 23 ? prev + 1 : 0));
//     } else {
//       setMinutes((prev) => (prev < 59 ? prev + 1 : 0));
//     }
//   };

//   const decrementValue = (type: "hours" | "minutes") => {
//     if (type === "hours") {
//       setHours((prev) => (prev > 0 ? prev - 1 : 23));
//     } else {
//       setMinutes((prev) => (prev > 0 ? prev - 1 : 59));
//     }
//   };

//   const handleSelect = async () => {
//     if (hours === 0 && minutes === 0) {
//       toast.error("Please select a valid charging duration");
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const totalMinutes = hours * 60 + minutes;
      
//       // Set the timer (this will store endTime)
//       setTimer(totalMinutes);

//       const success = await updateChargingStatus(true);
//       if (success) {
//         toast.success(`Charging scheduled for ${hours}h ${minutes}m`);
//         router.push("/charge");
//       } else {
//         toast.error("Failed to initialize charging");
//       }
//     } catch (error) {
//       console.error("Error initializing charging:", error);
//       toast.error("Failed to initialize charging");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleQuickSelect = (mins: number) => {
//     setHours(Math.floor(mins / 60));
//     setMinutes(mins % 60);
//   };

//   return (
//     <div className="w-full min-h-screen bg-transparent font-sans pt-7 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center"
//       style={{ backgroundImage: "url('/lib/main-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      
//       {/* <Button className="mb-6 text-lg sm:text-xl bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-200 flex items-center">
//         <Home className="w-5 h-5 mr-2" />
//         Home
//       </Button> */}
          
//     <Button
//       onClick={() => router.push("/")} // Navigate to homepage
//       className="mb-6 text-lg sm:text-xl bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-200 flex items-center"
//     >
//       <Home className="w-5 h-5 mr-2" />
//       Home
//     </Button>
      
//       <div className="flex justify-center items-center w-full max-w-3xl px-4 sm:px-8 md:px-12">
//         <Card className="w-full bg-transparent border-none">
//           <CardContent className="border-none p-6 sm:p-8">
//             <div className="flex flex-col items-center space-y-6 sm:space-y-8">
//               <div className="flex items-center space-x-3">
//                 <Timer className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
//                 <span className="text-lg sm:text-xl font-semibold text-white">Set Charging Duration</span>
//               </div>
              
//               <div className="flex gap-2 w-full justify-center flex-wrap">
//                 {[1, 5, 20, 60].map((mins) => (
//                   <Button key={mins} variant="outline" size="sm" onClick={() => handleQuickSelect(mins)}
//                     className={`px-3 py-1 text-sm sm:text-base`}>
//                     {mins >= 60 ? `${Math.floor(mins / 60)}h` : `${mins}m`}
//                   </Button>
//                 ))}
//               </div>
              
//               <div className="flex items-center justify-center w-full space-x-6 sm:space-x-8">
//                 <Button variant="outline" onClick={() => decrementValue(step)}>
//                   <ChevronLeft className="w-12 h-12 sm:w-16 sm:h-16 stroke-2" />
//                 </Button>
                
//                 <div className="flex items-baseline space-x-3">
//                   <div onClick={() => setStep("hours")} className="text-5xl sm:text-7xl font-bold text-white">
//                     {formatNumber(hours)}
//                   </div>
//                   <div className="text-5xl sm:text-7xl font-bold text-white">:</div>
//                   <div onClick={() => setStep("minutes")} className="text-5xl sm:text-7xl font-bold text-white">
//                     {formatNumber(minutes)}
//                   </div>
//                 </div>
                
//                 <Button variant="outline" onClick={() => incrementValue(step)}>
//                   <ChevronRight className="w-12 h-12 sm:w-16 sm:h-16 stroke-2" />
//                 </Button>
//               </div>
              
//               <Button onClick={handleSelect} disabled={isLoading || (hours === 0 && minutes === 0)}
//                 className="w-36 sm:w-40 h-10 sm:h-12 text-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition-all duration-200 hover:scale-105 disabled:opacity-50">
//                 {isLoading ? "Loading..." : <><Zap className="w-5 h-5 mr-2" /> Initialize</>}
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
//ui
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ChevronLeft, ChevronRight, Timer, Zap, Home } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { useChargingStatus } from "../../../hooks/useChargingStatus";
import { useTimerStatus } from "../../../hooks/useTimerStatus";

export default function SetTimePage() {
  const router = useRouter();
  const { updateChargingStatus } = useChargingStatus();
  const { setTimer } = useTimerStatus();

  const [step, setStep] = useState<"hours" | "minutes">("hours");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  const incrementValue = (type: "hours" | "minutes") => {
    if (type === "hours") {
      setHours((prev) => (prev < 23 ? prev + 1 : 0));
    } else {
      setMinutes((prev) => (prev < 59 ? prev + 1 : 0));
    }
  };

  const decrementValue = (type: "hours" | "minutes") => {
    if (type === "hours") {
      setHours((prev) => (prev > 0 ? prev - 1 : 23));
    } else {
      setMinutes((prev) => (prev > 0 ? prev - 1 : 59));
    }
  };

  const handleSelect = async () => {
    if (hours === 0 && minutes === 0) {
      toast.error("⚠️ Please select a valid charging duration", {
        style: { color: "white" }, // Ensuring error message is visible
      });
      return;
    }

    setIsLoading(true);
    try {
      const totalMinutes = hours * 60 + minutes;
      setTimer(totalMinutes);

      const success = await updateChargingStatus(true);
      if (success) {
        toast.success(`✅ Charging scheduled for ${hours}h ${minutes}m`, {
          style: { color: "white" }, // Toast message in white
        });
        router.push("/charge");
      } else {
        toast.error("⚠️ Failed to initialize charging", {
          style: { color: "white" },
        });
      }
    } catch (error) {
      console.error("Error initializing charging:", error);
      toast.error("⚠️ Failed to initialize charging", {
        style: { color: "white" },
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickSelect = (mins: number) => {
    setHours(Math.floor(mins / 60));
    setMinutes(mins % 60);
  };

  return (
    <div
      className="w-[768px] h-[1024px] overflow-hidden bg-[#2A2D32] font-sans pt-7"
      style={{
        backgroundImage: "url(/main-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Button
        onClick={() => router.push("/")}
        className="mb-6 text-lg sm:text-xl bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-200 flex items-center"
      >
        <Home className="w-5 h-5 mr-2" />
        Home
      </Button>

      <div className="flex justify-center items-center w-full max-w-3xl px-4 sm:px-8 md:px-12">
        <Card className="w-full bg-transparent border-none">
          <CardContent className="border-none p-6 sm:p-8">
            <div className="flex flex-col items-center space-y-6 sm:space-y-8">
              <div className="flex items-center space-x-3">
                <Timer className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
                <span className="text-lg sm:text-xl font-semibold text-white">
                  Set Charging Duration
                </span>
              </div>

              <div className="flex gap-2 w-full justify-center flex-wrap">
                {[1, 5, 20, 60].map((mins) => (
                  <Button
                    key={mins}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickSelect(mins)}
                    className="px-3 py-1 text-sm sm:text-base text-white border-white"
                  >
                    {mins >= 60 ? `${Math.floor(mins / 60)}h` : `${mins}m`}
                  </Button>
                ))}
              </div>

              <div className="flex items-center justify-center w-full space-x-6 sm:space-x-8">
                <Button variant="outline" onClick={() => decrementValue(step)}>
                  <ChevronLeft className="w-12 h-12 sm:w-16 sm:h-16 stroke-2 text-white" />
                </Button>

                <div className="flex items-baseline space-x-3">
                  <div
                    onClick={() => setStep("hours")}
                    className="text-5xl sm:text-7xl font-bold text-white cursor-pointer"
                  >
                    {formatNumber(hours)}
                  </div>
                  <div className="text-5xl sm:text-7xl font-bold text-white">:</div>
                  <div
                    onClick={() => setStep("minutes")}
                    className="text-5xl sm:text-7xl font-bold text-white cursor-pointer"
                  >
                    {formatNumber(minutes)}
                  </div>
                </div>

                <Button variant="outline" onClick={() => incrementValue(step)}>
                  <ChevronRight className="w-12 h-12 sm:w-16 sm:h-16 stroke-2 text-white" />
                </Button>
              </div>

              <Button
                onClick={handleSelect}
                disabled={isLoading || (hours === 0 && minutes === 0)}
                className="w-36 sm:w-40 h-10 sm:h-12 text-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition-all duration-200 hover:scale-105 disabled:opacity-50"
              >
                {isLoading ? "Loading..." : <><Zap className="w-5 h-5 mr-2" /> Initialize</>}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
