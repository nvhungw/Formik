import React from 'react'
import { Formik } from 'formik';
import validateMailForm from './validateMailForm';

const MailForm = () => {

    const handleFormSubmit = () => alert(JSON.stringify('Sent successfully'))


    return (
        <Formik
            initialValues={{
                to: '',
                title: '',
                message: '',
                file: null

            }}
            validateOnBlur={false}
            onSubmit={handleFormSubmit}
            validationSchema={validateMailForm}
        >
            {({ handleChange, handleSubmit, errors, values, handleBlur, setFieldValue }) => (
                <>
                    <h1>Mail Form</h1>
                    <div>
                        <label htmlFor="">To</label>
                        <input type="text" name="to" onChange={handleChange} onBlur={handleBlur} value={values.to} />
                        {errors.to && <p>{errors.to}</p>}
                    </div>

                    <div>
                        <label htmlFor="">Title</label>
                        <input type="text" name="title" onChange={handleChange} onBlur={handleBlur} value={values.title} />
                        {errors.title && <p>{errors.title}</p>}
                    </div>

                    <div>
                        <label htmlFor="">Message</label>
                        <input type="text" name="message" onChange={handleChange} value={values.message} />
                        {errors.message && <p>{errors.message}</p>}
                    </div>

                    <div>
                        <input type="file" name="file" onChange={(e) => setFieldValue('file', e.currentTarget.files[0]) } />
                    </div>

                    <button type='button' onClick={handleSubmit}>Submit</button>
                </>
            )}

        </Formik>
    )
}

export default MailForm