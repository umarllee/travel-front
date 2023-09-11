import './new-order.scss'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useEffect, useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { Ticket } from './ticket';
import { useForm } from "react-hook-form";

import { createFormArray, field, useFluentFormArray } from 'react-fluent-form';
import { useFluentFormItem } from 'react-fluent-form';
import { createStore } from 'redux'

function Order(props) {
    // const [value, setValue] = useState('female');

    // const handleChange = (event) => {
    //     setValue((event.target).value);
    // };

    const form = useForm();

    const { register, handleSubmit, formState: { errors }, getValues, setValue } = form;

    // useEffect(() => {
    //     console.log(getValues());
    // }, [])

    function consoleForm() {
        console.log(getValues())
    }

    const handleChangeDate = (date) => {
        setValue('orderDate', `${date.$d.toISOString()}`)
    }

    return <>
        <div className="mt-2 mb-3 mat-elevation-z3 bg-white px-2 pt-2 pb-3" style={{ borderRadius: ' 10px' }} >
            <p className="fw-bold fs-5 m-0">Sifarişçi</p>
            <div className="mt-2 dashed"></div>

            <div>
                <FormControl className='col-lg-12'>
                    <RadioGroup
                        className='col-lg-12'
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={1}
                        {...register("orderType")}
                    >
                        <div className='row m-0'>
                            <FormControlLabel value="1" className='col-lg-2' control={<Radio />} label="Fiziki sexs" />
                            <FormControlLabel value="2" className='col-lg-2' control={<Radio />} label="Huquqi sexs" />
                        </div>
                    </RadioGroup>
                </FormControl>
            </div>

            <div className='row m-0 pt-2 mt-4'>
                <div className="col-lg-1">
                    <div className="field">
                        <label htmlFor='orderNo' > Order № </label>
                        <TextField
                            id="orderNo"
                            name="orderNo"
                            {...register("orderNo")}
                        />
                    </div>
                </div>

                <div className="col-lg-2">
                    <div className="field">
                        <label htmlFor='orderNo' > Order date </label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker onChange={(date) => handleChangeDate(date)} />
                        </LocalizationProvider>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="field">
                        <label htmlFor='fullname' > Fullname </label>
                        <TextField
                            id="fullname"
                            name="fullname"
                            {...register("fullName")}
                        />
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="field">
                        <label htmlFor='phone' > Phone </label>
                        <TextField
                            id="phone"
                            name="phone"
                            defaultValue='+994'
                            {...register("phone")}
                        />
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="field">
                        <label htmlFor='email' > Email </label>
                        <TextField onClick={consoleForm}
                            type='email'
                            id="email"
                            name="email"
                            {...register("email")}
                        />
                    </div>
                </div>

            </div>
        </div>
    </>
}


function NewOrder() {

    function counterReducer(state = {
        backDate: "",
        to: "",
    }, action) {
        state = action.payload;
        return state
    }

    // Create a Redux store holding the state of your app.
    // Its API is { subscribe, dispatch, getState }.
    let store = createStore(counterReducer)

    // You can use subscribe() to update the UI in response to state changes.
    // Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
    // There may be additional use cases where it's helpful to subscribe as well.




    const [value, setValueTabs] = useState(0);
    const [data, setData] = useState({});

    const handleChange = (event, newValue) => {
        // const childData = actionRef.current?.getData();
        // console.log(childData);
        // store.dispatch({ type: 'ticket', payload: {backDate : "",
        // bron: false,
        // bronDate: "",
        // flyDate: "",
        // from:"",
        // notifyHour: "",
        // passangers: [],
        // service: "",
        // to: "",} })

        setData({
            backDate: "18/09/2023",
            bron: false,
            bronDate: "14/09/2023",
            flyDate: "13/09/2023",
            from: "Baku",
            notifyHour: 2,
            passangers: [],
            service: 2,
            to: "Kanada",
        })

        setValueTabs(newValue);
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    function CustomTabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                className=''
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value == index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    const form = useForm();
    const { register, handleSubmit, formState: { errors }, setValue, getValues } = form;

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

    const actionRef = useRef();
    const onHandleSave = () => {

        console.log(data)
        // const childData = actionRef.current?.getData();
        // console.log(childData);
        // store.subscribe(() => console.log(store.getState()));

        // store.dispatch({  })

        // store.subscribe(() => console.log(store.getState()));
        store.subscribe(() => console.log(store.getState()))

    }

    return <>

        <Order  />

        <div className="mt-2 mb-3 mat-elevation-z3 bg-white px-2 pt-2 pb-3" style={{ borderRadius: ' 10px' }} >
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Ticket" {...a11yProps(0)} />
                        <Tab label="Hotel" {...a11yProps(1)} />
                        <Tab label="Evaluation" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Ticket ref={actionRef} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Item Two
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    Item Three
                </CustomTabPanel>
            </Box>

            <div className="my-3 dashed"></div>

            <div className="row m-0 justify-content-end">
                <button className='saveBtn' style={{ backgroundColor: '#ff553f' }}>Back</button>
                <button className='saveBtn' onClick={onHandleSave}>Save</button>
            </div>
        </div>

    </>
}






export default NewOrder;

