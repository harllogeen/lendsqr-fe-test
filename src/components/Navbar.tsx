import { Avatar, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";

const NavbarWrapper = styled(Box)`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 3px 0px 20px rgba(0, 0, 0, 0.04);
  z-index: 1000;
  position: sticky;
  top: 0;
`;

const Logo = styled(Box)`
  width: 130px;
  margin-left: 30px;

  img {
    width: 100%;
  }
`;

const SearchBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  height: 40px;
  border-radius: 8px;
  padding-left: 10px;
  background: #ffffff;
  border: 1px solid #21407d68;
  border-radius: 8px;
`;

const Input = styled("input")`
  outline: none;
  border: none;
  background: #ffffff;
  width: 350px;
  padding: 8px 5px;
  margin-right: 5px;
`;

const Icon = styled(Box)`
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  width: 56px;
  height: 40px;
  border-radius: 0px 8px 8px 0;
`;

const MenuItem = styled("ul")`
  display: flex;
  align-items: center;
  color: #213f7d;
  margin-right: 52px;

  @media screen and (max-width: 900px) {
    .docs {
      display: none;
    }
  }
`;

const Menu = styled("li")`
  cursor: pointer;

  :not(:last-child) {
    margin-left: 20px;
  }
`;

interface INavbarProps {
  onClickMobilebtn: Function;
  showSideBar: boolean;
}

const NavBar = ({ onClickMobilebtn, showSideBar }: INavbarProps) => {
  return (
    <NavbarWrapper>
      <Box
        display={{ xs: "flex", lg: "none", background: "#f5f4f4" }}
        border="1px solid #b8b6be"
        marginLeft="15px"
        padding="3px 5px"
        alignItems="center"
        borderRadius="5px"
        onClick={() => onClickMobilebtn()}
      >
        {showSideBar ? (
          <CloseIcon sx={{ color: "#213F7D" }} />
        ) : (
          <DragHandleIcon sx={{ color: "#213F7D" }} />
        )}
      </Box>

      <Logo>
        <img src="/assets/logo.svg" alt="logo" />
      </Logo>

      <SearchBox display={{ xs: "none", md: "flex" }}>
        <Input />
        <Icon>
          <SearchIcon />
        </Icon>
      </SearchBox>

      <MenuItem>
        <Menu className="docs">Docs</Menu>
        <Menu>
          <NotificationsNoneIcon sx={{ display: { xs: "none", md: "flex" } }} />
        </Menu>
        <Menu>
          <Avatar alt="Profile" src="/assets/oluwaseyi.jpg" />
        </Menu>
        <Menu
          sx={{ paddingLeft: "10px", display: "flex", alignItems: "center" }}
        >
          Oluwaseyi <ArrowDropDownIcon />
        </Menu>
      </MenuItem>
    </NavbarWrapper>
  );
};

export default NavBar;
