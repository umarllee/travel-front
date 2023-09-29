import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import './new-order.scss'
import { createFormArray, field, useFluentFormArray } from 'react-fluent-form';


export default function Evaluation() {
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

    const [addServices, setAddServices] = useState([
        {
            id: 0,
            orderId: 0,
            venderId: 0,
            venderService: 0,
            qty: 0,
            venderUnitPrice: 0,
            venderAmount: 0,
            saleUnitPrice: 0,
            saleAmount: 0,
            vat: 0,
            currency: 1,
            currencyRate: 1,
            profit: 0,
            currencyAmount: 0,
            status: true
        }
    ]);

    function addService() {
        let model = {
            id: 0,
            orderId: 0,
            venderId: 0,
            venderService: 0,
            qty: 0,
            venderUnitPrice: 0,
            venderAmount: 0,
            saleUnitPrice: 0,
            saleAmount: 0,
            vat: 0,
            currency: 1,
            currencyRate: 1,
            profit: 0,
            currencyAmount: 0,
            status: true
        }

        let modelArr = [...addServices, model];
        setAddServices(modelArr);
    }

    function removeService(index) {
        // let newArr = [...addServices.filter((item, i) => i !== index)]
        const newArray = [...addServices]; // Make a copy of the original array
        newArray.splice(index, 1);
        console.log(newArray);

        setAddServices(newArray);
    }

    const columns = [
        'Service',
        'Vender',
        'QTY',
        'Purchase Price',
        'Purchase Amount',
        'Sale price',
        'Sale amount',
        'Currency',
        'Rate',
        'AZN',
        'Profit',
        '#',
    ]

    function handleConsole() {
        console.log(addServices)
    }

    return <>
        <div className="row m-0 px-3 evaluation">
            <div className="col-md-2 p-0 my-4 pt-3">
                <div className="field">
                    <label htmlFor='Name' > Template </label>
                    <FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onClick={handleConsole}
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
            <div className="col-lg-12 p-0 table-container smallRow ">
                <table className='m-0 mb-1'>
                    <thead>
                        <tr>
                            {columns.map((column, i) =>
                                column != 'id' ? <th key={i}>
                                    <div className="field">
                                        {column}
                                    </div>
                                </th> : <th> <div className="field">Status</div> </th>
                            )}
                        </tr>
                    </thead>
                    <tbody>

                        {addServices.map((row, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="field">
                                        <FormControl fullWidth>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={addServices[index].venderService}
                                                onChange={(e) => {
                                                    const newArr = [...addServices]
                                                    newArr[index].venderService = e.target.value;
                                                    setAddServices(newArr)
                                                }}
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
                                </td>
                                <td>
                                    <div className="field">
                                        <FormControl fullWidth>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={addServices[index].venderId}
                                                onChange={(e) => {
                                                    const newArr = [...addServices]
                                                    newArr[index].venderId = e.target.value;
                                                    setAddServices(newArr)
                                                }}

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
                                </td>
                                <td>
                                    <div className="field">
                                        {/* <TextField
                                            id="Name"
                                            name="Name"
                                            onkeypress={(event) => {return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)}}
                                            onChange={(e) => addServices[index].qty = e.target.value}
                                        /> */}

                                        <input type="number" value={addServices[index].qty}
                                            onkeypress={(event) => { return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57) }}
                                            onChange={(e) => {
                                                const newArr = [...addServices]
                                                newArr[index].qty = e.target.value;
                                                newArr[index].venderAmount = (Number(newArr[index].venderUnitPrice) * Number(newArr[index].qty));
                                                newArr[index].saleAmount = (Number(newArr[index].saleUnitPrice) * Number(newArr[index].qty));
                                                setAddServices(newArr)
                                            }}
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className="field">
                                        <input type="number" value={addServices[index].venderUnitPrice}
                                            onkeypress={(event) => { return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57) }}
                                            onChange={(e) => {
                                                const newArr = [...addServices]
                                                newArr[index].venderUnitPrice = e.target.value;
                                                newArr[index].venderAmount = (Number(newArr[index].venderUnitPrice) * Number(newArr[index].qty));
                                                setAddServices(newArr)
                                            }}
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className="field">
                                        <input readOnly type="number" value={addServices[index].venderAmount}
                                            onkeypress={(event) => { return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57) }}
                                            onChange={(e) => {
                                                const newArr = [...addServices]
                                                newArr[index].venderAmount = e.target.value;
                                                setAddServices(newArr)
                                            }}
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className="field">
                                        <input type="number" value={addServices[index].saleUnitPrice}
                                            onkeypress={(event) => { return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57) }}
                                            onChange={(e) => {
                                                const newArr = [...addServices]
                                                newArr[index].saleUnitPrice = e.target.value;
                                                newArr[index].saleAmount = (Number(newArr[index].saleUnitPrice) * Number(newArr[index].qty));
                                                setAddServices(newArr);
                                            }}
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className="field">
                                        <input type="number" readOnly value={addServices[index].saleAmount}
                                            onkeypress={(event) => { return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57) }}
                                            onChange={(e) => {
                                                const newArr = [...addServices]
                                                // newArr[index].saleAmount = e.target.value;
                                                setAddServices(newArr)
                                            }}
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className="field">
                                        <FormControl fullWidth>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={addServices[index].currency}
                                                onChange={(e) => {
                                                    const newArr = [...addServices]
                                                    newArr[index].currency = e.target.value;
                                                    setAddServices(newArr)
                                                }}
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
                                </td>

                                <td>
                                    <div className="field">
                                        <input type="number" value={addServices[index].venderService}
                                            onkeypress={(event) => { return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57) }}
                                            onChange={(e) => {
                                                const newArr = [...addServices]
                                                newArr[index].currencyRate = e.target.value;
                                                setAddServices(newArr)
                                            }}
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className="field">
                                        <input type="number" value={addServices[index].currencyAmount}
                                            onkeypress={(event) => { return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57) }}
                                            onChange={(e) => {
                                                const newArr = [...addServices]
                                                newArr[index].currencyAmount = e.target.value;
                                                setAddServices(newArr)
                                            }}
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className="field">
                                        <input type="number" 
                                            onkeypress={(event) => { return event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57) }}
                                            value={addServices[index].profit}
                                            onChange={(e) => {
                                                const newArr = [...addServices]
                                                newArr[index].profit = e.target.value;
                                                setAddServices(newArr)
                                            }}
                                        />
                                    </div>
                                </td>

                                <td>
                                    <div className="field text-center">
                                        <svg onClick={() => removeService(index)} style={{ color: 'red', cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

            <div className="row m-0 my-3 p-0">
                <button className='col-md-1 add-evaluation ' onClick={addService}>
                    Add +
                </button>
            </div>
        </div>
    </>

}