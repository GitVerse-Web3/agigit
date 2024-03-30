import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { AcmeLogo } from "../icon/AcmeLogo";
import WalletButtons from "./wallet/walletButtons";

export default function Narbar() {
  return (
    <Navbar className="dark-gradient-bg">
      <NavbarBrand className="w-20">
        <AcmeLogo />
        <p className="font-bold text-inherit text-[28px]">AGI-GIT</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <WalletButtons />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
