import React from "react";
import { Navbar } from "../sections/Navbar";

// Fallback 404 error page displayed when route mismatch occurs
export const Error = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center text-[80px] mt-20">Ops! 404 Page Not Found</h1>
    </div>
  );
};

