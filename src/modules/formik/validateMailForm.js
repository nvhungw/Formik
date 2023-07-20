import * as yup from 'yup'
import validate from '../../utils/validation'

const validateMailForm = validate({
  to: yup.string().required().email().matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
  title: yup.string().required(),
  message: yup.string().required()

})

export default validateMailForm