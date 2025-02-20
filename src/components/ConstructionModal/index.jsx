import React from "react";

const ConstructionModal = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 flex justify-center items-center z-[9999] p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center max-w-xs md:max-w-md w-full">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">🚧 Under Construction 🚧</h2>
        <p className="text-sm md:text-lg text-gray-700">We're working on something amazing. Stay tuned!</p>
      </div>
    </div>
  );
};

export default ConstructionModal;
