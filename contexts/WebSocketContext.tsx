
// "use client";

// import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from "react";
// import { toast } from "sonner";

// // Define WebSocket data types
// interface BMSData {
//   voltage: number;
//   current: number;
//   SOC: number;
//   isReceiverCoilDetected: boolean;
// }

// interface ChargingStatus {
//   isCharging: boolean;
// }

// // Define WebSocket message structure
// interface WebSocketMessage {
//   type: string;
//   data: BMSData | ChargingStatus;
// }

// // Define WebSocket context type
// interface WebSocketContextType {
//   sendMessage: (message: unknown) => void;
//   connected: boolean;
//   bmsData: BMSData;
//   chargingStatus: ChargingStatus;
//   lastMessage: WebSocketMessage | null;
// }

// // Create WebSocket context
// const WebSocketContext = createContext<WebSocketContextType | null>(null);

// // Default data values
// const defaultBMSData: BMSData = {
//   voltage: 0,
//   current: 0,
//   SOC: 0,
//   isReceiverCoilDetected: false,
// };

// const defaultChargingStatus: ChargingStatus = {
//   isCharging: false,
// };


// export function WebSocketProvider({ children }: { children: React.ReactNode }) {
//   const [connected, setConnected] = useState(false);
//   const [lastMessage, setLastMessage] = useState<WebSocketMessage | null>(null);
//   const [bmsData, setBMSData] = useState<BMSData>(defaultBMSData);
//   const [chargingStatus, setChargingStatus] = useState<ChargingStatus>(defaultChargingStatus);

//   const ws = useRef<WebSocket | null>(null);
//   const reconnectTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

//   const connect = useCallback(() => {
//     if (ws.current) return; // Prevent multiple WebSocket instances

//     ws.current = new WebSocket("ws://localhost:8080"); // Replace with your WebSocket server URL

//     ws.current.onopen = () => {
//       console.log("✅ WebSocket Connected");
//       setConnected(true);
//       toast.success("Connected to charging system");

//       if (reconnectTimeout.current) {
//         clearTimeout(reconnectTimeout.current);
//         reconnectTimeout.current = undefined;
//       }
//     };

//     ws.current.onmessage = (event) => {
//       try {
//         const data: WebSocketMessage = JSON.parse(event.data);
//         console.log("🟢 Received WebSocket Data:", data);
//         setLastMessage(data);

//         switch (data.type) {
//           case "bms_data":
//             console.log("🔋 BMS Data:", data.data);
//             setBMSData(data.data as BMSData);
//             break;
//             case "charging_status":
//               const chargingData = data.data as ChargingStatus;
//               console.log("⚡ Raw Charging Status Received:", JSON.stringify(chargingData, null, 2));
            
//               setChargingStatus((prev) => ({
//                 ...prev,
//                 ...chargingData,
                
//               }));
            
//               break;
            
//           case "error":
//             toast.error("⚠️ Unknown error occurred");
//             break;
//           default:
//             console.log("🔍 Received unknown message type:", data);
//         }
//       } catch (error) {
//         console.error("❌ WebSocket Data Parsing Error:", error);
//       }
//     };

//     ws.current.onerror = (event) => {
//       console.error("🚨 WebSocket Error:", event);
//       toast.error("WebSocket connection error");
//     };

//     ws.current.onclose = () => {
//       console.warn("⚠️ WebSocket Disconnected, attempting reconnect...");
//       setConnected(false);
//       ws.current = null;

//       reconnectTimeout.current = setTimeout(() => {
//         console.log("🔄 Attempting to reconnect...");
//         connect();
//       }, 3000);
//     };
//   }, []);

//   useEffect(() => {
//     connect();
//     return () => {
//       if (ws.current) ws.current.close();
//       if (reconnectTimeout.current) clearTimeout(reconnectTimeout.current);
//     };
//   }, [connect]);

//   const sendMessage = (message: unknown) => {
//     if (ws.current?.readyState === WebSocket.OPEN) {
//       ws.current.send(JSON.stringify(message));
//     } else {
//       toast.error("❌ Not connected to charging system");
//     }
//   };

//   return (
//     <WebSocketContext.Provider value={{ sendMessage, connected, bmsData, chargingStatus, lastMessage }}>
//       {children}
//     </WebSocketContext.Provider>
//   );
// }

