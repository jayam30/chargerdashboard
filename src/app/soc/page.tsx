// "use client";

// import { useState } from "react";
// import { ChevronLeft, ChevronRight, Info, BatteryCharging } from "lucide-react";
// import { Button } from "../../../components/ui/button";
// import { Card, CardContent } from "../../../components/ui/card";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
//   TooltipProvider,
// } from "../../../components/ui/tooltip";

// export default function Page() {
//     const [percentage, setPercentage] = useState(0);
//     const [isLoading, setIsLoading] = useState(false);
//     const router = useRouter();
//     const { updateChargingStatus } = useChargingStatus();
//     const { bmsData, chargingPower } = useBMSData();
//     const currentSOC =  bmsData?.SOC;
//   const formatPercentage = (num: number) => `${num}%`;

//   const incrementValue = () =>
//     setPercentage((prev) => (prev < 100 ? prev + 1 : 100));
//   const decrementValue = () =>
//     setPercentage((prev) => (prev > 0 ? prev - 1 : 0));
//   const handleQuickSelect = (value: number) => setPercentage(value);

//   return (
//     <div
//       className="w-[768px] h-[1024px] overflow-hidden bg-transparent font-sans pt-7"
//       style={{
//         backgroundImage: "url(/soc-bg.png)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="flex justify-center items-center p-1 pt-40 w-full px-8">
//         <Card className="w-full max-w-md bg-transparent border-none">
//           <CardContent className="border-none p-8">
//             <div className="flex flex-col items-center space-y-8">
//               <div className="flex items-center space-x-3">
//                 <BatteryCharging className="w-8 h-8 text-red-500" />
//                 <span className="text-xl font-semibold text-white">Select SOC</span>
//                 <TooltipProvider>
//                   <Tooltip>
//                     <TooltipTrigger>
//                       <Info className="w-5 h-5 text-neutral-400" />
//                     </TooltipTrigger>
//                     <TooltipContent>
//                       <p>Select the percentage of battery charge you want.</p>
//                     </TooltipContent>
//                   </Tooltip>
//                 </TooltipProvider>
//               </div>

//               <div className="flex gap-2 w-full justify-center">
//                 {[25, 50, 75, 100].map((value) => (
//                   <Button
//                     key={value}
//                     variant="outline"
//                     size="sm"
//                     onClick={() => handleQuickSelect(value)}
//                     className={`px-3 py-1 text-sm ${
//                       percentage === value
//                         ? "bg-red-500 text-white border-red-500"
//                         : "text-neutral-400 hover:text-white"
//                     }`}
//                   >
//                     {`${value}%`}
//                   </Button>
//                 ))}
//               </div>

//               <div className="flex items-center justify-center w-full space-x-8">
//                 <Button
//                   variant="outline"
//                   className="text-red hover:text-white hover:bg-neutral-950 transition-all duration-200 transform hover:scale-110"
//                   onClick={decrementValue}
//                 >
//                   <ChevronLeft className="w-24 h-24 stroke-2" />
//                 </Button>

//                 <div className="text-7xl font-bold text-white">
//                   {formatPercentage(percentage)}
//                 </div>

//                 <Button
//                   variant="outline"
//                   className="text-red hover:text-white hover:bg-neutral-950 transition-all duration-200 transform hover:scale-110"
//                   onClick={incrementValue}
//                 >
//                   <ChevronRight className="w-24 h-24 stroke-2" />
//                 </Button>
//               </div>

//               <div className="flex justify-center w-full">
//                 <Button
//                   className="w-40 h-12 text-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition-all duration-200 hover:scale-105 disabled:opacity-50"
//                   disabled
//                 >
//                   Confirm
//                 </Button>
//               </div>

//               <div className="text-sm text-neutral-500">
//                 Current SOC: {formatPercentage(currentSOC)} | Target SOC:{" "}
//                 {formatPercentage(percentage)}
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
// taget energy
