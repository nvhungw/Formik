import * as yup from 'yup'
import validate from '../../utils/validation'

const validateMedicalForm = validate({
  email: yup.string().required().email().matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
  name: yup.string().required(),
  cmnd: yup.string().required(),
  year: yup.date().required(),
  country: yup.string().required(),
  province: yup.string().required(),
  district: yup.string().required(),
  village: yup.string().required(),
  street: yup.string().required(),
  email: yup.string().required().email().matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
  phone: yup.string().required().max(10).min(10),

})

export default validateMedicalForm