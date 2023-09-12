import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useForm } from 'react-hook-form';
import { useFluentFormItem } from 'react-fluent-form';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const variants = [
    {
        id: 3,
        name: 'Voucher',
        slug: 'voucher',
        type: 'Main',
        locale: 'en',
        created_at: '2021-11-15T08:27:23.000Z',
        updated_at: '2021-11-15T08:27:23.000Z',
        cover: null,
    },
    {
        id: 1,
        name: 'Top Up',
        slug: 'top-up',
        type: 'Main',
        locale: 'en',
        created_at: '2021-11-15T08:26:44.000Z',
        updated_at: '2021-11-15T08:26:44.000Z',
        cover: null,
    },
    {
        id: 2,
        name: 'Game Key',
        slug: 'game-key',
        type: 'Main',
        locale: 'en',
        created_at: '2021-11-15T08:27:03.000Z',
        updated_at: '2021-11-15T08:27:03.000Z',
        cover: null,
    }
];


export function HotelSection({ formItem, name }) {
    const { removeSelf, handleSubmit, fields, values, key } = useFluentFormItem(
        formItem
    );

    const [closeState, setCloseState] = useState(false);

    const handleClose = () => {
        setCloseState(true)
    }

    const handleOpen = () => {
        setCloseState(false);
    }

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

    const setDateBirth = (e) => { values.birthdate = e.$d }
    const setDateDocExp = (e) => { values.docExpdate = e.$d }

    return <>
        <div className="d-flex justify-content-between mt-2 col-lg-12 mx-auto ps-2 tabHeaders">
            <span >
                <svg onClick={removeSelf} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16" className="removePerson me-2 p-1 bi bi-trash3-fill">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"></path>
                </svg>
                {name}:
            </span>

            <span className="me-3">
                {closeState ?
                    <svg onClick={handleOpen} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="bi bi-chevron-down ng-star-inserted" style={{ cursor: 'pointer' }}>
                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z">
                        </path>
                    </svg>
                    :
                    <svg onClick={handleClose} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="bi bi-chevron-up ng-star-inserted" style={{ cursor: 'pointer' }}>
                        <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"></path>
                    </svg>
                }
            </span>
        </div>


        <div className={closeState ? "closeContainer" : ''} style={{ transition: '2s' }}  >
            <div className='row m-0 pt-2 mt-4'>

                <input {...fields.id} type="number" className='d-none' defaultValue={0} />

                <div className="col-md-3">
                    <div className="field">
                        <label htmlFor='' > Document type </label>
                        <FormControl fullWidth>
                            <Select   {...fields.docType.select}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"

                            >
                                {filterList.map((item, i) => {
                                    return (
                                        <MenuItem {...fields.docType.option(item.value)} key={i} value={item.value}>
                                            <div key={i}>{item.name}</div>
                                        </MenuItem>
                                    );
                                })}

                            </Select>
                        </FormControl>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="field">
                        <label htmlFor='docNo' > Document № </label>
                        <TextField
                            id="docNo"
                            name="docNo"
                            {...fields.docNo}
                        />
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="field">
                        <label htmlFor='Name' > Name </label>
                        <TextField
                            id="Name"
                            name="Name"
                            {...fields.name}
                        />
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="field">
                        <label htmlFor='Surname' > Surname</label>
                        <TextField
                            id="Surname"
                            name="Surname"
                            {...fields.surname}
                        />
                    </div>
                </div>
            </div>

            <div className='row m-0 pt-2 mt-4'>
                <div className="col-md-3">
                    <div className="field">
                        <label htmlFor='' > Gender </label>
                        <FormControl fullWidth>
                            <Select  {...fields.gender.select}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                            >
                                {filterList.map((item, i) => {
                                    return (
                                        <MenuItem {...fields.gender.option(item.value)} key={i} value={item.value}>
                                            <div key={i}>{item.name}</div>
                                        </MenuItem>
                                    );
                                })}

                            </Select>
                        </FormControl>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="field">
                        <label htmlFor='orderNo' > Birth date </label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker onChange={(e) => setDateBirth(e)} />
                        </LocalizationProvider>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="field">
                        <label htmlFor='Name' > Document country </label>
                        <TextField
                            id="Name"
                            name="Name"
                            {...fields.docCountry}
                        />
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="field">
                        <label htmlFor='Surname' > Document expire date</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker onChange={(e) => setDateDocExp(e)} />
                        </LocalizationProvider>
                    </div>
                </div>
            </div>

            <div className='row m-0 pt-2 mt-4'>
                <div className="col-md-3 simleDocument">
                    <div className="field">
                        <label htmlFor='' > Document </label>
                        <input id="fileContract" name="fileContract" title="" type="file" aria-label="0.0" className="selectfileInputPay" />
                        <input type="text" readOnly="" />

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="uploadFile bi bi-upload">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path><path _ngcontent-cjk-c143="" d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>

        </div>
    </>

}