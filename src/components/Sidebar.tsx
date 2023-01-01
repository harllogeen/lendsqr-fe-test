import { useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import Badge from "../Icons/badge.svg";
import Chart from "../Icons/chart.svg";
import Coins from "../Icons/coins.svg";
import Handshake from "../Icons/handshake.svg";
import Galaxy from "../Icons/galaxy.svg";
import Product from "../Icons/product.svg";
import Sack from "../Icons/sack.svg";
import Saving from "../Icons/saving.svg";
import Scroll from "../Icons/scroll.svg";
import Tire from "../Icons/tire.svg";
import Transaction from "../Icons/trans.svg";
import UserFriends from "../Icons/user-friends.svg";
import Users from "../Icons/users.svg";
import Brief from "../Icons/brief.svg";
import Clipboard from "../Icons/clipboard.svg";
import Slider from "../Icons/sliders.svg";
import UserAcct from "../Icons/user-cog.svg";
import UserCheck from "../Icons/user-check.svg";
import Hand from "../Icons/hand.svg";
import UserTimes from "../Icons/user-times.svg";
import { NavLink } from "react-router-dom";

const Custumers = [
  {
    icon: UserFriends,
    iconName: "Users",
    path: "/dashboard/users",
  },

  {
    icon: Users,
    iconName: "Gaurantors",
    path: "/404",
  },

  {
    icon: Sack,
    iconName: "Loans",
    path: "/404",
  },

  {
    icon: Handshake,
    iconName: "Decision Models",
    path: "/404",
  },

  {
    icon: Saving,
    iconName: "Savings",
    path: "/404",
  },

  {
    icon: Hand,
    iconName: "Loan Request",
    path: "/404",
  },

  {
    icon: UserCheck,
    iconName: "Whitelist",
    path: "/404",
  },

  {
    icon: UserTimes,
    iconName: "Karma",
    path: "/404",
  },
];

const Businesses = [
  {
    icon: Brief,
    iconName: "Organisation",
    path: "/404",
  },

  {
    icon: Sack,
    iconName: "Loan Product",
    path: "/404",
  },

  {
    icon: Product,
    iconName: "Savings Product",
    path: "/404",
  },

  {
    icon: Handshake,
    iconName: "Decision Models",
    path: "/404",
  },

  {
    icon: Coins,
    iconName: "Fees and Charges",
    path: "/404",
  },

  {
    icon: Transaction,
    iconName: "Transaction",
    path: "/404",
  },

  {
    icon: Galaxy,
    iconName: "Services",
    path: "/404",
  },

  {
    icon: UserAcct,
    iconName: "Service Account",
    path: "/404",
  },

  {
    icon: Scroll,
    iconName: "Settlement",
    path: "/404",
  },

  {
    icon: Chart,
    iconName: "Reports",
    path: "/404",
  },
];

const Settings = [
  {
    icon: Slider,
    iconName: "Preferences",
    path: "/404",
  },

  {
    icon: Product,
    iconName: "Loan Product",
    path: "/404",
  },

  {
    icon: Badge,
    iconName: "Fees and Pricing",
    path: "/404",
  },

  {
    icon: Clipboard,
    iconName: "Audit Logs",
    path: "/404",
  },

  {
    icon: Tire,
    iconName: "System Message",
    path: "/404",
  },
];

const SideBarWrapper = styled(Box)`
  width: 283px;
  min-height: 100vh;
  background: #ffffff;
`;

const SideBarContent = styled(Box)``;

const MenuItems = styled(Box)`
  margin-top: 40px;
`;

const Menu = styled("ul")`
  a {
    display: flex;
    align-items: center;
    font-family: "Work Sans";
    font-weight: 400;
    font-size: 16px;
    width: 283px;
    margin-bottom: 30px;
    padding-left: 30px;
    color: #213f7d;
  }

  img {
    width: auto;
    margin-right: 10px;
  }

  .active {
    height: 40px;
    background-color: #39cdcd1f;
    border-left: 3px solid #39cdcc;
  }

  .MuiSvgIcon-root {
    margin-right: 10px;
  }
`;

const MenuList = styled("li")`
  display: flex;
  align-items: center;
  padding-bottom: 30px;
  font-family: "Work Sans";
  font-weight: 500;
  font-size: 16px;
  color: #545f7d;

  .MuiSvgIcon-root {
    margin-right: 10px;
  }
`;

const SideBar = () => {
  
  return (
    <SideBarWrapper>
      <SideBarContent>
        <MenuList sx={{ paddingTop: "40px", paddingLeft: "30px" }}>
          <BusinessCenterIcon /> Switch Organization
          <ArrowDropDownIcon />
        </MenuList>
        <Menu sx={{ paddingTop: "50px" }}>
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <HomeIcon /> Dashboard
          </NavLink>
        </Menu>

        <MenuItems>
          <MenuList sx={{ paddingLeft: "30px", paddingBottom: "10px" }}>
            CUSTUMERS
          </MenuList>
          <Menu>
            {Custumers.map((item, index) => {
              return (
                <NavLink
                  to={item.path}
                  key={item.iconName}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img src={item.icon} alt="icon" height="16px" width="16px" />{" "}
                  {item.iconName}
                </NavLink>
              );
            })}
          </Menu>
        </MenuItems>

        <MenuItems>
          <MenuList sx={{ paddingLeft: "30px", paddingBottom: "10px" }}>
            BUSINESSES
          </MenuList>
          <Menu>
            {Businesses.map((item, index) => {
              return (
                <NavLink
                  to={item.path}
                  key={item.iconName}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img src={item.icon} alt="icon" height="16px" width="16px" />{" "}
                  {item.iconName}
                </NavLink>
              );
            })}
          </Menu>
        </MenuItems>

        <MenuItems>
          <MenuList sx={{ paddingLeft: "30px", paddingBottom: "10px" }}>
            SETTINGS
          </MenuList>
          <Menu>
            {Settings.map((item, index) => {
              return (
                <NavLink
                  to={item.path}
                  key={item.iconName}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img src={item.icon} alt="icon" height="16px" width="16px" />{" "}
                  {item.iconName}
                </NavLink>
              );
            })}
          </Menu>
        </MenuItems>

        <MenuList
          sx={{ paddingLeft: "30px", paddingBottom: "20px", cursor: "pointer" }}
        >
          <NavLink style={{ display: "flex", alignItems: "center" }} to="/">
            <LogoutIcon /> Logout
          </NavLink>
        </MenuList>
      </SideBarContent>
    </SideBarWrapper>
  );
};

export default SideBar;
