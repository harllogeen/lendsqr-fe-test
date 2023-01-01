import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import FilterListIcon from "@mui/icons-material/FilterList";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/system";
import { Pagination, Popover, TablePagination } from "@mui/material";
import FilterBox from "./FilterBox";
import PopoverCard from "./PopoverCard";
import { useNavigate } from "react-router-dom";
import { IUser, Status } from "./types";


const PaginationBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  .MuiTablePagination-selectIcon {
    color: #213f7d;
  }

  .MuiTablePagination-selectLabel {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #545f7d;
  }

  .MuiTablePagination-displayedRows {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #545f7d;
  }

  .MuiTablePagination-select {
    color: #213f7d;
    font-size: 14px;
    font-weight: 500;
    width: 50px;
    background: rgba(33, 63, 125, 0.1);
    border-radius: 4px;
  }

  .MuiTablePagination-actions {
    display: none;
  }
`;

const CellBox = styled(Box)`
  display: flex;
  font-weight: 600;
  font-size: 12px;
  color: #545f7d;
  align-items: center;
  width: 150px;
  cursor: pointer;

  .MuiSvgIcon-root {
    margin-left: 10px;
  }
`;

interface IUserTableProps {
    users: IUser[];
}

const STATUS_BG_COLORS: Record<Status, string>  = {
    active: '#f3fcf6',
    inactive:'#F5F5F7',
    blacklisted:'#FCE6EB',
    pending:'#FDF7E5',
}

const STATUS_TEXT_COLORS: Record<Status, string>  = {
    active: '#52cc74',
    inactive:'#545F7D',
    blacklisted:' #E4033B',
    pending:'#E9B200',
}

const STATUS_LABEL: Record<Status, string> = {
    active:'Active',
    inactive:'Inactive',
    blacklisted: 'Blacklisted',
    pending: 'Pending'
}

export default function UserTable( { users} :IUserTableProps ) {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [anchorEl, setAncholEl] = useState<HTMLElement | null>();
  const [cardPopover, setCardPopover] = useState<HTMLElement | null>();
  const [visibleUserData, setVisibleUserData] = useState<IUser[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string>();

  useEffect(()=>{
    setVisibleUserData(users);
  },[users]);

  const handleClick = (e:React.MouseEvent<HTMLElement>) => {
    setAncholEl(e.currentTarget);
  };

  const handleClose = () => {
    setAncholEl(null);
  };

  const open = Boolean(anchorEl);
  const openCardPopover = Boolean(cardPopover);
  const id = open ? "filter-popover" : undefined;
  const popCard = open ? "card-popver" : undefined;

  const handleChangePage = (_:any, newPage:number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filter = (userInput: Record<string, string | number>) => {
    setAncholEl(null);
    const filtered = [...users].filter((item) => {
      const keys = Object.keys(userInput).filter((k) => userInput[k]);
      return keys.every((k) => {
        const value = (item[k as keyof IUser] as string).toLowerCase()
        const search = (userInput[k] as string).toLowerCase();
        const strictKeys =  ["status"]
        if(strictKeys.includes(k)){
            return value === search;
        }
        return value.includes(search);
      }
      );
    });
    setVisibleUserData(filtered);
  };

  const clearFilter = ()=>{
    setAncholEl(null);
    setVisibleUserData(users);
  }

  const navigate = useNavigate();
  
  const navigateToDetailsPage = (userId: string) => {
    navigate(`/dashboard/users/details/${userId}`);
  };

  return (
    <>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" data-testid="user-table">
        <TableHead>
          <TableRow>
            <TableCell aria-describedby={id} onClick={handleClick} align="left">
              <CellBox>
                ORGANIZATION <FilterListIcon />
              </CellBox>
            </TableCell>
            <TableCell align="left" aria-describedby={id} onClick={handleClick}>
              <CellBox>
                USER NAME <FilterListIcon />
              </CellBox>
            </TableCell>
            <TableCell align="left" aria-describedby={id} onClick={handleClick}>
              <CellBox>
                EMAIL <FilterListIcon />
              </CellBox>
            </TableCell>
            <TableCell align="left" aria-describedby={id} onClick={handleClick}>
              <CellBox>
                PHONE NUMBER <FilterListIcon />
              </CellBox>
            </TableCell>
            <TableCell align="left" aria-describedby={id} onClick={handleClick}>
              <CellBox>
                DATE JOINED <FilterListIcon />
              </CellBox>
            </TableCell>
            <TableCell align="left" aria-describedby={id} onClick={handleClick}>
              <Box
                sx={{
                  display: "flex",
                  fontWeight: "600",
                  fontSize: "12px",
                  color: " #545F7D",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                STATUS <FilterListIcon sx={{ marginLeft: "10px" }} />
              </Box>
            </TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? visibleUserData.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : users
          ).map((row) => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.orgName}</TableCell>
              <TableCell
                sx={{ cursor: "pointer" }}
                align="left"
                onClick={() => navigateToDetailsPage(row.id)}
              >
                {row.userName}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.profile.phoneNumber}</TableCell>
              <TableCell align="left">{row.createdAt}</TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                <Box
                  sx={{
                    backgroundColor: STATUS_BG_COLORS[row.status],
                    color: STATUS_TEXT_COLORS[row.status],
                    borderRadius: "100vw",
                    fontWeight:"700",
                    padding: "5px",
                    diplay: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {STATUS_LABEL[row.status]}
                </Box>
              </TableCell>

              <TableCell
                aria-describedby={popCard}
                onClick={(e) => {
                  setCardPopover(e.currentTarget)
                  setSelectedUserId(row.id)
                }}
                align="left"
                data-testid='more-cell'
                sx={{ cursor: "pointer" }}
              >
                <MoreVertIcon />
              </TableCell>
            </TableRow>
          ))}

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorPosition={{ top: 30, left: 20 }}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          >
            <FilterBox onClearFilter={clearFilter} onFiltered={filter} data={users} />
          </Popover>

          <Popover
            id={popCard}
            open={openCardPopover}
            anchorEl={cardPopover}
            onClose={() => setCardPopover(null)}
            anchorPosition={{ top: 10, left: 10 }}
            anchorOrigin={{ vertical: "center", horizontal: "center" }}
          >
            <PopoverCard userId={selectedUserId!} />
          </Popover>
        </TableBody>
      </Table>

      <PaginationBox>
        <TablePagination
          rowsPerPageOptions={[20, 40, 60, 80, 100]}
          labelRowsPerPage={"Showing"}
          labelDisplayedRows={({ count }) => `out of ${count}`}
          count={visibleUserData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: { "aria-label": "Showing" },
            native: true,
          }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />

        <Pagination
          sx={{ marginRight: "30px" }}
          onChange={(_, page) => {
            setPage(page - 1);
          }}
          count={Math.ceil(visibleUserData.length / rowsPerPage)}
          shape="rounded"
        />
      </PaginationBox>

      
    </>
  );
}
