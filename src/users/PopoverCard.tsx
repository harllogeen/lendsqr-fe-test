import { RemoveRedEyeOutlined } from "@mui/icons-material";
import { Box, Card, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const CardWrapper = styled(Card)`
  width: 180px;
  height: 130px;
  background: #ffffff;
  border: 1px solid rgba(84, 95, 125, 0.04);
  box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
  border-radius: 4px;

  img {
    width: auto;
    margin-right: 10px;
  }

  a {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #545f7d;
  }

  .MuiSvgIcon-root {
    color: #545f7d;
    margin-right: 10px;
  }
`;

const PopoverCard = ({ userId }: { userId: string }) => {
  const navigate = useNavigate();

  const navigateToDetailsPage = (userId: string) => {
    navigate(`/dashboard/users/details/${userId}`);
  };
  return (
    <CardWrapper>
      <CardContent>
        <Box
          onClick={() => navigateToDetailsPage(userId)}
          sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
        >
          <img src="/assets/redeye.svg" alt="icon" height="16px" width="16px" />
          <a> View Details</a>
        </Box>

        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
        >
          <img
            src="/assets/user-times.svg"
            alt="icon"
            height="16px"
            width="16px"
          />
          <a> Blacklist User</a>
        </Box>

        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
        >
          <img
            src="/assets/user-check.svg"
            alt="icon"
            height="16px"
            width="16px"
          />
          <a> Activate Users</a>
        </Box>
      </CardContent>
    </CardWrapper>
  );
};

export default PopoverCard;
