import React from "react";
import { Formik } from 'formik';
import * as z from "zod";
import FormTextareaField from "../fileds/FormTextareaField";
import FormTextField from "../fileds/FormTextField";
import emailjs from '@emailjs/browser';
import { useEmailJS } from "../../hooks/useEmailJS";


const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const ContactObject = z.object({
    email: z.email(),
    first_name: z.string('Invalid input').min(1, "Required"),
    last_name: z.string('Invalid input').min(1, "Required"),
    message: z.string().min(1, "Required"),
});

const initialValues = {
    email: '',
    first_name: '',
    last_name: '',
    message: '',
};

const Contact = () => {
    const { sendEmail } = useEmailJS();

    const openDialog = (type, message) => {
        alert(`${type.toUpperCase()}: ${message}`);
    };

    return <div>
        <h3>Contact Me</h3>
        <Formik
            initialValues={initialValues}
            validate={values => {
                const errors = {};
                try {
                    const contactData = ContactObject.required();
                    contactData.parse(values);
                } catch (error) {
                    if (error instanceof z.ZodError) {
                        error.issues.forEach((err) => {
                            if (err.path[0]) {
                                errors[err.path[0]] = err.message;
                            }
                        });
                    }
                }
                return errors;
            }}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                    await sendEmail({
                        first_name: values.first_name,
                        last_name: values.last_name,
                        email: values.email,
                        message: values.message,
                    });
                    resetForm();
                    openDialog('success', 'Your message has been sent successfully!');
                } catch (error) {
                    console.error('Email send failed', error);
                } finally {
                    setSubmitting(false);
                }
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit} className="form-style">
                    <FormTextField
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        name="email"
                        label="Email"
                        type="email"
                        error={errors.email && touched.email && errors.email}
                    />
                    <FormTextField
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.first_name}
                        name="first_name"
                        label="First Name"
                        error={errors.first_name && touched.first_name && errors.first_name}
                    />
                    <FormTextField
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.last_name}
                        name="last_name"
                        label="Last Name"
                        error={errors.last_name && touched.last_name && errors.last_name}
                    />
                    <FormTextareaField
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                        rows={4}
                        name="message"
                        label="Message"
                        error={errors.message && touched.message && errors.message}
                    />
                    <div className="form-group">
                        <button type="submit" disabled={isSubmitting} className="button" >
                            Submit
                        </button>
                    </div>
                </form>
            )}
        </Formik>
    </div>;
};

export default Contact;
