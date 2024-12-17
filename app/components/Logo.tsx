import { Avatar } from "@radix-ui/themes";
import React from "react";

const Logo = () => {
  return (
    <div className="relative w-52 h-16">
      <Avatar
        src="/logoBrown.png"
        fallback=""
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;
