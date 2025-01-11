import React, { useEffect, useRef, memo } from "react";

const TradingViewWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Cleanup existing widget if any
    if (containerRef.current) {
      containerRef.current.innerHTML = ""; // Clear the container content
    }

    // Create the script element
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      width: "770",
      height: "450",
      symbol: "CRYPTOCAP:BTC",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "light",
      style: "3",
      locale: "en",
      gridColor: "rgba(238, 238, 238, 0.06)",
      hide_top_toolbar: true,
      hide_legend: true,
      allow_symbol_change: false,
      save_image: false,
      calendar: false,
      hide_volume: true,
    });

    // Append the script to the container
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ""; // Cleanup on unmount
      }
    };
  }, []); // Run only once

  return (
    <div
      className="tradingview-widget-container h-[40vh] mt-5"
      ref={containerRef}
    >
      <div className="tradingview-widget-container__widget h-[50vh]"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default memo(TradingViewWidget);
