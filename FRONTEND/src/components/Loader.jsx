import React from "react";
import { ScaleLoader } from "react-spinners";

const Loader = ({ height = 20, width = 5, color = "#ffffff" }) => {
  return <ScaleLoader height={height} width={width} color={color} />;
};

export default Loader;
