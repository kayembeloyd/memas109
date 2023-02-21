/** */

import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Add = ({ color }) => (
  <Svg width={14} height={15} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M6 14.49v-6H0v-2h6v-6h2v6h6v2H8v6H6Z"
      fill={color ? color : "#fff"}
    />
  </Svg>
);

export default Add;
