// "use client";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import { useBMSData } from "../hooks/useBMSData";

// import {  Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle, } from "./ui/dialog";

// const MissDialog = () => {
//   const { bmsData } = useBMSData();
//   const [hasMiss, setHasMiss] = useState(false);
//   const [isScanning, setIsScanning] = useState(false);

//   useEffect(() => {
//     if (bmsData?.isMiss === true) {
//       setIsScanning(true);
  
//       setTimeout(() => {
//         setHasMiss(true);
//         setIsScanning(false);
//       }, 3000);
//     } else {
//         setHasMiss(false);
//     }
//   }, [bmsData?.isMiss]);
  

//   return (
//     <Dialog open={bmsData?.isMiss}>
    
//     <DialogContent className="max-w-[400px] bg-neutral-800 backdrop-blur-sm border-none">
// <div className="flex flex-col items-center gap-4 py-6">
//   <DialogHeader className="text-center space-y-4">
//     <DialogTitle className="text-2xl font-bold text-white text-center">
//       Misalignment Detected
//     </DialogTitle>
//     <div className="relative flex justify-center">
//       <Image
//         src="/miss.png"
//         alt="Misalignment Detected"
//         width={200}
//         height={200}
//         className="object-contain"
//       />
    
//     </div>
//   </DialogHeader>

//   <div className="flex flex-col items-center gap-2 text-center">
//     <DialogDescription className="text-xl font-semibold text-white">
//       Misalignment DETECTED
//     </DialogDescription>
//     <DialogDescription className="text-lg text-white/90">
//       The charging pad is misaligned.
//       <br />
//       Please adjust it to continue charging
//     </DialogDescription>
//   </div>
// </div>
// </DialogContent>

//     </Dialog>
//   );
// };

// export default MissDialog;

// "use client";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { useBMSData } from "../hooks/useBMSData";
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";

// const MissDialog = () => {
//   const { bmsData } = useBMSData();
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     if (bmsData?.isMiss) {
//       setIsOpen(true);
//     } else {
//       setIsOpen(false);
//     }
//   }, [bmsData?.isMiss]);

//   return (
//     <Dialog open={isOpen}>
//       <DialogContent className="max-w-[400px] bg-neutral-800 backdrop-blur-sm border-none rounded-lg shadow-lg">
//         <div className="flex flex-col items-center gap-4 py-6">
//           <DialogHeader className="text-center space-y-4">
//             <DialogTitle className="text-2xl font-bold text-white">
//               Misalignment Detected
//             </DialogTitle>
//             <div className="relative flex justify-center">
//               <Image
//                 src="/miss.png"
//                 alt="Misalignment Detected"
//                 width={200}
//                 height={200}
//                 className="object-contain"
//               />
//             </div>
//           </DialogHeader>

//           <div className="flex flex-col items-center gap-2 text-center">
//             <DialogDescription className="text-xl font-semibold text-white">
//               Misalignment DETECTED
//             </DialogDescription>
//             <DialogDescription className="text-lg text-white/90">
//               The charging pad is misaligned.
//               <br />
//               Please adjust it to continue charging.
//             </DialogDescription>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default MissDialog;
//ui 2
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useBMSData } from "../hooks/useBMSData";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";

const MissDialog = () => {
  const { bmsData } = useBMSData();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(bmsData?.isMiss || false);
  }, [bmsData?.isMiss]);

  return (
    <Dialog open={isOpen}>
      <DialogContent className="max-w-[400px] bg-neutral-800 backdrop-blur-sm border-none rounded-lg shadow-lg">
        <div className="flex flex-col items-center gap-4 py-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white text-center">
              Misalignment Detected
            </DialogTitle>
            <div className="relative flex justify-center">
              <Image
                src="/miss.png"
                alt="Misalignment Detected"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </DialogHeader>

          <div className="flex flex-col items-center gap-2 text-center">
            <DialogDescription className="text-xl font-semibold text-white">
              Misalignment DETECTED
            </DialogDescription>
            <DialogDescription className="text-lg text-white/90">
              The charging pad is misaligned.
              <br />
              Please adjust it to continue charging.
            </DialogDescription>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MissDialog;