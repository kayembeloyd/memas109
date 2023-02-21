import * as React from "react";
import Svg, { Path } from "react-native-svg";

const BoxUnChecked = ({ color }) => (
  <Svg width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M16 2v14H2V2h14Zm0-2H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2Z"
      fill={color ? color : "#fff"}
    />
  </Svg>
);

export default BoxUnChecked;
