import * as React from 'react';
// date-fns
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export default function BasicDatePicker({ sendDate }) {
    const [value, setValue] = React.useState(null);

    //   send date value to spotDetails
    sendDate(value)


    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="book date"
                value={value}
                disablePast
                clearable={true}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}