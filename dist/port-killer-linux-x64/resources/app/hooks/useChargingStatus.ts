
// "use client"
// import { useState, useEffect, useCallback } from "react";
// import { useWebSocket } from "../contexts/WebSocketContext";
// import { toast } from "sonner";

// export function useChargingStatus() {
//   const { sendMessage, lastMessage, connected } = useWebSocket();
//   const [isChargingInitialized, setIsChargingInitialized] = useState(false);

//   useEffect(() => {
//     if (!lastMessage?.data) return;
//     try {
//       const data = typeof lastMessage.data === "string" ? JSON.parse(lastMessage.data) : lastMessage.data;
//       console.log("received websocket data", data);

//       if (typeof data.isChargingInitialized === "boolean") {
//         setIsChargingInitialized(data.isChargingInitialized);
//       }
//     } catch (error) {
//       console.error("error parsing websocket message", error);
//     }
//   }, [lastMessage]); //YEH MESSAGE READ KRTEA HAI
  
//   const updateChargingStatus = useCallback(
//     async (isCharging: boolean): Promise<boolean> => {
//       if (!connected) {
//         toast.error("not connected to charging system")
//         return false;
//       }

//       try {
//         console.log("sending charging status update", { isCharging });
//         sendMessage({
//           type: "charging_status",
//           data: { isCharging: isCharging }, ///YEH MESSAGES BHETET HAI
//         });

//         setIsChargingInitialized(isCharging);
//         return true;

//       } catch (error) {
//         console.error("error updating charging status", error);
//         toast.error("failed to update charging status");
//         return false;
//       }
//     }, [connected, sendMessage, setIsChargingInitialized]

//   );

//   return {
//     isChargingInitialized,
//     updateChargingStatus,
   
//   };
// }

//FALSE CHARGING
"use client"
import { useState, useEffect, useCallback } from "react";
import { useWebSocket } from "../contexts/WebSocketContext";
import { toast } from "sonner";

export function useChargingStatus() {
  const { sendMessage, lastMessage, connected } = useWebSocket();
  const [isChargingInitialized, setIsChargingInitialized] = useState(false);

  useEffect(() => {
    if (!lastMessage?.data) return;
    try {
      const data = typeof lastMessage.data === "string" ? JSON.parse(lastMessage.data) : lastMessage.data;
      console.log("Received WebSocket Data:", data);

      if (typeof data.isCharging === "boolean") {
        setIsChargingInitialized(data.isCharging);
      }
    } catch (error) {
      console.error("Error parsing WebSocket message:", error);
    }
  }, [lastMessage]);

  const updateChargingStatus = useCallback(
    async (isCharging: boolean): Promise<boolean> => {
      if (!connected) {
        toast.error("Not connected to charging system");
        return false;
      }

      try {
        console.log("Sending charging status update:", { isCharging });

        // Update local state
        setIsChargingInitialized(isCharging);

        // Send message to WebSocketContext
        sendMessage({
          type: "charging_status",
          data: { isCharging },
        });

        toast.success(isCharging ? "Charging started" : "Charging stopped");
        return true;
      } catch (error) {
        console.error("Error updating charging status:", error);
        toast.error("Failed to update charging status");
        return false;
      }
    },
    [connected, sendMessage, setIsChargingInitialized]
  );

  return {
    isChargingInitialized,
    updateChargingStatus,
  };
}
