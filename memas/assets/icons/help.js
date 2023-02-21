import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Help = ({ color }) => (
  <Svg width={21} height={20} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M10.5 0C4.98 0 .5 4.48.5 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10Zm1 17h-2v-2h2v2Zm2.07-7.75-.9.92c-.72.73-1.17 1.33-1.17 2.83h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25Z"
      fill={color ? color : "#fff"}
    />
  </Svg>
);

export default Help;
