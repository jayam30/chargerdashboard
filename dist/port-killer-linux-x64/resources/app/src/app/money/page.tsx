"use client";

import { Card, CardContent } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "../../../components/ui/tooltip";

export default function PaymentPage() {
  const amountToPay = 55; // placeholder value

  return (
    <div
      className="w-[768px] h-[1024px] overflow-hidden bg-transparent font-sans pt-7"
      style={{
        backgroundImage: "url(/soc-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center items-center p-1 pt-40 w-full px-8">
        <Card className="w-full max-w-md bg-transparent border-none">
          <CardContent className="border-none p-8">
            <div className="flex flex-col items-center space-y-10">
              <div className="flex items-center space-x-3">
                <span className="text-xl font-semibold text-white">Make Payment</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="w-5 h-5 text-neutral-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Scan the QR code below to pay for your charging session.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <div className="text-white text-lg">
                Total Amount: <span className="font-bold">₹{amountToPay}</span>
              </div>

              <div className="bg-white rounded-xl p-4">
                {/* Replace with dynamic QR code source later */}
                <img
                  src="/qr-placeholder.png"
                  alt="QR Code"
                  className="w-56 h-56 object-contain"
                />
              </div>

              <div className="text-sm text-neutral-300 text-center max-w-sm">
                Please scan the QR code using your UPI app and complete the payment. Charging will start automatically once the transaction is confirmed.
              </div>

              <Button
                disabled
                className="w-40 h-12 text-lg bg-red-500 text-white font-semibold opacity-50"
              >
                Waiting for Payment...
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