// // Custom hook to use WebSocket context
// export const useWebSocket = () => {
//   const context = useContext(WebSocketContext);
//   if (!context) {
//     throw new Error("useWebSocket must be used within a WebSocketProvider");
//   }
//   return context;
// };
//FALSE CHARGING

// "use client";

// import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from "react";
// import { toast } from "sonner";

// // Define WebSocket data types
// interface BMSData {
//   voltage: number;
//   current: number;
//   SOC: number;
//   isReceiverCoilDetected: boolean;
// }

// interface ChargingStatus {
//   isCharging: boolean;
// }

// // Define WebSocket message structure
// interface WebSocketMessage {
//   type: string;
//   data: BMSData | ChargingStatus;
// }

// // Define WebSocket context type
// interface WebSocketContextType {
//   sendMessage: (message: unknown) => void;
//   connected: boolean;
//   bmsData: BMSData;
//   chargingStatus: ChargingStatus;
//   lastMessage: WebSocketMessage | null;
// }

// // Create WebSocket context
// const WebSocketContext = createContext<WebSocketContextType | null>(null);

// // Default data values
// const defaultBMSData: BMSData = {
//   voltage: 0,
//   current: 0,
//   SOC: 0,
//   isReceiverCoilDetected: false,
// };

// const defaultChargingStatus: ChargingStatus = {
//   isCharging: false,
// };

// export function WebSocketProvider({ children }: { children: React.ReactNode }) {
//   const [connected, setConnected] = useState(false);
//   const [lastMessage, setLastMessage] = useState<WebSocketMessage | null>(null);
//   const [bmsData, setBMSData] = useState<BMSData>(defaultBMSData);
//   const [chargingStatus, setChargingStatus] = useState<ChargingStatus>(defaultChargingStatus);

//   const ws = useRef<WebSocket | null>(null);
//   const reconnectTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

//   const connect = useCallback(() => {
//     if (ws.current) return;

//     ws.current = new WebSocket("ws://localhost:8080");

//     ws.current.onopen = () => {
//       console.log("✅ WebSocket Connected");
//       setConnected(true);
//       toast.success("Connected to charging system");

//       if (reconnectTimeout.current) {
//         clearTimeout(reconnectTimeout.current);
//         reconnectTimeout.current = undefined;
//       }
//     };

//     ws.current.onmessage = (event) => {
//       try {
//         const data: WebSocketMessage = JSON.parse(event.data);
//         console.log("🟢 Received WebSocket Data:", data);
//         setLastMessage(data);

//         switch (data.type) {
//           case "bms_data":
//             console.log("🔋 BMS Data:", data.data);
//             setBMSData(data.data as BMSData);
//             break;

//           case "charging_status":
//             const chargingData = data.data as ChargingStatus;
//             console.log("⚡ Charging Status Received:", JSON.stringify(chargingData, null, 2));

//             setChargingStatus(chargingData);

//             if (!chargingData.isCharging) {
//               toast.info("Charging has been turned OFF by the user.");
//             } else {
//               toast.info("Charging has started.");
//             }

//             break;

//           case "error":
//             toast.error("⚠️ Unknown error occurred");
//             break;

//           default:
//             console.log("🔍 Received unknown message type:", data);
//         }
//       } catch (error) {
//         console.error("❌ WebSocket Data Parsing Error:", error);
//       }
//     };

//     ws.current.onerror = (event) => {
//       console.error("🚨 WebSocket Error:", event);
//       toast.error("WebSocket connection error");
//     };

//     ws.current.onclose = () => {
//       console.warn("⚠️ WebSocket Disconnected, attempting reconnect...");
//       setConnected(false);
//       ws.current = null;

//       reconnectTimeout.current = setTimeout(() => {
//         console.log("🔄 Attempting to reconnect...");
//         connect();
//       }, 3000);
//     };
//   }, []);

//   useEffect(() => {
//     connect();
//     return () => {
//       if (ws.current) ws.current.close();
//       if (reconnectTimeout.current) clearTimeout(reconnectTimeout.current);
//     };
//   }, [connect]);

