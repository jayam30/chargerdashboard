"use client";

import { useBMSData } from "../../../hooks/useBMSData";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";



interface ChargingOption {
  id: number;
  text: string;
  route: string;
}

const Select = () => {
  const router = useRouter();
  const options: ChargingOption[] = [
    { id: 1, text: "Percent", route: "/soc" },
    { id: 2, text: "Time", route: "/set-time" },
    { id: 3, text: "Money", route: "/money" },
  ];

  const handleSelect = (route: string) => {
    router.push(route);
  };

   const { bmsData } = useBMSData();
    const isReceiverCoilDetected = bmsData?.isReceiverCoilDetected ?? false;
  
    useEffect(() => {
      if (!isReceiverCoilDetected) {
        const timeout = setTimeout(() => router.push("/park"), 1000);
        return () => clearTimeout(timeout);
      }
    }, [isReceiverCoilDetected, router]);

  return (
    <div
      className="w-[768px] h-[1024px] overflow-hidden bg-[#2A2D32] font-sans pt-7"
      style={{
        backgroundImage: "url(/main-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
     

      <div className="flex justify-center items-center p-1 pt-40 w-full px-8">
        <motion.div
          className="text-left flex-col gap-2 mb-24 relative w-full max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="text-gray-200 text-5xl font-medium tracking-wide relative group mb-16"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="relative inline-block">Charge your EV by</span>
          </motion.div>

          <div className="flex justify-center items-center w-full">
            <div className="flex flex-col gap-10 w-80">
              {options.map((option) => (
                <button
                  className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-7 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 text-lg"
                  key={option.id}
                  onClick={() => handleSelect(option.route)}
                >
                  <div className="w-full text-white flex justify-between">
                    {option.text}
                    <div>
                      <Zap className="text-cyan-300 w-7 h-7" />
                    </div>
                  </div>
                </button>
              ))}
              <button
                className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-7 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 text-lg"
                onClick={() => handleSelect("/")}
              >
                <div className="w-full text-white flex justify-center">
                  <span className="text-lg font-semibold">Home</span>
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Select;