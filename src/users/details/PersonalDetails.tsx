import { Box, Card, CardContent, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { IUser } from "users/types";

const CardWrap = styled(Card)`
  min-height: 910px;
  background: #ffffff;
  border: 1px solid rgba(33, 63, 125, 0.06);
  box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  margin-top: 30px;

  h5 {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #213f7d;
    margin-bottom: 30px;
    text-transform: uppercase;
  }

  h6 {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;
    color: #545f7d;
  }

  p {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #545f7d;
    word-wrap: break-word;
  }
`;

const HR = styled("hr")`
  margin: 30px;
  border: 1px solid #213f7d;
  opacity: 0.1;
  height: 1px;
`;

const PersonalDetails = ({ userInfo }: { userInfo: IUser }) => {
  return (
    <CardWrap>
      {/* PERSONAL DETAILS */}
      <CardContent sx={{ marginLeft: "10px" }}>
        <h5>Personal Information</h5>
        <Grid container direction="column">
          <Box
            flexDirection={{ xs: "column", lg: "row" }}
            gap={{ xs: "15px", lg: "0" }}
            display="flex"
            justifyContent="space-between"
          >
            <Grid item xs={12} lg={2}>
              <h6>FULL NAME</h6>
              <p>
                {userInfo.profile.firstName} {userInfo.profile.lastName}
              </p>
            </Grid>

            <Grid item xs={12} lg={2}>
              <h6>Phone Number</h6>
              <p>{userInfo.profile.phoneNumber}</p>
            </Grid>

            <Grid item xs={12} lg={2}>
              <h6>Email Address</h6>
              <p>{userInfo.email}</p>
            </Grid>

            <Grid xs={12} lg={2} item>
              <h6>BVN</h6>
              <p>{userInfo.profile.bvn}</p>
            </Grid>

            <Grid item xs={12} lg={2}>
              <h6>Gender</h6>
              <p>{userInfo.profile.gender}</p>
            </Grid>
          </Box>

          <Box
            flexDirection={{ xs: "column", lg: "row" }}
            gap={{ xs: "15px", lg: "0" }}
            display="flex"
            marginTop={{ xs: "15px", lg: "30px" }}
          >
            <Grid item xs={12} lg={2} marginRight={{ lg: "100px" }}>
              <h6>MARITAL STATUS</h6>
              <p>Single</p>
            </Grid>

            <Grid xs={12} lg={2} item marginRight="100px">
              <h6>Children</h6>
              <p>None</p>
            </Grid>

            <Grid item xs={12} lg={2} marginRight="100px">
              <h6>Types of Resident</h6>
              <p>Parents Apartment</p>
            </Grid>
          </Box>
        </Grid>
      </CardContent>

      <HR />

      {/* EDUCATION */}
      <CardContent sx={{ marginLeft: "10px" }}>
        <h5>Education and Employment</h5>
        <Grid container direction="column">
          <Box
            flexDirection={{ xs: "column", lg: "row" }}
            gap={{ xs: "15px", lg: "0" }}
            display="flex"
            justifyContent="space-between"
          >
            <Grid item md={2}>
              <h6>LEVEL OF EDUCATION</h6>
              <p>{userInfo.education.level}</p>
            </Grid>

            <Grid item md={2}>
              <h6>EMPLOYMENT STATUS</h6>
              <p>{userInfo.education.employmentStatus}</p>
            </Grid>

            <Grid item md={2}>
              <h6>SECTOR OF EMPLOYMENT</h6>
              <p>{userInfo.education.sector}</p>
            </Grid>

            <Grid md={2} item>
              <h6>DURATION OF EMPLOYMENT</h6>
              <p>{userInfo.education.duration}</p>
            </Grid>
          </Box>

          <Box
            flexDirection={{ xs: "column", lg: "row" }}
            gap={{ xs: "15px", lg: "0" }}
            display="flex"
            marginTop={{ xs: "15px", lg: "30px" }}
          >
            <Grid item marginRight="100px">
              <h6>OFFICIAL EMAIL</h6>
              <p>{userInfo.education.officeEmail}</p>
            </Grid>

            <Grid item marginRight="100px">
              <h6>MONTHLY INCOME</h6>
              <p>
                N{userInfo.education.monthlyIncome[0]} - N
                {userInfo.education.monthlyIncome[1]}
              </p>
            </Grid>

            <Grid item marginRight="100px">
              <h6>LOAN REPAYMENT</h6>
              <p>{userInfo.education.loanRepayment}</p>
            </Grid>
          </Box>
        </Grid>
      </CardContent>

      <HR />

      {/* SOCIAL */}
      <CardContent sx={{ marginLeft: "10px" }}>
        <h5>Socials</h5>
        <Grid container direction="column">
          <Box
            flexDirection={{ xs: "column", lg: "row" }}
            gap={{ xs: "15px", lg: "0" }}
            display="flex"
            justifyContent="space-between"
          >
            <Grid item md={2}>
              <h6>TWITTER</h6>
              <p>{userInfo.socials.twitter}</p>
            </Grid>

            <Grid item md={2}>
              <h6>FACEBOOK</h6>
              <p>{userInfo.socials.facebook}</p>
            </Grid>

            <Grid item md={2}>
              <h6>INSTAGRAM</h6>
              <p>{userInfo.socials.instagram}</p>
            </Grid>
          </Box>
        </Grid>
      </CardContent>

      <HR />

      {/* GAURANTOR */}
      <CardContent sx={{ marginLeft: "10px" }}>
        <h5>Guarantor</h5>
        <Grid container direction="column">
          <Box
            flexDirection={{ xs: "column", lg: "row" }}
            gap={{ xs: "15px", lg: "0" }}
            display="flex"
            justifyContent="space-between"
          >
            <Grid item md={2}>
              <h6>Full Name</h6>
              <p>
                {userInfo.guarantor.firstName} {userInfo.guarantor.lastName}
              </p>
            </Grid>

            <Grid item md={2}>
              <h6>Phone Number</h6>
              <p>{userInfo.guarantor.phoneNumber}</p>
            </Grid>

            <Grid item md={2}>
              <h6>ADDRESS</h6>
              <p>{userInfo.guarantor.address}</p>
            </Grid>

            <Grid md={2} item>
              <h6>GENDER</h6>
              <p>{userInfo.guarantor.gender}</p>
            </Grid>
          </Box>
        </Grid>
      </CardContent>
    </CardWrap>
  );
};

export default PersonalDetails;