//   const sendMessage = (message: unknown) => {
//     if (ws.current?.readyState === WebSocket.OPEN) {
//       ws.current.send(JSON.stringify(message));
//     } else {
//       toast.error("❌ Not connected to charging system");
//     }
//   };

//   return (
//     <WebSocketContext.Provider value={{ sendMessage, connected, bmsData, chargingStatus, lastMessage }}>
//       {children}
//     </WebSocketContext.Provider>
//   );
// }

// // Custom hook to use WebSocket context
// export const useWebSocket = () => {
//   const context = useContext(WebSocketContext);
//   if (!context) {
//     throw new Error("useWebSocket must be used within a WebSocketProvider");
//   }
//   return context;
// };
///test
// "use client"; // Next.js ka client component batane ke liye

// import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from "react";
// import { toast } from "sonner"; // Notification dikhane ke liye

// // ✅ WebSocket se aane wale data ka type define karna
// interface BMSData {
//   voltage: number; // Battery voltage
//   current: number; // Current flow
//   SOC: number; // Battery ka charge level (State of Charge)
//   isReceiverCoilDetected: boolean; // Kya receiver coil detect ho rahi hai ya nahi
// }

// interface ChargingStatus {
//   isCharging: boolean; // Kya charging chal rahi hai ya nahi
// }

// // ✅ WebSocket se aane wale message ka structure define karna
// interface WebSocketMessage {
//   type: string; // Message ka type batane ke liye
//   data: BMSData | ChargingStatus | { message: string }; // Ya to BMS ka data hoga ya charging status
// }

// // ✅ WebSocket context ka type define karna
// interface WebSocketContextType {
//   sendMessage: (message: unknown) => void; // Message bhejne ka function
//   connected: boolean; // Kya WebSocket connected hai ya nahi
//   bmsData: BMSData; // Battery ka data
//   chargingStatus: ChargingStatus; // Charging ka status
//   lastMessage: WebSocketMessage | null; // Last message jo WebSocket se aaya
// }

// // ✅ WebSocket context create karna
// const WebSocketContext = createContext<WebSocketContextType | null>(null);

// // ✅ Default values set karna
// const defaultBMSData: BMSData = { voltage: 0, current: 0, SOC: 0, isReceiverCoilDetected: false };
// const defaultChargingStatus: ChargingStatus = { isCharging: false };

// // ✅ WebSocket Provider component banaya jisme WebSocket ka connection handle hoga
// export function WebSocketProvider({ children }: { children: React.ReactNode }) {
//   const [connected, setConnected] = useState(false); // Connection ka status
//   const [lastMessage, setLastMessage] = useState<WebSocketMessage | null>(null); // Last received message
//   const [bmsData, setBMSData] = useState<BMSData>(defaultBMSData); // Battery data store karne ke liye
//   const [chargingStatus, setChargingStatus] = useState<ChargingStatus>(defaultChargingStatus); // Charging status store karne ke liye
  
//   const ws = useRef<WebSocket | null>(null); // WebSocket connection ka reference
//   const reconnectTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined); // Auto-reconnect ka timeout store karne ke liye

//   // ✅ WebSocket se connection establish karne ka function
//   const connect = useCallback(() => {
//     if (ws.current) return; // Agar pehle se connected hai to dobara mat connect karo

//     ws.current = new WebSocket("ws://localhost:8080"); // WebSocket ka connection start karo

//     ws.current.onopen = () => {
//       console.log("✅ WebSocket Connected");
//       setConnected(true); // Connected status ko true kar do
//       toast.success("Connected to charging system"); // Notification bhejo

//       if (reconnectTimeout.current) {
//         clearTimeout(reconnectTimeout.current); // Agar koi reconnect timeout hai to use hata do
//         reconnectTimeout.current = undefined;
//       }
//     };

//     ws.current.onmessage = (event) => {
//       console.log("🔄 RAW WebSocket Data Received:", event.data); // Received message ka log dikhana

//       try {
//         const data: WebSocketMessage = JSON.parse(event.data); // Message ko JSON me parse karna
//         console.log("✅ Parsed WebSocket Data:", data);
//         setLastMessage(data); // Last message ko update karna

//         switch (data.type) {
//           case "bms_data": // Agar message BMS ka data hai
//             console.log("🔋 BMS Data:", data.data);
//             setBMSData(data.data as BMSData); // BMS ka data update kar do
//             break;

