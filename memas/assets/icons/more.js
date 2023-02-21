import * as React from "react";
import Svg, { Path } from "react-native-svg";

const More = ({ color }) => (
  <Svg width={4} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M2 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm0 2C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z"
      fill={color ? color : "#fff"}
    />
  </Svg>
);

export default More;
