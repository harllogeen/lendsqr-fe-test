import { styled } from "@mui/material/styles";
import { KeyboardBackspace } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Wrapper = styled(Box)`
  a {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #545f7d;
    display: flex;
    align-items: center;
  }

  h5 {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #213f7d;
  }

  button {
    width: 170px;
    height: 40px;
    border-radius: 8px;
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
  }

  button:hover {
    background: none;
  }
  .MuiSvgIcon-root {
    color: #545f7d;
    margin-right: 10px;
  }
`;

const UserNavigation = () => {
  return (
    <Wrapper>
      <Box sx={{ marginBottom: "32px" }}>
        <Link to="/dashboard">
          <KeyboardBackspace />
          Back to Users
        </Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        flexDirection={{ xs: "column", md: "row" }}
      >
        <h5>User Details</h5>

        <Box
          display={{ xs: "flex", md: "block" }}
          margin={{ xs: "15px 15px", md: "0" }}
        >
          <Button
            sx={{
              color: "#E4033B",
              border: "1px solid #E4033B",
              marginRight: "15px",
            }}
            variant="outlined"
          >
            BLACKLIST USER
          </Button>
          <Button
            sx={{ color: "#39CDCC", border: "1px solid #39CDCC" }}
            variant="outlined"
          >
            ACTIVATE USER
          </Button>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default UserNavigation;
