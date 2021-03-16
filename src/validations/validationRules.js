import { required } from 'vuelidate/lib/validators'
export const loginValidations = {
  formData: {
    username: {
      required,
    },
    password: {
      required,
    },
  },
}
