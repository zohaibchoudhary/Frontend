import React, { useId } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Input({
    label,
    type = 'text',
    className = '',
    ...props
}, ref) {
    const id = useId()
    return (
    <div className='w-full'>
        <Box
            component="form"
            sx={{
            '& > :not(style)': { m: 1, width: '46ch' },
            }}
            noValidate
            autoComplete="off"
        >
        <TextField 
        type={type}
        label={label}
        ref={ref}
        id={id} 
        className=''
        variant="outlined"
        {...props}
        />
        </Box>

            {/* {label && <label 
            className='' 
            htmlFor={id}>
                {label}
            </label>
            } */}
            {/* <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            /> */}

        </div>
)
}

export default React.forwardRef(Input)