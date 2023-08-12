import s from './Contact.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Title} from "../../common/commonComponents/Title/Title";
import {useFormik} from "formik";
import CircularProgress from "@mui/material/CircularProgress";
import {Fade} from "react-awesome-reveal";
import {useAppDispatch, useAppSelector} from "../../bll/store.ts";
import {ContactsType} from "../../bll/app-reducer.ts";
import {dataSendEmailType, LoadingType, sendEmailFormTC} from "../../bll/send-form-reducer.ts";



type ErrorsType = {
    name?: string
    email?: string
    message?: string
}

export const Contact = () => {
    const contactData = useAppSelector<ContactsType>(state => state.app.contact)
    const isLoading = useAppSelector<LoadingType>(state => state.form.isLoading)
    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validate: values => {
            const errors: ErrorsType = {};

            if (!values.name) {
                errors.name = 'Required';
            } else if (values.name.length > 20) {
                errors.name = 'Must be 20 characters or less';
            } else if (values.name.length < 1) {
                errors.name = 'Must be more than 3 characters.';
            }

            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.message) {
                errors.message = 'Required';
            }

            return errors;
        },
        onSubmit: (values: dataSendEmailType) => {
            dispatch(sendEmailFormTC(values))
            formik.resetForm()
        },
    })

    return (
        <Fade triggerOnce duration={1500}>
            <div className={s.contactBlock} id={'contact'}>
                <div className={`${styleContainer.container} ${s.container}`}>
                    <Title title={contactData.title} text={contactData.description}/>
                    <form className={s.formBlock} onSubmit={formik.handleSubmit}>

                        <input
                            placeholder="Your Name"
                            type="text"
                            {...formik.getFieldProps('name')}
                        />
                        {formik.touched.name && formik.errors.name &&
                            <div className={s.error}>{formik.errors.name}</div>}

                        <input
                            placeholder="Your E-mail"
                            type="email"
                            {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email &&
                            <div className={s.error}>{formik.errors.email}</div>}

                        <textarea
                            placeholder="Write your message here"
                            {...formik.getFieldProps('message')}
                        />
                        {formik.touched.message && formik.errors.message &&
                            <div className={s.error}>{formik.errors.message}</div>}

                        {isLoading === 'loading' &&
                            <div style={{marginBottom: '10px', top: '40%', textAlign: 'center', width: '100%'}}>
                                <CircularProgress/>
                            </div>
                        }
                        {isLoading !== 'loading' && <input type="submit" value="Submit Now" className={s.btn}/>}
                    </form>
                </div>
            </div>
        </Fade>
    );
};

