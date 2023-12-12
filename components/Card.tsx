import React from "react";

const Card = () => {
  return (
    <div className="relative">
      {/* Opaque Shadow */}
      <div className="absolute -rotate-3 translate-x-3 -translate-y-1 inset-0 bg-orange-500 w-[12.5rem] h-52  opacity-50 rounded-md shadow"></div>

      {/* Your Box */}
      <div className="relative w-48 h-48 bg-black rounded-md m-2">
        {/* Your Box Content Goes Here */}
      </div>
    </div>
  );
};

export default Card;
