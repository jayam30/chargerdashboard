
// import express from "express";
// import { WebSocketServer } from "ws";

// const app = express();
// const PORT = 8080;

// // Start Express HTTP server
// const server = app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}...`));

// // Attach WebSocket server
// const wss = new WebSocketServer({ server });

// const clients = new Set(); // Store all connected clients

// // Default states
// let chargingState = { isCharging: false };
// let bmsData = { voltage: 0, current: 0, SOC: 0, isReceiverCoilDetected: false, isFOD: false, isMiss:false,};

// wss.on("connection", (ws) => {
//     console.log("🔗 New client connected");
//     clients.add(ws); // Add every client to the set

//     ws.on("message", (message) => {
//         try {
//             const parsedMessage = JSON.parse(message);
//             console.log(`📩 Received:`, parsedMessage);

//             // Update local state if necessary
//             if (parsedMessage.type === "bms_data") {
//                 bmsData = { ...bmsData, ...parsedMessage.data };
//                 console.log("🔋 Updated BMS Data:", bmsData);
//             } else if (parsedMessage.type === "charging_status") {
//                 chargingState = { ...chargingState, ...parsedMessage.data };
//                 console.log("⚡ Updated Charging Status:", chargingState);
//             }
//             else if (parsedMessage.type === "fod_status") {  // ✅ Handling FOD updates
//                 bmsData.isFOD = parsedMessage.data.isFOD;
//                 console.log("🚨 Updated FOD Status:", bmsData.isFOD ? "Detected" : "Not Detected");
//             }
//             else if (parsedMessage.type === "miss_status") {
//                 bmsData.isMiss = parsedMessage.data.isMiss;  // ✅ Correct key assignment
//                 console.log("🚨 Updated Misalignment Status:", bmsData.isMiss ? "Detected" : "Not Detected");
//             }
            
//             // Broadcast the received message to all clients
//             broadcastToAll(parsedMessage);
//         } catch (error) {
//             console.error("❌ Error processing message:", error);
//         }
//     });

//     ws.on("close", () => {
//         clients.delete(ws);
//         console.log("❌ Client disconnected");
//     });

//     // Send initial data to the newly connected client
//     sendToClient(ws, { type: "charging_status", data: chargingState });
//     sendToClient(ws, { type: "bms_data", data: bmsData });
// });

// // Broadcast data to all connected clients
// const broadcastToAll = (message) => {
//     console.log("🔄 Broadcasting to all clients:", JSON.stringify(message));
//     clients.forEach(client => {
//         if (client.readyState === client.OPEN) {
//             client.send(JSON.stringify(message));
//         } else {
//             console.warn("⚠️ Client not ready:", client.readyState);
//         }
//     });
// };

// // Send message to a WebSocket client safely
// const sendToClient = (client, message) => {
//     if (client.readyState === client.OPEN) {
//         client.send(JSON.stringify(message));
//     } else {
//         console.warn("⚠️ Attempted to send to a closed WebSocket");
//     }
// };
//missalignemt

// import express from "express";
// import { WebSocketServer } from "ws";

// const app = express();
// const PORT = 8080;

// // Start Express HTTP server
// const server = app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}...`));

// // Attach WebSocket server
// const wss = new WebSocketServer({ server });

// const clients = new Set(); // Store all connected clients

// // Default states
// let chargingState = { isCharging: false };
// let bmsData = { voltage: 0, current: 0, SOC: 0, isReceiverCoilDetected: false, isFOD: false, isMiss:false,  targetSOC:0};

// wss.on("connection", (ws) => {
//     console.log("🔗 New client connected");
//     clients.add(ws); // Add every client to the set

//     ws.on("message", (message) => {
//         try {
//             const parsedMessage = JSON.parse(message);
//             console.log(`📩 Received:`, parsedMessage);

//             // Update local state if necessary
//             if (parsedMessage.type === "bms_data") {
//                 bmsData = { ...bmsData, ...parsedMessage.data };
//                 console.log("🔋 Updated BMS Data:", bmsData);
//             } else if (parsedMessage.type === "charging_status") {
//                 chargingState = { ...chargingState, ...parsedMessage.data };
//                 console.log("⚡ Updated Charging Status:", chargingState);
//             }
//             else if (parsedMessage.type === "fod_status") {  // ✅ Handling FOD updates
//                 bmsData.isFOD = parsedMessage.data.isFOD;
//                 console.log("🚨 Updated FOD Status:", bmsData.isFOD ? "Detected" : "Not Detected");
//             }
           
         
            
//             // Broadcast the received message to all clients
//             broadcastToAll(parsedMessage);
//         } catch (error) {
//             console.error("❌ Error processing message:", error);
//         }
//     });

