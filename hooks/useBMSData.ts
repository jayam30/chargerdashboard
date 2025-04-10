// "use client";

// import { useState, useEffect, useCallback } from 'react';
// import { useWebSocket } from '../contexts/WebSocketContext';
// import { toast } from 'sonner';

// interface BMSData {
//   voltage: number;
//   current: number;
//   SOC: number;
//   isReceiverCoilDetected: boolean;
// }

// export function useBMSData() {
//   const { sendMessage, lastMessage, connected, bmsData: contextBMSData } = useWebSocket();
//   const [bmsData, setBMSData] = useState<BMSData>({
//     voltage: 0,
//     current: 0,
//     SOC: 15,
//     isReceiverCoilDetected: false,
//   });

//   // Update BMS data when receiving new messages
//   useEffect(() => {
//     if (lastMessage?.type === 'bms_data' && lastMessage.data) {
//       setBMSData(lastMessage.data as BMSData);
//     }
//   }, [lastMessage]);

//   // Sync with context BMS data
//   useEffect(() => {
//     setBMSData(contextBMSData);
//   }, [contextBMSData]);

//   // Update BMS data
//   const updateBMSData = useCallback(async (newData: Partial<BMSData>): Promise<boolean> => {
//     if (!connected) {
//       toast.error('Not connected to charging system');
//       return false;
//     }

//     try {
//       const updatedData = {
//         ...bmsData,
//         ...newData,
//       };

//       sendMessage({
//         type: 'updateBMSData',
//         data: updatedData,
//       });

//       setBMSData(updatedData);
//       return true;
//     } catch (error) {
//       console.error('Error updating BMS data:', error);
//       toast.error('Failed to update BMS data');
//       return false;
//     }
//   }, [connected, sendMessage, bmsData]);

//   // Reset BMS data
//   const resetBMSData = useCallback(() => {
//     if (!connected) {
//       toast.error('Not connected to charging system');
//       return;
//     }

//     try {
//       const resetData: BMSData = {
//         voltage: 0,
//         current: 0,
//         SOC: 15,
//         isReceiverCoilDetected: false,
//       };

//       sendMessage({
//         type: 'resetBMSData',
//         data: resetData,
//       });

//       setBMSData(resetData);
//       toast.success('BMS data reset');
//     } catch (error) {
//       console.error('Error resetting BMS data:', error);
//       toast.error('Failed to reset BMS data');
//     }
//   }, [connected, sendMessage]);

//   // Monitor receiver coil detection
//   useEffect(() => {
//     if (bmsData.isReceiverCoilDetected) {
//       toast.success('Receiver coil detected');
//     } else if (bmsData.isReceiverCoilDetected === false) {
//       toast.error('Receiver coil not detected');
//     }
//   }, [bmsData.isReceiverCoilDetected]);

//   // Calculate charging power
//   const calculateChargingPower = useCallback((): number => {
//     return bmsData.voltage * bmsData.current;
//   }, [bmsData.voltage, bmsData.current]);

//   return {
//     bmsData,
//     updateBMSData,
//     resetBMSData,
//     isReceiverCoilDetected: bmsData.isReceiverCoilDetected,
//     chargingPower: calculateChargingPower(),
//   };
// }


////fod

// "use client";

// import { useState, useEffect, useCallback } from 'react';
// import { useWebSocket } from '../contexts/WebSocketContext';
// import { toast } from 'sonner';

// interface BMSData {
//   voltage: number;
//   current: number;
//   SOC: number;
//   isReceiverCoilDetected: boolean;
//   isFOD: boolean;
//   isMiss: boolean;
// }

// export function useBMSData() {
//   const { sendMessage, lastMessage, connected, bmsData: contextBMSData } = useWebSocket();
//   const [bmsData, setBMSData] = useState<BMSData>({
//     voltage: 0,
//     current: 0,
//     SOC: 15,
//     isReceiverCoilDetected: false,
//     isFOD: false,
//     isMiss: false,
//   });

//   // Update BMS data when receiving new messages
//   useEffect(() => {
//     if (lastMessage?.type === 'bms_data' && lastMessage.data) {
//       setBMSData(lastMessage.data as BMSData);
//     }
//   }, [lastMessage]);

