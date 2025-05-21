// "use client";

// import { useState, useEffect } from "react";

// export function useTimerStatus() {
//   const [endTime, setEndTime] = useState<number | null>(null);

//   // Function to set the timer
//   const setTimer = (durationMinutes: number) => {
//     const currentTime = Date.now();
//     const calculatedEndTime = currentTime + durationMinutes * 60 * 1000; // Convert minutes to milliseconds
//     setEndTime(calculatedEndTime);
//     localStorage.setItem("chargingEndTime", calculatedEndTime.toString()); // Persist data
//   };

//   // Retrieve stored endTime on component mount
//   useEffect(() => {
//     const storedEndTime = localStorage.getItem("chargingEndTime");
//     if (storedEndTime) {
//       setEndTime(Number(storedEndTime));
//     }
//   }, []);

//   return {
//     endTime,
//     setTimer,
//   };
// }
//pushing to done page
// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useChargingStatus } from "./useChargingStatus"; // ✅ Import charging status hook

// export function useTimerStatus() {
//   const [endTime, setEndTime] = useState<number | null>(null);
//   const router = useRouter();
//   const { isChargingInitialized } = useChargingStatus(); // ✅ Check if charging is active

//   // Function to set the timer
//   const setTimer = (durationMinutes: number) => {
//     const currentTime = Date.now();
//     const calculatedEndTime = currentTime + durationMinutes * 60 * 1000; // Convert minutes to milliseconds
//     setEndTime(calculatedEndTime);
//     localStorage.setItem("chargingEndTime", calculatedEndTime.toString()); // Persist data
//   };

//   // Retrieve stored endTime on component mount
//   useEffect(() => {
//     const storedEndTime = localStorage.getItem("chargingEndTime");
//     if (storedEndTime) {
//       setEndTime(Number(storedEndTime));
//     }
//   }, []);

//   // ✅ Automatically redirect when timer reaches zero AND charging is active
//   useEffect(() => {
//     if (!endTime || !isChargingInitialized) return; // ✅ Prevent flicker issue

//     const checkTime = () => {
//       const now = Date.now();
//       if (now >= endTime && isChargingInitialized) {
//         console.log("⏰ Timer expired! Redirecting to /done...");
//         router.replace("/done"); // ✅ Redirect only when charging is active
//       }
//     };

//     const interval = setInterval(checkTime, 1000);
//     checkTime(); // Run immediately

//     return () => clearInterval(interval);
//   }, [endTime, isChargingInitialized, router]);

//   return {
//     endTime,
//     setTimer,
//   };
// }
//pause and resumne
// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useChargingStatus } from "./useChargingStatus";
// import { useBMSData } from "./useBMSData"; // ✅ Import BMS data hook

// export function useTimerStatus() {
//   const [endTime, setEndTime] = useState<number | null>(null);
//   const [remainingTime, setRemainingTime] = useState<number | null>(null);
//   const [isPaused, setIsPaused] = useState(false); // ✅ Track pause state
//   const router = useRouter();
//   const { isChargingInitialized } = useChargingStatus();
//   const { bmsData } = useBMSData(); // ✅ Get FOD & misalignment status

//   // Function to set the timer
//   const setTimer = (durationMinutes: number) => {
//     const currentTime = Date.now();
//     const calculatedEndTime = currentTime + durationMinutes * 60 * 1000;
//     setEndTime(calculatedEndTime);
//     setRemainingTime(durationMinutes * 60 * 1000);
//     localStorage.setItem("chargingEndTime", calculatedEndTime.toString());
//   };

//   // Retrieve stored endTime on component mount
//   useEffect(() => {
//     const storedEndTime = localStorage.getItem("chargingEndTime");
//     if (storedEndTime) {
//       setEndTime(Number(storedEndTime));
//     }
//   }, []);