//           case "charging_status": // Agar message charging status ka hai
//             const chargingData = data.data as ChargingStatus;
//             console.log("⚡ Charging Status:", JSON.stringify(chargingData, null, 2));
//             setChargingStatus(chargingData); // Charging status update kar do

//             if (!chargingData.isCharging) {
//               toast.info("🔴 Charging has been turned OFF."); // Charging band hone ka message dikhana
//             } else {
//               toast.success("⚡ Charging Started!"); // Charging start hone ka message dikhana
//             }
//             break;

//           case "test_message": // Server se koi test message aya
//             console.log("📩 Test Message from Server:", data.data);
//             break;

//           case "error": // Agar WebSocket error aayi
//             toast.error("⚠️ WebSocket Error Received");
//             break;

//           default:
//             console.warn("🔍 Unknown WebSocket Message:", data); // Agar unknown message aaye to warning do
//         }
//       } catch (error) {
//         console.error("❌ WebSocket Data Parsing Error:", error);
//       }
//     };

//     ws.current.onerror = (event) => {
//       console.error("🚨 WebSocket Error:", event);
//       toast.error("WebSocket connection error"); // WebSocket error ka notification bhejna
//     };

//     ws.current.onclose = () => {
//       console.warn("⚠️ WebSocket Disconnected, attempting reconnect...");
//       setConnected(false); // Connection ko false kar do
//       ws.current = null;

//       reconnectTimeout.current = setTimeout(() => {
//         console.log("🔄 Attempting to reconnect...");
//         connect(); // 3 second baad reconnect karne ka try karna
//       }, 3000);
//     };
//   }, []);

//   // ✅ Component jab load ho to WebSocket connection start ho
//   useEffect(() => {
//     connect();
//     return () => {
//       if (ws.current) ws.current.close(); // Component unload hone par connection close kar do
//       if (reconnectTimeout.current) clearTimeout(reconnectTimeout.current); // Timeout clear kar do
//     };
//   }, [connect]);

//   // ✅ WebSocket message bhejne ka function
//   const sendMessage = (message: unknown) => {
//     if (ws.current?.readyState === WebSocket.OPEN) {
//       console.log("🚀 Sending WebSocket Message:", JSON.stringify(message)); // Message ka log
//       ws.current.send(JSON.stringify(message)); // WebSocket par message bhejna
//     } else {
//       toast.error("❌ Not connected to charging system"); // Agar connection nahi hai to error dikhana
//     }
//   };

//   // ✅ WebSocket provider return kar raha hai jo children ko wrap karega
//   return (
//     <WebSocketContext.Provider value={{ sendMessage, connected, bmsData, chargingStatus, lastMessage }}>
//       {children}
//     </WebSocketContext.Provider>
//   );
// }

// // ✅ Custom hook jo WebSocket context ka use karega
// export const useWebSocket = () => {
//   const context = useContext(WebSocketContext);
//   if (!context) {
//     throw new Error("useWebSocket must be used within a WebSocketProvider"); // Agar context nahi mila to error do
//   }
//   return context;
// };
////fod

// "use client"; // Next.js ka client component batane ke liye

// import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from "react";
// import { toast } from "sonner"; // Notification dikhane ke liye

// // ✅ WebSocket se aane wale data ka type define karna
// interface BMSData {
//   voltage: number; // Battery voltage
//   current: number; // Current flow
//   SOC: number; // Battery ka charge level (State of Charge)
//   isReceiverCoilDetected: boolean;
//   isFOD: boolean;// Kya receiver coil detect ho rahi hai ya nahi
//   isMiss: boolean;
// }

// interface ChargingStatus {
//   isCharging: boolean; // Kya charging chal rahi hai ya nahi
// }

// // ✅ WebSocket se aane wale message ka structure define karna
// interface WebSocketMessage {
//   type: string; // Message ka type batane ke liye
//   data: BMSData | ChargingStatus | { message: string }; // Ya to BMS ka data hoga ya charging status
// }

