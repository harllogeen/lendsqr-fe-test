import { Avatar, Box, Card, CardContent, Rating } from "@mui/material";
import { styled } from "@mui/material/styles";
import { IUser } from "users/types";

const CardWrap = styled(Card)`
  min-height: 210px;
  background: #ffffff;
  border: 1px solid rgba(33, 63, 125, 0.06);
  box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  margin-top: 46px;
`;

const UserInfo = styled(Box)`
  display: flex;
  align-items: center;

  h5 {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    color: #213f7d;
  }

  p {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #545f7d;
  }

  @media screen and (max-width: 1200px) {
    P,
    h5 {
      text-align: center;
    }
  }
`;

const Menu = styled("ul")`
  margin-top: 51px;
  display: flex;
  justify-content: space-between;

  a {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: rgba(0, 0, 0, 0.8);
  }

  .active {
    color: #39cdcc;
    padding-bottom: 10px;
    border-bottom: 2px solid #39cdcc;
  }

  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 15px;
  }
`;

const BasicDetails = ({ userInfo }: { userInfo: IUser }) => {
  return (
    <CardWrap>
      <CardContent>
        <UserInfo flexDirection={{ xs: "column", lg: "row" }}>
          <Avatar
            src={userInfo.profile.avatar}
            sx={{ height: "100px", width: "100px" }}
          ></Avatar>
          <Box
            paddingRight={{ lg: "30px" }}
            marginLeft={{ lg: "20px" }}
            borderRight={{ lg: "1px solid #545f7d6c" }}
          >
            <h5>
              {userInfo.profile.firstName} {userInfo.profile.lastName}
            </h5>
            <p>{userInfo.accountNumber}</p>
          </Box>

          <Box
            padding={{ lg: "2px 30px" }}
            borderRight={{ lg: "1px solid #545f7d6c" }}
          >
            <p>User Tier</p>
            <Rating name="simple-controlled" value={2} />
          </Box>

          <Box padding={{ md: "0 30px" }}>
            <h5>N{userInfo.accountBalance}</h5>
            <p>{userInfo.profile.bvn}/Previous Bank</p>
          </Box>
        </UserInfo>

        <Menu>
          <a className="active" href="#">
            General Details
          </a>
          <a href="#">Documents</a>
          <a href="#">Bank Details</a>
          <a href="#">Loans</a>
          <a href="#">Savings</a>
          <a href="#">App and System</a>
        </Menu>
      </CardContent>
    </CardWrap>
  );
};

export default BasicDetails;
