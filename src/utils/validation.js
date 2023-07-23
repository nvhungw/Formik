import {setLocale} from 'yup'
import * as yup from 'yup'

setLocale({
  mixed: {
    required: (props) => 'Required'
  }
});

const validate = (validationObject) => yup.object().shape(validationObject)

export default validate