//   // ✅ Handle pause and resume logic
//   useEffect(() => {
//     if (bmsData?.isFOD || bmsData?.isMiss ) {
//       if (!isPaused) {
//         setIsPaused(true);
//         setRemainingTime((prev) => (endTime ? endTime - Date.now() : prev)); // Store remaining time
//         setEndTime(null); // Pause the countdown
//       }
//     } else {
//       if (isPaused) {
//         setIsPaused(false);
//         if (remainingTime !== null) {
//           const newEndTime = Date.now() + remainingTime;
//           setEndTime(newEndTime);
//           localStorage.setItem("chargingEndTime", newEndTime.toString());
//         }
//       }
//     }
//   }, [bmsData?.isFOD, bmsData?.isMiss]);

//   // ✅ Timer countdown logic
//   useEffect(() => {
//     if (!endTime || !isChargingInitialized || isPaused) return;

//     const checkTime = () => {
//       const now = Date.now();
//       if (now >= endTime && isChargingInitialized) {
//         console.log("⏰ Timer expired! Redirecting to /done...");
//         router.replace("/done");
//       }
//     };

//     const interval = setInterval(checkTime, 1000);
//     checkTime();

//     return () => clearInterval(interval);
//   }, [endTime, isChargingInitialized, isPaused, router]);

//   return {
//     endTime,
//     setTimer,
//     isPaused,
//   };
// }
//counter
// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useChargingStatus } from "./useChargingStatus";
// import { useBMSData } from "./useBMSData"; // ✅ Import BMS data hook

// export function useTimerStatus() {
//   const [endTime, setEndTime] = useState<number | null>(null);
//   const [remainingTime, setRemainingTime] = useState<number | null>(null);
//   const [isPaused, setIsPaused] = useState(true);
//   const router = useRouter();
//   const { updateChargingStatus, isChargingInitialized } = useChargingStatus(); // ✅ Update charging state
//   const { bmsData } = useBMSData(); // ✅ Get FOD & misalignment status

//   // Function to set the timer
//   const setTimer = (durationMinutes: number) => {
//     const currentTime = Date.now();
//     const calculatedEndTime = currentTime + durationMinutes * 60 * 1000;
//     setEndTime(calculatedEndTime);
//     setRemainingTime(durationMinutes * 60 * 1000);
//     localStorage.setItem("chargingEndTime", calculatedEndTime.toString());
//     updateChargingStatus(true); // ✅ Start charging when timer starts
//   };

//   // Retrieve stored endTime on component mount
//   useEffect(() => {
//     const storedEndTime = localStorage.getItem("chargingEndTime");
//     if (storedEndTime) {
//       setEndTime(Number(storedEndTime));
//     }
//   }, []);

//   // ✅ Handle pause and resume logic
//   useEffect(() => {
//     const shouldPause = bmsData?.isFOD || bmsData?.isMiss || !bmsData?.isReceiverCoilDetected;

//     if (shouldPause && !isPaused) {
//       // Pause the timer
//       setIsPaused(true);
//       setRemainingTime(endTime ? Math.max(endTime - Date.now(), 0) : remainingTime);
//       setEndTime(null); // Stop the countdown
//       updateChargingStatus(false); // ✅ Stop charging when paused
//     } else if (!shouldPause && isPaused && remainingTime !== null) {
//       // Resume the timer
//       setIsPaused(false);
//       const newEndTime = Date.now() + remainingTime;
//       setEndTime(newEndTime);
//       localStorage.setItem("chargingEndTime", newEndTime.toString());
//       updateChargingStatus(true); // ✅ Resume charging
//     }
//   }, [bmsData?.isFOD, bmsData?.isMiss, bmsData?.isReceiverCoilDetected]);

//   // ✅ Timer countdown logic
//   useEffect(() => {
//     if (!endTime || !isChargingInitialized || isPaused) return;

//     const checkTime = () => {
//       const now = Date.now();
//       if (now >= endTime && isChargingInitialized) {
//         console.log("⏰ Timer expired! Redirecting to /done...");
//         router.replace("/done");
//       }
//     };

//     const interval = setInterval(checkTime, 1000);
//     checkTime();

//     return () => clearInterval(interval);
//   }, [endTime, isChargingInitialized, isPaused, router]);

//   return {
//     endTime,
//     setTimer,
//     isPaused,

//   };
// }


//after app building
// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useChargingStatus } from "./useChargingStatus";
// import { useBMSData } from "./useBMSData";