// // ✅ WebSocket context ka type define karna
// interface WebSocketContextType {
//   sendMessage: (message: unknown) => void; // Message bhejne ka function
//   connected: boolean; // Kya WebSocket connected hai ya nahi
//   bmsData: BMSData; // Battery ka data
//   chargingStatus: ChargingStatus; // Charging ka status
//   lastMessage: WebSocketMessage | null; // Last message jo WebSocket se aaya
// }

// // ✅ WebSocket context create karna
// const WebSocketContext = createContext<WebSocketContextType | null>(null);

// // ✅ Default values set karna
// const defaultBMSData: BMSData = { voltage: 0, current: 0, SOC: 0, isReceiverCoilDetected: false,  isFOD: false, isMiss:false, };
// const defaultChargingStatus: ChargingStatus = { isCharging: false };

// // ✅ WebSocket Provider component banaya jisme WebSocket ka connection handle hoga
// export function WebSocketProvider({ children }: { children: React.ReactNode }) {
//   const [connected, setConnected] = useState(false); // Connection ka status
//   const [lastMessage, setLastMessage] = useState<WebSocketMessage | null>(null); // Last received message
//   const [bmsData, setBMSData] = useState<BMSData>(defaultBMSData); // Battery data store karne ke liye
//   const [chargingStatus, setChargingStatus] = useState<ChargingStatus>(defaultChargingStatus); // Charging status store karne ke liye
  
//   const ws = useRef<WebSocket | null>(null); // WebSocket connection ka reference
//   const reconnectTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined); // Auto-reconnect ka timeout store karne ke liye

//   // ✅ WebSocket se connection establish karne ka function
//   const connect = useCallback(() => {
//     if (ws.current) return; // Agar pehle se connected hai to dobara mat connect karo

//     ws.current = new WebSocket("ws://localhost:8080"); // WebSocket ka connection start karo

//     ws.current.onopen = () => {
//       console.log("✅ WebSocket Connected");
//       setConnected(true); // Connected status ko true kar do
//       toast.success("Connected to charging system"); // Notification bhejo

//       if (reconnectTimeout.current) {
//         clearTimeout(reconnectTimeout.current); // Agar koi reconnect timeout hai to use hata do
//         reconnectTimeout.current = undefined;
//       }
//     };

//     ws.current.onmessage = (event) => {
//       console.log("🔄 RAW WebSocket Data Received:", event.data); // Received message ka log dikhana

//       try {
//         const data: WebSocketMessage = JSON.parse(event.data); // Message ko JSON me parse karna
//         console.log("✅ Parsed WebSocket Data:", data);
//         setLastMessage(data); // Last message ko update karna

//         switch (data.type) {
//           case "bms_data": // Agar message BMS ka data hai
//             console.log("🔋 BMS Data:", data.data);
//             setBMSData(data.data as BMSData); // BMS ka data update kar do
//             break;

//           case "charging_status": // Agar message charging status ka hai
//             const chargingData = data.data as ChargingStatus;
//             console.log("⚡ Charging Status:", JSON.stringify(chargingData, null, 2));
//             setChargingStatus(chargingData); // Charging status update kar do

//             if (!chargingData.isCharging) {
//               toast.info("🔴 Charging has been turned OFF."); // Charging band hone ka message dikhana
//             } else {
//               toast.success("⚡ Charging Started!"); // Charging start hone ka message dikhana
//             }
//             break;

//           case "test_message": // Server se koi test message aya
//             console.log("📩 Test Message from Server:", data.data);
//             break;

//           case "error": // Agar WebSocket error aayi
//             toast.error("⚠️ WebSocket Error Received");
//             break;

//           default:
//             console.warn("🔍 Unknown WebSocket Message:", data); // Agar unknown message aaye to warning do
//         }
//       } catch (error) {
//         console.error("❌ WebSocket Data Parsing Error:", error);
//       }
//     };

//     ws.current.onerror = (event) => {
//       console.error("🚨 WebSocket Error:", event);
//       toast.error("WebSocket connection error"); // WebSocket error ka notification bhejna
//     };

//     ws.current.onclose = () => {
//       console.warn("⚠️ WebSocket Disconnected, attempting reconnect...");
//       setConnected(false); // Connection ko false kar do
//       ws.current = null;

//       reconnectTimeout.current = setTimeout(() => {
//         console.log("🔄 Attempting to reconnect...");
//         connect(); // 3 second baad reconnect karne ka try karna
//       }, 3000);
//     };
//   }, []);

