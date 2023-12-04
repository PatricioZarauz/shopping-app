import * as yup from 'yup';

export default yup.object({
  name: yup.string().required('The name is required'),
  color: yup.string().trim().matches(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i, 'The color must be a valid hex value').required('The color is required')
}).required();