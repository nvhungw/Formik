import React from 'react'
import { Formik } from 'formik';
import validateContactForm from './validateRegisterForm';

const ContactForm = () => {

    const handleFormSubmit = (values) => {
        console.log(values)
    }

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                phone: '',
                message: ''

            }}
            validateOnBlur={false}
            onSubmit={handleFormSubmit}
            validationSchema={validateContactForm}
        >
            {({ handleChange, handleSubmit, errors, values, handleBlur }) => (
                <>
                    <h1>Contact Form</h1>
                    <div>
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
                        {errors.name && <p>{errors.name}</p>}
                    </div>

                    <div>
                        <label htmlFor="">Email</label>
                        <input type="text" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                        {errors.email && <p>{errors.email}</p>}
                    </div>

                    <div>
                        <label htmlFor="">Phone</label>
                        <input type="text" name="phone" onChange={handleChange} onBlur={handleBlur} value={values.phone} />
                        {errors.phone && <p>{errors.phone}</p>}
                    </div>

                    <div>
                        <label htmlFor="">Message</label>
                        <input type="text" name="message" onChange={handleChange} value={values.message} />
                    </div>


                    <button type='button' onClick={handleSubmit}>Submit</button>
                </>
            )}

        </Formik>
    )
}

export default ContactForm