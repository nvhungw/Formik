import * as yup from 'yup'
import validate from '../../utils/validation'

const validateRegisterForm = validate({
  name: yup.string().required(),
  email: yup.string().required().email().matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
  phone: yup.string().required().max(10).min(10)
})

export default validateRegisterForm