//   // ✅ Component jab load ho to WebSocket connection start ho
//   useEffect(() => {
//     connect();
//     return () => {
//       if (ws.current) ws.current.close(); // Component unload hone par connection close kar do
//       if (reconnectTimeout.current) clearTimeout(reconnectTimeout.current); // Timeout clear kar do
//     };
//   }, [connect]);

//   // ✅ WebSocket message bhejne ka function
//   const sendMessage = (message: unknown) => {
//     if (ws.current?.readyState === WebSocket.OPEN) {
//       console.log("🚀 Sending WebSocket Message:", JSON.stringify(message)); // Message ka log
//       ws.current.send(JSON.stringify(message)); // WebSocket par message bhejna
//     } else {
//       toast.error("❌ Not connected to charging system"); // Agar connection nahi hai to error dikhana
//     }
//   };

//   useEffect(() => {
//     if (bmsData.isFOD) {
//       toast.error("⚠️ Foreign Object Detected! Charging may be unsafe.");
//     }
//   }, [bmsData.isFOD]);
  

//   // ✅ WebSocket provider return kar raha hai jo children ko wrap karega
//   return (
//     <WebSocketContext.Provider value={{ sendMessage, connected, bmsData, chargingStatus, lastMessage }}>
//       {children}
//     </WebSocketContext.Provider>
//   );
// }

// // ✅ Custom hook jo WebSocket context ka use karega
// export const useWebSocket = () => {
//   const context = useContext(WebSocketContext);
//   if (!context) {
//     throw new Error("useWebSocket must be used within a WebSocketProvider"); // Agar context nahi mila to error do
//   }
//   return context;
// };
///missalignemnt
"use client"; // Next.js ka client component batane ke liye

import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from "react";
import { toast } from "sonner"; // Notification dikhane ke liye

// ✅ WebSocket se aane wale data ka type define karna
interface BMSData {
  voltage: number; // Battery voltage
  current: number; // Current flow
  SOC: number; // Battery ka charge level (State of Charge)
  isReceiverCoilDetected: boolean;
  isFOD: boolean;// Kya receiver coil detect ho rahi hai ya nahi
  isMiss: boolean;
}

interface ChargingStatus {
  isCharging: boolean; // Kya charging chal rahi hai ya nahi
}

// ✅ WebSocket se aane wale message ka structure define karna
interface WebSocketMessage {
  type: string; // Message ka type batane ke liye
  data: BMSData | ChargingStatus | { message: string }; // Ya to BMS ka data hoga ya charging status
}

// ✅ WebSocket context ka type define karna
interface WebSocketContextType {
  sendMessage: (message: unknown) => void; // Message bhejne ka function
  connected: boolean; // Kya WebSocket connected hai ya nahi
  bmsData: BMSData; // Battery ka data
  chargingStatus: ChargingStatus; // Charging ka status
  lastMessage: WebSocketMessage | null; // Last message jo WebSocket se aaya
}

// ✅ WebSocket context create karna
const WebSocketContext = createContext<WebSocketContextType | null>(null);

// ✅ Default values set karna
const defaultBMSData: BMSData = { voltage: 0, current: 0, SOC: 0, isReceiverCoilDetected: false,  isFOD: false, isMiss:false, };
const defaultChargingStatus: ChargingStatus = { isCharging: false };