//     ws.on("close", () => {
//         clients.delete(ws);
//         console.log("❌ Client disconnected");
//     });

//     // Send initial data to the newly connected client
//     sendToClient(ws, { type: "charging_status", data: chargingState });
//     sendToClient(ws, { type: "bms_data", data: bmsData });
// });

// // Broadcast data to all connected clients
// const broadcastToAll = (message) => {
//     console.log("🔄 Broadcasting to all clients:", JSON.stringify(message));
//     clients.forEach(client => {
//         if (client.readyState === client.OPEN) {
//             client.send(JSON.stringify(message));
//         } else {
//             console.warn("⚠️ Client not ready:", client.readyState);
//         }
//     });
// };

// // Send message to a WebSocket client safely
// const sendToClient = (client, message) => {
//     if (client.readyState === client.OPEN) {
//         client.send(JSON.stringify(message));
//     } else {
//         console.warn("⚠️ Attempted to send to a closed WebSocket");
//     }
// };
// /// only updated message will be send


// //one time
// import express from "express";
// import { WebSocketServer } from "ws";

// const app = express();
// const PORT = 3001;

// // const HOST = "192.168.1.22"; // 🛠 Replace with your device's static IP


// // Start Express HTTP server bound to static IP
// // const server = app.listen(PORT, HOST, () =>
// //   console.log(`🚀 Server running at http://${HOST}:${PORT}...`)
// // );

// // Start Express HTTP server
// const server = app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}...`));

// // Attach WebSocket server
// const wss = new WebSocketServer({ server });

// const clients = new Set(); // Store all connected clients

// // Default states
// let chargingState = { isCharging: false };
// let bmsData = { voltage: 0, current: 0, SOC: 0, isReceiverCoilDetected: false, isFOD: false, isMiss: false, targetSOC: 0 };

// // Helper: Compare objects shallowly
// const hasChanges = (oldData, newData) => {
//     return Object.keys(newData).some(key => oldData[key] !== newData[key]);
// };

// wss.on("connection", (ws) => {
//     console.log("🔗 New client connected");
//     clients.add(ws);

//     ws.on("message", (message) => {
//         try {
//             const parsedMessage = JSON.parse(message);
//             console.log(`📩 Received:`, parsedMessage);

//             if (parsedMessage.type === "bms_data") {
//                 if (hasChanges(bmsData, parsedMessage.data)) {
//                     bmsData = { ...bmsData, ...parsedMessage.data };
//                     console.log("🔋 Updated BMS Data:", bmsData);
//                     broadcastToAll({ type: "bms_data", data: parsedMessage.data }); // Send only updated part
//                 }
//             } else if (parsedMessage.type === "charging_status") {
//                 if (hasChanges(chargingState, parsedMessage.data)) {
//                     chargingState = { ...chargingState, ...parsedMessage.data };
//                     console.log("⚡ Updated Charging Status:", chargingState);
//                     broadcastToAll({ type: "charging_status", data: parsedMessage.data }); // Send only updated part
//                 }
//             } else if (parsedMessage.type === "fod_status") {
//                 if (bmsData.isFOD !== parsedMessage.data.isFOD) {
//                     bmsData.isFOD = parsedMessage.data.isFOD;
//                     console.log("🚨 Updated FOD Status:", bmsData.isFOD ? "Detected" : "Not Detected");
//                     broadcastToAll({ type: "fod_status", data: { isFOD: bmsData.isFOD } });
//                 }
//             }

//         } catch (error) {
//             console.error("❌ Error processing message:", error);
//         }
//     });

//     ws.on("close", () => {
//         clients.delete(ws);
//         console.log("❌ Client disconnected");
//     });

//     // Initial sync with new client
//     sendToClient(ws, { type: "charging_status", data: chargingState });
//     sendToClient(ws, { type: "bms_data", data: bmsData });
// });

// // Broadcast data to all connected clients
// const broadcastToAll = (message) => {
//     console.log("🔄 Broadcasting to all clients:", JSON.stringify(message));
//     clients.forEach(client => {
//         if (client.readyState === client.OPEN) {
//             client.send(JSON.stringify(message));
//         } else {
//             console.warn("⚠️ Client not ready:", client.readyState);
//         }
//     });
// };

// // Send message to a WebSocket client safely
// const sendToClient = (client, message) => {
//     if (client.readyState === client.OPEN) {
//         client.send(JSON.stringify(message));
//     } else {
//         console.warn("⚠️ Attempted to send to a closed WebSocket");
//     }
// };
// TWO CLINETS

