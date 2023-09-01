import { useCallback, useState } from 'react';
import Header from './layouts/header/header';
import Sidebar from './layouts/sidebar/sidebar';
import './public.scss'

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function Public() {

    const [sideState, setSideState] = useState(true);

    let headerCalling = useCallback((response) => {
        let bool = response;
        setSideState(bool);
    });

    let sideCalling = useCallback((response) => {
        let bool = response;
        setSideState(bool);
    });

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

    return (

        <div className="row m-0" style={{ position: 'relative' }} >
            <div className={sideState ? "p-0 side-cont bg-white" : 'p-0 side-cont bg-white close '} style={{ width: sideState ? '18%' : '0%', transition: '1s' }}>
                <Sidebar update={sideCalling} />
            </div>

            <div className="p-0 m-0 content-cont">
                <div className="p-0 m-0">
                    <Header update={headerCalling} />
                </div>
                <div className="px-4 pt-3">
                    <div className="row m-0">
                        {/* <div className="col-md-3">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DateRangePicker']}>
                                    <DateRangePicker onChange={(e) => setName(e)} localeText={{ start: 'Check-in', end: 'Check-out' }} />
                                </DemoContainer>
                            </LocalizationProvider>

                        </div> */}
                        <div className="col-md-2 mt-2">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
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
                                                <li key={i}>{item.name}</li>
                                            </MenuItem>
                                        );
                                    })}

                                </Select>
                            </FormControl>


                        </div>
                        <button onClick={submit}>
                            SAve
                        </button>
                    </div>
                </div>

            </div >
        </div>
    );
}

export default Public;