//   // Sync with context BMS data
//   useEffect(() => {
//     setBMSData(contextBMSData);
//   }, [contextBMSData]);

//   // Update BMS data
//   const updateBMSData = useCallback(async (newData: Partial<BMSData>): Promise<boolean> => {
//     if (!connected) {
//       toast.error('Not connected to charging system');
//       return false;
//     }

//     try {
//       const updatedData = {
//         ...bmsData,
//         ...newData,
//       };

//       sendMessage({
//         type: 'updateBMSData',
//         data: updatedData,
//       });

//       setBMSData(updatedData);
//       return true;
//     } catch (error) {
//       console.error('Error updating BMS data:', error);
//       toast.error('Failed to update BMS data');
//       return false;
//     }
//   }, [connected, sendMessage, bmsData]);

//   // Reset BMS data
//   const resetBMSData = useCallback(() => {
//     if (!connected) {
//       toast.error('Not connected to charging system');
//       return;
//     }

//     try {
//       const resetData: BMSData = {
//         voltage: 0,
//         current: 0,
//         SOC: 15,
//         isReceiverCoilDetected: false,
//         isFOD: false,
//         isMiss: false,
//       };

//       sendMessage({
//         type: 'resetBMSData',
//         data: resetData,
//       });

//       setBMSData(resetData);
//       toast.success('BMS data reset');
//     } catch (error) {
//       console.error('Error resetting BMS data:', error);
//       toast.error('Failed to reset BMS data');
//     }
//   }, [connected, sendMessage]);

//   // Monitor receiver coil detection
//   useEffect(() => {
//     if (bmsData.isReceiverCoilDetected) {
//       toast.success('Receiver coil detected');
//     } else if (bmsData.isReceiverCoilDetected === false) {
//       toast.error('Receiver coil not detected');
//     }
//   }, [bmsData.isReceiverCoilDetected]);

//   // Calculate charging power
//   const calculateChargingPower = useCallback((): number => {
//     return bmsData.voltage * bmsData.current;
//   }, [bmsData.voltage, bmsData.current]);

//   return {
//     bmsData,
//     updateBMSData,
//     resetBMSData,
//     isReceiverCoilDetected: bmsData.isReceiverCoilDetected,
//     isFOD: bmsData.isFOD,
//     isMiss: bmsData.isMiss,
//     chargingPower: calculateChargingPower(),
//   };
// }

//miss alignment
"use client";

import { useState, useEffect, useCallback } from 'react';
import { useWebSocket } from '../contexts/WebSocketContext';
import { toast } from 'sonner';

interface BMSData {
  voltage: number;
  current: number;
  SOC: number;
  isReceiverCoilDetected?: boolean;
  // targetSOC?: number;
  isFOD?: boolean;
  isMiss?: boolean;
}