// import express from "express";
// import { WebSocketServer } from "ws";

// const app = express();
// const PORT = 8080;

// // Start Express HTTP server
// const server = app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}...`));

// // Attach WebSocket server
// const wss = new WebSocketServer({ server });
// const clients = new Set();

// // Default states
// let chargingState = { isCharging: false };
// let bmsData = {
//   voltage: 0,
//   current: 0,
//   SOC: 0,
//   isReceiverCoilDetected: false,
//   isFOD: false,
//   isMiss: false,
//   targetSOC: 0
// };

// // Shallow comparison helper
// const hasChanges = (oldData, newData) =>
//   Object.keys(newData).some(key => oldData[key] !== newData[key]);

// wss.on("connection", (ws) => {
//   console.log("🔗 New client connected");
//   clients.add(ws);

//   ws.on("message", (message) => {
//     try {
//       const parsedMessage = JSON.parse(message);
//       console.log(`📩 Received:`, parsedMessage);

//       // Handle BMS data from ESP32
//       if (parsedMessage.type === "bms_data") {
//         if (hasChanges(bmsData, parsedMessage.data)) {
//           bmsData = { ...bmsData, ...parsedMessage.data };
//           console.log("🔋 Updated BMS Data:", bmsData);
//           broadcastToAll({ type: "bms_data", data: bmsData });
//         }

//       // Handle flag data from Raspberry Pi
//       } else if (parsedMessage.type === "bms_flags") {
//         if (hasChanges(bmsData, parsedMessage.data)) {
//           bmsData = { ...bmsData, ...parsedMessage.data };
//           console.log("🚩 Updated BMS Flags:", bmsData);
//           broadcastToAll({ type: "bms_data", data: bmsData });
//         }

//       // Handle charging status
//       } else if (parsedMessage.type === "charging_status") {
//         if (hasChanges(chargingState, parsedMessage.data)) {
//           chargingState = { ...chargingState, ...parsedMessage.data };
//           console.log("⚡ Updated Charging Status:", chargingState);
//           broadcastToAll({ type: "charging_status", data: chargingState });
//         }
//       }

//     } catch (error) {
//       console.error("❌ Error processing message:", error);
//     }
//   });

//   ws.on("close", () => {
//     clients.delete(ws);
//     console.log("❌ Client disconnected");
//   });

//   // Initial sync for new client
//   sendToClient(ws, { type: "charging_status", data: chargingState });
//   sendToClient(ws, { type: "bms_data", data: bmsData });
// });

// // Broadcast message to all clients
// const broadcastToAll = (message) => {
//   console.log("🔄 Broadcasting:", message);
//   clients.forEach(client => {
//     if (client.readyState === client.OPEN) {
//       client.send(JSON.stringify(message));
//     }
//   });
// };

// // Send message to single client
// const sendToClient = (client, message) => {
//   if (client.readyState === client.OPEN) {
//     client.send(JSON.stringify(message));
//   }
// };
//ssl
// import express from "express";
// import https from "https";
// import fs from "fs";
// import { WebSocketServer } from "ws";
// import path from "path";
// import { fileURLToPath } from "url";

// // Get __dirname in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// const PORT = 3001;
// const HOST = "0.0.0.0"; // <== Bind to all interfaces

// // Load SSL cert and key
// const server = https.createServer({
//   cert: fs.readFileSync(path.join(__dirname, "certs", "cert.pem")),
//   key: fs.readFileSync(path.join(__dirname, "certs", "key.pem")),
// }, app);

// // WebSocket server over HTTPS
// const wss = new WebSocketServer({ server });

// const clients = new Set();

// let chargingState = { isCharging: false };
// let bmsData = {
//   voltage: 0,
//   current: 0,
//   SOC: 0,
//   isReceiverCoilDetected: false,
//   isFOD: false,
//   isMiss: false,
//   targetSOC: 0
// };

// const hasChanges = (oldData, newData) =>
//   Object.keys(newData).some(key => oldData[key] !== newData[key]);

// wss.on("connection", (ws) => {
//   console.log("🔗 New client connected (wss)");

//   clients.add(ws);

//   ws.on("message", (message) => {
//     try {
//       const parsed = JSON.parse(message);
//       console.log("📩 Received:", parsed);

//       if (parsed.type === "bms_data" || parsed.type === "bms_flags") {
//         if (hasChanges(bmsData, parsed.data)) {
//           bmsData = { ...bmsData, ...parsed.data };
//           broadcast({ type: "bms_data", data: bmsData });
//         }
//       } else if (parsed.type === "charging_status") {
//         if (hasChanges(chargingState, parsed.data)) {
//           chargingState = { ...chargingState, ...parsed.data };
//           broadcast({ type: "charging_status", data: chargingState });
//         }
//       }

