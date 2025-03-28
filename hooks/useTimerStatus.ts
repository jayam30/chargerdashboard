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
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useChargingStatus } from "./useChargingStatus"; // ✅ Import charging status hook

export function useTimerStatus() {
  const [endTime, setEndTime] = useState<number | null>(null);
  const router = useRouter();
  const { isChargingInitialized } = useChargingStatus(); // ✅ Check if charging is active

  // Function to set the timer
  const setTimer = (durationMinutes: number) => {
    const currentTime = Date.now();
    const calculatedEndTime = currentTime + durationMinutes * 60 * 1000; // Convert minutes to milliseconds
    setEndTime(calculatedEndTime);
    localStorage.setItem("chargingEndTime", calculatedEndTime.toString()); // Persist data
  };

  // Retrieve stored endTime on component mount
  useEffect(() => {
    const storedEndTime = localStorage.getItem("chargingEndTime");
    if (storedEndTime) {
      setEndTime(Number(storedEndTime));
    }
  }, []);

  // ✅ Automatically redirect when timer reaches zero AND charging is active
  useEffect(() => {
    if (!endTime || !isChargingInitialized) return; // ✅ Prevent flicker issue

    const checkTime = () => {
      const now = Date.now();
      if (now >= endTime && isChargingInitialized) {
        console.log("⏰ Timer expired! Redirecting to /done...");
        router.replace("/done"); // ✅ Redirect only when charging is active
      }
    };

    const interval = setInterval(checkTime, 1000);
    checkTime(); // Run immediately

    return () => clearInterval(interval);
  }, [endTime, isChargingInitialized, router]);

  return {
    endTime,
    setTimer,
  };
}
