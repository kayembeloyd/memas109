import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Back = ({ color }) => (
  <Svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M16 7H3.83l5.59-5.59L8 0 0 8l8 8 1.41-1.41L3.83 9H16V7Z"
      fill={color ? color : "#fff"}
    />
  </Svg>
);

export default Back;
