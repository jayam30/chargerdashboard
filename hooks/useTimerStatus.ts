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
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useChargingStatus } from "./useChargingStatus"; 
import { useBMSData } from "./useBMSData"; // ✅ Import BMS data hook

export function useTimerStatus() {
  const [endTime, setEndTime] = useState<number | null>(null);
  const [remainingTime, setRemainingTime] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(true);
  const router = useRouter();
  const { updateChargingStatus, isChargingInitialized } = useChargingStatus(); // ✅ Update charging state
  const { bmsData } = useBMSData(); // ✅ Get FOD & misalignment status

  // Function to set the timer
  const setTimer = (durationMinutes: number) => {
    const currentTime = Date.now();
    const calculatedEndTime = currentTime + durationMinutes * 60 * 1000;
    setEndTime(calculatedEndTime);
    setRemainingTime(durationMinutes * 60 * 1000);
    localStorage.setItem("chargingEndTime", calculatedEndTime.toString());
    updateChargingStatus(true); // ✅ Start charging when timer starts
  };

  // Retrieve stored endTime on component mount
  useEffect(() => {
    const storedEndTime = localStorage.getItem("chargingEndTime");
    if (storedEndTime) {
      setEndTime(Number(storedEndTime));
    }
  }, []);

  // ✅ Handle pause and resume logic
  useEffect(() => {
    const shouldPause = bmsData?.isFOD || bmsData?.isMiss || !bmsData?.isReceiverCoilDetected;

    if (shouldPause && !isPaused) {
      // Pause the timer
      setIsPaused(true);
      setRemainingTime(endTime ? Math.max(endTime - Date.now(), 0) : remainingTime);
      setEndTime(null); // Stop the countdown
      updateChargingStatus(false); // ✅ Stop charging when paused
    } else if (!shouldPause && isPaused && remainingTime !== null) {
      // Resume the timer
      setIsPaused(false);
      const newEndTime = Date.now() + remainingTime;
      setEndTime(newEndTime);
      localStorage.setItem("chargingEndTime", newEndTime.toString());
      updateChargingStatus(true); // ✅ Resume charging
    }
  }, [bmsData?.isFOD, bmsData?.isMiss, bmsData?.isReceiverCoilDetected]);

  // ✅ Timer countdown logic
  useEffect(() => {
    if (!endTime || !isChargingInitialized || isPaused) return;

    const checkTime = () => {
      const now = Date.now();
      if (now >= endTime && isChargingInitialized) {
        console.log("⏰ Timer expired! Redirecting to /done...");
        router.replace("/done");
      }
    };

    const interval = setInterval(checkTime, 1000);
    checkTime();

    return () => clearInterval(interval);
  }, [endTime, isChargingInitialized, isPaused, router]);

  return {
    endTime,
    setTimer,
    isPaused,

  };
}

