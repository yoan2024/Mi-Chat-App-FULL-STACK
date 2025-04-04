import React from "react";
import Image from "next/image";

const Flecha = () => {
  return (
    <div className="self-start">
      <Image
        src="/image/flechabacana.png"
        width={40}
        height={50}
        alt="flecha"
      />
    </div>
  );
};

export default Flecha;
