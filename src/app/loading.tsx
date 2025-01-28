import { Loader } from "lucide-react";
import React from "react";

const LoadingUI = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Loader className="animate-spin" />
    </div>
  );
};

export default LoadingUI;
