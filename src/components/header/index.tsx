import Menu from "../../assets/icons/Menu.svg";
import Logo from "../../assets/icons/Logo.svg";
import Search from "../../assets/icons/Search.svg";

import * as Box from "./style";
import { TouchableOpacity } from "react-native";

export function Header() {
  return (
    <Box.Header>
      <TouchableOpacity>
        <Menu width="24" height="24" fill="none" />
      </TouchableOpacity>
      <Logo width="71" height="26" fill="none" />
      <TouchableOpacity>
        <Search width="24" height="24" fill="none" />
      </TouchableOpacity>
    </Box.Header>
  );
}
