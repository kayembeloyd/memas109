import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Search = ({ color }) => (
  <Svg width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M13.01 11h-.79l-.28-.27a6.47 6.47 0 0 0 1.57-4.23 6.5 6.5 0 1 0-6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L18 16l-4.99-5Zm-6 0c-2.49 0-4.5-2.01-4.5-4.5S4.52 2 7.01 2s4.5 2.01 4.5 4.5S9.5 11 7.01 11Z"
      fill={color ? color : "#fff"}
    />
  </Svg>
);

export default Search;
