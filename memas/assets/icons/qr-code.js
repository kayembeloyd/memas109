import * as React from "react";
import Svg, { Path } from "react-native-svg";

const QrCode = ({ color }) => (
  <Svg width={24} height={25} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M4 4.49h6v6H4v-6Zm16 0v6h-6v-6h6Zm-6 11h2v-2h-2v-2h2v2h2v-2h2v2h-2v2h2v3h-2v2h-2v-2h-3v2h-2v-4h3v-1Zm2 0v3h2v-3h-2Zm-12 5v-6h6v6H4Zm2-14v2h2v-2H6Zm10 0v2h2v-2h-2Zm-10 10v2h2v-2H6Zm-2-5h2v2H4v-2Zm5 0h4v4h-2v-2H9v-2Zm2-5h2v4h-2v-4Zm-9-4v4H0v-4a2 2 0 0 1 2-2h4v2H2Zm20-2a2 2 0 0 1 2 2v4h-2v-4h-4v-2h4Zm-20 18v4h4v2H2a2 2 0 0 1-2-2v-4h2Zm20 4v-4h2v4a2 2 0 0 1-2 2h-4v-2h4Z"
      fill={color ? color : "#fff"}
    />
  </Svg>
);

export default QrCode;