export function useBMSData() {
  const { sendMessage, lastMessage, connected, bmsData: contextBMSData } = useWebSocket();
  const [bmsData, setBMSData] = useState<BMSData>({
    voltage: 0,
    current: 0,
    SOC: 15,
    isReceiverCoilDetected: false,
    // targetSOC: 0,
    isFOD: false,
    isMiss: false,
  });

  // Update BMS data when receiving new messages
  useEffect(() => {
    if (lastMessage?.type === 'bms_data' && lastMessage.data) {
      setBMSData(lastMessage.data as BMSData);
    }
  }, [lastMessage]);

  // Sync with context BMS data
  useEffect(() => {
    setBMSData(contextBMSData);
  }, [contextBMSData]);

  // Update BMS data
  const updateBMSData = useCallback(async (newData: Partial<BMSData>): Promise<boolean> => {
    if (!connected) {
      toast.error('Not connected to charging system');
      return false;
    }

    try {
      const updatedData = {
        ...bmsData,
        ...newData,
      };

      sendMessage({
        type: 'updateBMSData',
        data: updatedData,
      });

      setBMSData(updatedData);
      return true;
    } catch (error) {
      console.error('Error updating BMS data:', error);
      toast.error('Failed to update BMS data');
      return false;
    }
  }, [connected, sendMessage, bmsData]);

  // Reset BMS data
  const resetBMSData = useCallback(() => {
    if (!connected) {
      toast.error('Not connected to charging system');
      return;
    }

    try {
      const resetData: BMSData = {
        voltage: 0,
        current: 0,
        SOC: 15,
        isReceiverCoilDetected: false,
        isFOD: false,
        // targetSOC: 0,
        isMiss: false,
      };

      sendMessage({
        type: 'resetBMSData',
        data: resetData,
      });

      setBMSData(resetData);
      toast.success('BMS data reset');
    } catch (error) {
      console.error('Error resetting BMS data:', error);
      toast.error('Failed to reset BMS data');
    }
  }, [connected, sendMessage]);

  // Monitor receiver coil detection
  useEffect(() => {
    if (bmsData.isReceiverCoilDetected) {
      toast.success('Receiver coil detected');
    } else if (bmsData.isReceiverCoilDetected === false) {
      toast.error('Receiver coil not detected');
    }
  }, [bmsData.isReceiverCoilDetected]);

  // Calculate charging power
  const calculateChargingPower = useCallback((): number => {
    return bmsData.voltage * bmsData.current;
  }, [bmsData.voltage, bmsData.current]);

  return {
    bmsData,
    updateBMSData,
    resetBMSData,
    isReceiverCoilDetected: bmsData.isReceiverCoilDetected,
    isFOD: bmsData.isFOD,
    isMiss: bmsData.isMiss,
    chargingPower: calculateChargingPower(),
    // targetEnergy: bmsData.targetSOC
  };
}

// soc
// "use client";

// import { useState, useEffect, useCallback } from 'react';
// import { useWebSocket } from '../contexts/WebSocketContext';
// import { toast } from 'sonner';

// interface BMSData {
//   voltage: number;
//   current: number;
//   SOC: number;
//   isReceiverCoilDetected: boolean;
//   isFOD: boolean;
//   isMiss: boolean;
// }

// export function useBMSData() {
//   const { sendMessage, lastMessage, connected, bmsData: contextBMSData } = useWebSocket();
//   const [bmsData, setBMSData] = useState<BMSData>({
//     voltage: 0,
//     current: 0,
//     SOC: 15,
//     isReceiverCoilDetected: false,
//     isFOD: false,
//     isMiss: false,
//   });

//   // Update BMS data when receiving new messages
//   useEffect(() => {
//     if (lastMessage?.type === 'bms_data' && lastMessage.data) {
//       setBMSData(lastMessage.data as BMSData);
//     }
//   }, [lastMessage]);

//   // Sync with context BMS data
//   useEffect(() => {
//     setBMSData(contextBMSData);
//   }, [contextBMSData]);

//   // Update BMS data
//   const updateBMSData = useCallback(async (newData: Partial<BMSData>): Promise<boolean> => {
//     if (!connected) {
//       toast.error('Not connected to charging system');
//       return false;
//     }

//     try {
//       const updatedData = {
//         ...bmsData,
//         ...newData,
//       };

//       sendMessage({
//         type: 'updateBMSData',
//         data: updatedData,
//       });

//       setBMSData(updatedData);
//       return true;
//     } catch (error) {
//       console.error('Error updating BMS data:', error);
//       toast.error('Failed to update BMS data');
//       return false;
//     }
//   }, [connected, sendMessage, bmsData]);

//   // Reset BMS data
//   const resetBMSData = useCallback(() => {
//     if (!connected) {
//       toast.error('Not connected to charging system');
//       return;
//     }

//     try {
//       const resetData: BMSData = {
//         voltage: 0,
//         current: 0,
//         SOC: 15,
//         isReceiverCoilDetected: false,
//         isFOD: false,
//         isMiss: false,
//       };

//       sendMessage({
//         type: 'resetBMSData',
//         data: resetData,
//       });

//       setBMSData(resetData);
//       toast.success('BMS data reset');
//     } catch (error) {
//       console.error('Error resetting BMS data:', error);
//       toast.error('Failed to reset BMS data');
//     }
//   }, [connected, sendMessage]);

//   // Monitor receiver coil detection
//   useEffect(() => {
//     if (bmsData.isReceiverCoilDetected) {
//       toast.success('Receiver coil detected');
//     } else if (bmsData.isReceiverCoilDetected === false) {
//       toast.error('Receiver coil not detected');
//     }
//   }, [bmsData.isReceiverCoilDetected]);

