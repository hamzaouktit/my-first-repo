// NightMode.js
import React, { useEffect, useState } from "react";

const NightMode = () => {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    // Get the current hour
    const hour = new Date().getHours();

    // Determine if it's night (e.g., between 18:00 and 6:00)
    setIsNight(hour >= 18 || hour < 6);

    // Apply theme class to the document body
    if (hour >= 18 || hour < 6) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className={`min-h-screen ${isNight ? "bg-gray-900 text-white" : "bg-white text-black"} flex items-center justify-center`}> 
     <h1>urfhrcbrfbcurch</h1>
     <h5>hello merrr</h5>
     <p>hello hssay abdo</p>
     gfryrrgrtg dhf
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          {isNight ? "🌙 Mode Nuit Activé" : "☀️ Mode Jour Activé"}
        </h1>
        <p className="text-lg">hamza is a good man with a very very good heart.</p>
      </div>
    </div>
  );
};

export default NightMode;
