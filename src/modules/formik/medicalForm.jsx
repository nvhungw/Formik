import React from 'react'
import { Formik } from 'formik';
import validateMedicalForm from './validateMedicalForm';


const MedicalForm = () => {

    const handleFormSubmit = () => alert(JSON.stringify('Sent successfully'))

    return (
        <Formik
            initialValues={{
                name: '',
                cmnd: '',
                year: '',
                gender: 'male',
                bhyt: '',
                country: '',
                company: '',
                department: '',
                province: '',
                district: '',
                village: '',
                street: '',
            }}
            // validateOnBlur={false}
            onSubmit={handleFormSubmit}
            validationSchema={validateMedicalForm}
        >
            {({ handleChange, handleSubmit, errors, values, handleBlur, setFieldValue }) => (
                <>
                    <h1>Khai báo y tế</h1>
                    <div>
                        <p>Họ tên</p>
                        <input type="text" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
                        {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
                    </div>
                    <div>
                        <p>CMND</p>
                        <input type="number" name="cmnd" onChange={handleChange} onBlur={handleBlur} value={values.cmnd} />
                        {errors.cmnd && <p style={{color: 'red'}}>{errors.cmnd}</p>}
                    </div>
                    <div>
                        <p>Năm sinh</p>
                        <input type="text" name="year" onChange={handleChange} onBlur={handleBlur} value={values.year} />
                        {errors.year && <p style={{color: 'red'}}>{errors.year}</p>}  
                    </div>
                    <div>
                        <input type='radio' onChange={handleChange} name="gender" value="male"   defaultChecked={values.gender === 'male'} />Male
                        <input type='radio' onChange={handleChange} name="gender" value="female" defaultChecked={values.gender === 'female'}/>Female
                    </div>
                    <div>
                        <p>Quốc tịch</p>
                        <input type="text" name="country" onChange={handleChange} onBlur={handleBlur} value={values.country} />
                        {errors.country && <p style={{color: 'red'}}>{errors.country}</p>}
                    </div>
                    <div>
                        <p>Công ty làm việc</p>
                        <input type="text" name="company" onChange={handleChange} onBlur={handleBlur} value={values.company} />
                    </div>
                    <div>
                        <p>Bộ phận làm việc</p>
                        <input type="text" name="department" onChange={handleChange} onBlur={handleBlur} value={values.department} />
                    </div>
                    <div>
                        <label>Có thẻ bảo hiểm y tế</label>
                        <input type='checkbox' name="bhyt" value="bhyt" onChange={handleChange} />
                    </div>

                    <h4>Địa chỉ liên lạc tại Việt Nam</h4>

                    <div>
                        <p>Tỉnh thành</p>
                        <input type="text" name="province" onChange={handleChange} onBlur={handleBlur} value={values.province} />
                        {errors.province && <p style={{color: 'red'}}>{errors.province}</p>}
                    </div>
                    <div>
                        <p>Quận / huyện</p>
                        <input type="text" name="district" onChange={handleChange} onBlur={handleBlur} value={values.district} />
                        {errors.district && <p style={{color: 'red'}}>{errors.district}</p>}
                    </div>
                    <div>
                        <p>Phường / xã</p>
                        <input type="text" name="village" onChange={handleChange} onBlur={handleBlur} value={values.village} />
                        {errors.village && <p style={{color: 'red'}}>{errors.village}</p>}
                    </div>
                    <div>
                        <p>Số nhà</p>
                        <input type="text" name="street" onChange={handleChange} onBlur={handleBlur} value={values.street} />
                        {errors.street && <p style={{color: 'red'}}>{errors.street}</p>}
                    </div>
                    <div>
                        <p>Điện thoại</p>
                        <input type="text" name="phone" onChange={handleChange} onBlur={handleBlur} value={values.phone} />
                        {errors.phone && <p style={{color: 'red'}}>{errors.phone}</p>}
                    </div>
                    <div>
                        <p>Email</p>
                        <input type="text" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                        {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
                    </div>

            
                    <button type='button' onClick={handleSubmit}>Submit</button>
                </>
            )}

        </Formik>
    )
}

export default MedicalForm