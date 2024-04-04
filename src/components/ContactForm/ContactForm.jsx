import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const ContactSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
    number: Yup.string().min(9, 'Too short!').max(12, 'Too long!').required('Required'),
});

const initialValues = {
    name: '',
    number: '',
};

export default function ContactForm() {
    const usernNameId = useId();
    const numberId = useId();
    const dispatch = useDispatch();

    const handleSubmit = (newContact, actions) => {
        dispatch(addContact(newContact));
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={ContactSchema}
        >
            <Form className={css.form}>
                <div className={css.box}>
                    <label htmlFor={usernNameId} className={css.label}>
                        Name
                    </label>
                    <Field name="name" id={usernNameId} className={css.field} />
                    <ErrorMessage name="name" component="span" className={css.error} />
                </div>
                <div className={css.box}>
                    <label htmlFor={numberId} className={css.label}>
                        Number
                    </label>
                    <Field type="number" name="number" id={numberId} className={css.field} />
                    <ErrorMessage name="number" component="span" className={css.error} />
                </div>
                <button className={css.button} type="submit">
                    Add contact
                </button>
            </Form>
        </Formik>
    );
}
