
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const launchDate = new Date("2025-07-01T00:00:00");
    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-white flex flex-col items-center justify-center text-center px-4">
      <Head>
        <title>TattooArtistHub - Coming Soon</title>
      </Head>
      <div className="w-20 h-20 mb-6 bg-accent rounded-full animate-pulse"></div>
      <h1 className="text-4xl md:text-6xl font-bold text-accent mb-4">Tattoo Artist Hub</h1>
      <p className="text-lg md:text-xl mb-6">We're crafting the ultimate global directory for tattoo artists.</p>
      <div className="text-2xl font-mono text-accent">
        {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
      </div>
      <p className="mt-8 text-sm text-gray-400">Stay tuned — launching July 1st, 2025</p>
    </div>
  );
}
