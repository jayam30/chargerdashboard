
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

import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const PORT = 8080;

// Start Express HTTP server
const server = app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}...`));

// Attach WebSocket server
const wss = new WebSocketServer({ server });

const clients = new Set(); // Store all connected clients

// Default states
let chargingState = { isCharging: false };
let bmsData = { voltage: 0, current: 0, SOC: 0, isReceiverCoilDetected: false, isFOD: false, isMiss:false,};

wss.on("connection", (ws) => {
    console.log("🔗 New client connected");
    clients.add(ws); // Add every client to the set

    ws.on("message", (message) => {
        try {
            const parsedMessage = JSON.parse(message);
            console.log(`📩 Received:`, parsedMessage);

            // Update local state if necessary
            if (parsedMessage.type === "bms_data") {
                bmsData = { ...bmsData, ...parsedMessage.data };
                console.log("🔋 Updated BMS Data:", bmsData);
            } else if (parsedMessage.type === "charging_status") {
                chargingState = { ...chargingState, ...parsedMessage.data };
                console.log("⚡ Updated Charging Status:", chargingState);
            }
            else if (parsedMessage.type === "fod_status") {  // ✅ Handling FOD updates
                bmsData.isFOD = parsedMessage.data.isFOD;
                console.log("🚨 Updated FOD Status:", bmsData.isFOD ? "Detected" : "Not Detected");
            }
            else if (parsedMessage.type === "miss_status") {  
                bmsData.isMiss = parsedMessage.data.isMiss;  // ✅ Correct key assignment
                console.log("🚨 Updated Misalignment Status:", bmsData.isMiss ? "Detected" : "Not Detected");
            }
            
            // Broadcast the received message to all clients
            broadcastToAll(parsedMessage);
        } catch (error) {
            console.error("❌ Error processing message:", error);
        }
    });

    ws.on("close", () => {
        clients.delete(ws);
        console.log("❌ Client disconnected");
    });

    // Send initial data to the newly connected client
    sendToClient(ws, { type: "charging_status", data: chargingState });
    sendToClient(ws, { type: "bms_data", data: bmsData });
});

// Broadcast data to all connected clients
const broadcastToAll = (message) => {
    console.log("🔄 Broadcasting to all clients:", JSON.stringify(message));
    clients.forEach(client => {
        if (client.readyState === client.OPEN) {
            client.send(JSON.stringify(message));
        } else {
            console.warn("⚠️ Client not ready:", client.readyState);
        }
    });
};

// Send message to a WebSocket client safely
const sendToClient = (client, message) => {
    if (client.readyState === client.OPEN) {
        client.send(JSON.stringify(message));
    } else {
        console.warn("⚠️ Attempted to send to a closed WebSocket");
    }
};
