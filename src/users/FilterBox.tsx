import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

const FilterWrap = styled(Box)`
  width: 270px;
  height: 600px;
  background: #ffffff;
  border: 1px solid rgba(84, 95, 125, 0.14);
  box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 30px 20px;
`;

const Form = styled("form")`
  .input-box {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 20px;
  }

  input,
  select {
    outline: none;
    width: 230px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #21407d3e;
    border-radius: 8px;
    padding: 5px;
  }

  button {
    width: 98px;
    height: 40px;
    border-radius: 8px;
    box-shadow: none;
    font-family: "Work Sans";
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    text-align: center;
    margin-top: 30px;
  }

  button:hover {
    background-color: #39cdcc;
    border: none;
    box-shadow: none;
    color: white;
  }
`;

interface IFilterBox {
  data: { orgName: string }[];
  onFiltered: (filter: Record<string, string | number>) => void;
  onClearFilter: Function;
}

const FilterBox = ({ data, onFiltered, onClearFilter }: IFilterBox) => {
  const [selectFilter, setSelectFilter] =
    useState<Record<string, string | number>>();

  const onInputChanged = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = e.target;
    setSelectFilter({ ...selectFilter, [name]: value });
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    selectFilter && onFiltered(selectFilter);
  };

  return (
    <FilterWrap data-testid="filter-box">
      <Form onSubmit={onSubmitForm}>
        <Box className="input-box">
          <label>Organization</label>
          <select
            onChange={onInputChanged}
            name="orgName"
            data-testid="filter-input-organization"
          >
            <option value="">Organization</option>
            {data.map((item) => {
              return <option key={item.orgName}>{item.orgName}</option>;
            })}
          </select>
        </Box>

        <Box className="input-box">
          <label>Username</label>
          <input
            data-testid="filter-input-userName"
            name="userName"
            onChange={onInputChanged}
            placeholder="Username"
            type="text"
          />
        </Box>

        <Box className="input-box">
          <label>Email</label>
          <input
            data-testid="filter-input-email"
            name="email"
            onChange={onInputChanged}
            placeholder="Email"
            type="email"
          />
        </Box>

        <Box className="input-box">
          <label>Date</label>
          <input
            data-testid="filter-input-createdAt"
            name="createdAt"
            onChange={onInputChanged}
            placeholder="Date"
            type="text"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />
        </Box>

        <Box className="input-box">
          <label>Status</label>
          <select
            name="status"
            onChange={onInputChanged}
            data-testid="filter-input-status"
          >
            <option value="">-</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Pending</option>
            <option>Blacklisted</option>
          </select>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", gap: "14px" }}>
          <Button
            type="reset"
            variant="outlined"
            onClick={() => onClearFilter()}
            sx={{ borderRadius: "1px solid #545F7D" }}
          >
            Reset
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{
              background: "var(--primary)",
              borderRadius: "1px solid #39cdcc",
            }}
          >
            Filter
          </Button>
        </Box>
      </Form>
    </FilterWrap>
  );
};

export default FilterBox;