//     } catch (err) {
//       console.error("❌ Error handling message:", err);
//     }
//   });

//   ws.on("close", () => {
//     clients.delete(ws);
//     console.log("❌ Client disconnected");
//   });

//   // Sync initial data
//   ws.send(JSON.stringify({ type: "charging_status", data: chargingState }));
//   ws.send(JSON.stringify({ type: "bms_data", data: bmsData }));
// });

// const broadcast = (msg) => {
//   const str = JSON.stringify(msg);
//   clients.forEach(client => {
//     if (client.readyState === client.OPEN) client.send(str);
//   });
// };

// // Listen on all interfaces (0.0.0.0)
// server.listen(PORT, HOST, () => {
//   console.log(`🚀 Secure server running at https://${HOST}:${PORT}`);
//   console.log(`🔍 Try opening https://<your-local-ip>:${PORT} in Hoppscotch or a browser`);
// });


// noraml seveer with ip
import express from "express";
import { WebSocketServer } from "ws";
import os from "os";

const app = express();
const PORT = 8080;
const HOST = "0.0.0.0"; // Listen on all interfaces

// Get local IP address
const getLocalIPAddress = () => {
  const interfaces = os.networkInterfaces();
  for (const iface of Object.values(interfaces)) {
    for (const config of iface) {
      if (config.family === "IPv4" && !config.internal) {
        return config.address;
      }
    }
  }
  return "localhost";
};

// Start Express HTTP server
const server = app.listen(PORT, HOST, () => {
  const localIP = getLocalIPAddress();
  console.log(`🚀 Server running at:`);
  console.log(`🔗 Localhost:     http://localhost:${PORT}`);
  console.log(`📡 LAN (local):  http://${localIP}:${PORT}`);
});

// Attach WebSocket server
const wss = new WebSocketServer({ server });

const clients = new Set(); // Store all connected clients

// Default states
let chargingState = { isCharging: false };
let bmsData = {
  voltage: 0,
  current: 0,
  SOC: 0,
  isReceiverCoilDetected: false,
  isFOD: false,
  isMiss: false,
  targetSOC: 0,
};

// Helper: Compare objects shallowly
const hasChanges = (oldData, newData) => {
  return Object.keys(newData).some((key) => oldData[key] !== newData[key]);
};

wss.on("connection", (ws) => {
  console.log("🔌 New WebSocket client connected");
  clients.add(ws);

  ws.on("message", (message) => {
    try {
      const parsedMessage = JSON.parse(message);
      console.log("📩 Received:", parsedMessage);

      if (parsedMessage.type === "bms_data") {
        if (hasChanges(bmsData, parsedMessage.data)) {
          bmsData = { ...bmsData, ...parsedMessage.data };
          console.log("🔋 Updated BMS Data:", bmsData);
          broadcastToAll({ type: "bms_data", data: parsedMessage.data });
        }
      } else if (parsedMessage.type === "charging_status") {
        if (hasChanges(chargingState, parsedMessage.data)) {
          chargingState = { ...chargingState, ...parsedMessage.data };
          console.log("⚡ Updated Charging Status:", chargingState);
          broadcastToAll({
            type: "charging_status",
            data: parsedMessage.data,
          });
        }
      } else if (parsedMessage.type === "fod_status") {
        if (bmsData.isFOD !== parsedMessage.data.isFOD) {
          bmsData.isFOD = parsedMessage.data.isFOD;
          console.log(
            "🚨 FOD Status:",
            bmsData.isFOD ? "Detected" : "Not Detected"
          );
          broadcastToAll({
            type: "fod_status",
            data: { isFOD: bmsData.isFOD },
          });
        }
      }
    } catch (err) {
      console.error("❌ Failed to parse message:", err);
    }
  });

  ws.on("close", () => {
    clients.delete(ws);
    console.log("❌ Client disconnected");
  });

  // Sync data with new client
  sendToClient(ws, { type: "charging_status", data: chargingState });
  sendToClient(ws, { type: "bms_data", data: bmsData });
});

// Broadcast data to all connected clients
const broadcastToAll = (message) => {
  console.log("🔄 Broadcasting:", JSON.stringify(message));
  clients.forEach((client) => {
    if (client.readyState === client.OPEN) {
      client.send(JSON.stringify(message));
    }
  });
};

// Send a message to a specific client
const sendToClient = (client, message) => {
  if (client.readyState === client.OPEN) {
    client.send(JSON.stringify(message));
  } else {
    console.warn("⚠️ Tried to send to a closed client");
  }
};
