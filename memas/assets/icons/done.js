/**  <Svg
    width={17}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m6.4 12.025-5.7-5.7L2.125 4.9 6.4 9.175 15.575 0 17 1.425l-10.6 10.6Z"
      fill="#000"
    />
  </Svg> */

import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Done = ({ color }) => (
  <Svg width={17} height={13} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="m6.4 12.025-5.7-5.7L2.125 4.9 6.4 9.175 15.575 0 17 1.425l-10.6 10.6Z"
      fill={color ? color : "#fff"}
    />
  </Svg>
);

export default Done;
