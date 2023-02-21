import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Down = ({ color }) => (
  <Svg width={15} height={10} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M6.044 8.913.636 3.826C-.023 3.206-.17 2.498.195 1.7.558.9 1.208.5 2.144.5h10.712c.936 0 1.586.4 1.949 1.2.365.798.218 1.507-.44 2.126L8.955 8.913a2.168 2.168 0 0 1-.676.44 2.066 2.066 0 0 1-.78.147c-.277 0-.537-.049-.78-.147a2.168 2.168 0 0 1-.676-.44Z"
      fill={color ? color : "#fff"}
    />
  </Svg>
);

export default Down;
