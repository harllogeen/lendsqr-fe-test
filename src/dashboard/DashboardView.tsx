import React, { useState, useEffect, useMemo } from "react";
import { styled } from "@mui/material/styles";
import {
  Grid,
  TableContainer,
  Avatar,
  Box,
  CardContent,
  Card,
  CircularProgress,
} from "@mui/material";
import UserTable from "users/UserTable";
import { parseISO } from "date-fns";
import format from "date-fns/format";
import { IUser, Status } from "users/types";

const TableWrapper = styled(TableContainer)`
  margin-top: 40px;
  background: #ffffff;
  border: 1px solid rgba(33, 63, 125, 0.06);
  box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
`;

const CardWrapper = styled(Card)`
  height: 160px;
  background: #ffffff;
  border: 1px solid rgba(33, 63, 125, 0.06);
  box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
  border-radius: 4px;

  p {
    font-family: "Work Sans";
    font-size: 14px;
    font-weight: 500;
    color: #545f7d;
    margin-bottom: 14px;
    line-height: 16px;
  }

  h5 {
    font-family: "Work Sans";
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #213f7d;
  }
`;

const TWELVE_MONTHS = 12 * 30 * 86400 * 1000;
const Dashboard = () => {
  const [allUserData, setAllUserData] = useState<IUser[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  const getUserData = async () => {
    const response = await fetch(
      "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users",
      {
        method: "GET",
      }
    );
    const data = ((await response.json()) as IUser[]).map((user) => {
      const currentDate = new Date().getTime();
      const lastActiveDate = new Date(user.lastActiveDate).getTime();
      const status: Status =
        currentDate - lastActiveDate > TWELVE_MONTHS ? "inactive" : "active";
      return {
        ...user,
        status,
      };
    });

    const result = data.map((item) => {
      const Date = format(parseISO(item.createdAt), "MMM dd, yyyy");
      const Time = format(parseISO(item.createdAt), "HH:mm aa");

      return { ...item, createdAt: `${Date} ${Time}` };
    });

    return result;
  };

  useEffect(() => {
    getUserData().then((data) => {
      setLoadingData(false);
      setAllUserData(data);
      localStorage.setItem("userData", JSON.stringify(data));
    });
  }, []);

  const stats = useMemo(() => {
    const activeUsersCount = allUserData.filter((user) => {
      const currentDate = new Date().getTime();
      const lastActiveDate = new Date(user.lastActiveDate).getTime();
      return currentDate - lastActiveDate < TWELVE_MONTHS;
    }).length;
    const usersWithLoan = allUserData.filter(
      (user) => Number(user.education.loanRepayment) > 0
    ).length;
    const usersWithSaving = allUserData.filter(
      (user) => Number(user.accountBalance) > 0
    ).length;
    return {
      usersWithLoan,
      activeUsersCount,
      usersWithSaving,
    };
  }, [allUserData]);

  return (
    <React.Fragment>
      {loadingData ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "100px auto",
          }}
        >
          <CircularProgress size={100} thickness={2} />
        </Box>
      ) : (
        <>
          <Grid container width="100%">
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              paddingTop={{ xs: "15px", md: "0" }}
              paddingLeft={1 / 2}
              paddingRight={1 / 2}
            >
              <CardWrapper>
                <CardContent>
                  <Avatar
                    sx={{ marginBottom: "14px" }}
                    alt="Profile"
                    src="/assets/user.svg"
                  />
                  <p>USERS</p>
                  <h5>{allUserData.length}</h5>
                </CardContent>
              </CardWrapper>
            </Grid>

            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              paddingTop={{ xs: "15px", md: "0" }}
              paddingLeft={1 / 2}
              paddingRight={1 / 2}
            >
              <CardWrapper>
                <CardContent>
                  <Avatar
                    sx={{ marginBottom: "14px" }}
                    alt="Profile"
                    src="/assets/user-active.svg"
                  />
                  <p>ACTIVE USERS</p>
                  <h5>{stats.activeUsersCount}</h5>
                </CardContent>
              </CardWrapper>
            </Grid>

            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              paddingTop={{ xs: "15px", md: "0" }}
              paddingLeft={1 / 2}
              paddingRight={1 / 2}
            >
              <CardWrapper>
                <CardContent>
                  <Avatar
                    sx={{ marginBottom: "14px" }}
                    alt="Profile"
                    src="/assets/user-loan.svg"
                  />
                  <p>USER WITH LOAN</p>
                  <h5>{stats.usersWithLoan}</h5>
                </CardContent>
              </CardWrapper>
            </Grid>

            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              paddingTop={{ xs: "15px", md: "0" }}
              paddingLeft={1 / 2}
              paddingRight={1 / 2}
            >
              <CardWrapper>
                <CardContent>
                  <Avatar
                    sx={{ marginBottom: "14px" }}
                    alt="Profile"
                    src="/assets/user-saving.svg"
                  />
                  <p>USERS WITH SAVING </p>
                  <h5>{stats.usersWithSaving}</h5>
                </CardContent>
              </CardWrapper>
            </Grid>
          </Grid>

          <Box>
            <TableWrapper>
              <UserTable users={allUserData} />
            </TableWrapper>
          </Box>
        </>
      )}
    </React.Fragment>
  );
};

export default Dashboard;
