import React, { useEffect, useState } from "react";

interface TickerProps {
  messages: string[];
  interval: number;
}

const Ticker: React.FC<TickerProps> = ({ messages, interval }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [messages.length, interval]);

  return <div className="!text-[#e6e6e6]">{messages[currentMessageIndex]}</div>;
};

export default Ticker;
