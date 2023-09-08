import './new-order.scss'
import FormControl from '@mui/material/FormControl';
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { PassengerSection } from './passenger-section';
import { useForm } from "react-hook-form";
import { createFormArray, field, useFluentFormArray } from 'react-fluent-form';

export function Ticket() {

    const userRoleConfig = createFormArray()({
        id: field.number(),
        docNo: field.text(),
        docType: field.select(),
    })
        .withInitialArray([
            {
                id: 0,
                docNo: "",
                docType: 0,
            },
        ])
        .withKeyGenerator(item => item.id);

    const { formStates, addForm, resetArray, formArray, removeForm, setInitialArray } = useFluentFormArray(
        userRoleConfig
    );


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

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const form = useForm();
    const { register, handleSubmit, formState: { errors }, setValue, getValues } = form;

    useEffect(() => {
        setValue('flyDate', ``);
        setValue('backDate', ``);
        setValue('bronDate', ``);

    }, [])

    const handleChangeFlyDate = (date) => {
        setValue('flyDate', `${date.$d.toISOString()}`)
    }

    const handleChangeBackDate = (date) => {
        setValue('backDate', `${date.$d.toISOString()}`)
    }

    const handleChangeBronDate = (date) => {
        setValue('bronDate', `${date.$d.toISOString()}`)
    }

    function handleConsole() {
        console.log(formStates.map(state => state.values));
        console.log(getValues());
    }

    const [names, setNames] = useState(['Adult']);

    function addAdult() {
        let newNames = [...names, 'Adult']
        setNames(newNames);
        addForm(
            {
                initialValues: {
                    id: 0,
                    docNo: "",
                    docType: 0,
                }
            }
        );
    }

    const removeAdult = () => {
        let index = names.lastIndexOf('Adult');
        names.splice(index, 1)
        removeForm(index)
    }

    function addChildren() {
        let newNames = [...names, 'Children']
        setNames(newNames);
        addForm(
            {
                initialValues: {
                    id: 0,
                    docNo: "",
                    docType: 0,
                }
            }
        );
    }

    const removeChildren = () => {
        let index = names.lastIndexOf('Children');
        names.splice(index, 1)
        removeForm(index)
    }

    function addBaby() {
        let newNames = [...names, 'Baby']
        setNames(newNames);
        addForm(
            {
                initialValues: {
                    id: 0,
                    docNo: "",
                    docType: 0,
                }
            }
        );
    }

    const removeBaby = () => {
        let index = names.lastIndexOf('Baby');
        names.splice(index, 1)
        removeForm(index)
    }

    const getDataPassenger = (data) => {
        console.log(data)
    }



    return <>
        <div className="pt-2" style={{ borderRadius: ' 10px' }} >
            <div className='row m-0 pt-2 mt-4'>
                <div className="col-lg-5">
                    <div className="field">
                        <label htmlFor='From' > From </label>
                        <TextField
                            id="From"
                            name="From"
                            {...register("from")}
                        />
                    </div>
                </div>

                <div className="col-lg-2 d-flex justify-content-center">
                    <span onClick={handleConsole} className="change-dest-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-left-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                        </svg>
                    </span>

                </div>

                <div className="col-lg-5">
                    <div className="field">
                        <label htmlFor='To' > To </label>
                        <TextField
                            id="To"
                            name="To"
                            {...register("to")}
                        />
                    </div>
                </div>

            </div>

            <div className='row m-0 pt-2 mt-4'>
                <div className="col-lg-3">
                    <div className="field">
                        <label htmlFor='orderNo' > Fly date </label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker onChange={(date) => handleChangeFlyDate(date)} />
                        </LocalizationProvider>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="field">
                        <label htmlFor='orderNo' > Back date </label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker onChange={(date) => handleChangeBackDate(date)} />
                        </LocalizationProvider>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="field">
                        <label htmlFor='' > Services </label>
                        <FormControl fullWidth>
                            <Select  {...register("service")}
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

                <div className="col-md-3">
                    <div className="field">
                        <label htmlFor='' >   Passengers </label>
                        <Button
                            id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            {formArray.length} ticket
                        </Button>
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem className='justify-content-between'>
                                <span className='me-5'>Adults <span style={{ fontSize: '11px' }}>(12+ age)</span></span>
                                <span className='ms-3 menuListSpan'>
                                    <button className='menu-btns me-3' onClick={removeAdult}>-</button>
                                    <span>
                                        {names.filter(dt => dt.toLowerCase() === 'Adult'.toLowerCase()).length}
                                    </span>
                                    <button className='menu-btns ms-3' onClick={addAdult}>+</button>
                                </span>
                            </MenuItem>

                            <MenuItem className='justify-content-between mt-2'>
                                <span className='me-5'>Children <span style={{ fontSize: '11px' }}>(7-12 age)</span></span>
                                <span className='ms-3 menuListSpan'>
                                    <button className='menu-btns me-3' onClick={removeChildren}>-</button>
                                    <span> {names.filter(dt => dt.toLowerCase() === 'Children'.toLowerCase()).length}</span>
                                    <button className='menu-btns ms-3' onClick={addChildren}>+</button>
                                </span>
                            </MenuItem>

                            <MenuItem className='justify-content-between mt-2'>
                                <span className='me-5'>Baby <span style={{ fontSize: '11px' }}>(0-2 age)</span></span>
                                <span className='ms-3 menuListSpan'>
                                    <button className='menu-btns me-3' onClick={removeBaby}>-</button>
                                    <span> {names.filter(dt => dt.toLowerCase() === 'Baby'.toLowerCase()).length} </span>
                                    <button className='menu-btns ms-3' onClick={addBaby}>+</button>
                                </span>
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>

            <div className='row m-0 pt-2 mt-4'>
                <div className="col-lg-1">
                    <div className="field">
                        <Checkbox  {...register("bron")} /> Bron
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="field">
                        <label htmlFor='orderNo' > Bron date </label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker onChange={(date) => handleChangeBronDate(date)} />
                        </LocalizationProvider>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="field">
                        <label htmlFor='' > Notification hour </label>
                        <FormControl fullWidth>
                            <Select {...register("notifyHour")}
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
            </div>

            <div className='row m-0 pt-2 mt-4'>
                {formArray.map((item, index) => (
                    <PassengerSection key={item.key} formItem={item} name={names[index]} getDataPassengers={getDataPassenger} />
                ))}

            </div>

        </div>
    </>
}
