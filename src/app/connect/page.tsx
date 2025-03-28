// "use client";

// // import Navbar from "../../../components/ui/";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useChargingStatus } from "../../../hooks/useChargingStatus";

// export default function Wall() {
//   const router = useRouter();
//   const { updateChargingStatus } = useChargingStatus();
//   const [connectionStatus, setConnectionStatus] = useState("waiting");

//   useEffect(() => {
//     // Initialize charging as false on mount
//     const chargeInitFalse = async () => {
//       await updateChargingStatus(false);
//     };
//     chargeInitFalse();
//   }, []);

//   useEffect(() => {
//     const socket = new WebSocket("ws://localhost:8080"); // Change to actual WebSocket URL

//     socket.onopen = () => {
//       console.log("WebSocket Connected");
//       setConnectionStatus("waiting");
//     };

//     socket.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       console.log("WebSocket Message:", data);

//       if (data.type === "charging_connected") {
//         setConnectionStatus("connected");

//         // Navigate to /park after 2.5 seconds
//         setTimeout(() => {
//           router.push("/park");
//         }, 2500);
//       }
//     };

//     socket.onclose = () => {
//       console.log("WebSocket Disconnected");
//     };

//     return () => {
//       socket.close();
//     };
//   }, [router]);

//   return (
//     <div
//       className="relative w-[768px] h-[1024px] overflow-hidden bg-[#2A2D32] font-sans"
//       style={{
//         backgroundImage: "url(/connect-bg.png)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Hero Section */}
//       <div className="flex justify-center items-center p-24 py-40 w-full px-8">
//         <motion.div
//           className="text-left flex-col gap-2 mb-24 relative"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           <motion.h2
//             className="text-white text-5xl font-bold tracking-wider"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             Hi
//           </motion.h2>

//           <motion.div className="relative">
//             <motion.div
//               className="text-gray-400 text-2xl font-light tracking-wide"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//             >
//               Let's Connect to Wireless
//             </motion.div>

//             <motion.div
//               className="text-gray-200 text-4xl font-medium tracking-wide relative group"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//             >
//               <span className="relative inline-block">Charge to your EV</span>
//             </motion.div>

//             {/* Connection Status Section */}
//             <motion.div
//               className="mt-8 flex items-center gap-3"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.8 }}
//             >
//               {connectionStatus === "waiting" ? (
//                 <>
//                   <motion.span
//                     className="text-gray-400 text-lg"
//                     animate={{
//                       opacity: [0.5, 1, 0.5],
//                     }}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                   >
//                     Waiting to Connect
//                   </motion.span>

//                   {/* Simple Circular Loader */}
//                   <motion.div
//                     className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
//                     animate={{
//                       rotate: 360,
//                     }}
//                     transition={{
//                       duration: 1,
//                       repeat: Infinity,
//                       ease: "linear",
//                     }}
//                   />
//                 </>
//               ) : (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5 }}
//                   className="text-green-500 text-4xl font-bold tracking-wide"
//                 >
//                   Connected
//                 </motion.div>
//               )}
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>

//       <div className="absolute bottom-10 w-full">
//         {/* Scooter and Person */}
//         <motion.div
//           className="absolute -right-10 bottom-0"
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{
//             duration: 1,
//             delay: 0.9,
//             type: "spring",
//             stiffness: 100,
//           }}
//         >
//           <div className="relative">
//             <motion.div
//               animate={{
//                 y: [0, -10, 0],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//                 ease: "easeInOut",
//               }}
//             >
//               <Image
//                 src="/scooty.png"
//                 alt="Person on Scooter"
//                 width={500}
//                 height={500}
//                 className="object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
//                 priority
//               />
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
// /
//ui
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Connect() {
  const router = useRouter();
  const [connectionStatus, setConnectionStatus] = useState("waiting");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => {
      console.log("✅ WebSocket Connected");
      setConnectionStatus("waiting");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("📩 WebSocket Message:", data);
      setConnectionStatus("connected");

      setTimeout(() => {
        router.push("/park");
      }, 2500);
    };

    socket.onclose = () => {
      console.log("❌ WebSocket Disconnected");
    };

    return () => {
      socket.close();
    };
  }, [router]);

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-[#2A2D32] font-sans bg-cover bg-center"
      style={{ backgroundImage: "url(/connect-bg.png)" }}
    >
      {/* Hero Section */}
      <div className="flex justify-center items-center px-6 md:px-12 lg:px-24 py-24 md:py-32 lg:py-40 w-full">
        <motion.div
          className="text-center md:text-left flex flex-col gap-2 relative max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h2
            className="text-white text-4xl md:text-5xl font-bold tracking-wider"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi
          </motion.h2>

          <motion.div className="relative">
            <motion.div
              className="text-gray-400 text-lg md:text-2xl font-light tracking-wide"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Let’s Connect to Wireless
            </motion.div>

            <motion.div
              className="text-gray-200 text-2xl md:text-4xl font-medium tracking-wide relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span className="inline-block">Charge your EV</span>
            </motion.div>

            {/* Connection Status Section */}
            <motion.div
              className="mt-8 flex items-center gap-3 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {connectionStatus === "waiting" ? (
                <>
                  <motion.span
                    className="text-gray-400 text-lg"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    Waiting to Connect
                  </motion.span>

                  {/* Simple Circular Loader */}
                  <motion.div
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-green-500 text-3xl md:text-4xl font-bold tracking-wide"
                >
                  Connected
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scooter Image */}
      <div className="absolute bottom-5 w-full flex justify-center md:justify-end">
        <motion.div
          className="relative w-60 md:w-80 lg:w-[500px]"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.9,
            type: "spring",
            stiffness: 100,
          }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <Image
              src="/scooty.png"
              alt="Person on Scooter"
              width={500}
              height={500}
              className="object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
