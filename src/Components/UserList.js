import React, { useState, useEffect } from "react";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import TextField from "@material-ui/core/TextField";
import DataTable from "react-data-table-component";
import SortIcon from "@material-ui/icons/ArrowDownward";

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
  let [tableData, setTableData] = useState([]);
  let [filtered, setFiltered] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios("https://reqres.in/api/users?page=2", {
      method: "get",
    })
      .then((response) => {
        setTableData(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);
    const handleSearch = (e) => {
      const infos = tableData.filter((data) => {
        if (e.target.value == null) return data
        else if (
          data.first_name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          data.last_name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          data.email.toLowerCase().includes(e.target.value.toLowerCase())
        )
          return data;
      })
      setFiltered(infos);
    };
  return (
    <div className="App">
      <h1 style={{marginLeft:'600px'}}>Users List</h1>
      {isLoading ? (
        <ReactBootStrap.Spinner animation="border" />
      ) : (
        <>
          <TextField
            label="Search"
            variant="outlined"
            onChange={handleSearch}
          />
          <DataTable
            columns={columns}
            data={filtered}
            defaultSortField="First Name"
            sortIcon={<SortIcon />}
            selectableRowsComponentProps={selectableRowsComponentProps}
          />
        </>
      )}
    </div>
  );
}
export default UserList;