//   // Calculate charging power
//   const calculateChargingPower = useCallback((): number => {
//     return bmsData.voltage * bmsData.current;
//   }, [bmsData.voltage, bmsData.current]);

//   return {
//     bmsData,
//     updateBMSData,
//     resetBMSData,
//     isReceiverCoilDetected: bmsData.isReceiverCoilDetected,
//     isFOD: bmsData.isFOD,
//     isMiss: bmsData.isMiss,
//     chargingPower: calculateChargingPower(),
//   };
// }

//soc
// "use client";

// import { useState, useEffect, useCallback } from 'react';
// import { useWebSocket } from '../contexts/WebSocketContext';
// import { toast } from 'sonner';

// interface BMSData {
//   voltage: number;
//   current: number;
//   SOC: number;
//   targetSOC: number; // ✅ Added targetSOC
//   isReceiverCoilDetected: boolean;
//   isFOD: boolean;
//   isMiss: boolean;
// }

// export function useBMSData() {
//   const { sendMessage, lastMessage, connected, bmsData: contextBMSData } = useWebSocket();
//   const [bmsData, setBMSData] = useState<BMSData>({
//     voltage: 0,
//     current: 0,
//     SOC: 15,
//     targetSOC: 100, // ✅ Default value
//     isReceiverCoilDetected: false,
//     isFOD: false,
//     isMiss: false,
//   });

//   // Update BMS data when receiving new messages
//   useEffect(() => {
//     if (lastMessage?.type === 'bms_data' && lastMessage.data) {
//       setBMSData(lastMessage.data as BMSData);
//     }
//   }, [lastMessage]);

//   // Sync with context BMS data
//   useEffect(() => {
//     setBMSData(contextBMSData);
//   }, [contextBMSData]);

//   // Update BMS data (including targetSOC)
//   const updateBMSData = useCallback(async (newData: Partial<BMSData>): Promise<boolean> => {
//     if (!connected) {
//       toast.error('Not connected to charging system');
//       return false;
//     }

//     try {
//       const updatedData = {
//         ...bmsData,
//         ...newData,
//       };

//       // Use a consistent message type for bms_data
//       sendMessage({
//         type: 'bms_data',
//         data: updatedData,
//       });

//       setBMSData(updatedData);
//       return true;
//     } catch (error) {
//       console.error('Error updating BMS data:', error);
//       toast.error('Failed to update BMS data');
//       return false;
//     }
//   }, [connected, sendMessage, bmsData]);

//   // Reset BMS data
//   const resetBMSData = useCallback(() => {
//     if (!connected) {
//       toast.error('Not connected to charging system');
//       return;
//     }

//     try {
//       const resetData: BMSData = {
//         voltage: 0,
//         current: 0,
//         SOC: 15,
//         targetSOC: 100,
//         isReceiverCoilDetected: false,
//         isFOD: false,
//         isMiss: false,
//       };

//       sendMessage({
//         type: 'bms_data',
//         data: resetData,
//       });

//       setBMSData(resetData);
//       toast.success('BMS data reset');
//     } catch (error) {
//       console.error('Error resetting BMS data:', error);
//       toast.error('Failed to reset BMS data');
//     }
//   }, [connected, sendMessage]);

//   // Monitor receiver coil detection
//   useEffect(() => {
//     if (bmsData.isReceiverCoilDetected) {
//       toast.success('Receiver coil detected');
//     } else if (bmsData.isReceiverCoilDetected === false) {
//       toast.error('Receiver coil not detected');
//     }
//   }, [bmsData.isReceiverCoilDetected]);

//   // Calculate charging power
//   const calculateChargingPower = useCallback((): number => {
//     return bmsData.voltage * bmsData.current;
//   }, [bmsData.voltage, bmsData.current]);

//   return {
//     bmsData,
//     updateBMSData,
//     resetBMSData,
//     isReceiverCoilDetected: bmsData.isReceiverCoilDetected,
//     isFOD: bmsData.isFOD,
//     isMiss: bmsData.isMiss,
//     chargingPower: calculateChargingPower(),
//   };
// }
