"use client";

import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const RealProgressBar = () => {
  useEffect(() => {
    const handleStart = () => {
      NProgress.start(); 
    };

    const handleComplete = () => {
      NProgress.done(); 
    };

    window.addEventListener("load", handleComplete); 
    window.addEventListener("beforeunload", handleStart); 

    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      handleStart(); 
      const response = await originalFetch(...args);
      handleComplete();
      return response;
    };

    return () => {
      window.removeEventListener("load", handleComplete);
      window.removeEventListener("beforeunload", handleStart);
    };
  }, []);

  return null;
};

export default RealProgressBar;
