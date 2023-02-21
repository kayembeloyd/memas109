import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Up = ({ color }) => (
  <Svg width={13} height={10} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="m7.762 1.077 4.687 5.087c.57.62.698 1.328.382 2.127-.315.8-.878 1.199-1.69 1.199H1.859c-.811 0-1.374-.4-1.689-1.2-.316-.798-.189-1.507.382-2.126l4.687-5.087c.18-.196.376-.342.586-.44C6.034.539 6.26.49 6.5.49c.24 0 .466.049.676.147.21.098.406.244.586.44Z"
      fill={color ? color : "#fff"}
    />
  </Svg>
);

export default Up;