// ✅ WebSocket Provider component banaya jisme WebSocket ka connection handle hoga
export function WebSocketProvider({ children }: { children: React.ReactNode }) {
  const [connected, setConnected] = useState(false); // Connection ka status
  const [lastMessage, setLastMessage] = useState<WebSocketMessage | null>(null); // Last received message
  const [bmsData, setBMSData] = useState<BMSData>(defaultBMSData); // Battery data store karne ke liye
  const [chargingStatus, setChargingStatus] = useState<ChargingStatus>(defaultChargingStatus); // Charging status store karne ke liye
  
  const ws = useRef<WebSocket | null>(null); // WebSocket connection ka reference
  const reconnectTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined); // Auto-reconnect ka timeout store karne ke liye

  // ✅ WebSocket se connection establish karne ka function
  const connect = useCallback(() => {
    if (ws.current) return; // Agar pehle se connected hai to dobara mat connect karo

    ws.current = new WebSocket("ws://localhost:8080"); // WebSocket ka connection start karo

    ws.current.onopen = () => {
      console.log("✅ WebSocket Connected");
      setConnected(true); // Connected status ko true kar do
      toast.success("Connected to charging system"); // Notification bhejo

      if (reconnectTimeout.current) {
        clearTimeout(reconnectTimeout.current); // Agar koi reconnect timeout hai to use hata do
        reconnectTimeout.current = undefined;
      }
    };

    ws.current.onmessage = (event) => {
      console.log("🔄 RAW WebSocket Data Received:", event.data); // Received message ka log dikhana

      try {
        const data: WebSocketMessage = JSON.parse(event.data); // Message ko JSON me parse karna
        console.log("✅ Parsed WebSocket Data:", data);
        setLastMessage(data); // Last message ko update karna

        switch (data.type) {
          case "bms_data": // Agar message BMS ka data hai
            console.log("🔋 BMS Data:", data.data);
            setBMSData(data.data as BMSData); // BMS ka data update kar do
            break;

          case "charging_status": // Agar message charging status ka hai
            const chargingData = data.data as ChargingStatus;
            console.log("⚡ Charging Status:", JSON.stringify(chargingData, null, 2));
            setChargingStatus(chargingData); // Charging status update kar do

            if (!chargingData.isCharging) {
              toast.info("🔴 Charging has been turned OFF."); // Charging band hone ka message dikhana
            } else {
              toast.success("⚡ Charging Started!"); // Charging start hone ka message dikhana
            }
            break;

          case "test_message": // Server se koi test message aya
            console.log("📩 Test Message from Server:", data.data);
            break;

          case "error": // Agar WebSocket error aayi
            toast.error("⚠️ WebSocket Error Received");
            break;

          default:
            console.warn("🔍 Unknown WebSocket Message:", data); // Agar unknown message aaye to warning do
        }
      } catch (error) {
        console.error("❌ WebSocket Data Parsing Error:", error);
      }
    };

    ws.current.onerror = (event) => {
      console.error("🚨 WebSocket Error:", event);
      toast.error("WebSocket connection error"); // WebSocket error ka notification bhejna
    };

    ws.current.onclose = () => {
      console.warn("⚠️ WebSocket Disconnected, attempting reconnect...");
      setConnected(false); // Connection ko false kar do
      ws.current = null;

      reconnectTimeout.current = setTimeout(() => {
        console.log("🔄 Attempting to reconnect...");
        connect(); // 3 second baad reconnect karne ka try karna
      }, 3000);
    };
  }, []);

  // ✅ Component jab load ho to WebSocket connection start ho
  useEffect(() => {
    connect();
    return () => {
      if (ws.current) ws.current.close(); // Component unload hone par connection close kar do
      if (reconnectTimeout.current) clearTimeout(reconnectTimeout.current); // Timeout clear kar do
    };
  }, [connect]);

  // ✅ WebSocket message bhejne ka function
  const sendMessage = (message: unknown) => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      console.log("🚀 Sending WebSocket Message:", JSON.stringify(message)); // Message ka log
      ws.current.send(JSON.stringify(message)); // WebSocket par message bhejna
    } else {
      toast.error("❌ Not connected to charging system"); // Agar connection nahi hai to error dikhana
    }
  };

  useEffect(() => {
    if (bmsData.isFOD) {
      toast.error("⚠️ Foreign Object Detected! Charging may be unsafe.");
    }
  }, [bmsData.isFOD]);

  useEffect(() => {
    if (bmsData.isMiss) {
      toast.error("⚠️ Misalignment detected! Please realign the vehicle.");
    }
  }, [bmsData.isMiss]);
  
  

  // ✅ WebSocket provider return kar raha hai jo children ko wrap karega
  return (
    <WebSocketContext.Provider value={{ sendMessage, connected, bmsData, chargingStatus, lastMessage }}>
      {children}
    </WebSocketContext.Provider>
  );
}

// ✅ Custom hook jo WebSocket context ka use karega
export const useWebSocket = () => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error("useWebSocket must be used within a WebSocketProvider"); // Agar context nahi mila to error do
  }
  return context;
};
