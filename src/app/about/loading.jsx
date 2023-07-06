import React from "react";
import Image from "next/image";

const Loading = () => {
  return <Image src="/loader.svg" alt="loading" width={100} height={100} />;
};

export default Loading;
