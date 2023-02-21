import * as React from "react";
import { View } from "react-native";

import More from "./more";
import Overdue from "./overdue";
import Help from "./help";
import Menu from "./menu";
import Back from "./back";
import Close from "./close";
import Down from "./down";
import Search from "./search";
import Add from "./add";
import QrCode from "./qr-code";
import Up from "./up";
import Done from "./done";
import BoxChecked from "./box-checked";
import BoxUnChecked from "./box-unchecked";

const getIcon = (name, color) => {
  switch (name) {
    case "overdue":
      return <Overdue color={color} />;
    case "more":
      return <More color={color} />;
    case "help":
      return <Help color={color} />;
    case "menu":
      return <Menu color={color} />;
    case "back":
      return <Back color={color} />;
    case "close":
      return <Close color={color} />;
    case "down":
      return <Down color={color} />;
    case "search":
      return <Search color={color} />;
    case "add":
      return <Add color={color} />;
    case "qr-code":
      return <QrCode color={color} />;
    case "up":
      return <Up color={color} />;
    case "done":
      return <Done color={color} />;
    case "box-checked":
      return <BoxChecked color={color} />;
    case "box-unchecked":
      return <BoxUnChecked color={color} />;
    default:
      break;
  }
};

const Icons = (props) => (
  <View
    style={[
      props.style,
      {
        justifyContent: "center",
        alignItems: "center",
      },
    ]}
  >
    {getIcon(props.name, props.color)}
  </View>
);

export default Icons;
