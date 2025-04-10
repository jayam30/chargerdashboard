

import { Toaster } from "sonner";
import { WebSocketProvider } from "../../contexts/WebSocketContext";
import "../styles/globals.css"; // Ensure correct path
// import localFont from "next/font/local";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        <WebSocketProvider>
          {/* Main container for responsiveness */}
          <div className="max-h-screen w-full bg-black flex items-center justify-center">
          <div className="relative w-[768px] h-[1024px] overflow-hidden">
            
            {children}
          </div>
        </div>
          <Toaster />
        </WebSocketProvider>
      </body>
    </html>
  );
}
