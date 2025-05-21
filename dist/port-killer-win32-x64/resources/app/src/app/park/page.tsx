// "use client";

// import { motion } from "framer-motion";
// import React, { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { useBMSData } from "../../../hooks/useBMSData";

// const Park = () => {
//   const router = useRouter();
//   const { bmsData } = useBMSData();
// const isReceiverCoilDetected = bmsData?.isReceiverCoilDetected ?? false;


//   useEffect(() => {
//     if (isReceiverCoilDetected) {
//       const timeout = setTimeout(() => router.push("/set-time"), 5000);

//       // Cleanup function to clear timeout if the component unmounts or the value changes
//       return () => clearTimeout(timeout);
//     }
//   }, [isReceiverCoilDetected, router]);

//   return (
//     <div
//       className="w-[1968px] h-[1124px] overflow-hidden bg-[#2A2D32] font-sans pt-7"
//       style={{
//         backgroundImage: "url(/main-bg.png)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Hero Section */}
//       <div className="flex justify-center items-center p-1 pt-40 w-full px-8">
//         <motion.div
//           className="text-left flex-col gap-2  mb-24 relative"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           <motion.div
//             className={`text-white ${
//               isReceiverCoilDetected && "text-green-500"
//             } text-5xl font-medium tracking-wide relative group`}
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             <span
//               className={`relative inline-block ${
//                 isReceiverCoilDetected && "text-green-500"
//               }`}
//             >
//               {isReceiverCoilDetected ? "Vehicle Parked" : "Park your vehicle"}
//             </span>
//           </motion.div>
//           <div className="w-full pt-5 flex justify-center items-center">
//             <span
//               className="text-red-500 text-3xl text-center font-medium w-full animate-pulse"
//             >
//               {!isReceiverCoilDetected && "⚠️ Please park the vehicle properly."}
//             </span>
//           </div>
//         </motion.div>
//       </div>

//       {/* Charger Animation */}
//       <div className="w-full flex justify-center items-center">
//         <div className="flex-col justify-center items-center">
//           <motion.div
//             className="w-full flex justify-center items-center pb-2 relative"
//             initial="initial"
//             style={{ opacity: 1 }}
//             animate={{
//               opacity: [0.2, 1, 0.2],
//             }}
//             transition={{
//               duration: 0.8,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           >
//             {/* Outer Glow Effect */}
//             <motion.div
//               className="absolute w-16 h-16 rounded-full"
//               style={{
//                 background:
//                   "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)",
//               }}
//             />

//             {/* Inner Green Glow */}
//             <motion.div
//               className="absolute w-14 h-14 rounded-full"
//               style={{
//                 background:
//                   "radial-gradient(circle, rgba(42,248,4,0.3) 0%, rgba(42,248,4,0) 60%)",
//               }}
//             />

//             <motion.svg
//               width="36"
//               height="31"
//               viewBox="0 0 36 31"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               style={{
//                 filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3))",
//               }}
//             >
//               <path
//                 d="M17.9089 0L0.185966 30.697H35.6318L17.9089 0Z"
//                 fill="white"
//               />
//               <path
//                 d="M17.9088 5.22461L4.71089 28.0841H31.1067L17.9088 5.22461Z"
//                 fill="#2AF804"
//                 style={{
//                   filter: "drop-shadow(0 0 3px rgba(42,248,4,0.5))",
//                 }}
//               />
//             </motion.svg>
//           </motion.div>

//           <Image
//             src="/charger-base.png"
//             alt="Charger pad"
//             width={250}
//             height={250}
//           />
//         </div>
//       </div>

//       {/* Scooty Animation */}
//       <div className="flex w-full justify-center items-center">
//         <motion.div
//           initial={{ y: 450 }}
//           animate={
//             isReceiverCoilDetected ? { y: -250 } : { y: [450, -250, -250] }
//           }
//           transition={{
//             duration: 3,
//             times: [0, 0.66, 1],
//             repeat: isReceiverCoilDetected ? 0 : Infinity,
//             repeatType: "loop",
//             ease: "easeInOut",
//           }}
//         >
//           <Image
//             src="/park-scooty.png"
//             alt="Charger pad"
//             width={300}
//             height={300}
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Park;
//ui
"use client";

import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useBMSData } from "../../../hooks/useBMSData";

const Park = () => {
  const router = useRouter();
  const { bmsData } = useBMSData();
  const isReceiverCoilDetected = bmsData?.isReceiverCoilDetected ?? false;

  useEffect(() => {
    if (isReceiverCoilDetected) {
      const timeout = setTimeout(() => router.push("/select"), 5000);
      return () => clearTimeout(timeout);
    }
  }, [isReceiverCoilDetected, router]);

  return (
    <div
      className="w-[768px] h-[1024px] overflow-hidden bg-[#2A2D32] font-sans pt-7"
      style={{
        backgroundImage: "url(/main-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center p-4 pt-20 w-full text-center">
        <motion.div
          className="text-left flex-col gap-2 mb-12 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={`text-white text-4xl md:text-5xl font-medium tracking-wide`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className={`${isReceiverCoilDetected && "text-green-500"}`}>
              {isReceiverCoilDetected ? "Vehicle Parked" : "Park your vehicle"}
            </span>
          </motion.div>

          <div className="w-full pt-4 flex justify-center">
            {!isReceiverCoilDetected && (
              <span className="text-red-500 text-lg md:text-3xl text-center font-medium animate-pulse">
                ⚠️ Please park the vehicle properly.
              </span>
            )}
          </div>
        </motion.div>
      </div>

      {/* Charger Animation */}
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <motion.div
            className="w-full flex justify-center items-center pb-2 relative"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Outer Glow Effect */}
            <motion.div
              className="absolute w-14 md:w-16 h-14 md:h-16 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)",
              }}
            />
            {/* Inner Green Glow */}
            <motion.div
              className="absolute w-12 md:w-14 h-12 md:h-14 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(42,248,4,0.3) 0%, rgba(42,248,4,0) 60%)",
              }}
            />
            <motion.svg
              width="30"
              height="25"
              viewBox="0 0 36 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3))",
              }}
            >
              <path d="M17.9089 0L0.185966 30.697H35.6318L17.9089 0Z" fill="white" />
              <path
                d="M17.9088 5.22461L4.71089 28.0841H31.1067L17.9088 5.22461Z"
                fill="#2AF804"
                style={{
                  filter: "drop-shadow(0 0 3px rgba(42,248,4,0.5))",
                }}
              />
            </motion.svg>
          </motion.div>

          <Image
            src="/charger-base.png"
            alt="Charger pad"
            width={200}
            height={200}
            className="w-auto max-w-[60%] md:max-w-[250px]"
          />
        </div>
      </div>

      {/* Scooty Animation */}
      <div className="flex w-full justify-center items-center">
        <motion.div
          initial={{ y: 250 }}
          animate={isReceiverCoilDetected ? { y: -100 } : { y: [250, -100, -100] }}
          transition={{
            duration: 3,
            times: [0, 0.66, 1],
            repeat: isReceiverCoilDetected ? 0 : Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <Image
            src="/park-scooty.png"
            alt="Scooter"
            width={250}
            height={250}
            className="w-auto max-w-[50%] md:max-w-[300px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Park;
