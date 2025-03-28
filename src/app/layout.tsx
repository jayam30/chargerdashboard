// // app/layout.tsx
// import { Toaster } from "sonner";
// import { WebSocketProvider } from "../../contexts/WebSocketContext";


// import "../styles/globals.css"; // Adjusted the path
// ;


// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <WebSocketProvider>
//           {children}
//           <Toaster />
//         </WebSocketProvider>
//       </body>
//     </html>
//   );
// }

import { Toaster } from "sonner";
import { WebSocketProvider } from "../../contexts/WebSocketContext";
import "../styles/globals.css"; // Ensure correct path

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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
            {children}
          </div>
          <Toaster />
        </WebSocketProvider>
      </body>
    </html>
  );
}
