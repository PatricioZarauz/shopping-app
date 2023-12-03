import * as yup from 'yup';

export default yup.object({
  name: yup.string().required('The name is required'),
  category: yup.string().required('The category is required'),
  image: yup.string().url('Please enter a valid URL').required('The image URL is required'),
}).required();