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

export const Hotel = forwardRef(function (props, ref) {

    // const userRoleConfig = createFormArray()({
    //     id: field.number(),
    //     docNo: field.text(),
    //     docType: field.select(),
    // })
    //     .withInitialArray([
    //         {
    //             id: 0,
    //             docNo: "",
    //             docType: 0,
    //         },
    //     ])
    //     .withKeyGenerator(item => item.id);

    // const { formStates, addForm, resetArray, formArray, removeForm, setInitialArray } = useFluentFormArray(
    //     userRoleConfig
    // );

    // const form = useForm();
    // const { register, handleSubmit, formState: { errors }, setValue, getValues } = form;

    const data = 'saalm';

    useImperativeHandle(
        ref,
        () => {
            return {
                getDataHotel: () => data,
            }
        },
        [],
    );

    return <>
        <h1>Hotel works</h1>
    </>
});