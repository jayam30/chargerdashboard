// types/index.ts
export interface BMSData {
    voltage: number;
    current: number;
    SOC: number;
    isReceiverCoilDetected: boolean;
    loading: boolean;
    error: string | null;
  }
  
  export interface ChargingDuration {
    hours: number;
    minutes: number;
    startTime?: number;
    endTime?: number;
  }
  
  export interface ChargingStatus {
    isChargingInitialized: boolean;
    duration?: ChargingDuration;
    fodTriggered: boolean;
    misalignmentTriggered: boolean;
    emergencyStop: boolean;
  }
  
  export interface WebSocketMessage {
    type: string;
    data?: unknown; // Prevents unsafe operations on 'data'
}
