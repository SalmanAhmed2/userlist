import React, { useState, useEffect } from "react";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import DataTable from "react-data-table-component";
import SortIcon from "@material-ui/icons/ArrowDownward";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const columns = [
  {
    name: "First Name",
    selector: "first_name",
    sortable: true,
  },
  {
    name: "Last Name",
    selector: "last_name",
    sortable: true,
  },
  {
    name: "Email",
    selector: "email",
    sortable: true,
    right: true,
  },
];
const isIndeterminate = (indeterminate) => indeterminate;
const selectableRowsComponentProps = { indeterminate: isIndeterminate };

function UserList() {
  const classes = useStyles();
  let [tableData, setTableData] = useState([]);
  let [filtered, setFiltered] = useState([]);
  let [inputval, setInputVal] = useState("");
  let [totalData, setTotalData] = useState(null);
  let [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios(`https://reqres.in/api/users?page=${page}`, {
      method: "get",
    })
      .then((response) => {
        setTotalData(response.data);
        setTableData(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = (e) => {
    const inputvals = e.target.value;
    setInputVal(e.target.value);
    const filterData = tableData.filter((data) => {
      if (inputvals == "") return data;
      else if (
        data.first_name.toLowerCase().includes(inputvals.toLowerCase()) ||
        data.last_name.toLowerCase().includes(inputvals.toLowerCase()) ||
        data.email.toLowerCase().includes(inputvals.toLowerCase())
      )
        return data;
    });
    setFiltered(filterData);
  };
  const handlePagination = (event, value) => {
    setInputVal("");
    setIsLoading(true);
    axios(`https://reqres.in/api/users?page=${value}`, {
      method: "get",
    })
      .then((response) => {
        setPage(response.data.page);
        setTotalData(response.data);
        setTableData(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="usersList">
      <h1>Users List</h1>
      {isLoading ? (
        <ReactBootStrap.Spinner animation="border" />
      ) : (
        <>
          <div className="form">
            <TextField
              label="Search"
              variant="outlined"
              onChange={handleSearch}
            />
            <h2>Users:{totalData.total / totalData.total_pages}</h2>
          </div>
          <DataTable
            columns={columns}
            data={inputval == "" ? tableData : filtered}
            defaultSortField="First Name"
            sortIcon={<SortIcon />}
            selectableRowsComponentProps={selectableRowsComponentProps}
          />
        </>
      )}
      <div className={classes.root}>
        <Pagination
          count={totalData.total_pages}
          size="large"
          onChange={handlePagination}
        />
      </div>
    </div>
  );
}
export default UserList;
