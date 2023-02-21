import * as React from "react";
import Svg, { Path } from "react-native-svg";

const BoxChecked = ({ color }) => (
  <Svg width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M16 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7 14 2 9l1.41-1.41L7 11.17l7.59-7.59L16 5l-9 9Z"
      fill={color ? color : "#fff"}
    />
  </Svg>
);

export default BoxChecked;
