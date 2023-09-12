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
import { useForm } from "react-hook-form";
import { createFormArray, field, useFluentFormArray } from 'react-fluent-form';

import { forwardRef, useImperativeHandle } from 'react';
import { HotelSection } from './hotel-section';

export const Hotel = forwardRef(function (props, ref) {

    const userRoleConfig = createFormArray()({
        id: field.number(),
        docNo: field.text(),
        name: field.text(),
        surname: field.text(),
        gender: field.select(),
        birthdate: field.date(),
        docType: field.select(),
        docCountry: field.text(),
        docExpdate: field.date(),
    })
        .withInitialArray([
            {
                id: 0,
                docNo: "",
                name: "",
                surname: "",
                docType: 0,
                gender: 0,
                birthdate: new Date(),
                docCountry: "",
                docExpdate: new Date(),
            },
        ])
        .withKeyGenerator(item => item.id);

    const { formStates, addForm, resetArray, formArray, removeForm, setInitialArray } = useFluentFormArray(
        userRoleConfig
    );

    const form = useForm();
    const { register, handleSubmit, formState: { errors }, setValue, getValues } = form;


    useImperativeHandle(
        ref,
        () => {
            return {
                getData: () => {
                    let newModel = { ...getValues(), rooms: formStates.map(state => state.values) };
                    return newModel;
                },
            }
        },
        [],
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

    const handleConsole = () => {
        console.log(getValues())
        console.log(formStates.map(state => state.values))
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        setValue('enterDate', ``);
        setValue('exitDate', ``);
        setValue('bronDate', ``);

    }, [])

    const handleChangeEnterDate = (date) => {
        setValue('enterDate', `${date.$d.toISOString()}`)
    }

    const handleChangeExitDate = (date) => {
        setValue('exitDate', `${date.$d.toISOString()}`)
    }

    const handleChangeBronDate = (date) => {
        setValue('bronDate', `${date.$d.toISOString()}`)
    }

    const [names, setNames] = useState(['Standart Double']);

    function addHotel(name) {

        switch (name) {
            case 'Standart Double':
                {
                    let newNames = [...names, 'Standart Double']
                    setNames(newNames);
                }
                break;
            case 'Deluxe Double':
                {
                    let newNames = [...names, 'Deluxe Double']
                    setNames(newNames);
                }
                break;
            case 'Suite':
                {
                    let newNames = [...names, 'Suite']
                    setNames(newNames);
                }
                break;
            case 'Standart Triple':
                {
                    let newNames = [...names, 'Standart Triple']
                    setNames(newNames);
                }
                break;
            case 'Villa':
                {
                    let newNames = [...names, 'Villa']
                    setNames(newNames);
                }
                break;

            default:
                break;
        }

        addForm(
            {
                initialValues: {
                    id: 0,
                    docNo: "",
                    name: "",
                    surname: "",
                    docType: 0,
                    gender: 0,
                    birthdate: new Date(),
                    docCountry: "",
                    docExpdate: new Date(),
                    additionalServices: [],
                }
            }
        );
    }

    const removeHotel = (name) => {
        let index = names.lastIndexOf(name);
        names.splice(index, 1)
        removeForm(index)
    }

    return <>
        <div className="pt-2" style={{ borderRadius: ' 10px' }} >
            <div className='row m-0 pt-2 mt-4'>
                <div className="col-lg-3">
                    <div className="field">
                        <label htmlFor='From' > Hotel </label>
                        <TextField
                            id="From"
                            name="From"
                            {...register("hotel")}
                        />
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="field">
                        <label htmlFor='orderNo' > Enter date </label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker onChange={(date) => handleChangeEnterDate(date)} />
                        </LocalizationProvider>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="field">
                        <label htmlFor='orderNo' > Exit date </label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker onChange={(date) => handleChangeExitDate(date)} />
                        </LocalizationProvider>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="field">
                        <label htmlFor='From' > Guest count </label>
                        <TextField
                            id="From"
                            name="From"
                            {...register("guestCount")}
                        />
                    </div>
                </div>

            </div>

            <div className='row m-0 pt-2 mt-4'>
                <div className="col-md-3">
                    <div className="field">
                        <label htmlFor='' >   Rooms </label>
                        <Button
                            id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            {formArray.length} room
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
                                <span className='me-5'>Standart Double </span>
                                <span className='ms-3 menuListSpan'>
                                    <button className='menu-btns me-3' onClick={() => removeHotel('Standart Double')}>-</button>
                                    <span>
                                        {names.filter(dt => dt.toLowerCase() === 'Standart Double'.toLowerCase()).length}
                                    </span>
                                    <button className='menu-btns ms-3' onClick={() => addHotel('Standart Double')}>+</button>
                                </span>
                            </MenuItem>

                            <MenuItem className='justify-content-between mt-2'>
                                <span className='me-5'>Deluxe Double </span>
                                <span className='ms-3 menuListSpan'>
                                    <button className='menu-btns me-3' onClick={() => removeHotel('Deluxe Double')}>-</button>
                                    <span> {names.filter(dt => dt.toLowerCase() === 'Deluxe Double'.toLowerCase()).length}</span>
                                    <button className='menu-btns ms-3' onClick={() => addHotel('Deluxe Double')}>+</button>
                                </span>
                            </MenuItem>

                            <MenuItem className='justify-content-between mt-2'>
                                <span className='me-5'>Suite </span>
                                <span className='ms-3 menuListSpan'>
                                    <button className='menu-btns me-3' onClick={() => removeHotel('Suite')}>-</button>
                                    <span> {names.filter(dt => dt.toLowerCase() === 'Suite'.toLowerCase()).length} </span>
                                    <button className='menu-btns ms-3' onClick={() => addHotel('Suite')}>+</button>
                                </span>
                            </MenuItem>
                            <MenuItem className='justify-content-between mt-2'>
                                <span className='me-5'>Standart Triple </span>
                                <span className='ms-3 menuListSpan'>
                                    <button className='menu-btns me-3' onClick={() => removeHotel('Standart Triple')}>-</button>
                                    <span> {names.filter(dt => dt.toLowerCase() === 'Standart Triple'.toLowerCase()).length} </span>
                                    <button className='menu-btns ms-3' onClick={() => addHotel('Standart Triple')}>+</button>
                                </span>
                            </MenuItem>
                            <MenuItem className='justify-content-between mt-2'>
                                <span className='me-5'>Villa </span>
                                <span className='ms-3 menuListSpan'>
                                    <button className='menu-btns me-3' onClick={() => addHotel('Villa')}>-</button>
                                    <span> {names.filter(dt => dt.toLowerCase() === 'Villa'.toLowerCase()).length} </span>
                                    <button className='menu-btns ms-3' onClick={() => addHotel('Villa')}>+</button>
                                </span>
                            </MenuItem>
                        </Menu>
                    </div>
                </div>

                <div className="col-lg-1 p-0">
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
                    <HotelSection key={item.key} formItem={item} name={names[index]} />
                ))}

            </div>

        </div>
    </>
})
