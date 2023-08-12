import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import {useAppDispatch, useAppSelector} from "../../bll/store.ts";
import {setRequestStatusAC} from "../../bll/send-form-reducer.ts";



const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const ViewStatusRequest = () => {
    const requestStatus = useAppSelector(state => state.form.requestStatus)
    const dispatch = useAppDispatch()

    const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setRequestStatusAC(null))
    };

    return (
        <Snackbar open={!!requestStatus} autoHideDuration={3000} onClose={handleClose}>
            <Alert
                onClose={handleClose}
                severity={requestStatus === 'success' ? "success" : 'error'}
                sx={{width: '100%'}}
            >
                {requestStatus}
            </Alert>
        </Snackbar>
    );
}