// export function useTimerStatus() {
//   const [endTime, setEndTime] = useState<number | null>(null);
//   const [remainingTime, setRemainingTime] = useState<number | null>(null);
//   const [isPaused, setIsPaused] = useState(true);
//   const router = useRouter();
//   const { updateChargingStatus, isChargingInitialized } = useChargingStatus();
//   const { bmsData } = useBMSData();

//   // Set a timer with duration in minutes
//   const setTimer = (durationMinutes: number) => {
//     const currentTime = Date.now();
//     const calculatedEndTime = currentTime + durationMinutes * 60 * 1000;
//     setEndTime(calculatedEndTime);
//     setRemainingTime(durationMinutes * 60 * 1000);
//     localStorage.setItem("chargingEndTime", calculatedEndTime.toString());
//     updateChargingStatus(true); // Start charging
//     setIsPaused(false);
//   };

//   // Load endTime from localStorage when hook mounts
//   useEffect(() => {
//     const storedEndTime = localStorage.getItem("chargingEndTime");
//     if (storedEndTime) {
//       const parsedEndTime = Number(storedEndTime);
//       const currentTime = Date.now();
//       const timeLeft = parsedEndTime - currentTime;

//       if (timeLeft > 0) {
//         setEndTime(parsedEndTime);
//         setRemainingTime(timeLeft);
//         setIsPaused(false);
//       } else {
//         localStorage.removeItem("chargingEndTime");
//         router.replace("/done");
//       }
//     }
//   }, [router]);

  

//   // Pause/resume based on FOD, misalignment, or receiver coil detection
//   // useEffect(() => {
//   //   const shouldPause =
//   //     bmsData?.isFOD || bmsData?.isMiss || !bmsData?.isReceiverCoilDetected;

//   //   if (shouldPause && !isPaused) {
//   //     // Pause
//   //     const now = Date.now();
//   //     setIsPaused(true);
//   //     if (endTime) {
//   //       const timeLeft = Math.max(endTime - now, 0);
//   //       setRemainingTime(timeLeft);
//   //       setEndTime(null);
//   //     }
//   //     updateChargingStatus(false);
//   //   } else if (!shouldPause && isPaused && remainingTime !== null) {
//   //     // Resume
//   //     if (remainingTime <= 0) {
//   //       localStorage.removeItem("chargingEndTime");
//   //       router.replace("/done");
//   //       return;
//   //     }
//   //     const newEndTime = Date.now() + remainingTime;
//   //     setEndTime(newEndTime);
//   //     localStorage.setItem("chargingEndTime", newEndTime.toString());
//   //     setIsPaused(false);
//   //     updateChargingStatus(true);
//   //   }
//   // }, [
//   //   bmsData?.isFOD,
//   //   bmsData?.isMiss,
//   //   bmsData?.isReceiverCoilDetected,
//   //   isPaused,
//   //   endTime,
//   //   remainingTime,
//   //   router,
//   //   updateChargingStatus,
//   // ]);


  // useEffect(() => {
  //   const shouldPause =
  //     bmsData?.isFOD || bmsData?.isMiss || !bmsData?.isReceiverCoilDetected;
  
  //   const now = Date.now();
  
  //   if (shouldPause && !isPaused) {
  //     // 🔴 Pause logic
  //     setIsPaused(true);
  
  //     if (endTime) {
  //       const timeLeft = Math.max(endTime - now, 0);
  //       setRemainingTime(timeLeft);
  //       setEndTime(null);
  //     }
  
  //     updateChargingStatus(false); // Optional: await if you want to guarantee state sync
  //   }
  
  //   else if (!shouldPause && isPaused) {
  //     // 🟢 Resume logic
  
  //     const safeRemaining = remainingTime ?? (endTime ? Math.max(endTime - now, 0) : 0);
  
  //     if (safeRemaining <= 0) {
  //       localStorage.removeItem("chargingEndTime");
  //       updateChargingStatus(false).then(() => {
  //         // router.replace("/done");
  //       });
  //       return;
  //     }
  
  //     const newEndTime = now + safeRemaining;
  //     setEndTime(newEndTime);
  //     localStorage.setItem("chargingEndTime", newEndTime.toString());
  
  //     setRemainingTime(null); // Clear after using
  //     setIsPaused(false);
  //     updateChargingStatus(true);
  //   }
  // }, [
  //   bmsData?.isFOD,
  //   bmsData?.isMiss,
  //   bmsData?.isReceiverCoilDetected,
  //   isPaused,
  //   endTime,
  //   remainingTime,
  //   router,
  //   updateChargingStatus,
  // ]);
  

