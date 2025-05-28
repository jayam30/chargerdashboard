"use client";

import { useCallback } from "react";
import { useBMSData } from "./useBMSData";
import { useChargingStatus } from "./useChargingStatus";
import { useTimerStatus } from "./useTimerStatus";

export function useResetCharging() {
  const { resetBMSData } = useBMSData();
  const { updateChargingStatus } = useChargingStatus();
  const { setTimer, endTime, isPaused } = useTimerStatus();

  // To reset the timer without changing useTimerStatus code,
  // we can simulate a reset by setting timer duration = 0 or clearing localStorage outside.
  // But better is to add a local reset method here.

  // So we can clear localStorage and stop charging timer externally here:
  const resetTimerExternally = () => {
    localStorage.removeItem("chargingEndTime");
    // Since your timer hook relies on localStorage, removing it resets the timer on next load.
    // Also, if you want to forcibly reload the page or component to refresh timer state, you can do that.
  };

  const resetAll = useCallback(async () => {
    // Stop charging
    await updateChargingStatus(false);

    // Reset BMS data
    resetBMSData();

    // Reset timer externally
    resetTimerExternally();

  }, [resetBMSData, updateChargingStatus]);

  return { resetAll };
}
