import * as yup from 'yup'
import validate from '../../utils/validation'

const validateLibrary = validate({
  title: yup.string().required('Required'),
  quantity: yup.number().required('Required')

})

export default validateLibrary