//   // Countdown timer - redirect when complete
//   useEffect(() => {
//     if (!endTime || !isChargingInitialized || isPaused) return;

//     const interval = setInterval(() => {
//       const now = Date.now();
//       if (now >= endTime) {
//         localStorage.removeItem("chargingEndTime");
//         // router.replace("/done");
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [endTime, isChargingInitialized, isPaused, router]);

//   return {
//     endTime,
//     setTimer,
//     isPaused,
//   };
// }

///inal fix
"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useChargingStatus } from "./useChargingStatus";
import { useBMSData } from "./useBMSData";

export function useTimerStatus() {
  const [endTime, setEndTime] = useState<number | null>(null);
  const [remainingTime, setRemainingTime] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const router = useRouter();
  const { updateChargingStatus, isChargingInitialized } = useChargingStatus();
  const { bmsData } = useBMSData();

  const setTimer = (durationMinutes: number) => {
    const currentTime = Date.now();
    const calculatedEndTime = currentTime + durationMinutes * 60 * 1000;
    setEndTime(calculatedEndTime);
    setRemainingTime(null);
    setIsPaused(false);
    localStorage.setItem("chargingEndTime", calculatedEndTime.toString());
    updateChargingStatus(true);
  };

  // Load from localStorage on mount
  useEffect(() => {
    const storedEndTime = localStorage.getItem("chargingEndTime");
    if (storedEndTime) {
      const parsed = Number(storedEndTime);
      if (!isNaN(parsed)) {
        setEndTime(parsed);
        setIsPaused(false);
      }
    }
  }, []);

  // Pause/Resume logic
  useEffect(() => {
    const isFOD = bmsData?.isFOD;
    const isMiss = bmsData?.isMiss;
    const isReceiverDetected = bmsData?.isReceiverCoilDetected;
    const shouldPause = isFOD || isMiss || !isReceiverDetected;

    const now = Date.now();

    if (shouldPause && !isPaused) {
      console.log("⏸ Pausing charging due to issue.");
      setIsPaused(true);
      if (endTime) {
        const timeLeft = Math.max(endTime - now, 0);
        setRemainingTime(timeLeft);
        setEndTime(null);
      }
      updateChargingStatus(false);
    } else if (!shouldPause && isPaused && remainingTime) {
      console.log("▶️ Resuming charging.");
      const newEndTime = now + remainingTime;
      setEndTime(newEndTime);
      localStorage.setItem("chargingEndTime", newEndTime.toString());
      setRemainingTime(null);
      setIsPaused(false);
      updateChargingStatus(true);
    }
  }, [
    bmsData?.isFOD,
    bmsData?.isMiss,
    bmsData?.isReceiverCoilDetected,
    isPaused,
    endTime,
    remainingTime,
    updateChargingStatus,
  ]);

  // Timer effect
  useEffect(() => {
    if (!endTime || isPaused || !isChargingInitialized) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
        console.log("🧹 Cleared timer interval.");
      }
      return;
    }

    console.log("⏱ Timer started until", new Date(endTime).toLocaleTimeString());

    const tick = () => {
      const now = Date.now();
      if (now >= endTime) {
        clearInterval(timerRef.current!);
        timerRef.current = null;
        console.log("✅ Timer done. Redirecting to /done");

        localStorage.removeItem("chargingEndTime");
        updateChargingStatus(false).finally(() => {
          router.replace("/done");
        });
      }
    };

    timerRef.current = setInterval(tick, 1000);
    tick(); // Immediate check

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
        console.log("🧹 Cleanup on unmount or deps change");
      }
    };
  }, [endTime, isPaused, isChargingInitialized, router, updateChargingStatus]);

  return {
    setTimer,
    endTime,
    isPaused,
  };
}
