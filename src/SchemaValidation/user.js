import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup.string().email('L\'email est invalide').required('Ce champ est obligatoire'),
    password: yup.string().required( 'Ce champ est obligatoire')
})

export const registerSchema = yup.object().shape({
  lastname: yup.string().required("Ce champ est obligatoire"),
  firstname: yup.string().required("Ce champ est obligatoire"),
  city: yup.string().required("Ce champ est obligatoire"),
  zipcode: yup.string().required("Ce champ est obligatoire"),
  email: yup.string().required("Ce champ est obligatoire"),
  phone: yup.number().typeError("ce champ ne doit contenir que des caractères numériques").required("Ce champ est obligatoire"),
  password: yup.string().required("Ce champ est obligatoire"),
  confirmPassword: yup.string().required("Ce champ est obligatoire"),
});