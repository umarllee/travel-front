import './order.scss'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useCallback, useState, useEffect } from 'react';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

import {
  Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField
} from '@mui/material';
import ReactPaginate from 'react-paginate';
import Pagination from '../../layouts/pagination/pagination';

function Order() {

  const [name, setName] = useState("");

  function submit() {
    console.log(name[0].$d)
    console.log(name[1].$d)
  }

  const [age, setAge] = useState('');

  const filterList = [
    {
      value: 0,
      name: 'All'
    },
    {
      value: 1,
      name: 'Active'
    },
    {
      value: 2,
      name: 'Deactive'
    },
  ]

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  const sampleData = [
    { id: 1, name: 'John Doe  ', age: 30, surname: 'Jane Smith', date: 25, lname: 'Jane Smith', aage: 25, ssurname: 'Jane Smith', ddate: 25 },
    { id: 2, name: 'Jane Smith', age: 25, surname: 'Jane Smith', date: 25, lname: 'Jane Smith', aage: 25, ssurname: 'Jane Smith', ddate: 25 },
    { id: 2, name: 'Jane Smith', age: 25, surname: 'Jane Smith', date: 25, lname: 'Jane Smith', aage: 25, ssurname: 'Jane Smith', ddate: 25 },
    { id: 2, name: 'Jane Smith', age: 25, surname: 'Jane Smith', date: 25, lname: 'Jane Smith', aage: 25, ssurname: 'Jane Smith', ddate: 25 },
    { id: 2, name: 'Jane Smith', age: 25, surname: 'Jane Smith', date: 25, lname: 'Jane Smith', aage: 25, ssurname: 'Jane Smith', ddate: 25 },
    { id: 2, name: 'Jane Smith', age: 25, surname: 'Jane Smith', date: 25, lname: 'Jane Smith', aage: 25, ssurname: 'Jane Smith', ddate: 25 },
    { id: 2, name: 'Jane Smith', age: 25, surname: 'Jane Smith', date: 25, lname: 'Jane Smith', aage: 25, ssurname: 'Jane Smith', ddate: 25 },
    { id: 2, name: 'Jane Smith', age: 25, surname: 'Jane Smith', date: 25, lname: 'Jane Smith', aage: 25, ssurname: 'Jane Smith', ddate: 25 },
    { id: 2, name: 'Jane Smith', age: 25, surname: 'Jane Smith', date: 25, lname: 'Jane Smith', aage: 25, ssurname: 'Jane Smith', ddate: 25 },
    { id: 2, name: 'Jane Smith', age: 25, surname: 'Jane Smith', date: 25, lname: 'Jane Smith', aage: 25, ssurname: 'Jane Smith', ddate: 25 },
    { id: 2, name: 'Jane Smith', age: 25, surname: 'Jane Smith', date: 25, lname: 'Jane Smith', aage: 25, ssurname: 'Jane Smith', ddate: 25 },
    { id: 2, name: 'Jane Smith', age: 25, surname: 'Jane Smith', date: 25, lname: 'Jane Smith', aage: 25, ssurname: 'Jane Smith', ddate: 25 },
    // Add more data hered
  ];

  const itemsPerPage = 11; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const tableData = sampleData.slice(startIndex, endIndex);
    setCurrentData(tableData);
  }, [currentPage]);

  let navigate = useNavigate();
  function handleOpenAdd() {
    navigate('add');
  }


  return (
    <div className='page'>
      <div className="row m-0">
        <div className="col-sm-6 row m-0 height" >
          <div className="col-md-5 label-date">
            <div className="field ">
              <label htmlFor='' > Date </label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateRangePicker']}>
                  <DateRangePicker onChange={(e) => setName(e)} localeText={{ start: '', end: '' }} />
                </DemoContainer>
              </LocalizationProvider>
            </div>
          </div>

          <div className="col-md-3 mt-2 ">
            <div className="field">
              <label htmlFor='' > Age </label>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  {filterList.map((item, i) => {
                    return (
                      <MenuItem key={i} value={item.value}>
                        <div key={i}>{item.name}</div>
                      </MenuItem>
                    );
                  })}

                </Select>
              </FormControl>
            </div>
          </div>

          <div className="col-md-2 mt-2 field">
            <Button variant="contained">Bron</Button>
          </div>

          <div className="col-lg-1 mt-2 field">
            <Button variant="contained" sx={{ padding: '6px 0px', minWidth: '40px' }}>X</Button>
          </div>
        </div>


        <div className="col-sm-6 row m-0 justify-content-end operation-btns">
          <div className="col-lg-1 mx-1 mt-2 p-0 field">
            <Button onClick={handleOpenAdd} variant="contained" sx={{ padding: '6px 0px', minWidth: '40px', backgroundColor: '#FF725E' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
              </svg>
            </Button>
          </div>
          <div className="col-lg-1 mx-1 mt-2 p-0 field">
            <Button variant="contained" sx={{ padding: '6px 0px', minWidth: '40px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
              </svg>
            </Button>
          </div>
          <div className="col-lg-1 mx-1 mt-2 p-0 field">
            <Button variant="contained" sx={{ padding: '6px 0px', minWidth: '40px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" className="bi bi-file-earmark-plus">
                <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"></path>
                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"></path>
              </svg>
            </Button>
          </div>
          <div className="col-lg-1 mt-2 mx-1 p-0 field">
            <Button variant="contained" sx={{ padding: '6px 0px', minWidth: '40px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" className="bi bi-download">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <div className="row m-0 px-2">
        <TableContent data={currentData} />
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(sampleData.length / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      </div>


    </div>
  );
}

const TableContent = (data) => {

  const [filters, setFilters] = useState({});

  const handleFilterChange = (column) => (event) => {
    setFilters({
      ...filters,
      [column]: event.target.value,
    });
  };

  const filteredData = data.data.filter((row) => {
    for (let column in filters) {
      if (!row[column].toString().toLowerCase().includes(filters[column].toString().toLowerCase())) return false;
    }
    return true;
  });


  let dataColumn = Object.keys(data.data[0] ? data.data[0] : ['data']);

  const columns = dataColumn;


  return (

    <div className="row m-0">
      <div className="col-lg-12 p-0 table-container smallRow ">
        <table className='m-0 mb-1'>
          <thead>
            <tr>
              <th colSpan={4}></th>
              <th colSpan={2}>Airway</th>
              <th colSpan={2}>Hotel</th>
              <th ></th>
            </tr>
            <tr>
              {columns.map((column, i) =>
                column != 'id' ? <th key={i}>
                  <div className="field">
                    <TextField
                      fullWidth
                      variant="outlined"
                      size="small"
                      placeholder={`${column}`}
                      onChange={handleFilterChange(column)}
                    />
                  </div>
                </th> : <th> <div className="field">Status</div> </th>
              )}
            </tr>
          </thead>
          <tbody>

            {filteredData.map((row, index) => (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.surname}</td>
                <td>{row.date}</td>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.surname}</td>
                <td>{row.date}</td>

                {
                  // Object.values(row).map(dt => {
                  //   <td>
                  //     {dt}
                  //   </td>
                  // })
                }
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
};



export default Order;